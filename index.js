import './components/character-detail.js';
import './components/character-list.js';

const characterListComponent = document.querySelector('character-list');
const characterDetailComponent = document.querySelector('character-detail');

fetch('https://swapi.dev/api/people/')
  .then(res => res.json())
  .then(data => {
    characterListComponent.characters = data.results;
    characterDetailComponent.character = data.results[0];
  })

characterListComponent.addEventListener('selectedCharacter', e => {
  console.log(e);
  characterDetailComponent.character = e.detail;
})