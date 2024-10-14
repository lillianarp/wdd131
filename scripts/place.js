console.log("JavaScript file is linked and running.");

// Copyright and Last Modified dates

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear; 

const lastModified = document.lastModified; 
document.getElementById("modifiedDate").textContent = lastModified;

// Windchill Factor 

function calculateWindChill(temperature, windSpeed) {
    if (temperature > 50 || windSpeed <= 3) {
        return "N/A";
    } else {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + " °F";   
    }
}

// Display wind chill 

function displayWindChill() {
    const tempInFarh = parseFloat(document.getElementById("temperature").textContent);
    const windSpeedMph = parseFloat(document.getElementById("windSpeed").textContent);

    const windChill = calculateWindChill(tempInFarh, windSpeedMph);

    document.getElementById("windChillResult").textContent = windChill;
}

displayWindChill();