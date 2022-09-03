class Mybutton extends HTMLElement {
    static get observedAttributes() {
      return ["count", "button"];
    }
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
    connectedCallback() {
      
      this.mount();
    }
    dissconnectedCallback() {
      
      this.removeEventListeners();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
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
          <section>
          <button> <img src="${this.buton}"></img> </button>
            ${this.count || 0}
          </section>
      `;
    }
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }
  customElements.define("my-button", Mybutton);
  export default Mybutton;