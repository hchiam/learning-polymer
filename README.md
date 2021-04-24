# Learning Polymer

Just one of the things I'm learning. <https://github.com/hchiam/learning> and <https://github.com/hchiam/learning-frameworks>

Custom elements, custom tags. Shadow DOM for encapsulation, liked _scoped_ CSS (and passing in CSS values via `var(--custom-value)`). Events. Data. Etc. `polymer-cli`

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

This runs the `/demo`.

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-polymer.git && cd learning-polymer && yarn && yarn dev;
```

This runs the `/demo`.

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
        iron-icon {
          /* var custom property and default value: */
          fill: var(--icon-toggle-color, rgba(0, 0, 0, 0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          /* :host([pressed]) means if the root element has the pressed DOM attribute */
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
        value: false, // default value of pressed
        notify: true, // tells Polymer to listen to changes in the value of pressed --> (for JS and 2-way binding)
        reflectToAttribute: true, // tells Polymer to update the corresponding DOM attribute when the property changes --> (for CSS and DOM)
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

// define class IconToggle as <icon-toggle> custom HTML tag:
customElements.define("icon-toggle", IconToggle);
```

## Custom properties at the document level

(Outside all Polymer elements, must use `<custom-style>` since custom properties aren't built into most browsers yet:)

```html
<custom-style>
  <style>
    /* document-wide default: */
    html {
      --icon-toggle-outline-color: red;
    }
    /** consciously override styles in a component:
     * (higher specificity than :host in demo/demo-element.js)
     */
    demo-element {
      --icon-toggle-pressed-color: blue;
    }
    /* NOTE: this won't work!!! */
    body {
      --icon-toggle-color: purple;
    }
  </style>
</custom-style>
```

Note: Document-level `custom-style`s can only select direct children Polymer components, and can't select inner children, because they are hidden in the direct children's shadow DOM.

## More

Polymer CLI --> element project: <https://polymer-library.polymer-project.org/3.0/docs/tools/create-element-polymer-cli>

Polymer CLI --> application project: <https://polymer-library.polymer-project.org/3.0/docs/tools/create-app-polymer-cli>
