const template = document.createElement('template');
template.innerHTML = `

    <img/>
    <h2></h2>
    <div class="status">
        <div class="durs"><div class="dugui"><h5></h5></div><p>Идэвхтэй</p></div>
        <div class="durs"><div class="dugui2"><h5></h5></div><p>Хаагдсан</p></div>
    </div>

`;
class Programs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('image');
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('div.dugui h5').innerText = this.getAttribute('activecount');
        this.shadowRoot.querySelector('div.dugui2 h5').innerText = this.getAttribute('expiredcount');
    }
}
window.customElements.define('program-card', Programs);