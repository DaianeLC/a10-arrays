const arrayNumerosOriginal = [3,6,9,12,15,18]
const arrayNumerosCopia = arrayNumerosOriginal.slice()
console.log("Antes da Inclusão", arrayNumerosOriginal)
console.log("Antes da Inclusão", arrayNumerosCopia)
arrayNumerosCopia.push(21,33)

console.log("Após Inclusão", arrayNumerosOriginal)
console.log("Após Inclusão", arrayNumerosCopia)

arrayNumerosCopia.pop(33)
console.log("Retirada do Numero",arrayNumerosCopia)

