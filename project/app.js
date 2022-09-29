function $(selector) {
  return document.querySelector(selector);
}

function getUnixTimestamp(date) {
  return new Date(date).getTime();
}

const confirmedTotal = $(".confirmed-total");
const deathsTotal = $(".deaths");
const recoveredTotal = $(".recovered");
const lastUpdatedTime = $(".last-updated-time");
const rankList = $(".rank-list");
const deathsList = $(".deaths-list");
const recoveredList = $(".recovered-list");
const deathSpinner = createSpinnerElement("deaths-spinner");
const recoveredSpinner = createSpinnerElement("recovered-spinner");

function fetchCovidSummary() {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}
