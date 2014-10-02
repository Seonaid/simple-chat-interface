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
/*
var newWords = document.getElementById("msgDescription").innerHTML;
alert(newWords);
*/


function getMessage() {
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	
	if (currMessage[0] != '/'){
		addMessage(currMessage);
	} else{
		alert('command not available');
	}
	
	document.getElementById("msgBox").value = "";
};

function addMessage(msg) {
// create a new paragraph element, add the message to the paragraph and append to the displaySpace.

	var p = document.createElement("p");
	var t = document.createTextNode(userName + ": " + msg);
	p.appendChild(t);

	document.getElementById("displaySpace").appendChild(p);
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