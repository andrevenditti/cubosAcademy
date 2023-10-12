const installmentsNumber = 3;
const productValue = 1000

if(installmentsNumber === 1) {
  const valueToPay = productValue - (productValue * 0.1)
  console.log(`O produto sera vendido a vista no valor de ${valueToPay} reais com desconto de 10%`)
} else {
  const installmentsValue = (productValue / installmentsNumber).toFixed(2);
  console.log(`O produto foi parcelado em ${installmentsNumber} vezes e o valor das parcelas sera de ${installmentsValue} reais`)
}