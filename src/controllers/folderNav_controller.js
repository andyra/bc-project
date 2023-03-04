import { Controller } from "@hotwired/stimulus";

const SELECTED_CLASS = "folder-nav__item--selected";

export default class extends Controller {
  static targets = ["list"];
  static values = {
    index: {
      type: Number,
      default: -1,
    },
  };

  select(event) {
    const button = event.target;
    const item = button.closest(".folder-nav__item");
    const list = button.closest(".folder-nav__list");
    const items = list.children;

    this.indexValue = this.listTargets.indexOf(list);
    this.showLists();

    for (let item of items) {
      item.classList.remove(SELECTED_CLASS);
    }
    item.classList.add(SELECTED_CLASS);
  }

  indexValueChanged() {
    this.showLists();
  }

  showLists() {
    this.listTargets.forEach((element, index) => {
      element.hidden = index > this.indexValue + 1;
    });
  }
}
