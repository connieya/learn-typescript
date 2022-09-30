
//utils
function $(selector : any) {
  return document.querySelector(selector);
}

function getUnixTimestamp(date : any) {
  return new Date(date).getTime();
}


// DOM
const confirmedTotal = $(".confirmed-total");
const deathsTotal = $(".deaths");
const recoveredTotal = $(".recovered");
const lastUpdatedTime = $(".last-updated-time");
const rankList = $(".rank-list");
const deathsList = $(".deaths-list");
const recoveredList = $(".recovered-list");
const deathSpinner = createSpinnerElement("deaths-spinner");
const recoveredSpinner = createSpinnerElement("recovered-spinner");

function createSpinnerElement(id : any) {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", id);
  wrapperDiv.setAttribute(
    "class",
    "spinner-wrapper flex justify-center align-center"
  );
  const spinnerDiv = document.createElement("div");
  spinnerDiv.setAttribute("class", "ripple-spinner");
  spinnerDiv.appendChild(document.createElement("div"));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;
let isRecoveredLoading = false;

function fetchCovidSummary() {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}


function fetchCountryInfo(countryCode , status) {
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

function startApp(){
  setupData();
  initEvents();
}

function initEvents(){
  rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event) {
  let selectedId;
  if(
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ){
    selectedId = event.target.parentElement.id;
  }
  if(event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if(isDeathLoading) {
    return;
  }
  clearDeathList();
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

function setDeathsList(data : any) {
  const sorted = data.sort(
    (a,b) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date);
  );
  sorted.forEach(value => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0,-1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
}

function clearDeathList(){
  deathsList.innerHTML = null;
}

function setTotalDeathsByCountry(data : any){
  deathsTotal.innerText = data[0].Cases;
}

function setRecoveredList(data : any){
  const sorted = data.sort(
    (a : any , b :any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
  );
  sorted.forEach((value : any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class' ,'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0,-1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data : any){
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();

async function setupData() {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
}
