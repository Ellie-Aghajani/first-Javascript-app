let pokemonList = [];
pokemonList.push({name:"Squirtle", height:0.5 , type:"water"});
pokemonList.push({name:"Butterfree", height:1.1 , type:"Bug"});
pokemonList.push({name:"Pidgeot", height:1.5 , type:"Flying"});
console.log(pokemonList)
//part 2
let i = 0;
for(let i=0; i< pokemonList.length; i++){
    document.write(pokemonList[i].name+" (Height: "+pokemonList[i].height+")"+"<br>");
}
document.write("<br><br>part 3<br><br>")
//part 3
for(let i=0; i< pokemonList.length; i++){
    if(i > 1.4){
        document.write(pokemonList[i].name+"  (Height: "+pokemonList[i].height+")- Wow, that's big!"+"<br>");
    }else{
        document.write(pokemonList[i].name+"  (Height: "+pokemonList[i].height+")"+"<br>");
    }
    
}
