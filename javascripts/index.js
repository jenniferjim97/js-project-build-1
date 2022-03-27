// this is for my javascript project
document.addEventListener('DOMContentLoaded',()=>{
  home();
  searchCharacters();
  allCharacterslink();
})

const EMPTY_HEART = '♡';
const FULL_HEART = '❤️';
const form = document.querySelector('form');
const ulContainer = document.querySelector('.cards');
const allCharacters = document.getElementById('all-characters-link');


function fetchAllCharacters(){
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(characters => {
    ulContainer.innerHTML = ' '
    console.log(characters)
    renderCharacters(characters.results)
  })
};

function allCharacterslink(){
  ulContainer.innerHTML = ''
  allCharacters.addEventListener('click', fetchAllCharacters)
};

function renderCharacters(characters){
  characters.forEach(character => {
    
    const li = document.createElement('li');
    const cardUl = document.querySelector('.cards');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const species = document.createElement('h3');
    const like = document.createElement('button');
    
    li.classList = 'card'
    image.src = character.image
    name.innerText = `Name: ${character.name}`
    species.innerText =`Species: ${character.species}`
    like.innerHTML = EMPTY_HEART
    like.classList = 'empty'
    li.appendChild(image)
    li.appendChild(name)
    li.appendChild(species)
    li.appendChild(like)
    cardUl.appendChild(li)

    like.addEventListener('click', (e)=>{
      if(like.innerHTML === EMPTY_HEART){
        like.classList.replace('empty', 'full')
        like.innerHTML = FULL_HEART
      }
      else if(like.innerHTML === FULL_HEART){
        like.classList.replace('full', 'empty')
        like.innerHTML = EMPTY_HEART
      }
    })
  })
};


function searchCharacters(){
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    console.log(e.target[0].value)
    console.log(e)
    console.log(e.target[0].value)
    fetch(`https://rickandmortyapi.com/api/character/?name=${e.target[0].value}`)
    .then(response => response.json())
    .then(data => {
      ulContainer.innerHTML = ' '
      renderCharacters(data.results)
    })
    form.reset()
  })
};

function home(){
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', (e)=>{
    ulContainer.innerHTML = ''

  })};