let numeros = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];

console.log('pares')
for (let i = 0; i < numeros.length; i++){
  if (numeros[i] % 2 === 0)
    console.log (numeros[i]);
}

console.log('impares')
for (let x = 0; x < numeros.length; x++){
  if (numeros[x] % 2 === 1)
    console.log (numeros[x]);
}