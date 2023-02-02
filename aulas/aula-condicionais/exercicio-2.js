const productValue = 100
const installmentsNumber = 12;
let installmentsValue = 0;

if(installmentsNumber === 1) {
  const valueToPay = productValue - (productValue * 0.1)
  console.log(`O produto sera vendido a vista no valor de ${valueToPay} reais com desconto de 10%`)
} else if(installmentsNumber <= 6){
  installmentsValue = (productValue / installmentsNumber).toFixed(2);
  console.log(`O produto foi parcelado em ${installmentsNumber} vezes e o valor das parcelas sera de ${installmentsValue} reais`)
} else if (installmentsNumber <= 12){
  const valueToPayWithJurs = productValue * (1 + 0.01)**installmentsNumber
  installmentsValue = (valueToPayWithJurs / installmentsNumber).toFixed(2)
  console.log(`O produto foi parcelado em ${installmentsNumber} vezes e o valor das parcelas sera de ${installmentsValue} reais totalizando o valor de ${valueToPayWithJurs.toFixed(2)} reais`)
}
  else {
  console.log("numero de parcelas invalido")
}