var myArray = ["OFF-WHITE-AIR-JORDAN-1-4.jpg",
"off-white-air-jordan-1-unc-dark-powder-blue-cone-release-5.jpg",
"off-white-x-air-jordan-1-the-ten-release-date.jpg"];

document.querySelector('button').addEventListener('click', function(){
	    	    var n = Math.floor(3*Math.random())
	    document.querySelector('html').style.backgroundImage = "url(" + myArray[n] + ")";
}); 