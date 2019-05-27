
var me = document.querySelector('h1');


me.onclick = function () {
	alert (' No Touching, Okay!!!') ;
	
	
};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lincoln001.jpg') {
      myImage.setAttribute ('src','images/download.png');
    } else {
      myImage.setAttribute ('src','images/lincoln001.jpg');
    }
}

 var button1 = document.querySelector('button');
 button1.onclick = function setName() {
	  var name1 = prompt('May I have your '); 
	  localStorage.setItem('name', name1);
	  me.textContent ='Welcome ' + name1; 
	 
 }

if (!localStorage.getItem('name')){
	setName()
	
}
 else {
 var storedName = localStorage.getItem('name');
	  me.textContent ='Welcome Back ' + storedName;
 	
 }
 
 