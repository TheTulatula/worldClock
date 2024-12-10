function updateTime() {
  let telAvivElement = document.querySelector("#tel-aviv");
  let telAvivDateElement = telAvivElement.querySelector(" .date");
  let telAvivTimeElement = telAvivElement.querySelector(" .time");
  let telAvivTime = moment().tz("Asia/Tel_Aviv");

  telAvivDateElement.innerHTML = telAvivTime.format("MMMM Do YYYY");
  telAvivTimeElement.innerHTML = telAvivTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(" .date");
  let newYorkTimeElement = newYorkElement.querySelector(" .time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
