// import { apiKey } from "./config";
// import { apiKey } from './config.js';
import apiKey from "./git-ignores/config.js";
const result = document.getElementById('result')

document.getElementById('form')
.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const cityName = document.getElementById('city').value;

    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid='+ apiKey;

    console.log("Request send to " + requestURL);

        const response = await fetch(requestURL)
        try {
        if (!response.ok) {
            throw new Error("City not found");
        }
    }
    catch(error) {
        result.innerText = result.innerText =  error.message;
    }

    const responseJSON = await response.json();

    console.log(responseJSON);

    renderResult(responseJSON);
})


// cityInput.addEventListener('click',async ()=>{
//     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
// })


// function renderResult(responseJSON) {
    
    
//     let output = 'City Name: '+ responseJSON.name +
//      '<br>Temperature: ' + responseJSON.main.temp + ' F' +
//      '<br>Weather condition: ' + responseJSON.weather[0].main + 
//      '<br>Humidity: ' + responseJSON.main.humidity + 
//      '<br>Wind Speed: ' + responseJSON.wind.speed +
//      '<br>Weather icon: ' + responseJSON.weather[0].icon;

    
//     result.innerHTML=output

//     console.log(responseJSON.coord.lon);
// }

function renderResult(responseJSON) {
  const iconCode = responseJSON.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  let output = `
    <strong>🌤️ Weather in ${responseJSON.name}</strong>
    <img src="${iconURL}" alt="weather icon"><br>
    🌡️ Temperature: ${responseJSON.main.temp} °F<br>
    🌥️ Condition: ${responseJSON.weather[0].main}<br>
    💧 Humidity: ${responseJSON.main.humidity}%<br>
    🌬️ Wind Speed: ${responseJSON.wind.speed} m/s
  `;

  result.innerHTML = output;
}
