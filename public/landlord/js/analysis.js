function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay' + popupId.replace('popup', ''));
    const content = document.querySelector('.tent');

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
    const content = document.querySelector('.tent');

    overlay.style.display = 'none';
    popup.style.display = 'none';
    content.classList.remove('blur-background');
    document.body.classList.remove('disable-scroll');
    document.body.classList.remove('popup-open');
}          



///For container dropdown
document.addEventListener('DOMContentLoaded', function() {
  const rectangles = document.querySelectorAll('.rectangle-parent');
  rectangles.forEach(rectangle => {
    rectangle.addEventListener('click', function() {
      const dataList = this.closest('.containers').querySelector('.data-list');
      if (dataList.classList.contains('expanded')) {
        dataList.style.maxHeight = '0';
        setTimeout(() => {
          dataList.style.display = 'none';
          dataList.classList.remove('expanded');
        }, 500); // Match this timeout with the CSS transition duration
      } else {
        dataList.style.display = 'block';
        setTimeout(() => {
          dataList.style.maxHeight = '1000px'; // Adjust based on your content height
          dataList.classList.add('expanded');
        }, 10); // Small timeout to ensure the display change is registered
      }
    });
  });
});


///For toggling 
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.togglebtn1-wrapper');
    
    toggles.forEach(toggle => {
      const roomIds = toggle.getAttribute('data-roomIds');
      let isOn = localStorage.getItem(`roomIds_${roomIds}_status`) === 'ON'; // Check local storage for saved state
      toggle.classList.toggle('off', !isOn); // Initialize toggle state based on local storage
      toggle.querySelector('.on').textContent = isOn ? 'ON' : 'OFF'; // Set initial text
      
      toggle.addEventListener('click', function() {
        isOn = !isOn;
        localStorage.setItem(`roomIds_${roomIds}_status`, isOn ? 'ON' : 'OFF'); // Save state to local storage
        this.classList.toggle('off', !isOn); // Toggle class
        this.querySelector('.on').textContent = isOn ? 'ON' : 'OFF'; // Update text
        
        // Call the function to update the electricity status
        updateElectricityStatus(roomIds, !isOn); // Pass opposite of current state
      });
    });
  });
  
  function updateElectricityStatus(roomIds, disconnect) {
    fetch(`/api/updateElectricityStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roomIds, disconnect })
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Electricity status for roomIds ${roomIds}: ${disconnect ? 'Disconnected' : 'Connected'}`);
    })
    .catch(error => {
      console.error('Error updating electricity status:', error);
    });
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

document.addEventListener('DOMContentLoaded', function() {
  const divElement = document.querySelector('.room-name-value > .div');
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
                const readingValue = parseFloat(readingValueText.replace('kWh', '')); // Extract numeric value and convert to float
                console.log(`Reading value: ${readingValue}`); // Debug output
                totalKwh += readingValue; // Accumulate total kWh
            });
        
            console.log(`Total kWh: ${totalKwh}`); // Debug output
        
            const maxCapacity = 1000; // Maximum assumed capacity in kWh
            const percentage = (totalKwh / (kwElements.length * maxCapacity)) * 100; // Calculate percentage based on total kWh sum
        
            document.querySelector('.percentage-number').textContent = `${percentage.toFixed(1)}%`; // Update percentage number
        
            const cost = calculateCost(totalKwh); // Calculate cost based on totalKwh
            console.log(`Cost: ${cost}`); // Debug output
            document.querySelector('.ghs-120').textContent = cost; // Update cost
        }
        
        // Call updateData initially and whenever needed
        updateData();
        
      
      







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
    const containersDiv = document.querySelector('.containers-wrapper'); // Assuming this is where room containers are appended
    const roomContainer = document.createElement('div');
    roomContainer.classList.add('room-name-parent');
    roomContainer.dataset.room = roomNumber; // Set room number as data attribute

    // Construct the inner HTML structure
    roomContainer.innerHTML = `
    
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
                readingElement.textContent = `${room.readingValue} kWh`; // Assuming room.readingValue is in kWh
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
                room.percentageConsumption = ((room.readingValue / totalConsumption) * 100).toFixed(1);
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
