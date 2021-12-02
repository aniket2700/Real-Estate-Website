var user = document.getElementById("logusername");
var pass = document.getElementById("logpassword");
var regemail = document.getElementById("regemail");
var reguser = document.getElementById("regusername");
var regpass = document.getElementById("regpassword");
var regcompass = document.getElementById("regcompass");
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

var userArray = new Array();
var passArray = new Array();
var emailArray = new Array();

function serviceUnavailable(){
    alert('Service Unavailable');
}

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sender's email",
	Password : "password",
	To : 'receiver email',
	From : "sender's email",
	Subject : "subject",
	Body : "message",
	}).then(
		message => alert("Email Sent Successfully.")
	);
}

function login(){

}	

function register(){
	if(checkUsername() && checkPassword() && checkEmail()){
		userArray.push(reguser.value);
		passArray.push(regpass.value);
		emailArray.push(regemail.value);
		alert("Registered Successfully...");
		window.location.href = "login.html";
	}
}

function checkUsername(){
	if(reguser.value==""){
		alert("Username field cannot be empty...");
		return false;
	}
	if(!reguser.value.match(numbers)){
		alert("Username must contain at least one number...");
		return false;
	}
	if(reguser.value.length!=10){
		alert("Username must be of 10 characters long...");
		return false;
	}
	return true;
}

function checkEmail(){
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(regemail.value=="")
	{
		alert("Email field cannot be empty...");
		return false;
	}
	if(!regemail.value.match(pattern))
	{
		alert("Invalid Email...");
		return false;
	}
	return true;
}

function checkPassword() 
{
	if(regpass.value==""){
		alert("Password field cannot be empty...");
		return false;
	}
	if(!regpass.value.match(lowerCaseLetters)){
		alert("Password must contain at least one lowercase letter...");
		return false;
	}
	if(!regpass.value.match(upperCaseLetters)){
		alert("Password must contain at least one uppercase letter...");
		return false;
	}
	if(!regpass.value.match(numbers)){
		alert("Password must contain at least one number...");
		return false;
	}
	if(regpass.value.length<8 || regpass.value.length>16){
		alert("Password length must be between 8 and 16 characters...");
		return false;
	}
	if(regcompass.value==""){
		alert("Comfirm Password field cannot be empty...");
		return false;
	}
	if(regcompass.value!=regpass.value){
		alert("Password Mismatch...");
		return false;
	}
	return true;
}
