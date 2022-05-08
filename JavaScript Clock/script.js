function clock(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let sec = date.getSeconds();
    let day = weekday[date.getDay()];
    let session = "AM";
    if(hh == 0){
        hh = 12;
    }
    if(hh>12){
        hh = hh -12;
        session = "PM";
    }
    hh = (hh<10) ? "0" + hh : hh;
    mm = (mm<10) ? "0" + mm : mm;
    sec = (sec<10) ? "0" + sec : sec;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hh;
    document.getElementById("min").innerHTML = mm;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("session").innerHTML = session;
    let t = setTimeout(function(){
        clock()
    },1000)

}

clock();