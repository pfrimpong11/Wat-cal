function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay' + popupId.replace('popup', ''));
    const content = document.querySelector('.content');

    overlay.style.display = 'flex';
    popup.style.display = 'block';
    content.classList.add('content-blur-background');
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
    content.classList.remove('contentcontent-blur-background');
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

// Mock data for each month
const data = {
    "january-2024": {
        percentageConsumption: "2300KWH",
        readingValue: "23000KW",
        readingTime: "16:00",
        date: "25/01/2024",
        lastReadingTime: "16:00",
        lastReadingDate: "24/01/2024"
    },
    "february-2024": {
        percentageConsumption: "2200KWH",
        readingValue: "22000KW",
        readingTime: "15:00",
        date: "26/02/2024",
        lastReadingTime: "15:00",
        lastReadingDate: "25/02/2024"
    },
    "march-2024": {
        percentageConsumption: "2100KWH",
        readingValue: "21000KW",
        readingTime: "14:00",
        date: "27/03/2024",
        lastReadingTime: "14:00",
        lastReadingDate: "26/03/2024"
    },
    "april-2024": {
        percentageConsumption: "2000KWH",
        readingValue: "20000KW",
        readingTime: "13:00",
        date: "28/04/2024",
        lastReadingTime: "13:00",
        lastReadingDate: "27/04/2024"
    },
    "may-2024": {
        percentageConsumption: "1900KWH",
        readingValue: "19000KW",
        readingTime: "12:00",
        date: "29/05/2024",
        lastReadingTime: "12:00",
        lastReadingDate: "28/05/2024"
    },
    "june-2024": {
        percentageConsumption: "1800KWH",
        readingValue: "18000KW",
        readingTime: "11:00",
        date: "30/06/2024",
        lastReadingTime: "11:00",
        lastReadingDate: "29/06/2024"
    },
    "july-2024": {
        percentageConsumption: "1700KWH",
        readingValue: "17000KW",
        readingTime: "10:00",
        date: "31/07/2024",
        lastReadingTime: "10:00",
        lastReadingDate: "30/07/2024"
    },
    "august-2024": {
        percentageConsumption: "1600KWH",
        readingValue: "16000KW",
        readingTime: "09:00",
        date: "01/08/2024",
        lastReadingTime: "09:00",
        lastReadingDate: "31/07/2024"
    },
    "september-2024": {
        percentageConsumption: "1500KWH",
        readingValue: "15000KW",
        readingTime: "08:00",
        date: "02/09/2024",
        lastReadingTime: "08:00",
        lastReadingDate: "01/09/2024"
    },
    "october-2024": {
        percentageConsumption: "1400KWH",
        readingValue: "14000KW",
        readingTime: "07:00",
        date: "03/10/2024",
        lastReadingTime: "07:00",
        lastReadingDate: "02/10/2024"
    },
    "november-2024": {
        percentageConsumption: "1300KWH",
        readingValue: "13000KW",
        readingTime: "06:00",
        date: "04/11/2024",
        lastReadingTime: "06:00",
        lastReadingDate: "03/11/2024"
    },
    "december-2024": {
        percentageConsumption: "1200KWH",
        readingValue: "12000KW",
        readingTime: "05:00",
        date: "05/12/2024",
        lastReadingTime: "05:00",
        lastReadingDate: "04/12/2024"
    }
};

 // JavaScript to handle button click and active state
 document.addEventListener('DOMContentLoaded', function() {
    const monthButtons = document.querySelectorAll('.rectangle-parent > div');
    
    function setActiveButton(button) {
        monthButtons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');
    }

    monthButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setActiveButton(this);
            // Add logic to update data based on the selected month
            // Call updateData function or update directly here
        });
    });
});

// Function to update the DOM with the selected month's data
function updateData(month) {
    document.querySelector('.kwh').textContent = data[month].percentageConsumption;
    document.querySelector('.kw').textContent = data[month].readingValue;
    document.querySelector('.div').textContent = data[month].readingTime;
    document.querySelector('.empty-units').textContent = data[month].date;
    document.querySelector('.div1').textContent = data[month].lastReadingTime;
    document.querySelector('.div2').textContent = data[month].lastReadingDate;
}

// Event listeners for month buttons
document.querySelector('.janbtn').addEventListener('click', () => updateData('january-2024'));
document.querySelector('.febbtn').addEventListener('click', () => updateData('february-2024'));
document.querySelector('.marbtn').addEventListener('click', () => updateData('march-2024'));
document.querySelector('.aprbtn').addEventListener('click', () => updateData('april-2024'));
document.querySelector('.maybtn').addEventListener('click', () => updateData('may-2024'));
document.querySelector('.junbtn').addEventListener('click', () => updateData('june-2024'));
document.querySelector('.julbtn').addEventListener('click', () => updateData('july-2024'));
document.querySelector('.augbtn').addEventListener('click', () => updateData('august-2024'));
document.querySelector('.sepbtn').addEventListener('click', () => updateData('september-2024'));
document.querySelector('.octbtn').addEventListener('click', () => updateData('october-2024'));
document.querySelector('.nvobtn').addEventListener('click', () => updateData('november-2024'));
document.querySelector('.decbtn').addEventListener('click', () => updateData('december-2024'));

document.addEventListener('DOMContentLoaded', function() {
    // Set current date for .empty-units
    const dateElement = document.querySelector('.empty-units');
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