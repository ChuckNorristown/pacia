
function TheLogin() {

var password = 'pacia1986';

if (this.document.login.password.value == password) 
if (this.document.login.email.value != "") {
  top.location.href="home.html";
}
if (this.document.login.email.value == "") {
   alert("Please enter your email address.");
   this.document.email.focus();
   return false;
  }
if (this.document.login.password.value == "") {
   alert("Please enter your password.");
   this.document.password.focus();
   return false;
  }
if (this.document.login.password.value != "pacia1986") {
   alert("Invalid password.");
   this.document.password.focus();
   return false;
  }
}
