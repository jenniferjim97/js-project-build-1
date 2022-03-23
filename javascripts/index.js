// this is for my javascript project
document.addEventListener('DOMContentLoaded',()=>{
  console.log("Dom has loaded");
  fetchAllCharacters()
})
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
function fetchAllCharacters(){
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(characters => 
    renderCharacters(characters.results))

}

function renderCharacters(characters){
  characters.forEach(character => {
    const div = document.createElement('div');
    const cardUl = document.querySelector('.cards');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const like = document.createElement('button');

    div.classList = 'card'
    image.src = character.image
    name.innerText = character.name
    like.innerHTML = EMPTY_HEART
    like.classList = 'empty'
    div.appendChild(image)
    div.appendChild(name)
    div.appendChild(like)
    cardUl.appendChild(div)
  
  })
}