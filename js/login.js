
function TheLogin() {

var password = 'pacia1986';

if (this.document.login.password.value == password) {
  top.location.href="index.html";
}
if (this.document.login.email.value == "") {
   alert("Please enter a valid email address.");
   this.document.email.focus();
   return false;
  }
if (this.document.login.password.value == "") {
   alert("Please enter your password.");
   this.document.password.focus();
   return false;
  }

}