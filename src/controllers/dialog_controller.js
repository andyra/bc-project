import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["dialog"];

  open() {
    const dialog = this.dialogTarget;
    dialog.showModal();
  }

  confirm() {
    Toastify({
      text: "Item copied/moved to [Project Name]!",
      position: "center",
      style: {
        background: "hsl(147, 57%, 41%)",
      },
    }).showToast();
  }
}
