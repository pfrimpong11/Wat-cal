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
    const contentDiv = container.querySelector('.containers-inner');

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

 // Function to change the displayed month and update corresponding data
function changeMonth(button, month) {
    // Update the displayed month in the UI
    document.querySelector('.month').textContent = month;

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.month-navigation div');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Display the data container corresponding to the selected month
    const selectedContainer = document.getElementById(`${month.toLowerCase()}-2024`);
    if (selectedContainer) {
        selectedContainer.style.display = 'block';
    } else {
        console.error(`Data container for ${month} not found.`);
    }
}


/// Initialize the page with default month (June, 2024 in this case)
document.addEventListener('DOMContentLoaded', function() {
      changeMonth(document.querySelector('.janbtn'), 'January');
});







////Functions for Date, Time, and Cost Calculation
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

    return `GHS ${cost.toFixed(2)}`; // Format to two decimal places
}

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







  
 /// Mock data for each month
 const data = {
    "january-2024": {
        percentageConsumption: "23%",
        readingValue: 900,
        lastReadingValue: 850,
        cost: calculateCost(900)
    },
    "february-2024": {
        percentageConsumption: "22%",
        readingValue: 850,
        lastReadingValue: 800,
        cost: calculateCost(850)
    },
    "march-2024": {
        percentageConsumption: "21%",
        readingValue: 800,
        lastReadingValue: 750,
        cost: calculateCost(800)
    },
    "april-2024": {
        percentageConsumption: "20%",
        readingValue: 750,
        lastReadingValue: 700,
        cost: calculateCost(750)
    },
    "may-2024": {
        percentageConsumption: "19%",
        readingValue: 700,
        lastReadingValue: 650,
        cost: calculateCost(700)
    },
    "june-2024": {
        percentageConsumption: "18%",
        readingValue: 650,
        lastReadingValue: 600,
        cost: calculateCost(650)
    },
    "july-2024": {
        percentageConsumption: "17%",
        readingValue: 600,
        lastReadingValue: 550,
        cost: calculateCost(600)
    },
    "august-2024": {
        percentageConsumption: "16%",
        readingValue: 550,
        lastReadingValue: 500,
        cost: calculateCost(550)
    },
    "september-2024": {
        percentageConsumption: "15%",
        readingValue: 500,
        lastReadingValue: 450,
        cost: calculateCost(500)
    },
    "october-2024": {
        percentageConsumption: "14%",
        readingValue: 450,
        lastReadingValue: 400,
        cost: calculateCost(450)
    },
    "november-2024": {
        percentageConsumption: "13%",
        readingValue: 400,
        lastReadingValue: 350,
        cost: calculateCost(400)
    },
    "december-2024": {
        percentageConsumption: "12%",
        readingValue: 350,
        lastReadingValue: 300,
        cost: calculateCost(350)
    }
};




document.addEventListener('DOMContentLoaded', function() {
    const monthButtons = document.querySelectorAll('.rectangle-parent > div');

    // Function to get the current date and time
    const now = new Date();
    const currentTime = formatTime(now);
    const currentDate = formatDate(now);

    // Retrieve last visit time and date from localStorage
    const lastVisitTime = localStorage.getItem('lastVisitTime') || "N/A";
    const lastVisitDate = localStorage.getItem('lastVisitDate') || "N/A";

    // Update div2 and div3 with the last visit time and date
    document.querySelector('.div2').textContent = lastVisitTime;
    document.querySelector('.div3').textContent = lastVisitDate;

    // Update div1 and empty-k-w with the current time and date
    document.querySelector('.div1').textContent = currentTime;
    document.querySelector('.empty-k-w').textContent = currentDate;

    // Update the stored last visit time and date to the current time and date
    localStorage.setItem('lastVisitTime', currentTime);
    localStorage.setItem('lastVisitDate', currentDate);

    function setActiveButton(button) {
        monthButtons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');
    }

    monthButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            setActiveButton(this);
            const month = `${Object.keys(data)[index]}`;
            updateData(month);
        });
    });

    // Initial load with January 2024 data
    updateData('january-2024');
});

