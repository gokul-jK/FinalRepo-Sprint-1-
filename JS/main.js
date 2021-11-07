
function valid() {
	// store new users username
	var registerUsername = document.getElementById('user').value
	sessionStorage.setItem("registerUsername", registerUsername)
	// store new users password
	var registerPassword = document.getElementById('pass').value
	sessionStorage.setItem("registerPassword", registerPassword)
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	console.log(document.cookie)
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
}
function logFunc() {
	// retreive data from username and store in username variable
	var username = document.getElementById('username').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value
	//
	
	
		if(username == sessionStorage.getItem("registerUsername") && password == sessionStorage.getItem("registerPassword")) {
			window.open('./afterlogin.html','_self')
			
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			
		} else {
			// error if username and password don't match
			alert('incorrect username or password')
		}
}
window.addEventListener("load",()=>{
document.getElementById("un").innerText="Welcome "+sessionStorage.getItem("registerUsername")+" !"})






