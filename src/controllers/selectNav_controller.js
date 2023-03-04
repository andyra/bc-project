import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["select"];

  select(event) {
    const select = event.target;
    const subsection = select
      .closest(".dialog__subsection")
      .querySelector(".dialog__subsection");

    if (subsection) {
      subsection.classList.remove("hidden");
    }
  }
}