function updateData(month) {
    const monthData = data[month];
    document.querySelector('.kw1').textContent = monthData.lastReadingValue;
    document.querySelector('.percentage-number').textContent = monthData.percentageConsumption;
    document.querySelector('.ghs-120').textContent = monthData.cost;
    document.querySelector('.kw').textContent = monthData.readingValue;
    document.querySelector('.div').textContent = formatTime(new Date()); // Update div1 with current time
    document.querySelector('.empty-k-w').textContent = formatDate(new Date()); // Update empty-k-w with current date
    document.querySelector('.div1').textContent = formatDate(new Date(localStorage.getItem('lastVisitTime'))); // Update div3 with the last visit date
    document.querySelector('.div3').textContent = formatDate(new Date(localStorage.getItem('lastVisitDate'))); // Update div3 with the last visit date
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






  document.addEventListener('DOMContentLoaded', function() {
    // Set current date for .empty-units
    const dateElement = document.querySelector('.empty-k-w');
    // Set current time for .div1
    const timeElements = document.querySelectorAll('.div1');

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










/// GET HISTORY FROM THE DATABSE                                                             !!!!!!!IMPORTANT
// Client-side JavaScript

/* // Event listeners for month buttons
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

// Function to update data based on selected month
async function updateData(monthYear) {
    try {
        const response = await fetch(`/api/rooms?monthYear=${monthYear}`);
        const rooms = await response.json();
        const updatedRooms = calculatePercentagesAndCosts(rooms);
        updateDOM(updatedRooms);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Calculate percentages and costs based on consumption data
function calculatePercentagesAndCosts(rooms) {
    const totalConsumption = rooms.reduce((total, room) => total + room.readingValue, 0);
    
    rooms.forEach(room => {
        room.percentageConsumption = ((room.readingValue / totalConsumption) * 100).toFixed(2) + '%';
        room.cost = calculateCost(room.readingValue);
    });

    return rooms;
}

// Update the DOM with calculated percentages and costs
function updateDOM(rooms) {
    const container = document.getElementById('rooms-container');
    container.innerHTML = ''; // Clear existing content

    rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('percentage-wrapper');

        roomDiv.innerHTML = `
            <div class="percentage">
                <b class="percentage-number">${room.percentageConsumption}</b>
                <div class="price">
                    <b class="ghs-120">${room.cost}</b>
                </div>
            </div>
        `;

        container.appendChild(roomDiv);
    });
}
 */




//// SERVER-SIDE
            /* // app.js (or wherever your server setup code resides)
            const express = require('express');
            const mongoose = require('mongoose');
            const Room = require('./models/Room');

            const app = express();
            const PORT = process.env.PORT || 3000;

            mongoose.connect('mongodb://localhost:27017/your-database-name', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });

            // Middleware for parsing JSON bodies
            app.use(express.json());

            // Example endpoint to save monthly consumption data
            app.post('/api/history', async (req, res) => {
                try {
                    const { month, year, roomsData } = req.body;

                    // Assuming roomsData is an array of objects with roomName, consumption, and totalCost
                    const historyEntry = {
                        month,
                        year,
                        rooms: roomsData.map(room => ({
                            roomName: room.roomName,
                            consumption: room.consumption,
                            totalCost: room.totalCost,
                        })),
                    };

                    // Save historyEntry to MongoDB
                    const savedHistory = await History.create(historyEntry);
                    res.status(200).json(savedHistory);
                } catch (error) {
                    console.error('Error saving monthly history:', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });

            // Example endpoint to retrieve historical data for a specific month and year
            app.get('/api/history/:month/:year', async (req, res) => {
                try {
                    const { month, year } = req.params;

                    // Retrieve historical data from MongoDB based on month and year
                    const historyData = await History.find({ month, year });

                    res.status(200).json(historyData);
                } catch (error) {
                    console.error('Error fetching historical data:', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });

            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            });
 */






 ///// cconnect to MODEL/ROOM.JS
 /* // models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomName: String,
    // Add more fields as needed
});

module.exports = mongoose.model('Room', roomSchema);
            */




