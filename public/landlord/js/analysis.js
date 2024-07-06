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

       
        

        // Updated calculateCost function with tier rates
const Rates = [
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

    for (const tier of Rates) {
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







///ROOM.model
// models/Room.js (example)
/* const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomName: String,
    // Add more fields as needed
});

module.exports = mongoose.model('Room', roomSchema); */


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





// Define tier rates for cost calculation
const tierRates = [
    { upperLimit: 50, rate: 0.00 },     // Tier 1 (Lifeline)
    { upperLimit: 150, rate: 0.2460 },  // Tier 2
    { upperLimit: 300, rate: 0.3409 },  // Tier 3
    { upperLimit: 600, rate: 0.4642 },  // Tier 4
    { upperLimit: 1000, rate: 0.5693 }, // Tier 5
    { upperLimit: Infinity, rate: 0.6758 } // Tier 6
];

// Function to calculate cost based on consumption
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

    return cost.toFixed(2); // Return as string formatted to two decimal places
}

// Function to fetch readings from the server
async function fetchData() {
    try {
        const response = await fetch('/api/readings'); // Adjust endpoint as per your API
        if (!response.ok) {
            throw new Error('Failed to fetch readings');
        }
        const rooms = await response.json();
        return rooms;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to create room containers dynamically
function createRoomContainer(roomNumber) {
    const containersDiv = document.querySelector('.containers'); // Assuming this is where room containers are appended
    const roomContainer = document.createElement('div');
    roomContainer.classList.add('room-name-parent');
    roomContainer.dataset.room = roomNumber; // Set room number as data attribute

    // Construct the inner HTML structure
    roomContainer.innerHTML = `
    <div class="containers">
    <div class="room-name-parent">
      <h2 class="room-name">Room name</h2>
      <div class="room-name1">
        <div class="div">26/06/2023 - 17:01</div>
      </div>
      <div class="frame-parent">
        <div class="rectangle-parent" onclick="toggleInfo(this)">
          <div class="frame-child" ></div>
          <img
            class="eye-regular-1-icon"
            loading="lazy"
            alt=""
            src="./images/look.svg"
          />
        </div>
        <div class="rectangle-group"  onclick="showPopup('popup2')">
          <div class="frame-item"></div>
          <img
            class="download-solid-1-icon"
            loading="lazy"
            alt=""
            src="./images/download.svg"
          />
        </div>
        <div class="rectangle-container" onclick="showPopup('popup3')">
          <div class="frame-inner"></div>
          <img
            class="trash-can-regular-1-icon"
            loading="lazy"
            alt=""
            src="./images/del.svg"
          />
        </div>
      </div>
    </div>
    <div class="container-content">
      <div class="container-header">
        <div class="container-name-parent-parent">
          <div class="container-name-parent">
            <div class="container-card">
              <h1 class="container">container</h1>
              <button class="downloadbtn" onclick="showPopup('popup2')" style="border: 0;">
                <img
                  class="downloadbtn-child"
                  alt=""
                  src="./images/rectangle-31.svg"
                />

                <div class="export">Export</div>
              </button>
              <div class="container-data">
                <div class="line"></div>
                <div class="reading-values-wrapper">
                  <div class="reading-values">
                    <div class="date">Date :</div>
                    <div class="container-date-value">
                      <div class="empty-k-w">26/06/2023</div>
                    </div>
                  </div>
                </div>
                <div class="line1"></div>
                <div class="container-data-inner">
                  <div class="reading-time-parent">
                    <div class="reading-time">Reading_time :</div>
                    <div class="div1">17:01</div>
                  </div>
                </div>
                <div class="line2"></div>
                <div class="container-data-child">
                  <div class="reading-value-parent">
                    <div class="reading-value">Reading_value :</div>
                    <div class="kw">759KW</div>
                  </div>
                </div>
                <div class="line3"></div>
                <div class="frame-div">
                  <div class="last-reading-time-parent">
                    <div class="last-reading-time">
                      Last_reading_time :
                    </div>
                    <div class="wrapper">
                      <div class="div2">17:01</div>
                    </div>
                  </div>
                </div>
                <div class="line4"></div>
                <div class="container-data-inner1">
                  <div class="last-reading-value-parent">
                    <div class="last-reading-value">
                      Last_reading_value :
                    </div>
                    <b class="kw1">857KW</b>
                  </div>
                </div>
                <div class="line5"></div>
                <div class="container-data-inner2">
                  <div class="last-reading-date-parent">
                    <div class="last-reading-date">
                      Last_reading_date :
                    </div>
                    <div class="frame">
                      <div class="div3">26/06/2023</div>
                    </div>
                  </div>
                </div>
                <div class="line6"></div>
              </div>
            </div>
          </div>
          <div class="frame-group">
            <div class="execution-recommendation-patte-wrapper">
              <h2 class="execution-recommendation-patte-container">
                <p class="execution-recommendation">
                  Execution Recommendation
                </p>
                <p class="pattern">Pattern</p>
              </h2>
            </div>
            <div class="frame-container">
              <div class="group-div">
                <div class="rectangle-div"></div>
                <div class="day-names-parent">
                  <div class="day-names-row">
                    <div class="sunday">Sunday</div>
                    <div class="day-numbers-parent">
                      <b class="june">10 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-12h">10h - 12h</div>
              </div>
              <div class="vector-parent">
                <img
                  class="rectangle-icon"
                  alt=""
                  src="./images/rectangle-32.svg"
                />

                <div class="frame-wrapper">
                  <div class="monday-parent">
                    <div class="monday">Monday</div>
                    <div class="june-wrapper">
                      <b class="june1">11 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h">8h - 10h</div>
              </div>
              <div class="rectangle-parent1">
                <div class="frame-child1"></div>
                <div class="frame-wrapper1">
                  <div class="tuesday-parent">
                    <div class="tuesday">Tuesday</div>
                    <div class="june-container">
                      <b class="june2">13 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h1">7h - 10h</div>
              </div>
              <div class="selected-date">
                <div class="date-highlight"></div>
                <b class="june3">14 June</b>
                <div class="wednesday">Wednesday</div>
                <div class="h-10h2">8h - 10h</div>
              </div>
              <div class="calendar-grid">
                <div class="calendar-grid-child"></div>
                <div class="calendar-grid-inner">
                  <div class="thursday-parent">
                    <div class="thursday">Thursday</div>
                    <div class="june-frame">
                      <b class="june4">15 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h3">8h - 10h</div>
              </div>
              <div class="calendar-grid1">
                <div class="calendar-grid-item"></div>
                <div class="calendar-grid-inner1">
                  <div class="friday-parent">
                    <div class="friday">Friday</div>
                    <div class="june-wrapper1">
                      <b class="june5">16 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-15h">13h - 15h</div>
              </div>
              <div class="calendar-grid2">
                <div class="calendar-grid-child1"></div>
                <div class="calendar-grid-inner2">
                  <div class="saturday-parent">
                    <div class="saturday">Saturday</div>
                    <div class="june-wrapper2">
                      <b class="june6">17 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-18h">16h - 18h</div>
              </div>
              <div class="calendar-grid3">
                <div class="calendar-grid-child2"></div>
                <div class="calendar-grid-inner3">
                  <div class="sunday-parent">
                    <div class="sunday1">Sunday</div>
                    <div class="june-wrapper3">
                      <b class="june7">18 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-12h1">10h - 12h</div>
              </div>
              <div class="calendar-grid4">
                <img
                  class="calendar-grid-child3"
                  alt=""
                  src="./images/rectangle-32.svg"
                />

                <div class="calendar-grid-inner4">
                  <div class="monday-group">
                    <div class="monday1">Monday</div>
                    <div class="june-wrapper4">
                      <b class="june8">19 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h4">8h - 10h</div>
              </div>
              <div class="calendar-grid5">
                <div class="calendar-grid-child4"></div>
                <div class="calendar-grid-inner5">
                  <div class="tuesday-group">
                    <div class="tuesday1">Tuesday</div>
                    <div class="june-wrapper5">
                      <b class="june9">20 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h5">7h - 10h</div>
              </div>
              <div class="calendar-grid6">
                <div class="calendar-grid-child5"></div>
                <div class="calendar-grid-inner6">
                  <div class="wednesday-parent">
                    <div class="wednesday1">Wednesday</div>
                    <div class="june-wrapper6">
                      <b class="june10">21 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h6">8h - 10h</div>
              </div>
              <div class="calendar-grid7">
                <div class="calendar-grid-child6"></div>
                <div class="calendar-grid-inner7">
                  <div class="thursday-group">
                    <div class="thursday1">Thursday</div>
                    <div class="june-wrapper7">
                      <b class="june11">22 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-10h7">8h - 10h</div>
              </div>
              <div class="calendar-grid8">
                <div class="calendar-grid-child7"></div>
                <div class="calendar-grid-inner8">
                  <div class="friday-group">
                    <div class="friday1">Friday</div>
                    <div class="june-wrapper8">
                      <b class="june12">23 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-15h1">13h - 15h</div>
              </div>
              <div class="calendar-grid9">
                <div class="calendar-grid-child8"></div>
                <div class="calendar-grid-inner9">
                  <div class="saturday-group">
                    <div class="saturday1">Saturday</div>
                    <div class="june-wrapper9">
                      <b class="june13">24 June</b>
                    </div>
                  </div>
                </div>
                <div class="h-18h1">16h - 18h</div>
              </div>
            </div>
          </div>
        </div>
        <div class="usage-chart-parent">
          <div class="usage-chart-title-parent">
            <div class="usage-chart-title">
              <h1 class="percentage-usage">Percentage Usage</h1>
            </div>
            <div class="chart-content">
              <div class="dash">
                <h2 class="total-electricity-consumption">
                  Total electricity consumption
                </h2>
                <div class="chart-container">
                  <div class="chart">
                    <div class="chart-axis-y">
                      <div class="y-axis-values">
                        <div class="grid-label">1000</div>
                        <div class="y-axis-value">
                          <div class="y-axis-label">750</div>
                        </div>
                        <div class="div4">500</div>
                        <div class="div5">250</div>
                        <div class="target-value">0</div>
                      </div>
                      <div class="chart-bars">
                        <div class="chart-bar-parent">
                          <img
                            class="energy-bar-icon"
                            loading="lazy"
                            alt=""
                            src="./images/d.png.svg"
                          />

                          <div class="chart-axis-x">
                            <div class="weekday-label-parent">
                              <img
                                class="weekday-label-icon"
                                alt=""
                                src="./images/d.png"
                              />

                              <div class="chart-x-labels">
                                <img
                                  class="percentage-label-icon"
                                  loading="lazy"
                                  alt=""
                                  src="./images/.png"
                                />

                                <img
                                  class="vector-icon"
                                  alt=""
                                  src="./images/.png"
                                />

                               
                              </div>
                              <img
                                class="previous-bar-icon"
                                loading="lazy"
                                alt=""
                                src="./images/d.png"
                              />

                              <img
                                class="group-icon"
                                alt=""
                                src="./images/grid.png"
                              />

                              <div class="chart-grid">
                                <img
                                  class="weekdays-icon"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon1"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon2"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon3"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon4"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon5"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon6"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon7"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon8"
                                  loading="lazy"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon9"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon10"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="weekdays-icon11"
                                  alt=""
                                  src="./images/d.png"
                                />

                                <img
                                  class="group-icon1"
                                  alt=""
                                  src="./images/bluedots.png"
                                />
                              </div>
                              <img
                                class="group-icon2"
                                alt=""
                                src="./images/reddots.png"
                              />
                            </div>
                            <div class="chart-scale">
                              <div class="scale-values">
                                <div class="blank-placeholder">0</div>
                                <div class="blank-placeholder1">1</div>
                                <div class="blank-placeholder2">2</div>
                                <div class="blank-placeholder3">3</div>
                                <div class="blank-placeholder4">4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="usage-percentage">
                <div class="percentage-wrapper">
                  <div class="percentage">
                    <b class="percentage-number">28%</b>
                    <div class="price">
                      <b class="ghs-120">Gh₵ 121.60</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    `;

    // Append the container to the parent
    containersDiv.appendChild(roomContainer);
}

// Function to update room containers with fetched data
function updateRoomContainers(rooms) {
    rooms.forEach(room => {
        const roomContainer = document.querySelector(`.room-name-parent[data-room="${room.roomNumber}"]`);
        if (roomContainer) {
            // Update percentage consumption
            const percentageElement = roomContainer.querySelector('.percentage-number');
            if (percentageElement) {
                percentageElement.textContent = `${room.percentageConsumption}%`;
            }

            // Update cost per kWh
            const costElement = roomContainer.querySelector('.ghs-120');
            if (costElement) {
                const costPerKwh = calculateCost(room.readingValue);
                costElement.textContent = `Gh₵ ${costPerKwh}`;
            }

            // Update reading value
            const readingElement = roomContainer.querySelector('.kw');
            if (readingElement) {
                readingElement.textContent = `${room.readingValue} KW`; // Assuming room.readingValue is in kWh
            }
        }
    });
}

// Initialize page on DOMContentLoaded
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const rooms = await fetchData();
        if (rooms.length > 0) {
            // Perform calculations for each room
            rooms.forEach(room => {
                room.percentageConsumption = ((room.readingValue / totalConsumption) * 100).toFixed(2);
            });

            // Update DOM with room data
            updateRoomContainers(rooms);
        } else {
            console.log('No rooms data available. Creating placeholders...');
            createRoomContainer('Room 1'); // Example room number to create
            // Add more calls to createRoomContainer for other rooms as needed
        }
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});
