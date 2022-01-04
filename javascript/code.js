// Creating an HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://liukastumisvaroitus-api.beze.io/api/v1/warnings", true);

// Send request
xmlhttp.send();

// Creating an event handler
xmlhttp.onreadystatechange = function() {
    // An onreadystatechange event has occured
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // Response is ready
        // Parsing JSON response
        let warnings = JSON.parse(xmlhttp.response);
        // Printing warning
        let div = document.querySelector("div");
        let p = document.createElement("p");
        div.appendChild(p);
        let button = document.querySelector("button");
        button.addEventListener("click", checkCity);
        function checkCity() {
            let selectedCity = document.querySelector("select").value;
            for (let i = 0; i < warnings.length; i++) {
                if (warnings[i].city == selectedCity) {
                    p.innerHTML = warnings[i].created_at;
                }
            }
        }
    }
}