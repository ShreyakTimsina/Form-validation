const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// ERROR FUNCTION
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
  small.textContent = message;
}

// SUCCESS FUNCTION
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

// EMAIL VALIDATION
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "The email is invalid");
  }
}
function checkPassword(input) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (re.test(String(input.value))) {
    showSuccess(input);
  } else {
    showError(input, "8 characters with lowercase and uppercase needed");
  }
}

// PASSWORD MATCHING
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess(input2);
  }
}

// CHECK REQUIRED
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// CHECK LENGTH
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min}  characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// GET INPUT NAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Input
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPassword(password);
  checkPasswordMatch(password, password2);

  //   if (username.value === "") {
  //     showError(username, "Username is Required");
  //   } else if (username.value.length < 3) {
  //     showError(username, "Username should at least contain 3 letters");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value === "") {
  //     showError(password2, "Password is required");
  //   } else {
  //     showSuccess(password2);
  //   }
});
