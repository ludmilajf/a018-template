// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]

// const array = [12, 4, 1, 3, 90, 10]

// function multiplicaPor3(array) {
//   const novoArray = []
//   for(let i = 0; i < array.length; i++){
//     novoArray.push(numero*3)
//   }
//   return novoArray
// }
// console.log(multiplicaPor3(array));
// //NÃO FUNCIONOU, NÃO SEI PQ

// const multiplicaPor3 = (array) => {
//   const novoArray = []
//   for( let numero of array){
//     novoArray.push(numero*3)
//   }
//   return novoArray
// }
// console.log(multiplicaPor3(array))
//FUNCIONOU

// function retornaPares(array) {
//   const pares = []
//   for(let numero of array){
//     if(numero %2 === 0){
//       pares.push(numero)
//     }
//   }
//   return pares
// }
// console.log(retornaPares(array));

//====================================================
// REFAZENDO

// const array = [32, 21, 76, 95, 80, 5]

// const multiplicaPor3 = (array) => {
//   const novoArray = []
//   for(let numero of array){
//     novoArray.push(numero*3)
//   }
//   return novoArray
// }
// console.log(multiplicaPor3(array));

// const numerosPares = (array) => {
//   const pares = []
//   for(let numero of array){
//     if(numero % 2 === 0){
//       pares.push(numero)
//     }
//   }
//   return pares
// }
// console.log(numerosPares(array));

// const multiplicaERetornaPares = (array, funcao) => {
//   const novoArray = []
//   for(numero of array){
//     novoArray.push(numero*3)
//   }
//   let pares = funcao(novoArray) // Callback, chamando uma função já existente
//   return pares
// }
// console.log(multiplicaERetornaPares(array, numerosPares))// aqui chamou o array (que já foi multiplicado) + a função de cima que retorna par

//Refazendo callback
// const multiplicaERetornaPares = (array, funcao) => {
//   const novoArray = []
//   for(numero of array){
//     novoArray.push(numero*3)
//   }
//   let pares = funcao(novoArray)
//   return pares
// }
// console.log(multiplicaERetornaPares(array, numerosPares))

//map()
// const array = [32, 21, 76, 95, 80, 5]

// const multiplicaPor3 = (array) => {
//   const novoArray = []
//   for(let numero of array){
//     novoArray.push(numero*3)
//   }
//   return novoArray
// }
// console.log(multiplicaPor3(array));

// const multiplicaComMap = array.map((item/*, index, array*/) =>{ //o index e o array estavam  meio "apagados", porque não foram chamados, então poderia-se tirar dali
//   return item * 3
// })
// console.log(multiplicaComMap);
// // o map já faz um loop, o map já traz um array


// filter()
// const array = [32, 21, 76, 95, 80, 5]

// const numerosPares = (array) => {
//   const pares = []
//   for(let numero of array){
//     if(numero % 2 === 0){
//       pares.push(numero)
//     }
//   }
//   return pares
// }
// console.log(numerosPares(array));

// const numerosPares = array.filter((item) =>{
//   return item % 2 === 0
// })
// console.log(numerosPares); // o filter fez a função do if e for aqui, filtrando apenas os numeros pares

// REFAZENDO MAP E FILTER
// const array = [32, 21, 76, 95, 80, 5]

// const multiplicaMap = array.map((item) => {
//   return item * 3
// })
// console.log(multiplicaMap);

// const retornaPares = array.filter((item) => {
//   return item % 2 === 0
// })
// console.log(retornaPares)


// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]

// const mudaVida = (pokemons) => {
//   const array = []
//   for(let pokemon of pokemons){
//     array.push(pokemon, pokemon.vida = 100)
//   }
//   return array
// }
// console.log(mudaVida(pokemons))

// const mudaVida = pokemons.map((pokemon) => {
//   pokemon.vida = 100
//   return pokemon
// }).filter((pokemon) => {
//   return pokemon.tipo === 'fogo'
// })
// //console.log(pokemons)
// console.log(mudaVida)

// const pokemonsDeFogo = mudaVida.filter((pokemon) => {
//   return pokemon.tipo === "fogo"
// }) 
//console.log(pokemonsDeFogo)