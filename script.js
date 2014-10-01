

function getMessage(){
// retrieve the message that is in the message box and hand it to the addMessage function
	var currMessage = document.getElementById("msgBox").value;
	alert(currMessage);
	addMessage(currMessage);

	document.getElementById("msgBox").value = ""
};

function addMessage(msg){
	var p = document.createElement("p");
	var t = document.createTextNode(msg);
	p.appendChild(t);

	document.getElementById("displaySpace").appendChild(p)
//	alert('hi!' + msg);

};

document.getElementById("myButton").addEventListener("click", function(){getMessage();}, false);
//document.getElementById('chat_area').addEventListener("click", function(){chatClicked();}, false);