var pos;
var element;

function init()
{
	element = document.getElementById("slider");

	element.addEventListener("mousedown", leftmousedown, false);
}

function leftmousedown(evt)
{
	evt.preventDefault();
	
	pos = element.y2.baseVal.value - evt.clientY;
	
	document.addEventListener("mousemove", leftmousemove, true);
	document.addEventListener("mouseup", leftmouseup, true);
}

function leftmouseup(evt)
{
	evt.preventDefault();

	document.removeEventListener("mousemove", leftmousemove, true);
	document.removeEventListener("mouseup", leftmouseup, true);
}
	
function leftmousemove(evt)
{
	evt.preventDefault();

	var val = evt.clientY + pos;
	
	changeVal(-val);
}

function changeVal(value)
{
	value = -value;
	
	var sr = element.ownerSVGElement.suspendRedraw(1000);

	var maxY = document.getElementById('slider_s').y2.baseVal.value;
	var minY = document.getElementById('slider_s').y1.baseVal.value - 1;

	if (value <= maxY) { 
		value = maxY; 
	} else if (value >= minY) { 
		value = minY; 
	}

	element.y2.baseVal.value = value;
	
	element.ownerSVGElement.unsuspendRedraw(sr);
}
