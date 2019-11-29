
document.addEventListener('DOMContentLoaded', function () {
const btn = document.getElementById("submit");
    btn.addEventListener("click", function() {
        const city = ((document.getElementById("city")||{}).value)||"";
        document.getElementById('slider').innerHTML = city;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=de7a1829247078d4fed1cb801cd2f95d`;
        fetch(url)
      .then(response => response.json())
      .then(json => {

        console.log(`Temperatura: ${json.main.temp}`);
        console.log(`Ciśnienie: ${json.main.pressure}`);
        console.log(`Wilgotność: ${json.main.humidity}`);
        console.log(`Wiatr: ${json.wind.speed}`);

        //var radr = JSON.stringify(json)
        //document.getElementById('slider').innerHTML = radr;
        
      });
        
    })
});



