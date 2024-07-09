document.addEventListener('DOMContentLoaded', function() {
    async function checkAuth() {
        const response = await fetch('/api/tenantIsAuthenticated');
        const data = await response.json();

        if (!data.isAuthenticated) {
        window.location.href = '../Llogin.html';
        } else {
        document.getElementById('username').textContent = data.tenant.username;
        document.getElementById('panelUsername').textContent = data.tenant.username;
        document.getElementById('panelEmail').textContent = data.tenant.email;
        }
    }

    document.getElementById('OutBtnContainer').addEventListener('click', async function() {
        const response = await fetch('/api/tenantLogout', { method: 'POST' });

        if (response.ok) {
        window.location.href = '../Home.html';
        } else {
        alert('Logout failed');
        }
    });

    checkAuth();
});







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
    window.location.href = "../Helpdesk.html";
});
}

var textButton = document.getElementById("textButton");
if (textButton) {
textButton.addEventListener("click", function (e) {
    window.location.href = "../Home.html";
});
}

var textButton2 = document.getElementById("textButton2");
if (textButton2) {
textButton2.addEventListener("click", function (e) {
    window.location.href = "../About.html"; 
});
}

var textButton3 = document.getElementById("textButton3");
if (textButton3) {
textButton3.addEventListener("click", function (e) {
    window.location.href = "../Security.html";
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
    window.location.href = "../Home.html";
});
}
var pay = document.getElementById("pay");
if (pay) {
    pay.addEventListener("click", function (e) {
    window.location.href = "Payment.html";
});
}



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

    // Get today's date
    const today = new Date();

    // Array of day names in order
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Array of elements to update in descending order
    const dateElements = [
        { dateClass: '.june', dayClass: '.sunday' },
        { dateClass: '.june1', dayClass: '.monday' },
        { dateClass: '.june2', dayClass: '.tuesday' },
        { dateClass: '.june3', dayClass: '.wednesday' },
        { dateClass: '.june4', dayClass: '.thursday' },
        { dateClass: '.june5', dayClass: '.friday' },
        { dateClass: '.june6', dayClass: '.saturday' },
        { dateClass: '.june7', dayClass: '.sunday1' },
        { dateClass: '.june8', dayClass: '.monday1' },
        { dateClass: '.june9', dayClass: '.tuesday1' },
        { dateClass: '.june10', dayClass: '.wednesday1' },
        { dateClass: '.june11', dayClass: '.thursday1' },
        { dateClass: '.june12', dayClass: '.friday1' },
        { dateClass: '.june13', dayClass: '.saturday1' }
    ];

    dateElements.forEach((element, index) => {
        let dateElement = document.querySelector(element.dateClass);
        let dayElement = document.querySelector(element.dayClass);

        if (dateElement && dayElement) {
            // Calculate the date for each element (decreasing)
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() - index);

            // Extract day and date parts
            let dayName = daysOfWeek[currentDate.getDay()];
            let dayDate = currentDate.getDate();
            let monthName = currentDate.toLocaleString('default', { month: 'long' });

            // Update the element with the new date
            dateElement.innerText = `${dayDate} ${monthName}`;
            // Update the corresponding day name element
            dayElement.innerText = dayName;
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






document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current date and time
    const now = new Date();
    const currentTime = formatTime(now);
    const currentDate = formatDate(now);

    // Retrieve last visit time and date from localStorage
    const lastVisitTime = localStorage.getItem('lastVisitTime') || "N/A";
    const lastVisitDate = localStorage.getItem('lastVisitDate') || "N/A";

    // Update div1 and div2 with the last visit time and date
    document.querySelector('.div1').textContent = lastVisitTime;
    document.querySelector('.div2').textContent = lastVisitDate;

    // Update the stored last visit time and date to the current time and date
    localStorage.setItem('lastVisitTime', currentTime);
    localStorage.setItem('lastVisitDate', currentDate);

    // Helper functions to format date and time
    function formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1; // Months are zero-based
        let y = date.getFullYear();
        return `${d < 10 ? '0' + d : d}/${m < 10 ? '0' + m : m}/${y}`;
    }

    function formatTime(date) {
        let h = date.getHours();
        let m = date.getMinutes();
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
    }
});




