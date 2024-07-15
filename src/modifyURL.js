export function setLocationToURL (location) {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location;
    let newURL =  new URL(url);        

    console.log(newURL)

    return newURL
}
