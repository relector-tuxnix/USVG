var element;
var mouseupCallback;
var mousedownCallback;
var mousemoveCallback;

function init()
{
	state = "enabled";

	element = document.getElementById("canvas");
	element.addEventListener("mousedown", mousedown, false);
}

function mousedown(evt)
{
 	evt.preventDefault();

	if(mousedownCallback != undefined) {
		mousedownCallback();
	}

	if(state == "enabled") {

		element.setAttribute('viewBox', '0 0 200 100');

		element.setAttribute('height', 100);
	
		var backdrop = document.getElementById("backdrop");
	
		console.log(backdrop);	

		backdrop.setAttribute('y', 485);

		console.log(backdrop);	

		document.addEventListener("mousemove", mousemove, true);
		document.addEventListener("mouseup", mouseup, true);
	}
}

function mouseup(evt)
{
	evt.preventDefault();

	if(mouseupCallback != undefined) {
		mouseupCallback();
	}

	element.setAttribute('viewBox', '0 0 200 25');

	element.setAttribute('height', 25);

	var backdrop = document.getElementById("backdrop");
	
	backdrop.setAttribute('y', 495);

	document.removeEventListener("mousemove", mousemove, true);
	document.removeEventListener("mouseup", mouseup, true);
}
	
function mousemove(evt)
{
	evt.preventDefault();

	if(mousemoveCallback != undefined) {
		mousemoveCallback();
	}
}

function setText(text)
{
	document.getElementById("active_text").textContent = text;
	document.getElementById("press_text").textContent = text;
	document.getElementById("disabled_text").textContent = text;
}

function getText()
{
	return document.getElementById("active_text").textContent;
}

function disable()
{
	state = "disabled";

	element.viewBox.baseVal.y = 60;
}

function enable()
{
	state = "enabled";

	element.viewBox.baseVal.y = 0;
}
