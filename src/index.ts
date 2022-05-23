let v1: number[] = new Array(6);
let valor1: number, i: number;

for (i = 0; i < 6; i++) {
  valor1 = Number(prompt("Ingrese valor " + (i + 1) + " del primer arreglo"));
  v1[i] = valor1;
}

let v2: number[] = new Array(6);
let valor2: number;
for (i = 0; i < 6; i++) {
  valor2 = Number(prompt("Ingrese valor " + (i + 1) + " del segundo arreglo"));
  v2[i] = valor2;
}
let vSuma: number[] = [];
for (i = 0; i < 6; i++) {
  vSuma[i] = v1[i] + v2[i];
}
console.log("Los numeros del primer arreglo son: " + v1);
console.log("Los numeros del segundo arreglo son: " + v2);
console.log("La suma de cada elemento del arreglo son " + vSuma);
