let hour=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date");



const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];



function setDial(){
    let time= new Date()
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();

    let month = time.getMonth();
    let day = time.getDay();
    let date = time.getDate();

    // methods of location----------------------
    let hRotate=30*hh + 0.5*mm;
    let mRotate=6*mm;
    let sRotate=6*ss;

    // style-----------------------------------
    hour.style.transform=`rotate(${hRotate}deg)`;
    min.style.transform=`rotate(${mRotate}deg)`;
    sec.style.transform=`rotate(${sRotate}deg)`;

    // AM - PM format
    ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;  

    // -----------------------------------------
    timeEl.innerHTML = `${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm}  ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`;

    var times = setTimeout(function(){ startTime() }, 500);
}

setDial();

setInterval(setDial, 1000);
