var pos;
var gutter;
var gutterRect;
var handle;
var handleRect;

function init()
{
	gutter = document.getElementById("slider_gutter");
	gutterRect = gutter.getBoundingClientRect();

	handle = document.getElementById("slider_handle");
	handleRect = handle.getBoundingClientRect();

	handle.addEventListener("mousedown", mousedown, false);
}

function mousedown(evt)
{
	evt.preventDefault();
	
	pos = handle.y.baseVal.value - evt.clientY;
	
	document.addEventListener("mousemove", mousemove, true);
	document.addEventListener("mouseup", mouseup, true);
}

function mouseup(evt)
{
	evt.preventDefault();

	document.removeEventListener("mousemove", mousemove, true);
	document.removeEventListener("mouseup", mouseup, true);
}
	
function mousemove(evt)
{
	evt.preventDefault();

	var val = evt.clientY + pos;
	
	changeVal(val);
}

function changeVal(value)
{
	var sr = handle.ownerSVGElement.suspendRedraw(1000);

	var maxY = gutterRect.height - handleRect.height; 
	var minY = 0.5;

	if(value > maxY) { 
		value = maxY; 
	} else if (value < minY) { 
		value = minY; 
	}

	handle.y.baseVal.value = value;	

	//console.log(Math.ceil(((value - 0.5) / maxY) * 100));

	handle.ownerSVGElement.unsuspendRedraw(sr);
}
