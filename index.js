const monto = parseInt(prompt("Ingresar el monto a invertir."));
const meses = parseInt(prompt("Ingresar cantidad de meses a invertir (min. 1 - max. 36)."));
const interesAnual = parseInt(prompt("Ingresa la tasa anual que desees."));

function interesMensual() {
  let division = interesAnual / meses / 100;
  return division;
}
let interes = interesMensual();

if (meses >= 1 && meses <= 36) {
  alert("El interés anual es del " + interesAnual + "%.");
  for (let i = 0; i <= meses; i++) {
    let montoAcumulado = i * interes * monto + monto;
    alert(
      "Su capital en el mes número " + i + " es de " + montoAcumulado + "."
    );
  }
} else {
  alert('La cantidad de meses elegida es inválida.')
}