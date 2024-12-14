let currentIntervalId;

function updateTime() {
  let jerusalemElement = document.querySelector("#jerusalem");
  if (jerusalemElement) {
    let jerusalemDateElement = jerusalemElement.querySelector(" .date");
    let jerusalemTimeElement = jerusalemElement.querySelector(" .time");
    let jerusalemTime = moment().tz("Asia/Jerusalem");

    jerusalemDateElement.innerHTML = jerusalemTime.format("MMMM Do YYYY");
    jerusalemTimeElement.innerHTML = jerusalemTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(" .date");
    let romeTimeElement = romeElement.querySelector(" .time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(" .date");
    let losAngelesTimeElement = losAngelesElement.querySelector(" .time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = getCityName(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
`;

  if (currentIntervalId) {
    clearInterval(currentIntervalId);
  }
  updateDateTime(cityTimeZone);

  currentIntervalId = setInterval(function () {
    updateDateTime(cityTimeZone);
  }, 1000);
}

function getCityName(cityTimeZone) {
  return cityTimeZone.replace("_", " ").split("/")[1];
}
function updateDateTime(cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  let dateElement = document.querySelector(".city .date");
  let timeElement = document.querySelector(".city .time");
  if (dateElement && timeElement) {
    dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    timeElement.innerHTML = `${cityTime.format(
      "HH:mm:ss"
    )} <small>${cityTime.format("A")}</small>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#selectCity");
selectCityElement.addEventListener("change", updateCity);
