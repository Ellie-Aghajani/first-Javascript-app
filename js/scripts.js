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
        if (typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      }
    }

      return {
        add: add,
        getAll: getAll
      }

})()

pokemonRepository.add({name:'Furret', height: 1.8, type:'normal'});


pokemonRepository.getAll().forEach(function(pokemon){

    if(pokemon.height >= 1.6) {
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemon.height >= 1.5 && pokemon.height < 1.6){
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemon.name + " (height: " + pokemon.height + " m)- That is a small pokemon!" + "<br>")
    }  
})