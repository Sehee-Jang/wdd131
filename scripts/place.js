
// Calculate in Celsius
const calculateWindChill = (temperature, windSpeed) => temperature <= 10 && windSpeed > 4.8 ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) : "N/A";

window.onload = function() {
    // Static values for temp and wind speed
    const temperature = 10;
    const conditions = "Sunny";
    const windSpeed = 6;

    // Calculate wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Get the "Weather" section
    const weatherSection = document.querySelector('.weather');

    // Create a div element to display the weather information
    const weatherElement = document.createElement('div');
    // Add the "datatable" class to the div element
    weatherElement.classList.add('datatable');
    // Set the content of the div element with temperature, conditions, and wind speed
    weatherElement.innerHTML = `<div class="row">
                                    <div class="col bold">Temperature:</div>
                                    <div class="col">${temperature}°C</div>
                                </div>
                                <div class="row">
                                    <div class="col bold">Conditions:</div>
                                    <div class="col">${conditions}</div>
                                </div>
                                <div class="row">
                                    <div class="col bold">Wind Speed:</div>
                                    <div class="col">${windSpeed} km/h</div>
                                </div>
                                <div class="row">
                                    <div class="col bold">Wind Chill:</div>
                                    <div class="col">${windChill}°C</div>
                                </div>
                                `;
    // Append the weather element to the "Weather" section
    weatherSection.appendChild(weatherElement);
};