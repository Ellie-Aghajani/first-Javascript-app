let pokemonRepository =(function(){
    let pokemonList = [
        {name:"Squirtle", height:0.5 , type:"water"},
        {name:"Butterfree", height:1.1 , type:["Bug","flying"]},
        {name:"Pidgeot", height:1.5 , type:["Flying","normal"]}
    ]

    function getAll() {
        return pokemonList;
      }

    function add(pokemon) { 
      if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
      }
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
  
      let listItem = document.createElement("li");
    
      let button = document.createElement('button');
    
      button.innerText = pokemon.name;
    
      button.classList.add("button-css");
    
      listItem.appendChild(button);
    
      pokemonList.appendChild(listItem);
    }

    return {
      addListItem: addListItem,
      add: add,
      getAll: getAll
    }

})()

pokemonRepository.add({name:'Furret', height: 1.8, type:'normal'});


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
})

var numberOfButtons = document.querySelectorAll(".button-css").length;

for( var i = 0; i < numberOfButtons; i++){
  document.querySelectorAll(".button-css")[i].addEventListener("click", function showDetails(pokemon){
    console.log(pokemon);});
}
