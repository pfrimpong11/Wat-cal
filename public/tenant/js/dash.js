
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay' + popupId.replace('popup', ''));
    const content = document.querySelector('.content');

    overlay.style.display = 'flex';
    popup.style.display = 'block';
    content.classList.add('blur-background');
    document.body.classList.add('disable-scroll');
    document.body.classList.add('popup-open');

    overlay.onclick = function() {
        hidePopup(popupId);
    };
}

function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay' + popupId.replace('popup', ''));
    const content = document.querySelector('.content');

    overlay.style.display = 'none';
    popup.style.display = 'none';
    content.classList.remove('blur-background');
    document.body.classList.remove('disable-scroll');
    document.body.classList.remove('popup-open');
}

var textButton1 = document.getElementById("textButton1");
if (textButton1) {
textButton1.addEventListener("click", function (e) {
    window.location.href = "../other/Helpdesk.html";
});
}

var textButton = document.getElementById("textButton");
if (textButton) {
textButton.addEventListener("click", function (e) {
    window.location.href = "../other/Home.html";
});
}

var textButton2 = document.getElementById("textButton2");
if (textButton2) {
textButton2.addEventListener("click", function (e) {
    window.location.href = "../other/About.html"; 
});
}

var textButton3 = document.getElementById("textButton3");
if (textButton3) {
textButton3.addEventListener("click", function (e) {
    window.location.href = "../other/Security.html";
});
}

var genre = document.getElementById("genre");
if (genre) {
genre.addEventListener("click", function (e) {
  window.location.href = "EditProfile.html";
});
}

var boardbtnContainer = document.getElementById("boardbtnContainer");
if (boardbtnContainer) {
boardbtnContainer.addEventListener("click", function (e) {
    window.location.href = "Dashboard.html";
});
}

var setbtnContainer = document.getElementById("setbtnContainer");
if (setbtnContainer) {
setbtnContainer.addEventListener("click", function (e) {
    window.location.href = "Settings.html";
});
}

var hisbtnContainer = document.getElementById("hisbtnContainer");
if (hisbtnContainer) {
hisbtnContainer.addEventListener("click", function (e) {
    window.location.href = "History.html";
});
}

var OutBtnContainer = document.getElementById("OutBtnContainer");
if (OutBtnContainer) {
OutBtnContainer.addEventListener("click", function (e) {
    window.location.href = "../other/Home.html";
});
}

document.addEventListener('DOMContentLoaded', function() {
// Set current date for .unit-placeholder
const dateElement = document.querySelector('.unit-placeholder');
// Set current time for .div
const timeElements = document.querySelectorAll('.div');

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
const formattedTime = formatTime(currentDate);

if (dateElement) {
    dateElement.textContent = formattedDate;
}

timeElements.forEach(element => {
    if (element) {
        element.textContent = formattedTime;
    }
});
});

function formatDate(date) {
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear();
return `${day}/${month}/${year}`;
}

function formatTime(date) {
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');
return `${hours}:${minutes}`;
}
