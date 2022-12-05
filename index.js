var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var phraseChinese1 = document.getElementById("phraseChinese1");
var phraseChinese2 = document.getElementById("phraseChinese2");
var phraseChinese3 = document.getElementById("phraseChinese3");
var phraseChinese4 = document.getElementById("phraseChinese4");

var phraseEnglish = document.getElementById("phraseEnglish");
var phraseVietnamese = document.getElementById("phraseVietnamese")

var button = document.getElementById("button");
var random = Math.random();

// Arrays for pinyin and Chinese characters
var p1 = [
	"新 ",
	"恭",
	"大",
	"萬",
	"年",
	"身",
	"心",
	"恭"
];

var p2 = [
	"年",
	"喜",
	"吉",
	"事",
	"年",
	"體",
	"想",
	"賀"
];

var p3 = [
	"快",
	"發",
	"大",
	"如",
	"有",
	"健",
	"事",
	"新"
];

var p4 = [
	"樂",
	"財",
	"利",
	"意",
	"餘",
	"康",
	"成",
	"禧"
];

var phrasesC1 = [
	"CHÚC",
	"CUNG",
	"ĐẠI",
	"VẠN",
	"QUANH",
	"SỨC",
	"CẦU",
	"CUNG"
];

var phrasesC2 = [
	"MỪNG",
	"HỈ",
	"CÁT",
	"SỰ",
	"NĂM",
	"KHỎE",
	"ĐƯỢC",
	"CHÚC"
];

var phrasesC3 = [
	"NĂM",
	"PHÁT",
	"ĐẠI",
	"NHƯ",
	"DƯ",
	"DỒI",
	"ƯỚC",
	"TÂN"
];

var phrasesC4 = [
	"MỚI",
	"TÀI",
	"LỢI",
	"Ý",
	"DẢ",
	"DÀO",
	"THẤY",
	"XUÂN"
];

// English phrases
// Translations taken from here: http://www.travelsintranslation.com/2014/01/cantonese-chinese-new-year-phrases/
var phrasesE = [
	"(Happy new year)",
	"(Congratulations on your prosperity)",
	"(Great luck and prosperity)",
	"(May 10,000 things go according to your wishes)",
	"(Every year have more than you need)",
	"(Wishing you good health)",
	"(May all your heart's desires come true)",
	"(Congratulations in the new year)"
];
var phrasesV = [
    "新年おめでとうございます｡",
    "財源が広がりますように",
    "大吉大利｡",
    "すべてのことがじゅんちょうにすすみますように｡",
    "毎年余裕がある｡",
    "ごけんこうを｡",
    "絶対に何も｡",
    "きょうがしんねん｡"
]

// Sets text content as random phrase from arrays
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
phraseVietnamese.textContent = phrasesV[Math.floor(random * phrasesV.length)];

var onClick = function() {
	var random = Math.random();

	pinyin1.textContent = p1[Math.floor(random * p1.length)];
	pinyin2.textContent = p2[Math.floor(random * p2.length)];
	pinyin3.textContent = p3[Math.floor(random * p3.length)];
	pinyin4.textContent = p4[Math.floor(random * p4.length)];
	phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
	phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
	phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
	phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
	phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
    phraseVietnamese.textContent = phrasesV[Math.floor(random * phrasesV.length)];
}

// Sets text content as random phrase when button is clicked
button.addEventListener("click", onClick);


var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
    isRunning: null,	//call and returns true or false depending on whether the animation is running
    snow: false         // snow = false     - padaju konfete, 
                        // snow = true      - pada sneg
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
    var snowColors = ["rgba(255,255,255,", "rgba(243,243,243,", "rgba(209,230,242", "rgba(213,240,255,"]
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
        particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
        particle.colorSnow = snowColors[(Math.random() * snowColors.length) | 0] + (confetti.alpha + ")");

		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:9;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
                // gradient, makes gradient stops from the given array of colors 
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
                gradient.addColorStop("1.0", particle.color2);
                
				context.strokeStyle = gradient;
			} else {
                // No gradient, uses the array of colors for confetti
                if(confetti.snow == false){
                    // confetti
                    context.strokeStyle = particle.color;
                } else {
                    // snow
                    context.strokeStyle = particle.colorSnow;
                }

            }
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();



// 						Main functions
// -----------------------------------------------------------------
//

// Starts the "snow"
confetti.snow = true;
confetti.start();

var overlay_div_no = 1;
let gradient_change_timer = setInterval(changeGradient, 20000);
function changeGradient(){
	var formed_gradient;
	function generateGradient(){
		let gradient = "";
		gradient = "rgba("  
		let alpha = 0.3;
		for(let i = 0; i < 3; i++){
			// 0 - 255
			let rgb = Math.floor((Math.random()*10000) % 256 - 1);
			gradient += rgb + ",";
		}
		gradient += alpha + ")";
		return gradient;
	}
	// 0 - 360 deg
	let ugao = Math.floor(((Math.random() * 10000) % 361 - 1)) + "deg";
	formed_gradient = "linear-gradient(" + ugao + "," + generateGradient() + "," + generateGradient() + ")";

	if(overlay_div_no == 1){
		document.getElementById("overlay" + 1).style.backgroundImage = formed_gradient;
		document.getElementById("overlay" + 2).style.opacity = 0;
		document.getElementById("overlay" + 1).style.opacity = 1;
		overlay_div_no = 2;
	} else if (overlay_div_no == 3){
		document.getElementById("overlay" + 2).style.backgroundImage = formed_gradient;
		document.getElementById("overlay" + 1).style.opacity = 0;
		document.getElementById("overlay" + 2).style.opacity = 1;
		overlay_div_no = 1;
	} else {
		overlay_div_no = 3;
	}
}

const timer_div = document.getElementById("timer");
const new_years_eve = new Date(2023, 1, 1, 0, 0, 0, 0).getTime();

function timeUntilNewYears(){
    let current_time = new Date().getTime();
    let until_new_years = new_years_eve - current_time; // in ms

	// We got to new years!
    if(until_new_years <= 0){
		document.getElementById("timer").style.fontSize = "15em";
		// Changes confetti to the ones with color
        confetti.stop();
        confetti.snow = false;
        confetti.start(60000, 500, 1000);
        timer_div.innerHTML = "HAPPY NEW YEAR!"
        clearInterval(timer_interval);
        return;
    }

    // Calculating days, hours, minutes, seconds
    let days = Math.floor(until_new_years / (1000 * 60 * 60 * 24));
    let hours = Math.floor((until_new_years % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((until_new_years % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((until_new_years % (1000 * 60)) / 1000);
    
	// Writting a paragraph
	let t_d = "d ";
	let t_h = "h ";
	let t_m = "m ";
	let t_s = "s ";
 	if(days > 0){
		// d h m s
		timer_div.innerHTML = days + t_d + hours + t_h + minutes + t_m + seconds + t_s;
	} else if (days == 0 && hours > 0){
		// h m s
		timer_div.innerHTML = hours + t_h + minutes + t_m + seconds + t_s;
		document.getElementById("timer").style.fontSize = "13em";
	} else if (days == 0 && hours == 0 && minutes > 0){
		// m s
		timer_div.innerHTML = minutes + t_m + seconds + t_s;
		document.getElementById("timer").style.fontSize = "20em";
	} else {
		timer_div.innerHTML = seconds;
		document.getElementById("timer").style.fontSize = "50em";

	}

}
// Setting the interval and calling a function once on page load to minimize delay of displaying time
const timer_interval = setInterval(timeUntilNewYears, 1000);
timeUntilNewYears();