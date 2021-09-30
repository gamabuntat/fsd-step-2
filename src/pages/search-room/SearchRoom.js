import BEMBlock from '@scripts/BEMBlock.js';

class SearchRoom extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['aside-button', 'filter', 'filter-plug']);
    this.setMods(['search-room__filter_expanded']);
    this.elemsMap.filter.classList.add(this.mods.filterExpanded);
  }

  showFilter() {

  }
}

export default SearchRoom;

