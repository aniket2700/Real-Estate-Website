var loguser = document.getElementById("logusername");
var logpass = document.getElementById("logpassword");
var regemail = document.getElementById("regemail");
var reguser = document.getElementById("regusername");
var regpass = document.getElementById("regpassword");
var regcompass = document.getElementById("regcompass");
var logbtn = document.getElementById("userlogo");
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

var login = false;

function serviceUnavailable(){
    alert('Service Unavailable...');
}

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "sender email",
	Password : "sender password",
	To : 'receiver email',
	From : "sender email",
	Subject : "Using js",
	Body : "Hi",
	}).then(
		message => alert("Email Sent Successfully...")
	);
}

function loginuser(){
	if(loguser.value=="aniket2021" && logpass.value=="Aniket11")
	{
		alert("Login Successful...");
	}
	else if(loguser.value=="" && logpass.value=="Aniket11"){
		alert("Username field cannot be empty...")
	}
	else if(loguser.value=="aniket2021" && logpass.value==""){
		alert("Password field cannot be empty...");
	}
	else if(loguser.value=="aniket2021" && logpass.value!="Aniket11"){
		alert("Incorrect Password...");
	}
	else if(loguser.value!="aniket2021" && logpass.value=="Aniket11"){
		alert("Incorrect Username...");
	}
	else{
		alert("Username and Password must be filled...");
	}
}	

function register(){
	if(checkUsername() && checkPassword() && checkEmail()){
		alert("User Registered Successfully...");
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
