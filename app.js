function limpiarCaja() {
  document.getElementById("temperaturaCelsius").value = "";
}

function convertirTemperatura() {
  const celsiusInput = document.getElementById("temperaturaCelsius").value;
  const celsius = parseFloat(celsiusInput);

  if (isNaN(celsius)) {
    alert("Por favor ingresa un número válido");
    return;
  }

  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  const kelvinP = document.createElement("p");
  kelvinP.textContent = `Grados Kelvin: ${kelvin}`;

  const fahrenheitP = document.createElement("p");
  fahrenheitP.textContent = `Grados Fahrenheit: ${fahrenheit}`;

  // obtenemos el contenedor de resultados
  const output = document.getElementById("resultado");

  // limpiamos resultados anteriores
  output.innerHTML = "";

  // mostramos resultados nuevos
  output.appendChild(kelvinP);
  output.appendChild(fahrenheitP);

  // limpiamos la caja de entrada
  limpiarCaja();
}
