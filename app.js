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

  const kelvin = (celsius + 273.15).toFixed(2);
  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);

  const kelvinP = document.createElement("p");
  kelvinP.textContent = `Grados Kelvin: ${kelvin}`;

  const fahrenheitP = document.createElement("p");
  fahrenheitP.textContent = `Grados Fahrenheit: ${fahrenheit}`;

  const output = document.getElementById("resultado");
  output.innerHTML = ""; // limpiar resultados anteriores
  output.appendChild(kelvinP);
  output.appendChild(fahrenheitP);

  limpiarCaja();
}
