function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() { startTime() }, 500);
}
startTime();

TweenMax.from("#time", 2, {opacity:0, scale:0});


var button = document.getElementById("reverse");
var body = document.getElementsByTagName("body");

	button.addEventListener("click", function backward() {
		body[0].style.backgroundImage = "url('images/SpaceBGRev.gif')"
    TweenMax.to("#time", 2, {rotation:180});
	   });

var button = document.getElementById("time");
var body = document.getElementsByTagName("body");

     	button.addEventListener("click", function forward() {
     		body[0].style.backgroundImage = "url('images/SpaceBG.gif')"
        TweenMax.to("#time", 2, {rotation:0});
     	   });
