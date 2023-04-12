import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {

  hideModal() {
    // find modal-container by id
    this.modalTarget = document.getElementById("modal-container")
    // remove modal-container from DOM
    this.modalTarget.remove()
    // remove src from turbo-frame
    this.frameTarget = document.getElementById("modal")
    this.frameTarget.removeAttribute("src")
  }

  // hide modal when clicking ESC
  // action: "keyup@window->turbo-modal#closeWithKeyboard"
  closeWithKeyboard(e) {
    if (e.code == "Escape") {
      this.hideModal()
    }
  }

  // hide modal when clicking outside of modal
  // action: "click@window->turbo-modal#closeBackground"
  closeBackground(e) {
    e.preventDefault()
    if (this.element === e.target || this.element.contains(e.target)) return
    this.hideModal()
  }
}
