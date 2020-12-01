//Selector

var btn1 = document.getElementById('btn-1');
var nextbtn2 = document.getElementById('next-btn-2');
var backbtn2 = document.getElementById('back-btn-2');
var nextbtn3 = document.getElementById('next-btn-3');
var backbtn3 = document.getElementById('back-btn-3');
var form1 = document.getElementById('form-1');
var form2 = document.getElementById('form-2');
var form3 = document.getElementById('form-3');
var progress = document.getElementById('progress');

btn1.onclick = () => {
    form1.style.left = '450px';
    form2.style.left = '0px';
    progress.style.width = '240px';
};

nextbtn2.onclick = () => {
    form2.style.left = '450px';
    form3.style.left = '0px';
    progress.style.width = '360px';
};

backbtn2.onclick = () => {
    form2.style.left = '450px';
    form1.style.left = '0px';
    progress.style.width = '120px';
};
backbtn3.onclick = () => {
    form2.style.left = '0px';
    form3.style.left = '450px';
    progress.style.width = '240px';
};