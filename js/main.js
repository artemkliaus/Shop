var par = document.createElement('p');
par.innerHTML = "Loren ipsum sit amo";
document.body.appendChild(par);
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list (contacts) {
    var contactsLength = contacts.length;
    for(var i = 0; i <= contactsLength - 1; i++) {
        console.log(printPerson(contacts[i]));
        };
    };
list();









function displayUl(num) {
	var ul = document.getElementsByClassName('dropMenu');
	ul.style.display = 'block';
}






function changeColor() {
	var button = document.getElementById('but');
	var c = 0;
	if (!c) {		
		c = 1;
		return button.style.color = 'green';
	} else {
		c = 0;
		return button.style.color = 'blue';
	}
}
/*
var div = document.createElement('div');
var divText = document.createTextNode('Welcome to site!');
div.appendChild(divText);
div.className = 'startText';
document.body.appendChild(div);
*/










var progBar = document.getElementById('progressBar');
var startAnim = document.getElementById('startAnim');
var i = 0;
var count = false;
function changeBg() {
var sTime = Date.now();
var timer = setInterval(function(){
	var endTime = Date.now() - sTime;
	if (endTime >= 4000) {		
		startAnim.style.background = 'none';
		return clearInterval(timer);
	}
	getProgress();
	}, 100);	
};




function getProgress() {
	progBar.innerHTML = i + '%';
	progBar.style.backgroundSize = i + '% 100%';
	i++;
};