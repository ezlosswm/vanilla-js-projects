const showErr = (element, message) => {
  const formControl = element.parentElement;
  const input = formControl.querySelector("input");
  input.classList.add("border-red-600");
  const errMsg = formControl.querySelector(".errMsg");
  errMsg.innerText = message;
};

const showSuccess = (element) => {
  const formControl = element.parentElement;
  const input = formControl.querySelector("input");
  input.classList.remove("border-red-600");
  input.classList.add("border-green-600");
  const errMsg = formControl.querySelector(".errMsg");
  errMsg.classList.add("text-white");
};

const fieldName = (element) =>
  element.id.charAt(0).toUpperCase() + element.id.slice(1);

const checkLength = (element, min, max) => {
  const val = fieldName(element);
  if (element.value.length > max) {
    showErr(element, `${val} must contain less than ${max} characters.`);
  } else if (element.value.length < min) {
    showErr(element, `${val} must contain more than ${min} characters.`);
  } else {
    showSuccess(element);
  }
};

const checkPassword = (element) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(element.value.trim())) {
    showSuccess(element);
  } else {
    showErr(element, "Not a valid email.");
  }
};

export function setupCounter() {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    checkLength(username, 3, 17);
    checkLength(password, 7, 25);
    checkPassword(email);
  });
}
