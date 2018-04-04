


//only if this is true you gotta work
var switchvar = 0;

function printMousePos(event) {
    alert("clientX: " + event.clientX + " - clientY: " + event.clientY);
switchvar  = 1;
	if(event.clientX != 0){
    click(384, 19);}
}

//make switchvar 0 by shortcut



function click(x,y){
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

document.addEventListener("click", printMousePos);