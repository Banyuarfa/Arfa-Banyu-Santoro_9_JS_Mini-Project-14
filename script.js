document.querySelector("#farenheit").addEventListener("input", (e) => {
  if (!e.target.value) {
    document.querySelector("output").innerHTML = "";
    return;
  }
  const celcius = (e.target.value - 32) * (5 / 9);
  document.querySelector("output").innerHTML = celcius + "&deg;C";
});
