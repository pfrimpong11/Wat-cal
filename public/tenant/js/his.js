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

const data = {};
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const kwhValues = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 150, 120, 100];
const lastReadingValues = [950, 850, 750, 650, 550, 450, 350, 250, 150, 100, 90, 80];

for (let i = 0; i < 12; i++) {
    data[`${months[i]}-2024`] = {
        readingValue: `${kwhValues[i]}KW`,
        cost: calculateCost(kwhValues[i]), // Calculate cost based on kWh value
        lastReadingValue: `${lastReadingValues[i]}KW`
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const monthButtons = document.querySelectorAll('.rectangle-parent > div');

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

    // Update div and empty-units with the current time and date
    document.querySelector('.div').textContent = currentTime;
    document.querySelector('.empty-units').textContent = currentDate;

    // Update the stored last visit time and date to the current time and date
    localStorage.setItem('lastVisitTime', currentTime);
    localStorage.setItem('lastVisitDate', currentDate);

    // Function to set the active button
    function setActiveButton(button) {
        monthButtons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');
    }

    // Add click event listeners to month buttons
    monthButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setActiveButton(this);
            const month = this.dataset.month; // Assuming buttons have data-month attribute
            updateData(month);
        });
    });

    // Activate the January button by default
    const janBtn = document.querySelector('.janbtn');
    if (janBtn) {
        setActiveButton(janBtn);
        updateData('january-2024');
    }
});

// Function to update the DOM with the selected month's data
function updateData(month) {
    const now = new Date();
    const currentTime = formatTime(now);
    const currentDate = formatDate(now);

    document.querySelector('.kwh').textContent = data[month].readingValue; // Update kwh with readingValue
    document.querySelector('.ghs-120').textContent = data[month].cost;
    document.querySelector('.kw').textContent = data[month].readingValue;
    document.querySelector('.kw1').textContent = data[month].lastReadingValue; // Update kw1 with lastReadingValue
    document.querySelector('.div').textContent = currentTime; // Update div with current time
    document.querySelector('.empty-units').textContent = currentDate; // Update empty-units with current date
}

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
document.querySelector('.novbtn').addEventListener('click', () => updateData('november-2024'));
document.querySelector('.decbtn').addEventListener('click', () => updateData('december-2024'));





//// for taking values from the database 
/* 
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
document.querySelector('.novbtn').addEventListener('click', () => updateData('november-2024'));
document.querySelector('.decbtn').addEventListener('click', () => updateData('december-2024'));

    async function fetchData(monthYear) {
        try {
            const response = await fetch(`/api/rooms/${roomName}/${monthYear}`);
            const data = await response.json();

            // Assuming data structure matches fetched format
            const {
                reading_value,
                last_reading_value,
                last_reading_date,
                execution_recommendation,
                pattern,
                total_electricity_consumption,
                chart_data,
                percentage_consumption,
                cost
            } = data;

            // Set current time and date dynamically
            const currentDate = new Date();
            const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const currentDateString = currentDate.toLocaleDateString();

            // Update DOM elements with fetched and current data
            const readingTimeElement = document.querySelector('.div');
            const lastReadingTimeElement = document.querySelector('.div1');
            const lastReadingDateElement = document.querySelector('.div2');
            const percentageElement = document.querySelector('.kwh');
            const costElement = document.querySelector('.ghs-120');

            // Update individual elements
            readingTimeElement.textContent = currentTime;
            lastReadingTimeElement.textContent = currentTime;
            lastReadingDateElement.textContent = currentDateString;
            percentageElement.textContent = percentage_consumption;
            costElement.textContent = `Gh₵ ${cost}`;

            // Update chart data (if applicable)
            const chartDataElement = document.querySelector('.chart-data');
            chartDataElement.innerHTML = ''; // Clear existing chart data
            if (chart_data && Array.isArray(chart_data)) {
                chart_data.forEach(item => {
                    // Example: Assuming chart_data is an array of objects with values to update
                    const chartItem = document.createElement('div');
                    chartItem.textContent = item.value; // Adjust based on your data structure
                    chartDataElement.appendChild(chartItem);
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
});
*/





