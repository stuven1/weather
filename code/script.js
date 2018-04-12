
fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=1b105aada7b8b5bc46bf82a2950796ef").then((response) => {
  return response.json()
}).then((json) => {

let = "temperatur"


document.getElementById("city").innerHTML = json.name
console.log(json); //printing everything out.
document.getElementById("temp").innerHTML = json.main.temp.toFixed(1) // () ändra för att redigera
document.getElementById("main").innerHTML = json.weather[0].description

})
