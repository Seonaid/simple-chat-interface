document.write('MORE different script file!');

function inputBox (first_name) {
//	do{
	var newMsg = prompt('Hi, ' +first_name + '. Hit enter to send. Type end to finish.');

	document.write(newMsg);
//	} while (newMsg != "end");

}

function sayHello (first_name, e) {

	if (e.keyCode === 13) {	
		alert('Hello, ' + first_name);
	};

}

var addMessage = function(){}

