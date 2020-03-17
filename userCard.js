// ! CLASS WITH THE CONSTRUCTOR
class UserCard extends HTMLElement {
    constructor(){
        super();
        this.innerHTML =  `${this.getAttribute('name')}`;
    }
}

// ! Define the custome element
window.customElements.define('user-card',UserCard);