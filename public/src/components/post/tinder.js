class MyTinder extends HTMLElement {
    static get observedAttributes() {
      return ['profile','name', 'location', 'button', 'description'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    connectedCallback() {
      this.render();
      this.mount();
    }


    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
      this.mount();
    }

    dissconnectedCallback() {
      this.removeEventListeners();
    }

    mount() {
      this.render();
      this.addEventListeners();
    }

    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }
  
    
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/components/tinder/style.css"
      <section>
      <div class="container">

      <img src="imagenes/logotinder.png" class="icon">

       
          <p class="username">  <b> ${this.name} , </b> </p>
          <p class="location"> Vive en${this.location}</p>
          <p class="distance"> ${this.description} </p>
      

        <div class="button">
        ${this.button || 0}
        <buton class="buton"> <b> ♥ </b> </button>
        <p class="button"> like </p>  
        </div>

      </div> 
      </section>
      `;
    }

    removeEventListeners() {
      this.shadowRoot
        .querySelector("buton")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("button")) || 0;
      this.setAttribute("button", currentValue + 1);
    }

   
  
  }
  
  customElements.define('my-tinder', MyTinder);
  export default MyTinder;
