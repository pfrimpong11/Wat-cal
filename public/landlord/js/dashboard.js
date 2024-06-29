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

function toggleInfo(button) {
    // Find the closest container to the button that was clicked
    const container = button.closest('.containers');
    // Find the container-content div just beneath the container
    const contentDiv = container.querySelector('.container-content');

    // Toggle the display of the content div
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
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

var group = document.getElementById("group");
if (group) {
group.addEventListener("click", function (e) {
    window.location.href = "EditProfile.html";
});
}

var dbtnContainer = document.getElementById("dbtnContainer");
if (dbtnContainer) {
dbtnContainer.addEventListener("click", function (e) {
    window.location.href = "Dashboard.html";
});
}

var pienabtnContainer = document.getElementById("pienabtnContainer");
if (pienabtnContainer) {
pienabtnContainer.addEventListener("click", function (e) {
    window.location.href = "Analysis.html";
});
}

var mousebtnContainer = document.getElementById("mousebtnContainer");
if (mousebtnContainer) {
mousebtnContainer.addEventListener("click", function (e) {
    window.location.href = "Settings.html";
});
}

var trendbtnContainer = document.getElementById("trendbtnContainer");
if (trendbtnContainer) {
trendbtnContainer.addEventListener("click", function (e) {
    window.location.href = "History.html";
});
}

var openerBtnContainer = document.getElementById("openerBtnContainer");
if (openerBtnContainer) {
openerBtnContainer.addEventListener("click", function (e) {
    window.location.href = "../Home.html";
});
}

// JavaScript to set current date and time in the specified div
document.addEventListener('DOMContentLoaded', function() {
    const divElement = document.querySelector('.room-name1 > .div');
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    divElement.textContent = formattedDate;
    });

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    }

    document.addEventListener('DOMContentLoaded', function() {
    // Set current date and time for .empty-k-w and .div1
    const dateElement = document.querySelector('.empty-k-w');
    const timeElement = document.querySelector('.div1');
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);
    
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    
    if (timeElement) {
        timeElement.textContent = formattedTime;
    }
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
    // Get today's date
    let today = new Date();

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

  



//get the kwh value from database and peroform calculations on it to display on the board    !!!!!!!!!!!!!IMPORTANT
/* document.addEventListener('DOMContentLoaded', function() {
    const kwhElements = document.querySelectorAll('.kwh');
    const costElements = document.querySelectorAll('.ghs-120');
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
        const totalCost = calculateTieredCost(kwhValue); // Calculate the total cost based on tiered pricing

        kwhElements.forEach(kwhElement => {
            kwhElement.textContent = `${kwhValue}KWH`;
        });

        costElements.forEach(costElement => {
            costElement.textContent = `Ghs ${totalCost.toFixed(2)}`;
        });
    })
    .catch(error => console.error('Error:', error));
});

// Function to calculate cost based on tiered pricing
function calculateTieredCost(kwh) {
    const tiers = [
        { upperLimit: 50, rate: 0.00 },      // Tier 1 (Lifeline)
        { upperLimit: 150, rate: 0.2460 },   // Tier 2
        { upperLimit: 300, rate: 0.3409 },   // Tier 3
        { upperLimit: 600, rate: 0.4642 },   // Tier 4
        { upperLimit: 1000, rate: 0.5693 },  // Tier 5
        { upperLimit: Infinity, rate: 0.6758 } // Tier 6
    ];

    let cost = 0;
    let remainingKwh = kwh;

    for (let i = 0; i < tiers.length; i++) {
        if (remainingKwh <= 0) break;

        const tier = tiers[i];
        const kwhInTier = Math.min(remainingKwh, tier.upperLimit - (tiers[i-1]?.upperLimit || 0));
        cost += kwhInTier * tier.rate;
        remainingKwh -= kwhInTier;
    }

    return cost;
}

 */



 ////for just calculating the cost per the kwh consumption available in the code
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


document.addEventListener('DOMContentLoaded', function() {
    async function checkAuth() {
        const response = await fetch('/api/landlordIsAuthenticated');
        const data = await response.json();

        if (!data.isAuthenticated) {
        window.location.href = '../Llogin.html';
        } else {
        document.getElementById('username').textContent = data.landlord.username;
        document.getElementById('panelUsername').textContent = data.landlord.username;
        document.getElementById('panelEmail').textContent = data.landlord.email;
        }
    }

    document.getElementById('openerBtnContainer').addEventListener('click', async function() {
        const response = await fetch('/api/landlordLogout', { method: 'POST' });

        if (response.ok) {
        window.location.href = '../Home.html';
        } else {
        alert('Logout failed');
        }
    });

    checkAuth();
});
