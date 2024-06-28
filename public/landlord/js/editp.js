
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
  
  document.addEventListener('DOMContentLoaded', () => {
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
});

document.querySelector('.addroombtn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    addRoom(); // Call the addRoom function to add a new room input
});

let roomIndex = 1;

function addRoom(roomName = '', index = roomIndex) {
    const container = document.createElement('div');
    container.className = 'room-container';

    const label = document.createElement('label');
    label.className = 'room-label';
    label.innerText = `Room ${index}`;

    const input = document.createElement('input');
    input.className = 'room-input';
    input.type = 'text';
    input.placeholder = `Enter room name`;
    input.value = roomName;

    container.appendChild(label);
    container.appendChild(input);

    document.querySelector('.add-room-container').appendChild(container);

    roomIndex++;
}

document.getElementById('saveButton').addEventListener('click', async (e) => {
    e.preventDefault();

    const profileForm = document.getElementById('profileForm');
    const formData = new FormData(profileForm); // Use FormData to collect form data

    const username = localStorage.getItem('username'); // Retrieve the logged-in user's username

    if (username) {
        const rooms = Array.from(document.querySelectorAll('.room-input')).map(input => input.value);

        const userData = {
            username,
            email: formData.get('email'),
            dateOfBirth: formData.get('dateOfBirth'),
            meterSerialNumber: formData.get('meterSerialNumber'),
            houseAddress: formData.get('houseAddress'),
            phoneNumber: formData.get('phoneNumber'),
            meterType: formData.get('meterType'),
            optional: formData.get('optional'),
            prepaidPostpaid: formData.get('prepaidPostpaid'),
            rooms, // Include rooms array in the user data
        };

        try {
            const response = await fetch('http://localhost:3000/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const data = await response.json();
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    } else {
        console.error('No username found in local storage');
    }
});
