document.getElementById('saveButton').addEventListener('click', async (e) => {
  e.preventDefault();

  const profileForm = document.getElementById('profileForm');
  const formData = new FormData(profileForm); // Use FormData to collect form data

  const username = localStorage.getItem('username'); // Retrieve the logged-in user's username

  if (username) {
      const userData = {
          username,
          email: document.getElementById('email').value,
          dateOfBirth: document.getElementById('dateOfBirth').value,
          meterSerialNumber: document.getElementById('meterSerialNumber').value,
          houseAddress: document.getElementById('houseAddress').value,
          meterType: document.getElementById('meterType').value,
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
              throw new Error('Failed to update profile');
          }

          const data = await response.json();
          alert('Profile updated successfully');
      } catch (error) {
        if (error.message.includes('username')) {
          res.status(400).send('Request aborted... Username is unique and cannot be changed.');
      } else {
          res.status(500).send('Server error');
      }
      }
  } else {
      console.error('No username found in local storage');
  }
});



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
   