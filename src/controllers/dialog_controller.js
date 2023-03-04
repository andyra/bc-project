import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["dialog"];

  open() {
    const dialog = this.dialogTarget;
    dialog.showModal();
  }
}
