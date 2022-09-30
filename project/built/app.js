var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function $(selector) {
    return document.querySelector(selector);
}
function getUnixTimestamp(date) {
    return new Date(date).getTime();
}
var confirmedTotal = $(".confirmed-total");
var deathsTotal = $(".deaths");
var recoveredTotal = $(".recovered");
var lastUpdatedTime = $(".last-updated-time");
var rankList = $(".rank-list");
var deathsList = $(".deaths-list");
var recoveredList = $(".recovered-list");
var deathSpinner = createSpinnerElement("deaths-spinner");
var recoveredSpinner = createSpinnerElement("recovered-spinner");
function createSpinnerElement(id) {
    var wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("id", id);
    wrapperDiv.setAttribute("class", "spinner-wrapper flex justify-center align-center");
    var spinnerDiv = document.createElement("div");
    spinnerDiv.setAttribute("class", "ripple-spinner");
    spinnerDiv.appendChild(document.createElement("div"));
    wrapperDiv.appendChild(spinnerDiv);
    return wrapperDiv;
}
// state
var isDeathLoading = false;
var isRecoveredLoading = false;
function fetchCovidSummary() {
    var url = "https://api.covid19api.com/summary";
    return axios.get(url);
}
function fetchCountryInfo(countryCode, status) {
    var url = "https://api.covid19api.com/country/".concat(countryCode, "/status/").concat(status);
    return axios.get(url);
}
function startApp() {
    setupData();
    initEvents();
}
function initEvents() {
    rankList.addEventListener('click', handleListClick);
}
function handleListClick(event) {
    return __awaiter(this, void 0, void 0, function () {
        var selectedId;
        return __generator(this, function (_a) {
            if (event.target instanceof HTMLParagraphElement ||
                event.target instanceof HTMLSpanElement) {
                selectedId = event.target.parentElement.id;
            }
            if (event.target instanceof HTMLLIElement) {
                selectedId = event.target.id;
            }
            if (isDeathLoading) {
                return [2 /*return*/];
            }
            clearDeathList();
            return [2 /*return*/];
        });
    });
}
function startLoadingAnimation() {
    deathsList.appendChild(deathSpinner);
    recoveredList.appendChild(recoveredSpinner);
}
function endLoadingAnimation() {
    deathsList.removeChild(deathSpinner);
    recoveredList.removeChild(recoveredSpinner);
}
function setDeathsList(data) {
    var sorted = data.sort(function (a, b) { return getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date); });
    ;
    sorted.forEach(function (value) {
        var li = document.createElement('li');
        li.setAttribute('class', 'list-item-b flex align-center');
        var span = document.createElement('span');
        span.textContent = value.Cases;
        span.setAttribute('class', 'deaths');
        var p = document.createElement('p');
        p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
        li.appendChild(span);
        li.appendChild(p);
        deathsList.appendChild(li);
    });
}
function clearDeathList() {
    deathsList.innerHTML = null;
}
function setTotalDeathsByCountry(data) {
    deathsTotal.innerText = data[0].Cases;
}
function setupData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchCovidSummary()];
                case 1:
                    data = (_a.sent()).data;
                    setTotalConfirmedNumber(data);
                    setTotalDeathsByWorld(data);
                    setTotalRecoveredByWorld(data);
                    setCountryRanksByConfirmedCases(data);
                    setLastUpdatedTimestamp(data);
                    return [2 /*return*/];
            }
        });
    });
}
