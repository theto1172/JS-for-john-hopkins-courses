(function (window){
 var renaGreeter ={};
 renaGreeter.name="Rena";
 var greeting = "Hi ";
 renaGreeter.sayHi = function (){
	console.log( greeting + renaGreeter.name);
}
 window.renaGreeter = renaGreeter;
})(window);