function PokemonController(){
    var pokemonService = new PokemonService();

    function drawPoke(arr){
        var template = "<ul>";
        for (let i = 0; i < arr.length; i++) {
            const poke = arr[i];
            template +=`
            <li onclick="app.controllers.pokemonController.getPokestats('${poke.url}')">${poke.name}</li>
            `
        }
        template += "</ul>";
        document.getElementById("poke-data").innerHTML = template;
    }

     function drawPokestats(stats){
       var template = `
       <h3>Name: ${stats.name}</h3>
        <h3>Weight: ${stats.weight}</h3>
        <h3>Height: ${stats.height}</h3>
        <h3>Base XP: ${stats.base_experience}</h3>
       `
      document.getElementById("poke-stats").innerHTML = template
     }

     this.getPokestats = function getPokestats(url){
       pokemonService.getPokestats(url, drawPokestats)
     }
    
     pokemonService.getPokemon("pokemon", drawPoke);
 }




