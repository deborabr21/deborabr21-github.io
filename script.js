function validate() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  if (name.value == "") {
    alert("Make sure the name field is filled");
    return false;
  }

  if (phone.value == "") {
    alert("Make sure the phone field is filled");
    return false;
  }

  if (email.value == "") {
    alert("Make sure the email field is filled");
    return false;
  }

  if (message.value == "") {
    alert("Make sure the message field is filled");
    return false;
  }
}

function submit(event) {
  if (!validate()) {
    event.preventDefault();
  }
  return;
}
