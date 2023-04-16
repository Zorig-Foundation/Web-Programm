let list = "";
let scholarships = "";
fetch('olontetgeleg.json')
.then(response => response.json())
.then(json => {
   scholarships = json;
   json.scholarships.forEach(item => {
      list += `<section class="brief-scholarship">
      <div class="name-of-scho"><h2>${item.name}</h2></div>
      <p class="time-of-scho"><b>${item.time}</b></p>
      <p class="explain-of-scho">${item.description}</p>
      <button class="submit">${item.button}</button>
      </section>`
   });
   document.querySelector(".programs").innerHTML = list;
   consol.log(json);
});

 