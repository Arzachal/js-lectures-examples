function elsWithLongTexts() {
    var notEmptyEls = document.body.querySelectorAll("*:not(*:empty)");
    var longTexts = []; 
    for(var i=0;i<notEmptyEls.length; i++){
        if(notEmptyEls[i].innerHTML.indexOf("<") === -1 && 
            notEmptyEls[i].innerText.length >0 &&
            notEmptyEls[i].offsetWidth < notEmptyEls[i].scrollWidth){
                longTexts.push(notEmptyEls[i]);
        }
    }
    return longTexts;
}
function tooltipInit() {
    var tooltipEl = document.createElement("div");
    tooltipEl.id = "tooltip";
    tooltipEl.className = "hidden";
    document.body.appendChild(tooltipEl);
    var longTextEls = elsWithLongTexts();
    for(var i=0; i<longTextEls.length; i++){
        longTextEls[i].addEventListener("mouseenter", hoverStart, { passive: true });
    }
}
function hoverStart(e) {
    clearTimeout(window.hiddenTimeout);
    var text = e.target.innerText;
    var tooltipEl = document.querySelector("div#tooltip");
    tooltipEl.innerText = text;
    tooltipEl.className = "";
    tooltipEl.style.opacity = "1";
    var tooltipElWidth = tooltipEl.clientWidth;
    var tooltipElHeight = tooltipEl.clientHeight;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    if(screenWidth - e.clientX < tooltipElWidth){
        tooltipEl.style.right = (screenWidth - e.clientX + 10) + "px";;
    }else {
        tooltipEl.style.left = (e.clientX + 10) + "px";
    }
    if(screenHeight - e.clientY > tooltipElHeight){
        tooltipEl.style.top = (e.clientY > 10 ? e.clientY - 10 : 3) + "px";
    }else {
        tooltipEl.style.bottom = (screenHeight - e.clientY - 10) + "px";
    }
    e.target.addEventListener("mouseleave", hoverEnd, { passive: true });
}
function hoverEnd(e) {
    var tooltipEl = document.querySelector("div#tooltip");
    tooltipEl.style.opacity = "0";
    window.hiddenTimeout = setTimeout(function(){
        tooltipEl.className = "hidden";
        tooltipEl.innerText = "";
    }, 500);
}
window.onload = function() {
    tooltipInit();
}