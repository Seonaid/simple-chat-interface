function getMessage() {
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	addMessage(currMessage);

	document.getElementById("msgBox").value = "";
};

function addMessage(msg) {
// create a new paragraph element, add the message to the paragraph and append to the displaySpace.

	var p = document.createElement("p");
	var t = document.createTextNode(msg);
	p.appendChild(t);

	document.getElementById("displaySpace").appendChild(p);
};

function checkChar (e) {
	test = e.keyCode
	if (test === 13){
		getMessage();
	}
}

// event listener for the send button 
document.getElementById("myButton").addEventListener("click", function(){getMessage();}, false);

// event listener for the textarea... listening for the enter key

document.getElementById("msgBox").addEventListener("keyup", function(){checkChar(event);}, false);