var state;
var element;

function init()
{
	state = "enabled";

	element = document.getElementById("canvas");
	element.addEventListener("mousedown", mousedown, false);
}

function mousedown(evt)
{
 	evt.preventDefault();

	mousedownCallback();

	if(state == "enabled") {
		element.viewBox.baseVal.y = 30;

		document.addEventListener("mousemove", mousemove, true);
		document.addEventListener("mouseup", mouseup, true);
	}
}

function mouseup(evt)
{
	evt.preventDefault();

	mouseupCallback();

	element.viewBox.baseVal.y = 0;

	document.removeEventListener("mousemove", mousemove, true);
	document.removeEventListener("mouseup", mouseup, true);
}
	
function mousemove(evt)
{
	evt.preventDefault();

	mousemoveCallback();
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

function mousedownCallback() {}

function mouseupCallback() {}

function mousemoveCallback() {}
