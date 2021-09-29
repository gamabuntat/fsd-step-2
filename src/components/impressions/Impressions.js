import BEMBlock from '@scripts/BEMBlock.js';
import Glossary from '@scripts/Glossary.js';

import * as glossaries from './glossaries.js';

class Impressions extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.marksNames = ['amazing', 'cool', 'bad', 'veryBad'];
    this.updateElemsMap(['mark', 'votes']);
    this.setMods(['impressions__arc_selected']);
    this.arcClass = 'impressions__arc';
    this.arcs = this.getArcs();
    this.rating = this.getRating();
    this.gap = this.getGap();
    this.r = 60;
    this.totalMarks = this.getTotalMarks();
    this.testWord = this.elemsMap.votes.textContent;
    this.glossary = Glossary.create(this.testWord, glossaries);
    this.render();
    this.setListeners();
    this.bindListeners();
  }

  getArcs() {
    return [...document.querySelectorAll(`.js-${this.arcClass}`)]
      .reduce((map, arc, idx) => { 
        map[this.marksNames[idx]] = arc;
        return map;
      }, {});
  }

  getRating() {
    const data = this.root.dataset;
    return this.marksNames.reduce((rating, key) => {
      rating[key] = Number(data[key]);
      return rating;
    }, {});
  }

  getGap() {
    return Number(this.root.dataset.gap);
  }

  getNGaps() {
    return Object.values(this.rating).filter((r) => r !== 0).length;
  }

  getTotalMarks() {
    return Object.values(this.rating).reduce((sum, mark) => sum + mark);
  }

  render() {
    Object.entries(this.rating).reduce((angle, [key, value]) => {
      if (value == 0) { return angle; }
      const startAngle = angle + this.gap;
      const nextAngle = this.getAngle(value) + startAngle - this.gap;
      this.arcs[key].setAttribute('d', this.getArcPath(startAngle, nextAngle));
      return nextAngle;
    }, -this.gap / 2);
    this.updateMark();
    this.updateVotes();
  }

  getAngle(mark) {
    return mark / this.totalMarks * 360;
  }

  getArcPath(startAngle, endAngle) {
    return `M${
      this.getPoint(this.getAngleRad(startAngle))
    } A${this.r} ${this.r} 0 ${
      Number(endAngle - startAngle + this.gap > 180)
    } 0 ${this.getPoint(this.getAngleRad(endAngle))}`;
  }

  getPoint(angleRad) {
    return `${this.r * Math.cos(angleRad) + this.r} ${
      Math.abs(this.r * Math.sin(angleRad) - this.r)
    }`;
  }

  getAngleRad(angle) {
    return (angle + 90) * Math.PI / 180;
  }

  updateMark(mark = this.totalMarks) {
    this.elemsMap.mark.textContent = String(mark);
  }

  updateVotes(nVotes = this.totalMarks) {
    this.elemsMap.votes.textContent = String(
      this.glossary.getDefinition(this.testWord, nVotes)
    );
  }

  setListeners() {
    this.setHandleArcPointerover();
    this.setHandleArcPointerout();
  }

  bindListeners() {
    this.root.addEventListener('pointerover', this.handleArcPointerover);
    this.root.addEventListener('pointerout', this.handleArcPointerout);
  }

  setHandleArcPointerover() {
    this.handleArcPointerover = ({ target }) => {
      const mod = this.findModInClassList(target.classList);
      if (!mod) { return; }
      const mark = mod.slice(mod.lastIndexOf('_') + 1);
      this.updateMark(this.rating[mark]);
      this.updateVotes(this.rating[mark]);
      this.arcs[mark].classList.add(this.mods.arcSelected);
    };
  }

  setHandleArcPointerout() {
    this.handleArcPointerout = ({ target }) => {
      this.updateMark();
      this.updateVotes();
      const mod = this.findModInClassList(target.classList);
      if (!mod) { return; }
      const mark = mod.slice(mod.lastIndexOf('_') + 1);
      this.arcs[mark].classList.remove(this.mods.arcSelected);
    };
  }

  findModInClassList(classList) {
    return [...classList].find((c) => (
      Object.keys(this.rating)).find((k) => c.includes(k))
    );
  }
}

export default Impressions;

