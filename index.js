function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var errorMessage = document.getElementById("error-message");

  if (name.trim() === "" || Email.trim() === "" || password.trim()==="") {
      errorMessage.textContent = "name,password and email are required.";
      return false;
  } else {
      errorMessage.textContent = "";
      return true;
  }
}