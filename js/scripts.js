var elPokemonList = $_('.js-pokemonlist');

// for (let i = 0; i < pokemons.length; i++) {
//   var pokemon = pokemons[i];
//   var pokemonImg = pokemon.img;
//   var pokemonName = pokemon.name;
//   var pokemonType = pokemon.type.join(" , ");

//   var elNewLi =  createElement("li" , "card my-3 pokemon-width");

//   var elNewImg = createElement("img" , "card-img-top");
//   elNewImg.width = "285" ;
//   elNewImg.height = "285" ;
//   elNewImg.src = pokemonImg ; 

//   var elNewBody = createElement("div" , "card-body");
//   var elNewName = createElement("h5" , "card-title" , pokemonName);
//   var elNewType = createElement("p" , "card-text" , pokemonType);



//   elPokemonList.appendChild(elNewLi);
//   elNewLi.appendChild(elNewImg);
//   elNewLi.appendChild(elNewBody);
//   elNewBody.appendChild(elNewName);
//   elNewBody.appendChild(elNewType);
// }

// pokemons.forEach(pokemon => {
//   var pokemonImg = pokemon.img;
//   var pokemonName = pokemon.name;
//   var pokemonType = pokemon.type.join(" , ");

//   var elNewLi =  createElement("li" , "card my-3 pokemon-width");
//   var elNewImg = createElement("img" , "card-img-top");
//   elNewImg.width = "285" ;
//   elNewImg.height = "285" ;
//   elNewImg.src = pokemonImg ; 
//   var elNewBody = createElement("div" , "card-body");
//   var elNewName = createElement("h5" , "card-title" , pokemonName);
//   var elNewType = createElement("p" , "card-text" , pokemonType);

//   elPokemonList.appendChild(elNewLi);
//   elNewLi.appendChild(elNewImg);
//   elNewLi.appendChild(elNewBody);
//   elNewBody.appendChild(elNewName);
//   elNewBody.appendChild(elNewType);
// });


var displayOnScreen = function(){
  pokemons.forEach(pokemon => {
    var pokemonImg = pokemon.img;
    var pokemonName = pokemon.name;
    var pokemonType = pokemon.type.join(" , ");
    
    var elNewLi =  createElement("li" , "card my-3 pokemon-width");
    var elNewImg = createElement("img" , "card-img-top");
    elNewImg.width = "285" ;
    elNewImg.height = "285" ;
    elNewImg.src = pokemonImg ; 
    var elNewBody = createElement("div" , "card-body");
    var elNewName = createElement("h5" , "card-title" , pokemonName);
    var elNewType = createElement("p" , "card-text" , pokemonType);
    
    elPokemonList.appendChild(elNewLi);
    elNewLi.appendChild(elNewImg);
    elNewLi.appendChild(elNewBody);
    elNewBody.appendChild(elNewName);
    elNewBody.appendChild(elNewType);
  });
};
displayOnScreen();
