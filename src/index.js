function showAlert(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY H:m:s A");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let city = document.querySelector("#citiesSelect");
city.addEventListener("change", showAlert);
