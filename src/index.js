import './style.css';
// import Icon from './icon.png';
function setLocationToURL (location) {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location;
    let newURL =  new URL(url);        

    console.log(newURL)

    return newURL
}



async function fetchInfo (url) {
    try {
        url.searchParams.set('key', 'JUNGCDPBC8E4FRPWSS5JZHXJG');
        const data = await fetch(url, {mode:'cors'});
        console.log(data);
        const weatherInfo = await data.json(); // .json returns a promise which is then resolved by await
        console.log(weatherInfo);

        return weatherInfo;

    } catch(err){
        console.log(err);
        return err;
    }
}

const displayDiv = document.getElementById("display");
function display(key) {
    const info = `Condition: ${key.days[0].conditions}<br>
                  DateTime: ${key.days[0].datetime}<br>
                  Feels Like: ${key.days[0].feelslike}`;
    
    displayDiv.innerHTML = info;
}

const input = document.getElementById("location");

input.addEventListener('input', function () {
   const location = input.value;
   const urlWithLocation = setLocationToURL(location);
    fetchInfo(urlWithLocation).then(result => {
        display(result)
        
        
        // ("condition", result.days[0].conditions);
        // display("datetime", result.days[0].datetime);
        // display("feelslike", result.days[0].feelslike)
    })
})