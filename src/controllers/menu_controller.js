import { Controller } from "@hotwired/stimulus";

const MENU_WIDTH = 260;
const SELECTED_CLASS = "menu__item--selected";

export default class extends Controller {
  static targets = ["confirmButton", "menuItem", "menuSection"];
  static values = {
    index: {
      type: Number,
      default: -1,
    },
    hasSelection: {
      type: Boolean,
      default: false,
    },
    selectedItem: {
      type: Number,
      default: 0,
    },
  };

  next() {
    this.indexValue++;
  }

  prev() {
    this.indexValue--;
  }

  close() {
    this.indexValue = -1;
  }

  confirm() {
    this.close();
    Toastify({
      text: "Item copied/moved to [Project Name]!",
      position: "center",
      style: {
        background: "hsl(147, 57%, 41%)",
      },
    }).showToast();
  }

  selectItem(event) {
    const element = event.target;
    const menuItems = this.menuItemTargets;
    this.hasSelectionValue = true;

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove(SELECTED_CLASS);
    });
    element.parentNode.classList.add(SELECTED_CLASS);
  }

  indexValueChanged() {
    this.showCurrentMenuLevel();
    this.hasSelectionValue = false;
  }

  hasSelectionValueChanged() {
    this.confirmButtonTargets.forEach((element) => {
      element.disabled = !this.hasSelectionValue;
    });
  }

  showCurrentMenuLevel() {
    const marginLeft = `${-this.indexValue * MENU_WIDTH}px`;
    const menuSection = this.menuSectionTarget;
    menuSection.style.marginLeft = marginLeft;
  }
}
