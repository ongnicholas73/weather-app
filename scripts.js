const apiKey = "56fb70d18ba75fffdc0f40dd78b28c89";


const getCurrentWeather = function(cityName) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
        ).then(function(res) {
        return res.json();
    }).then(function(data) {
        document.querySelector(".weather-info").innerHTML = `
            <h1>${data.name}</h1>
            <div class="Temperture item">
                Temperature: <span>${data.main.temp}</span>
            </div>
            <div class="humidity item">
                Humidity: <span>${data.main.humidity}</span>
            </div>
            <div class="wind-speed item">
                Wind-speed: <span>${data.wind.speed}</span>
            </div>
            <div class="wind-degree item">
                Wind-degree: <span>${data.wind.deg}</span>
            </div>
            <div class="wind-gust item">
                Wind-gust: <span>${data.wind.gust}</span>
            </div>
            <div class="coordinate item">
                Longitude: <span>${data.coord.lon}</span>  Latitude: <span>${data.coord.lat}</span>
            </div>
        `;
    });
}

document.querySelector("#submit").addEventListener('click', function(e) {
    e.preventDefault();
    const cityName = document.querySelector("#city-input").value;
    getCurrentWeather(cityName)
});;