function PokemonService(){
    var baseUrl = "https://pokeapi.co/api/v2/"

    this.getPokemon = function getPokemon(pokeList, cb){
        $.get(baseUrl + pokeList)
        .then (data =>{
            var res = data.results
            cb(res)
        })
    }

    this.getPokestats = function getPokestats(url, cb){
        $.get (url)
        .then(data =>{
            var res = data
            cb(res)
        })
    }


}