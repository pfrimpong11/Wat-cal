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
    window.location.href = "../other/Home.html";
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
        document.addEventListener('DOMContentLoaded', function() {
            // Function to get the current date and time
            const now = new Date();
            const currentTime = formatTime(now);
            const currentDate = formatDate(now);

            // Retrieve last visit time and date from localStorage
            const lastVisitTime = localStorage.getItem('lastVisitTime') || "N/A";
            const lastVisitDate = localStorage.getItem('lastVisitDate') || "N/A";

            // Update div1 and div2 with the last visit time and date
            document.querySelector('.div2').textContent = lastVisitTime;
            document.querySelector('.div3').textContent = lastVisitDate;

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






/// to add containers to the page                                        !!!!!IMPORTANT
/* document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('/api/rooms');
        if (!response.ok) {
            throw new Error('Failed to fetch rooms');
        }
        const roomsData = await response.json();

        // Process roomsData as needed (e.g., creating room containers dynamically)
        createRoomContainers(roomsData);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        // Handle error
    }
});

function createRoomContainers(roomsData) {
    const containersParent = document.querySelector('.containers');

    roomsData.forEach(room => {
        const roomContainer = document.createElement('div');
        roomContainer.className = 'room-name-parent';

        const roomNameHeader = document.createElement('h2');
        roomNameHeader.className = 'room-name';
        roomNameHeader.textContent = room.roomName;

        // Add other room container elements here

        roomContainer.appendChild(roomNameHeader);
        containersParent.appendChild(roomContainer);
    });
} */






        ////Database pull for data                                         !!!!!IMPORTANT
/*         const tierRates = [
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

        async function fetchData() {
            try {
                const response = await fetch('/api/readings');
                const rooms = await response.json();
                return rooms;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        function calculatePercentagesAndCosts(rooms) {
            const totalConsumption = rooms.reduce((total, room) => total + room.readingValue, 0);
            
            rooms.forEach(room => {
                room.percentageConsumption = ((room.readingValue / totalConsumption) * 100).toFixed(2) + '%';
                room.cost = calculateCost(room.readingValue);
            });

            return rooms;
        }

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

        document.addEventListener('DOMContentLoaded', async function() {
            const rooms = await fetchData();
            const updatedRooms = calculatePercentagesAndCosts(rooms);
            updateDOM(updatedRooms);
        }); */


       
        

        // Updated calculateCost function with tier rates
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

// Function to update the DOM with the total kWh sum and calculated values
function updateData() {
    const kwElements = document.querySelectorAll('.kw'); // Select all elements with class .kw

    let totalKwh = 0;
    kwElements.forEach(element => {
        const readingValueText = element.textContent.trim(); // Get text content and trim any extra whitespace
        const readingValue = parseFloat(readingValueText.replace('KW', '')); // Extract numeric value and convert to float
        totalKwh += readingValue; // Accumulate total kWh
    });

    const maxCapacity = 1000; // Maximum assumed capacity in kWh
    const percentage = (totalKwh / (kwElements.length * maxCapacity)) * 100; // Calculate percentage based on total kWh sum

    document.querySelector('.percentage-number').textContent = `${percentage.toFixed(1)}%`; // Update percentage number

    const cost = calculateCost(totalKwh); // Calculate cost based on totalKwh
    document.querySelector('.ghs-120').textContent = cost; // Update cost
}

// Call updateData initially and whenever needed
updateData();













/// SERVER SIDE 
/* const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Room = require('./models/Room'); // Adjust the path based on your project structure

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());

// Route to fetch room data
app.get('/api/rooms', async (req, res) => {
    try {
        // Fetch all rooms from the database
        const rooms = await Room.find({}, 'roomName'); // Adjust fields as needed

        res.json(rooms);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ message: 'Failed to fetch rooms' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 */







///ROOM.model
// models/Room.js (example)
/* const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomName: String,
    // Add more fields as needed
});

module.exports = mongoose.model('Room', roomSchema); */
