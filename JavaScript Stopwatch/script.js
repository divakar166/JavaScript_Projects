window.onload = function(){
    var hour = 00;
    var min = 00;
    var sec = 00;
    var mill = 00;
    var appendHour = document.getElementById('hour');
    var appendMin = document.getElementById('min');
    var appendSec = document.getElementById('sec');
    var appendMill = document.getElementById('mill');
    var buttonStart = document.getElementById('startTimer');
    var buttonStop = document.getElementById('stopTimer');
    var buttonReset = document.getElementById('resetTimer');
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startStopWatch,10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval)
    }
    buttonReset.onclick = function(){
        clearInterval(Interval)
        let [mill,sec,min,hour] = ["00","00","00","00"]
        appendMill.innerHTML = mill;
        appendSec.innerHTML = sec;
        appendMin.innerHTML = min;
        appendHour.innerHTML = hour;
    }

    function startStopWatch(){
        mill++;
        if(mill<9){
            appendMill.innerHTML = "0"+mill;
        }
        if(mill>9){
            appendMill.innerHTML = mill;
        }
        if(mill>99){
            sec++;
            appendSec.innerHTML = "0"+sec;
            mill = 0;
            appendMill.innerHTML = '0'+mill;
        }
        if(sec>9){
            appendSec.innerHTML = sec;
        }
        if(sec>59){
            min++;
            appendMin.innerHTML = "0"+min;
            sec = 0;
            appendSec.innerHTML = '0'+sec;
        }
        if(min>9){
            appendMin.innerHTML = min;
        }
        if(min>59){
            hour++;
            appendHour.innerHTML = "0"+hour;
            min=0;
            appendMin.innerHTML = '0'+min;
        }
    }
}