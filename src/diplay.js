const displayDiv = document.getElementById("display");
export function weatherInfo(key) {
    const info = `Condition: ${key.days[0].conditions}<br>
                  DateTime: ${key.days[0].datetime}<br>
                  Feels Like: ${key.days[0].feelslike}`;
    
    displayDiv.innerHTML = info;
}

const img = document.querySelector('img');
export function gifyImg(key) {
    console.log(key)
    img.src = key.data.images.original.url;
    img.removeAttribute("hidden");
}