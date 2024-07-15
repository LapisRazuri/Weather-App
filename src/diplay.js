const displayDiv = document.getElementById("display");
export function display(key) {
    const info = `Condition: ${key.days[0].conditions}<br>
                  DateTime: ${key.days[0].datetime}<br>
                  Feels Like: ${key.days[0].feelslike}`;
    
    displayDiv.innerHTML = info;
}