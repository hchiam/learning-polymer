# Learning Polymer

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Custom elements, custom tags. Shadow DOM for encapsulation, liked _scoped_ CSS. Events. Data. Etc. `polymer-cli`

<https://polymer-library.polymer-project.org/3.0/docs/first-element/intro>

## From scratch

```bash
npm install -g polymer-cli
git clone https://github.com/PolymerLabs/polymer-3-first-element.git
cd polymer-3-first-element
yarn # or npm install
polymer serve --open
# localhost:8081
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-polymer.git && cd learning-polymer && yarn && yarn dev;
```

And if you don't already have the `polymer` CLI command installed:

```bash
npm install -g polymer-cli
```

(`yarn global add polymer-cli` didn't seem to work for me.)

## Notes

```js
import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icon/iron-icon.js"; // import other pre-made component

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        span {
          color: blue;
        }
        :host {
          /* ":host" means the <icon-toggle> element itself */
          display: inline-block;
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

// define class IconToggle as <icon-toggle> custom HTML tag:
customElements.define("icon-toggle", IconToggle);
```
