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
          fill: rgba(0, 0, 0, 0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: currentcolor;
        }
      </style>

      <!-- shadow DOM goes here -->
      <iron-icon icon="polymer"></iron-icon>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define("icon-toggle", IconToggle);
