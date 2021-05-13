const dex = document.querySelector('#pokeCard')

function getPokemon(){
    
let pokeArray = []

    for(let i = 152; i <= 251; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(function(result) {
            //console.log(result);
            return result.json()
        })
        .then(function(json) {
            pokeArray.push(json)

            //console.log(pokeArray);
            if(pokeArray.length === 99){
                   displayPokemon(pokeArray)

            }
       })
        
    }
    
}
    function displayPokemon(json) {
        
        console.log(json);

        let pokemon = json
        
        pokemon.forEach((p) => {
            

            let list = document.createElement('li')
            
            let title = document.createElement('h3')
            title.innerText = p.name
            
            let type = document.createElement('p')
            type.innerText = p.types.map((types) => {
                return types.type.name
            }).join(", ")

            
            let img = document.createElement('img')
            img.src = p.sprites.front_default
            
            
            dex.appendChild(list)
            list.appendChild(img)
            list.appendChild(title)
            list.appendChild(type)
        })
    }
    
    getPokemon();