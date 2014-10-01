/*
document.write('Awe inspiring event listener.');

function changeBackground() {
	// body...
	document.getElementById('displaySpace').style.backgroundColor = "#f0f0f0";
};
*/

function getMessage(){
// window.document.getElementById('displaySpace')... append the current message to the output
	var currMessage = document.getElementById("msgBox").value;
	alert(currMessage);
	addMessage(currMessage);

	document.getElementById("msgBox").value = ""
/*
	document.getElementById("displaySpace").createElement("p");
	document.getElementById("displaySpace").appendChild(currMessage);
*/
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