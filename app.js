window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#bruh').addEventListener('click', function () {
        new Audio('sounds/bruh.mp3').play();
    });
    document.querySelector('#ok').addEventListener('click', function () {
        new Audio('sounds/ok.mp3').play();
    });
    document.querySelector('#alarm').addEventListener('click', function () {
        new Audio('sounds/alarm.mp3').play();
    });
    document.querySelector('#bullshit').addEventListener('click', function () {
        new Audio('sounds/bullshit.mp3').play();
    });
    document.querySelector('#gogole').addEventListener('click', function () {
        new Audio('sounds/gogole.mp3').play();
    });
    document.addEventListener('keydown', function (e) {
        switch (e.code) {
            case "Digit1":
                new Audio('sounds/bruh.mp3').play();
                break;
            case "Digit2":
                new Audio('sounds/ok.mp3').play();
                break;
            case "Digit3":
                new Audio('sounds/alarm.mp3').play();
                break;
            case "Digit4":
                new Audio('sounds/bullshit.mp3').play();
                break;
            case "Digit5":
                new Audio('sounds/gogole.mp3').play();
                break;
        }
    });
});