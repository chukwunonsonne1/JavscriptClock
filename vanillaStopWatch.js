const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes")
var secondsTimer = 0
var minutesTimer = 0;
var isPaused = true;

setInterval( () => {
		if(isPaused === false){
		secondsTimer++;
		if(secondsTimer < 60){ 
		if(secondsTimer < 10){
			seconds.innerHTML = "0" + secondsTimer;
		}else{
			seconds.innerHTML = secondsTimer;
		}
		}else{
			secondsTimer = 0;
			seconds.innerHTML = "00";
			minutesTimer++
			if(minutesTimer < 10){
				minutes.innerHTML ="0" + minutesTimer;
			}
			else{
				minutes.innerHTML = minutesTimer;
			}
		}
		 }
	},1000)

start.addEventListener("click", () => {
	isPaused = false;
	
});
stop.addEventListener("click", () => {
	  isPaused = true;
});
reset.addEventListener("click", () => {
	  isPaused = true;
	  minutes.innerHTML = "00";
	  seconds.innerHTML = "00";
	  secondsTimer = 0;
	  minutesTimer = 0;
});
