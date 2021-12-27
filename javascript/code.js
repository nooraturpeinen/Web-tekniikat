// Creating a HTTP request
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
        // Adding textual answer
        document.getElementById("city").innerHTML = warnings[0].created_at;
    }
}