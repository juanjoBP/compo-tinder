import * as components from "./components/index.js"

class Appcontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    connectedCallback(){
        this.render();

    }
    
    render() {
        data.forEach((element) => {
          this.shadowRoot.innerHTML += `
          <my-profile name="${element.name}" location="${element.location}"${element.profile}"${element.description}"${element.likecount}"${element.button}"></my-profile>
          `;
        });
        this.shadowRoot.innerHTML += `<my-counter></my-counter>`;
      }
    }
    
    customElements.define('app-container', AppContainer);

