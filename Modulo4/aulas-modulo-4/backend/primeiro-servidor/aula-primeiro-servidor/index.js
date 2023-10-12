const {uniq} = require("lodash")
const {arrayLetras, arrayNumeros} = require("./array")

const arrayLetrasUnico = uniq(arrayLetras)
const arrayNumeroUnico = uniq(arrayNumeros)

console.log(arrayLetrasUnico)
console.log(arrayNumeroUnico)