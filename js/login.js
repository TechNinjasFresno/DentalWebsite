//validates username and password
function validate() {

  var un = document.getElementById("uname").value;
  var pw = document.getElementById("pswd").value;

  if (un == "Allen") {
    if (pw == "Huddleston") {
      window.close()
      window.open("./pages/home.html");
    }
    else {
      alert("Password is invald: You shall not pass!")
    }
  }
  else {
    alert("Username is invalid: You shall not pass!");
  }
}
