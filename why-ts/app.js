// api url
var url = "https://jsonplaceholder.typicode.com/users";

// dom
var username = document.querySelector("#usename");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
    })
    .catch(function (error) {
      console.log("error = ", error);
    });
}

startApp();
