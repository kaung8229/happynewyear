// for countdown

var countdowncontainer = document.querySelector('.countdown');
var getminute = document.querySelector('.minute');
var getsecond = document.querySelector('.second');

const gettime = new Date('1/1/2023 21:25:00').getTime();

var setinter;

if(gettime < new Date().getTime()){
    addactive();
    countdowncontainer.style.display = 'none';
}else{
    countdowntime();
    setinter = setInterval(countdowntime,1000);
}

function countdowntime(){
    var timenow = new Date().getTime();
    var lefttime = gettime - timenow;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    var m = Math.floor((lefttime % hour) / minute);
    m = m < 10 ? '0'+m : m;
    var s = Math.floor((lefttime % minute) / second);
    s = s < 10 ? '0'+s : s;

    // console.log(h);
    // console.log(m);
    // console.log(s);

    getminute.innerText = m;
    getsecond.innerText = s;

    if(m <= 0){
        var ons = document.createElement('h1');
        ons.className = 'onlyss';
        ons.innerHTML = s;
        countdowncontainer.innerHTML = '';
        countdowncontainer.appendChild(ons);

        countdowncontainer.classList.add('active');

        if(s <= 0){
            clearInterval(setinter);

            countdowncontainer.style.opacity = 0;

            addactive();

        }
    }
}



// for add active

function addactive(){

    var snowcontainer = document.querySelector('.snow-container');
    var textbox = document.querySelector('.textbox');
    var starchain = document.querySelector('.starchain');
    var bgbottom = document.querySelector('.bgbottom');

    var chains = document.querySelectorAll('.chain');
    var bulbs = document.querySelectorAll('.bulbs');
    var fireworks = document.querySelectorAll('.firework');
    var balloons = document.querySelectorAll('.balloon');
    var celebrates = document.querySelectorAll('.celebrate');
    var fires = document.querySelectorAll('.fire');


    snowcontainer.classList.add('active');
    textbox.classList.add('active');
    starchain.classList.add('active');
    bgbottom.classList.add('active');

    chains.forEach(chain=>{ chain.classList.add('active'); })
    bulbs.forEach(bulb=>{ bulb.classList.add('active'); })
    fireworks.forEach(firework=>{ firework.classList.add('active'); })
    balloons.forEach(balloon=>{ balloon.classList.add('active'); })
    celebrates.forEach(celebrate=>{ celebrate.classList.add('active'); })
    fires.forEach(fire=>{ fire.classList.add('active'); })

}



// for snow container ani
const snowcontainer = document.querySelector('.snow-container');
const count = 80;

for(var i=0; i<count; i++){

    const snows = document.createElement('img');
    snows.src = './section1/snowstars.png';
    snows.className = 'snow';

    // console.log(snowcontainer.clientHeight);
    let x = Math.floor(Math.random() * snowcontainer.clientWidth);

    let snowsize = (Math.random() * 20)+1;

    snows.style = '--i:' + i;
    snows.style.width = snowsize + 'px';
    snows.style.left = x + 'px';

    // console.log(snows);

    snowcontainer.appendChild(snows);
}



