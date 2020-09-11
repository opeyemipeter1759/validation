let form = document.getElementById("signup_form");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
const phoneNumber = document.getElementById("phone_number");
let formEmail = document.getElementById("form_email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const nameRe = /^[A-Za-z]+$/;
const phoneNumbRe = "/^[]?[0-9]{10,14}$/i";
const emailRe = "/^+([]?+)*@+([-]?+)*({2,6})+$/";
const passwordRe = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
const passwordErr =
  "Your Password Should have a Minimum of 6 Characters, 1 Capital letter, 1 Special Character eg @ and 1 Number.";

// input val
function inputValidation(input, inputRe, errorMessage1, errorMessage2, event) {
  if (input.value === "") {
    document.querySelector(".error").innerHTML = errorMessage1;
    event.preventDefault();
  } else if (!input.value.match(inputRe)) {
    document.querySelector(".error").innerHTML = errorMessage2;
    event.preventDefault();
    return false;
  } else {
    input.document.querySelector(".error").innerHTML = "";
    return true;
  }
}

function confirmPasswordValidation(event) {
  if (confirmPassword.value === "") {
    confirmPassword.nextElementSibling.innerHTML =
      "Please confirm your Password";
    event.preventDefault();
  } else if (!(password.value == confirmPassword.value)) {
    confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
    event.preventDefault();
    return false;
  } else {
    confirmPassword.nextElementSibling.innerHTML = "";
    return true;
  }
}
function validationSignupForm(event) {
  inputValidation(
    firstName,
    nameRe,
    "Please enter your First name",
    "Please First Name can only contain letters.",
    event
  );
  inputValidation(
    lastName,
    nameRe,
    "Please enter your Last name",
    "Please Last Name can only contain letters.",
    event
  );
  inputValidation(
    phoneNumber,
    phoneNumbRe,
    "Please enter your phone number",
    "Please enter a valid phone number",
    event
  );
  inputValidation(
    formEmail,
    emailRe,
    "Please enter your Email address",
    "Please enter a valid email",
    event
  );
  inputValidation(
    password,
    passwordRe,
    "Please enter your password",
    passwordErr,
    event
  );
  confirmPasswordValidation(event);
  return true;
}

form.addEventListener("submit", validationSignupForm);
