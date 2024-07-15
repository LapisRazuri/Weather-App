import './style.css';
import { setLocationToURL } from './modifyURL';
import { fetchInfo } from './fetch.js';
import { display } from './diplay.js';
// import Icon from './icon.png';


const input = document.getElementById("location");

input.addEventListener('input', function () {
   const location = input.value;
   const urlWithLocation = setLocationToURL(location);
    fetchInfo(urlWithLocation).then(result => {
        display(result);
        
        
        // ("condition", result.days[0].conditions);
        // display("datetime", result.days[0].datetime);
        // display("feelslike", result.days[0].feelslike)
    })
})