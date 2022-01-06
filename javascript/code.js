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
        let div = document.querySelector(".warning");
        let p = document.createElement("p");
        div.appendChild(p);
        let button = document.querySelector("button");
        button.addEventListener("click", checkCity);
        function checkCity() {
            let selectedCity = document.querySelector("select").value;
            for (let i = 0; i < warnings.length; i++) {
                if (warnings[i].city == selectedCity) {
                    let warning = warnings[i].created_at;
                    let day = warning.slice(8, 10);
                    if (warning.slice(8, 9) == "0") {
                        day = warning.slice(9, 10);
                    }
                    let month = warning.slice(5, 7);
                    if (warning.slice(5, 6) == "0") {
                        month = warning.slice(6, 7);
                    }
                    let year = warning.slice(0, 4);
                    let hour = warning.slice(11, 13);
                    if (warning.slice(11, 12) == "0") {
                        hour = warning.slice(12, 13);
                    }
                    let minutes = warning.slice(14, 16);
                    p.innerHTML = selectedCity + ": " + day + "." + month + "." + year + " klo " + hour + "." + minutes;
                }
            }
        }
    }
}

// 0-16