import './style.css';
import { setLocationToURL, setWeatherToURL } from './modifyURL';
import { weather, gify } from './fetch.js';
import { weatherInfo, gifyImg } from './diplay.js';
// import Icon from './icon.png';


const input = document.getElementById("location");

input.addEventListener('input', function () {
   const location = input.value;
   const urlWithLocation = setLocationToURL(location);
    weather(urlWithLocation).then(result => {
        weatherInfo(result);

        const weatherCondition = setWeatherToURL(result);
        const fetchedGify = gify(weatherCondition).then(result =>
            gifyImg(result)); 
    })
})