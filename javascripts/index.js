// this is for my javascript project
document.addEventListener('DOMContentLoaded',()=>{
  home();
  searchCharacters();
  allCharacterslink();
  backNextButton();
})

const form = document.querySelector('form');
const cardsContainer = document.querySelector('#cards-container');
const allCharacters = document.getElementById('all-characters-link');
const back = document.querySelector('.hidden-back')
const next = document.querySelector('.hidden-next')


function fetchAllCharacters(){
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(characters => {
    cardsContainer.innerHTML = ' '
    renderCharacters(characters.results)
     back.classList.replace('hidden-back', 'show-back')
     next.classList.replace('hidden-next', 'show-next')
  })
};

function allCharacterslink(){
  cardsContainer.innerHTML = ''
  allCharacters.addEventListener('click', fetchAllCharacters);
};

function renderCharacters(characters){
  characters.forEach(character => {
    
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const species = document.createElement('h3');
    const like = document.createElement('button');
    
    div.classList = 'card'
    image.classList = 'card-img'
    like.classList = 'empty'

    image.src = character.image
    name.innerText = `Name: ${character.name}`
    species.innerText =`Species: ${character.species}`
    like.innerHTML = '♡'
    
    div.appendChild(image)
    div.appendChild(name)
    div.appendChild(species)
    div.appendChild(like)
    cardsContainer.appendChild(div)

    like.addEventListener('click', (e)=>{
      if(like.innerHTML === '♡'){
        like.classList.replace('empty', 'full')
        like.innerHTML = '❤️'
      }
      else if(like.innerHTML === '❤️'){
        like.classList.replace('full', 'empty')
        like.innerHTML = '♡'
      }
    });
  });
};


function searchCharacters(){
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    // console.log(e.target[0].value)
    // console.log(e)
    // console.log(e.target[0].value)
    fetch(`https://rickandmortyapi.com/api/character/?name=${e.target[0].value}`)
    .then(response => response.json())
    .then(data => {
      cardsContainer.innerHTML = ' '
      renderCharacters(data.results)

      // console.log(data.results)
    })
    form.reset()
    back.classList.replace('show-back', 'hidden-back')
    next.classList.replace('show-next', 'hidden-next')
  })
};

function home(){
  const logo = document.querySelector('.logo');
    logo.addEventListener('click', (e)=>{
    cardsContainer.innerHTML = ''
    back.classList.replace('show-back', 'hidden-back')
    next.classList.replace('show-next', 'hidden-next')
  })
};


 function backNextButton(){
   let pageNum = 1
    back.addEventListener('click', (e)=>{
     console.log('ive been clicked')
     fetch(`https://rickandmortyapi.com/api/character?page=${--pageNum}`)
     .then(response=> response.json())
     .then(data => {console.log(data)
    // console.log(data.info.back)
    cardsContainer.innerHTML = ''
    renderCharacters(data.results)
    })
   });

   next.addEventListener('click', (e)=>{
     console.log('ive also been clicked!')
     fetch(`https://rickandmortyapi.com/api/character?page=${pageNum++}`)
     .then(response=> response.json())
     .then(data => {console.log(data)
      console.log(data.info.next)
      cardsContainer.innerHTML= ''
      renderCharacters(data.results)
    })
   })
 };