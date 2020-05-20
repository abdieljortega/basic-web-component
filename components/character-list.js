const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      display: block;
      width: 100px;
      height: 50px; 
    }
  </style>
  <section></section>
`

class CharacterList extends HTMLElement {
  set characters(value) {
    this._characters = value;
    this._render();
  }
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.CharacterListElement = this.shadowRoot.querySelector('section');
  }
  _render() {
    this._characters.forEach(character => {
      const button = document.createElement('button');

      button.appendChild(document.createTextNode(character.name));

      button.addEventListener('click', () => this.dispatchEvent(new CustomEvent('selectedCharacter', {
        detail: character
      })));

      this.CharacterListElement.appendChild(button);
    });
  }
}

customElements.define('character-list', CharacterList)