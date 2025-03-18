let map = new Map()

map.set("nome", "Eduarda")
map.set("idade", 20)
map.set("altura", 1.64)

console.log(map.get("nome"))
console.log(map.has("idade"))

console.log(map.size)

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})
// Remover a idade
map.delete("idade");

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//Remover todos os elementos do map
map.clear()
console.log(map.size)