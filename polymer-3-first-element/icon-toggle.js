import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icon/iron-icon.js";

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          /* <iron-icon> uses SVG: */
          fill: var(--icon-toggle-color, rgba(0, 0, 0, 0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>

      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }

  static get properties() {
    return {
      toggleIcon: {
        type: String,
      },
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }

  constructor() {
    super();
    this.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.pressed = !this.pressed;
  }
}

customElements.define("icon-toggle", IconToggle);