//get the kwh value from database and peroform calculations on it to display on the board 
document.addEventListener('DOMContentLoaded', function() {
    const kwhElement = document.querySelector('.kwh');
    const costElement = document.querySelector('.ghs-120');
    const username = localStorage.getItem('username'); // Assuming the username is stored in localStorage

    // Replace with your actual MongoDB connection and query
    fetch('/getUserData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
    })
    .then(response => response.json())
    .then(data => {
        const kwhValue = data.kwh; // Retrieve the kWh value from the database
        const costPerKwh = 0.86; // Current cost per kWh in Ghana Cedis
        const totalCost = (kwhValue * costPerKwh).toFixed(2); // Calculate the total cost

        kwhElement.textContent = `${kwhValue}KWH`;
        costElement.textContent = `Gh₵ ${totalCost}`;
    })
    .catch(error => console.error('Error:', error));
});




//////this is for just the cost of the kwh consumption in the page 
const tierRates = [
    { upperLimit: 50, rate: 0.00 },     // Tier 1 (Lifeline)
    { upperLimit: 150, rate: 0.2460 },  // Tier 2
    { upperLimit: 300, rate: 0.3409 },  // Tier 3
    { upperLimit: 600, rate: 0.4642 },  // Tier 4
    { upperLimit: 1000, rate: 0.5693 }, // Tier 5
    { upperLimit: Infinity, rate: 0.6758 } // Tier 6
];

function calculateCost(consumption) {
    let cost = 0;
    let remainingConsumption = consumption;

    for (const tier of tierRates) {
        if (remainingConsumption > 0) {
            const tierConsumption = Math.min(remainingConsumption, tier.upperLimit);
            cost += tierConsumption * tier.rate;
            remainingConsumption -= tierConsumption;
        } else {
            break;
        }
    }

    return `Gh₵ ${cost.toFixed(2)}`; // Format to two decimal places
}

document.addEventListener('DOMContentLoaded', function() {
    const kwhElements = document.querySelectorAll('.kwh');
    const costElements = document.querySelectorAll('.ghs-120');

    kwhElements.forEach((kwhElement, index) => {
        const kwhValue = parseFloat(kwhElement.textContent.replace('KWH', '').trim());
        const cost = calculateCost(kwhValue);
        costElements[index].textContent = cost;
    });
});





//// client side for pulling kwh values from the database         //// IMPORTANT 
/* const tierRates = [
    { upperLimit: 50, rate: 0.00 },     // Tier 1 (Lifeline)
    { upperLimit: 150, rate: 0.2460 },  // Tier 2
    { upperLimit: 300, rate: 0.3409 },  // Tier 3
    { upperLimit: 600, rate: 0.4642 },  // Tier 4
    { upperLimit: 1000, rate: 0.5693 }, // Tier 5
    { upperLimit: Infinity, rate: 0.6758 } // Tier 6
];

function calculateCost(consumption) {
    let cost = 0;
    let remainingConsumption = consumption;

    for (const tier of tierRates) {
        if (remainingConsumption > 0) {
            const tierConsumption = Math.min(remainingConsumption, tier.upperLimit);
            cost += tierConsumption * tier.rate;
            remainingConsumption -= tierConsumption;
        } else {
            break;
        }
    }

    return `Gh₵ ${cost.toFixed(2)}`; // Format to two decimal places
}

document.addEventListener('DOMContentLoaded', function() {
    const username = 'yourUsername'; // Replace with dynamic username
    fetch(`http://localhost:3000/get-kwh/${username}`)
        .then(response => response.json())
        .then(data => {
            const kwhValue = data.kwh;
            const cost = calculateCost(kwhValue);

            // Update elements with kwh class
            const kwhElements = document.querySelectorAll('.kwh');
            kwhElements.forEach(kwhElement => {
                kwhElement.textContent = `${kwhValue}KWH`;
            });

            // Update elements with ghs-120 class
            const costElements = document.querySelectorAll('.ghs-120');
            costElements.forEach(costElement => {
                costElement.textContent = cost;
            });

            // Update elements with kw class
            const kwElements = document.querySelectorAll('.kw');
            kwElements.forEach(kwElement => {
                kwElement.textContent = `${kwhValue}KW`;
            });
        })
        .catch(error => console.error('Error:', error));
});
 */