//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        document.querySelector("#poke1Name").innerText = data.name.toUpperCase()
        document.querySelector("#poke1Img").src = data.sprites.front_shiny
        document.querySelector("#hp1").innerText = data.stats[0].base_stat
        document.querySelector("#attack1").innerText = data.stats[1].base_stat
        document.querySelector("#defense1").innerText = data.stats[2].base_stat
        document.querySelector("#specialAttack1").innerText = data.stats[3].base_stat
        document.querySelector("#specialDefense1").innerText = data.stats[4].base_stat
        document.querySelector("#speed1").innerText = data.stats[5].base_stat


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch(url2)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector("#poke2Name").innerText = data.name.toUpperCase()
            document.querySelector("#poke2Img").src = data.sprites.front_shiny
            document.querySelector("#hp2").innerText = data.stats[0].base_stat
            document.querySelector("#attack2").innerText = data.stats[1].base_stat
            document.querySelector("#defense2").innerText = data.stats[2].base_stat
            document.querySelector("#specialAttack2").innerText = data.stats[3].base_stat
            document.querySelector("#specialDefense2").innerText = data.stats[4].base_stat
            document.querySelector("#speed2").innerText = data.stats[5].base_stat
        })     
}
