const country = ["Brasil", "Alemanha", "França", "Azerbaijão", "Somália"]
const ultimo = country.length - 1

country.push("Arabia")
console.log(country)

country.pop()
console.log(country)

country.unshift("Arabia")
console.log(country)

country.shift()
console.log(country)

console.log(country[ultimo])
console.log(country[1])
console.log(country[2])

