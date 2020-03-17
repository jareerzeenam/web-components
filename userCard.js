const template = document.createElement("template");
template.innerHTML = `
<style>
h3{
    color:coral;
}
</style>
<div class="user-card">
    <img />    
    <div>
        <h3></h3>
        <div class="info">
            <p>Email</p>
            <p>Phone</p>
        </div>
        <button id="toggle-info"></button>
    </div>
</div>
`;

// ! CLASS WITH THE CONSTRUCTOR
class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // Name
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // Avatar
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

  }
}

// ! Define the custome element
window.customElements.define("user-card", UserCard);
