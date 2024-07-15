export function setLocationToURL(location) {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location;
    let newURL =  new URL(url);        

    console.log(newURL)

    return newURL
}

export function setWeatherToURL(weather) {
    const url = 'https://api.giphy.com/v1/gifs/translate?api_key=uZ22PScNzWCx8pBhA6R4XZM8yHwrhBzD'
    const newURL = new URL(url)
  
    
   newURL.searchParams.set('s', weather.currentConditions.conditions)
   console.log(newURL);

   return newURL;
};