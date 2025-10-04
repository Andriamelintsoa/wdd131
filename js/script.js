// Update current year
document.getElementById('year').textContent = new Date().getFullYear();

// Format last modified date
const lastMod = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastMod.toLocaleString();

// Wind chill calculation (metric)
const tempC = 28; // from your HTML
const windKPH = 5; // from your HTML

let windChill = "N/A";

// Only calculate if temp ≤ 10°C and wind > 4.8 km/h
if (tempC <= 10 && windKPH > 4.8) {
    windChill = (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKPH, 0.16) +
        0.3965 * tempC * Math.pow(windKPH, 0.16)
    ).toFixed(1);
}

document.getElementById('windchill').textContent = windChill;