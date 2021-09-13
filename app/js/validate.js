const form = document.querySelector("#signUpForm");
const email = document.querySelector("#email");
const emailAlert = document.querySelector("#emailAlert");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', function (event) {
  if (!email.value || !email.value.match(mailformat)) {
    emailAlert.style.display = "block";
    event.preventDefault();
  }
});