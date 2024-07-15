import './style.css';
// import Icon from './icon.png';

function setLocation (location) {
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



const button = document.createElement('button');
document.body.appendChild(button);

button.addEventListener('click', function () {
   const urlWithLocation = setLocation("gothenburg");
    fetchInfo(urlWithLocation).then(result => {
        console.log(result)
    })
    

})