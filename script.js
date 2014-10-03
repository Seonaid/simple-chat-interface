
var userName = "";   // remember: userName is global in scope. In future iterations, it should be passed by a login script.

// Check whether user is "logged in" (in fact, at this point, just whether a userName exists)
if (!userName) {
	var userName = prompt("What is your name?");
	changeUser(userName);
}

function changeUser (nickName) {
	// nickName is only scoped within changeUser... using assignment to put it back into global userName
	userName = nickName;
	var newText = document.createTextNode("What do you have to say for yourself, " + nickName + "?");
	var something = document.getElementById("msgDescription").lastChild; 
	// alert(something);
	document.getElementById("msgDescription").replaceChild(newText, something);
	document.getElementById("msgBox").focus();
}

function getMessage() {
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	
	if (validateMessage(currMessage)) {
		addMessage(currMessage);						// adds current message to the display space
	}
	
	document.getElementById("msgBox").focus();
	document.getElementById("msgBox").value = ""; //resets value of message box to ""

};

function addMessage(msg) {
// create a new paragraph element, add the message to the paragraph and append to the displaySpace.
// only gets called once the message has been retrieved and validated.

	var para = document.createElement("p");
	var echoMessage = document.createTextNode(userName + ": " + msg);
	para.appendChild(echoMessage);
	document.getElementById("displaySpace").appendChild(para);
};

function validateMessage (msg) {
// check whether the message is blank, or is a "command" (starting with '/')

	if(msg === "" || msg === '\n'){
			alert('Nothing to say?')
			return false;
	} else{
		if (msg[0] != '/'){
			return true;

		} else{
			if (msg.substring(0,6) === "/ nick"){
				// change name
				if(confirm("Changing name to" + msg.substring(6,msg.length))){
					changeUser(msg.substring(6,msg.length));
				}
				return false;
			}
				else{
			alert('Command not available')
			return false;
			}
		}
	}
};

function checkChar(e) {
	// checking keystroke for enter key
	test = e.keyCode;
	if (test === 13){
		getMessage();
	}
};

/* Changed keyup to keydown. Previous version was displaying alert, then the keydown was closing the box and returning focus to
the textarea, which was then triggering again on keyup.
*/

document.getElementById("myButton").addEventListener("click", function(){getMessage();}, false); // send button
document.getElementById("msgBox").addEventListener("keydown", function(event){checkChar(event);}, false); // listening for enter key
