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

/* echo for debugging
var newWords = document.getElementById("msgDescription").innerHTML;
alert(newWords);
*/

function getMessage() {
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	
	if (validateMessage(currMessage)) {
		addMessage(currMessage);						// adds current message to the display space
		document.getElementById("msgBox").value = ""; //resets value of message box to ""
/*	} else {
		alert('Did not call addMessage.');
		document.getElementById("msgBox").blur(); */ // removes focus from msgBox so that further enter buttons don't pop up more alerts.
	}

};

function addMessage(msg) {
// create a new paragraph element, add the message to the paragraph and append to the displaySpace.
// only gets called once the message has been retrieved and validated.

	var p = document.createElement("p");
	var t = document.createTextNode(userName + ": " + msg);
	p.appendChild(t);

// 	alert("appending" + t + "to displaySpace.")
	
	document.getElementById("displaySpace").appendChild(p);
};

function validateMessage (msg) {
	// body... make sure that the message doesn't start with a '/' (and that it is not blank. <== not yet implemented)

// alert("Validating message! is this many characters long: " + msg.length);
	if(msg === "\n"){
				return false;
	} else{
		if (msg[0] != '/'){
			return true;

		} else{
			alert('command not available');
			return false;
		}
	}
};

function checkChar(e) {
	test = e.keyCode;
	if (test === 13){
		getMessage();
	}
};

// event listener for the send button 
document.getElementById("myButton").addEventListener("click", function(){getMessage();}, false);

// event listener for the textarea... listening for the enter key

document.getElementById("msgBox").addEventListener("keyup", function(){checkChar(event);}, false);