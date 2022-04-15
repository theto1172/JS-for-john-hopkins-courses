(function (window) {
	var thetGreeter ={};
    thetGreeter.name = "Thet";
    var greeting = "Hello ";
   thetGreeter.sayHello = function () {
   console.log( greeting + thetGreeter.name);
}
   window.thetGreeter = thetGreeter;
})(window);