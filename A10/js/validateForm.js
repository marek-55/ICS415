function validateForm()
{
	// Clear out old errors first
	var remove = document.getElementById("errorDiv");
	if(remove != null)
	{
		 remove.parentNode.removeChild(remove);
	}
    var send = 0; // 1 means do not send
	var errorString = "";
	
	// Validate username
	var userNameField=document.forms["myForm"]["name"];
	if (userNameField.value==null || userNameField.value=="")
	{
		userNameField.setAttribute("style", "background-color: red");
		errorString += "Please enter your name.</br>";
		send = 1;
    } 
	else  // Make sure color returns to normal, or stays normal
	{
	    userNameField.setAttribute("style", "background-color: null");
	}
	
	// Validate email
	var emailField=document.forms["myForm"]["email"];
	if (emailField.value==null || emailField.value=="")
	{
		emailField.setAttribute("style", "background-color: red");
		errorString += "Please enter your email.</br>";
		send = 1;
	}
	else  // Make sure color returns to normal, or stays normal
	{
	    emailField.setAttribute("style", "background-color: null");
	}	
	
	// Check for null password
	var passwordField = document.forms["myForm"]["password"];
	if (passwordField.value==null || passwordField.value=="")
	{
		// Don't even bother checking the confirm password field if no password
		passwordField.setAttribute("style", "background-color: red");
		errorString += "Please enter a password. </br>";
		send = 1;
	}
	else
	{
		// Make sure color returns to normal, or stays normal
		passwordField.setAttribute("style", "background-color: null");
		// Check for null Confirm password
		var confirmField = document.forms["myForm"]["confirm"];
		if (confirmField.value==null || confirmField.value=="")
		{
			 confirmField.setAttribute("style", "background-color: red");
			 errorString += "Please reenter your password.</br>";
			 send = 1;
		}
		else
		{
			 // Check to make sure they match
			 if(passwordField.value != confirmField.value)
			 {
				 passwordField.setAttribute("style", "background-color: red");
				 confirmField.setAttribute("style", "background-color: red");
				 errorString += "Passwords do not match.</br>";
				 send = 1;			     
			 }
			 else
			 {
				 // Make sure color returns to normal, or stays normal
				 confirmField.setAttribute("style", "background-color: null");
			 }
		}
	}

	if (send == 1)
	{
	    // Create area for error messages
		var errors = document.createElement('div');
		errors.id="errorDiv";
		errors.setAttribute("style", "background-color: red");
		errors.style.width="20%";
		errors.innerHTML = errorString;
		document.body.insertBefore(errors, document.body.firstChild);
		return false;
	}
	
	return true;
}