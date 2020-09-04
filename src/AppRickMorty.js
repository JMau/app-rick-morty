import { LitElement, html, css } from 'lit-element';
import 'lit-rick-morty/lit-rick-morty.js'
import 'card-rick-morty/card-rick-morty.js'

export class AppRickMorty extends LitElement {
  static get properties() {
    return {
      personajes: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 1.5rem;
        column-gap: 1rem;
        align-content: space-around;
        justify-content: space-around;
      }
    `;
  }

  constructor() {
    super();
    this.personajes = [];
  }

  render() {
    return html`
      <lit-rick-morty @response="${this._handleResponse}"></lit-rick-morty>
      <div class="container">
        ${this.personajes.map(personaje => html`
          <card-rick-morty 
            image="${personaje.url}" 
            index="${personaje.index}" 
            name="${personaje.name}">
          </card-rick-morty>
        `)}
      </div>
    `;
  }

  _handleResponse(e){
    this.personajes = e.detail;
  }
}
