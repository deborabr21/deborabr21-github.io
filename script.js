const formName = document.getElementById("name");
const formPhone = document.getElementById("phone");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");

document.getElementById("forms").addEventListener("submit", event);

function submit(event) {
  if (!validate()) {
    event.preventDefault();
  }
  return;
}
