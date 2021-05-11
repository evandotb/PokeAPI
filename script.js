const url = `https://pokeapi.co/api/v2/pokemon/1/`

const container = document.getElementById('pokeContainer')



    
    function getPokemon() {
        fetch(url)
        .then(function(result) {
            console.log(result);
            return result.json()
        })
        .then(function(json) {
            console.log(json);
            displayPokemon(json)
        })
    }

    function displayPokemon(json) {
        console.log("displayPokemon: ", json);
        console.log(json.name);
        let container
    }

    getPokemon();
displayPokemon();