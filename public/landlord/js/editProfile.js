
function goBack() {
  window.history.back();
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
  
  /* document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username'); // Retrieve the logged-in user's username

    if (username) {
        fetch(`http://localhost:3000/profile/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    document.querySelector('.melissa-peters').value = data.username || '';
                    document.querySelector('.melpetersgmailcom').value = data.email || '';
                    document.querySelector('.ddmmyyyy').value = data.dateOfBirth || '';
                    document.querySelector('.xxxxxxx').value = data.phoneNumber || '';
                    document.querySelector('.prepaidpostpaid').value = data.prepaidPostpaid || '';
                    document.querySelector('.optional').value = data.optional || '';
                    
                    // Populate rooms if available
                    if (data.rooms && data.rooms.length > 0) {
                        data.rooms.forEach((roomName, index) => {
                            addRoom(roomName, index + 1);
                        });
                    }
                }
            })
            .catch(error => console.error('Error fetching profile:', error));
    } else {
        console.error('No username found in local storage');
    }
}); */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.addroombtn').addEventListener('click', function(event) {
        event.preventDefault();
        addRoom();
    });

    let roomIndex = 1;

    function addRoom() {
        const container = document.createElement('div');
        container.className = 'room-container';

        // Room label and input
        const roomLabel = document.createElement('label');
        roomLabel.className = 'add-room-label';
        roomLabel.innerText = `Room ${roomIndex}`;

        const roomInput = document.createElement('input');
        roomInput.className = 'room-input';
        roomInput.type = 'text';
        roomInput.name = `room${roomIndex}`; // Give each input a unique name
        roomInput.placeholder = `Enter room name`;

        // Email label and input
        const emailLabel = document.createElement('label');
        emailLabel.className = 'add-room-label';
        emailLabel.innerText = `Email`;

        const emailInput = document.createElement('input');
        emailInput.className = 'room-input';
        emailInput.type = 'email';
        emailInput.name = `email${roomIndex}`; // Give each input a unique name
        emailInput.placeholder = `Enter tenant email`;

        // Container for room and email inputs
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';

        inputContainer.appendChild(roomLabel);
        inputContainer.appendChild(roomInput);
        inputContainer.appendChild(emailLabel);
        inputContainer.appendChild(emailInput);

        container.appendChild(inputContainer);
        document.querySelector('.add-room-container').appendChild(container);

        roomIndex++;
    }
});

document.getElementById('saveButton').addEventListener('click', async (e) => {
    e.preventDefault();

    const profileForm = document.getElementById('profileForm');
    const formData = new FormData(profileForm);

    const username = localStorage.getItem('username');

    if (username) {
        const inputs = document.querySelectorAll('.room-container .input-container');
        const roomsData = [];

        inputs.forEach(inputContainer => {
            const roomInput = inputContainer.querySelector('input[name^="room"]');
            const emailInput = inputContainer.querySelector('input[name^="email"]');

            if (roomInput && emailInput) {
                roomsData.push({
                    room: roomInput.value,
                    email: emailInput.value
                });
            }
        });

        const userData = {
            username,
            email: document.getElementById('email').value,
            dateOfBirth: document.getElementById('dateOfBirth').value,
            meterSerialNumber: document.getElementById('meterSerialNumber').value,
            houseAddress: document.getElementById('houseAddress').value,
            meterType: document.getElementById('meterType').value,
            rooms: roomsData // Include rooms array in the user data
        };
        console.log(userData);

        try {
            const response = await fetch('/updateLandlord', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            const data = await response.json();
            alert('Profile updated successfully');
        } catch (error) {
            if (error.message.includes('username')) {
                alert('Request aborted. Username is unique and cannot be changed.');
            } else {
                alert('Server error');
            }
        }
    } else {
        console.error('No username found in local storage');
    }
});
