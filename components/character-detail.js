class CharacterDetail extends HTMLElement {

  set character(value) {
    this._character = value;
    this._render();
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          margin-top: 0;
        }
      </style>
      <h2>${this._character.name}</h2>
      <ul>
        <li>${this._character.height}</li>
        <li>${this._character.mass}</li>
        <li>${this._character.birth_year}</li>
      </ul>
    `;
  }
}

customElements.define('character-detail', CharacterDetail);