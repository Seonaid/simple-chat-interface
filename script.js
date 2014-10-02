// Check whether user is "logged in" (in fact, at this point, just whether a userName exists)
// this will become a login script in later iterations.

var userName = "";


if (!userName) {
	var userName = prompt("What is your name?");
}

var newText = document.createTextNode("What do you have to say for yourself, " + userName + "?");
var something = document.getElementById("msgDescription").lastChild; 
// alert(something);
document.getElementById("msgDescription").replaceChild(newText, something);
document.getElementById("msgBox").focus();

// end of login bit. Needs to be made into function.

function getMessage() {
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	
	if (validateMessage(currMessage)) {
		addMessage(currMessage);						// adds current message to the display space
/*	} else {
		alert('Did not call addMessage.');
		document.getElementById("msgBox").blur(); */ // removes focus from msgBox so that further enter buttons don't pop up more alerts.
	}
		document.getElementById("msgBox").focus();
		document.getElementById("msgBox").value = ""; //resets value of message box to ""

};

function addMessage(msg) {
// create a new paragraph element, add the message to the paragraph and append to the displaySpace.
// only gets called once the message has been retrieved and validated.

if (msg === '') {
	msg = 'in here somehow'; // debugging flow control as the listener is triggered even in alert boxes.
}
	var p = document.createElement("p");
	var t = document.createTextNode(userName + ": " + msg);
	p.appendChild(t);
	document.getElementById("displaySpace").appendChild(p);
};

function validateMessage (msg) {
	// body... make sure that the message doesn't start with a '/' (and that it is not blank. <== not yet implemented)

	if(msg === "" || msg === '\n'){
			warning('Nothing to say?')
			return false;
	} else{
		if (msg[0] != '/'){
			return true;

		} else{
			warning('Command not available')
			return false;
		}
	}
};

function warning (msg) {
	// body...
			document.getElementById("msgBox").value = ""; //resets value of message box to ""
			document.getElementById("msgBox").blur();
			confirm(msg);
			return;

}

function checkChar(e) {
	// checking keystroke for enter key
	test = e.keyCode;
	if (test === 13){
		getMessage();
	}
};

document.getElementById("myButton").addEventListener("click", function(){getMessage();}, false); // send button
document.getElementById("msgBox").addEventListener("keyup", function(){checkChar(event);}, false); // listening for enter key
