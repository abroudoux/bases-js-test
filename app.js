console.log("JS chargé");

let form = document.getElementById("form");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let infosUser =
    firstName + " " + lastName + ", né(e) le " + day + "/" + month + "/" + year;
  console.log(infosUser);

  message.style.display = "block";
  message.innerHTML =
    "Merci d'avoir répondu à ce formualire, vos informations sont les suivantes : " +
    infosUser;
});
