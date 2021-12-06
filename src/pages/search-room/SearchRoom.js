import BEMBlock from '@scripts/BEMBlock.js';

class SearchRoom extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap([
      'aside-button',
      'filter',
      'filter-plug',
      'filter-button',
    ]);
    this.setMods(['search-room__filter_expanded', 'search-room_locked']);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleAsideButtonClick();
    this.setHandleFilterButtonClick();
    this.setHandleFilterPlugClic();
    this.setHandleFilterPlugKeydown();
  }

  bindListeners() {
    this.elemsMap.asideButton.addEventListener(
      'click',
      this.handleAsideButtonClick
    );
    this.elemsMap.filterButton.addEventListener(
      'click',
      this.handleFilterButtonClick
    );
    this.elemsMap.filterPlug.addEventListener(
      'click',
      this.handleFilterPlugClick
    );
    this.elemsMap.filterPlug.addEventListener(
      'keydown',
      this.handleFilterPlugKeydown
    );
  }

  setHandleAsideButtonClick() {
    this.handleAsideButtonClick = () => {
      this.elemsMap.asideButton.setAttribute('tabindex', '-1');
      this.showFilter();
      this.elemsMap.filterButton.focus();
    };
  }

  setHandleFilterButtonClick() {
    this.handleFilterButtonClick = () => {
      this.elemsMap.asideButton.setAttribute('tabindex', '0');
      this.hideFilter();
    };
  }

  setHandleFilterPlugClic() {
    this.handleFilterPlugClick = () => {
      this.elemsMap.asideButton.setAttribute('tabindex', '0');
      this.hideFilter();
    };
  }

  setHandleFilterPlugKeydown() {
    this.handleFilterPlugKeydown = (e) => {
      if (e.code == 'Tab' && !e.shiftKey) {
        e.preventDefault();
        this.elemsMap.filterButton.focus();
      }
    };
  }

  showFilter() {
    this.root.classList.add(this.mods.searchRoomLocked);
    this.elemsMap.filter.classList.add(this.mods.filterExpanded);
  }

  hideFilter() {
    this.root.classList.remove(this.mods.searchRoomLocked);
    this.elemsMap.filter.classList.remove(this.mods.filterExpanded);
  }
}

export default SearchRoom;
