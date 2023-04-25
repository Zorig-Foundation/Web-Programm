
class ProgramList extends HTMLElement {
    constructor() {
      super();
  
      // componentdoo dom shadow uusgene
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // 1 buhel item bolon dotorh hutulburuuddee html uusgene
      shadowRoot.innerHTML = `
        <section id="sub-container" style=" display: inline-flex; justify-content: center; flex-direction: row; gap: 3%; flex-wrap: wrap; width: 70%"></section>
        <section id="aside" style="display: flex; margin-right: 3%; width: 30%; flex-direction: column;"></section>
      `;
  
      // 1 buhel item bolon dotorh hutulburuuddee zaalt uusgene
      const itemsContainer = shadowRoot.getElementById('sub-container');
      const programsContainer = shadowRoot.getElementById('aside');
  
      // JSON file aas data gaa fetch hiine, itemiinhaa listuudiig uusgene
      fetch('hutulbur.json')
        .then(response => response.json())
        .then(data => {
          let itemsHTML =`<style>
                            .item{border-style: solid; border-width: 1px; width: 45%; margin-bottom: 5%; border-bottom-color: #00669A; border-bottom-width: 3px; box-shadow: 2px 2px 2px #00000040;}
                            img{width: 100%}
                            h2{padding: 0% 0% 0% 5%; font-size: 30px;}
                            .status{margin:-1%; display: flex; flex-direction: row;} 
                            .durs{margin: -5% 15% 0% 20%;}
                            .dugui{background-color: #1E56A0; border-radius: 50%; width: 45%;} 
                            .dugui2{background-color: #B0CDE6; border-radius: 50%; width: 45%;}
                            .status h5{padding: 30%; color: white; font-size: 20px;}
                            p{font-size: 20px}
                          </style>`
          
          data.forEach((item, index) => {
            itemsHTML += `
              <section class="item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="picture">
                <h2>${item.name}</h2>
                <div class="status">
                  <div class="durs"><div class="dugui"><h5>${item.activecount}</h5></div><p>Идэвхтэй</p></div>
                  <div class="durs"><div class="dugui2"><h5>${item.expiredcount}</h5></div><p>Хаагдсан</p></div>
                </div>
              </section>
            `;
          });
          
          // containerluugaa itemaa hiine
          itemsContainer.innerHTML = itemsHTML;
          itemsContainer.addEventListener('click', event => {
            // darsan itemaa olno
            const item = event.target.closest('.item');
            if (!item) return;
  
            // darsan item deerh program list ee olno
            const index = item.dataset.index;
            const programData = data[index].programs;
  
            // programuuddaa html uusgene
            let programsHTML = '';
            programData.forEach(program => {
              programsHTML += `
                <div class="program" style="border-style: solid; border-width: 1px; padding: 3%;">
                  <h3>${program.name_}</h3>
                  <p>Эхлэх: ${program.start}, Дуусах: ${program.end}</p>
                </div>
              `;
            });
  
            // 1 buhel categoriinhoo programuudiig haruulna
            programsContainer.innerHTML = programsHTML;
          });
        });
    }
  }
  
  // custom elementee todorhoilno
  customElements.define('program-list', ProgramList);