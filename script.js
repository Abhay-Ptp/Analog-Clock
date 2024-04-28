let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function setDial(){
    let date= new Date()
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    // methods of rotation
    let hRotate=30*hh + 0.5*mm;
    let mRotate=6*mm;
    let sRotate=6*ss;

    //style
    hour.style.transform=`rotate(${hRotate}deg)`
    min.style.transform=`rotate(${mRotate}deg)`
    sec.style.transform=`rotate(${sRotate}deg)`
}

setInterval(setDial);