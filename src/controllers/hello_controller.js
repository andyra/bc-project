import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log(`Hello, ${this.name}!`);
  }

  andy() {
    alert("ANDY");
  }
}