// selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

// shift+alt+downarrow to duplicate code

// event listner

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// function
function showTime() {
    let today = new Date();
    // console.log(today);

    let hour = today.getHours(); // 8
    // console.log(hour)

    let min = today.getMinutes(); // 32
    let sec = today.getSeconds(); // 22
    let todaydate = today.toDateString(); // fri nov 6 2020 

    // AM & PM Format

    const ampm = hour > 12 ? 'PM' : 'AM';

    // convert to 12 hrs format 
    hour = hour % 12 || 12; // hour = 12 % 12 = 0

    // output time  no concatinatio with tilt bracket

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>  </span>${ampm}`;

    date.innerHTML = `${todaydate}`;

    setTimeout(showTime, 1000);


}

// for zero adding hh:mm:ss
function addZero(number) {
    return ((parseInt(number) < 10 ? '0' : '') + number) // optional parseInt(num,10)
}

function setGreeting() {
    let today = new Date(); //2020, 12, 12, 15, 12, 12, 15
    let hour = today.getHours(); // 8

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("morning.jpg")';
        greeting.innerHTML = 'Good Morning';
        document.body.style.color = "white";
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url("afternoon.jpg")';
        greeting.innerHTML = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = 'url("evening.jpg")';
        greeting.innerHTML = 'Good Evening';
        document.body.style.color = "white";
    }

}


// it takes data from local storage 

function getName() {
    if (localStorage.getItem('myName') === null) {
        name.innerHTML = "[Enter Name]";
    } else {
        name.innerHTML = localStorage.getItem('myName');
    }
}

// Function to store data in Local Storage

function setName(e) {
    if (e.type === "keypress") {
        console.log(e.type)
        if (e.keyCode == 13) {
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myName', e.target.innerHTML);
    }
}



// function calling

showTime();
setGreeting();
getName();