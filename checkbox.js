var checked;
var element;

function init()
{
	state = STATE_ENABLED;
	checked = false;

	element = document.getElementById("canvas");
	element.addEventListener("mouseup", mouseup, false);
}

function mousedown(evt)
{
 	evt.preventDefault();

	mousedownCallback();
}

function mouseup(evt)
{
	evt.preventDefault();

	mouseupCallback();

	if(state == STATE_ENABLED) {

		if(checked == false) {
			checked = true;
			element.viewBox.baseVal.y = 15;
		} else {
			checked = false;
			element.viewBox.baseVal.y = 0;
		}
	}	
	
	document.removeEventListener("mouseup", mouseup, true);
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
	state = STATE_DISABLED;

	element.viewBox.baseVal.x = 15;
	
	if(checked == true) {
		element.viewBox.baseVal.y = 15;
	} else {
		element.viewBox.baseVal.y = 0;
	}
}

function enable()
{
	state = STATE_ENABLED;

	element.viewBox.baseVal.x = 0;

	if(checked == true) {
		element.viewBox.baseVal.y = 15;
	} else {
		element.viewBox.baseVal.y = 0;
	}
}

function isChecked()
{
	return checked;
}
