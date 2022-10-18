document.querySelector('#button1').addEventListener('click', getFetch)
document.querySelector('#button2').addEventListener('click', battle)


const poke1Obj = {}
const poke2Obj = {}

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        poke1Obj.name = document.querySelector("#poke1Name").innerText = data.name.toUpperCase()
        poke1Obj.sprite = document.querySelector("#poke1Img").src = data.sprites.front_shiny
        poke1Obj.hp = document.querySelector("#hp1").innerText = data.stats[0].base_stat
        poke1Obj.attack = document.querySelector("#attack1").innerText = data.stats[1].base_stat
        poke1Obj.defense = document.querySelector("#defense1").innerText = data.stats[2].base_stat
        poke1Obj.specialAttack = document.querySelector("#specialAttack1").innerText = data.stats[3].base_stat
        poke1Obj.specialDefense = document.querySelector("#specialDefense1").innerText = data.stats[4].base_stat
        poke1Obj.speed = document.querySelector("#speed1").innerText = data.stats[5].base_stat


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch(url2)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            poke2Obj.name = document.querySelector("#poke2Name").innerText = data.name.toUpperCase()
            poke2Obj.sprite = document.querySelector("#poke2Img").src = data.sprites.front_shiny
            poke2Obj.hp = document.querySelector("#hp2").innerText = data.stats[0].base_stat
            poke2Obj.attack = document.querySelector("#attack2").innerText = data.stats[1].base_stat
            poke2Obj.defense = document.querySelector("#defense2").innerText = data.stats[2].base_stat
            poke2Obj.specialAttack = document.querySelector("#specialAttack2").innerText = data.stats[3].base_stat
            poke2Obj.specialDefense = document.querySelector("#specialDefense2").innerText = data.stats[4].base_stat
            poke2Obj.speed = document.querySelector("#speed2").innerText = data.stats[5].base_stat
        })     
}

function battle() {
    
}
