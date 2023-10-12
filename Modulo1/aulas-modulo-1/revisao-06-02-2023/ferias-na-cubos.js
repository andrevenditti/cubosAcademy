const case1 = "1 1 1 1"; //3
const case2 = "2 2 2 2"; //5
const case3 = "4 0 2 3"; //6

const array = case1.split(" ");
const array2 = case2.split(" ");
const array3 = case3.split(" ");

//nao passou nos testes
function divisaoTaxi(input) {
  let [grupo1, grupo2, grupo3, grupo4] = input.map(Number);

  if (grupo1 + grupo2 + grupo3 + grupo4 >= 10 ** 15) {
    return;
  }

  let numeroDeTaxis = 0;
  let somaPessoas = grupo1 * 1 + grupo2 * 2 + grupo3 * 3 + grupo4 * 4;
  numeroDeTaxis = somaPessoas / 4;

  console.log(Math.ceil(numeroDeTaxis));
}

divisaoTaxi(array);
divisaoTaxi(array2);
divisaoTaxi(array3);
