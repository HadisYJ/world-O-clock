function updateCityTime(cityId, timeZone) {
  let cityElement = document.querySelector(`#${cityId}`);
  if (cityElement) {
    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".time");
    let cityTime = moment().tz(timeZone);

    cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateTime() {
  updateCityTime("los-angeles", "America/Los_Angeles");
  updateCityTime("berlin", "Europe/Berlin");
  updateCityTime("tehran", "Asia/Tehran");
  updateCityTime("johannesburg", "Africa/Johannesburg");
  updateCityTime("sydney", "Australia/Sydney");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "currentLocation") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cityRow");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
     <div class="cityName">${cityName}</div>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);
