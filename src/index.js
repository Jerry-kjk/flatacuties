// Your code here
const URL = "http://localhost:3000/characters";
function fetchData() { 
return fetch(URL)
.then((response) => response.json()); 
}

function renderData(character) {
  const characterBar = document.getElementById("character-bar");
  const span = document.createElement("span");
  span.innerHTML = character.name;
  characterBar.appendChild(span);
  span.dataset.id = character.id;
  span.addEventListener('click', characterClick);
}

fetchNames().then(character => { 
  character.forEach((character) => {
    renderData(character)
  }); 
});

function fetchDetails(id) {
  return fetch(url + `/${id}`)
  .then((response) => response.json()); 
}

function characterClick(event) {
  fetchDetails(event.target.dataset.id)
  .then(characterDetails); 
}

function renderDetails(character) {
  const characterInfo = document.getElementById("detailled-info");
  const name = document.getElementById("name");
  name.innerText = character.name;

  const img = document.getElementById('image')
  img.src = character.image

  const votes = document.getElementById('vote-count')
  votes.innerText = character.votes
}

document.getElementById("votes-form").addEventListener("submit", (event) =>{
  event.preventDefault()
  const form = event.target;
  const votes = document.getElementById("vote-count")
  votes.innerText = parseInt(form.votes.value) + parseInt(votes.innerText)
  form.reset()
})

document.getElementById('reset-btn').addEventListener("click", () =>{
  document.getElementById("vote-count").innerText = 0;
})

document.addEventListener("DOMContentLoaded", function(){
  fetchNames()
  fetchDetails()
})



