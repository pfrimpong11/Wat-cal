// LSignup.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.addroombtn').addEventListener('click', addRoom);

    let roomIndex = 1;

    function addRoom() {
        const container = document.createElement('div');
        container.className = 'room-container';

        const label = document.createElement('label');
        label.className = 'room-label';
        label.innerText = `Room ${roomIndex}`;

        const input = document.createElement('input');
        input.className = 'room-input';
        input.type = 'text';
        input.name = `room${roomIndex}`; // Give each input a unique name
        input.placeholder = `Enter room name`;

        container.appendChild(label);
        container.appendChild(input);

        document.querySelector('.add-room-container').appendChild(container);

        roomIndex++;
    }

    document.getElementById('signUpForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Basic client-side validation
        const username = document.getElementById("usernameInput").value;
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
        const confirmPassword = document.getElementById("confirmPasswordInput").value;
        const dateOfBirth = document.getElementById("dateOfBirthInput").value;
        const houseAddress = document.getElementById("houseAddressInput").value;
        const meterSerialNumber = document.getElementById("meterSerialNumberInput").value;
        const meterType = document.getElementById("meterTypeInput").value;

        if (!username || !email || !password || !confirmPassword || !dateOfBirth) {
            alert("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Collect room names
        const rooms = [];
        document.querySelectorAll('.room-input').forEach(input => {
            if (input.value.trim()) { // Only add non-empty room names
                rooms.push(input.value.trim());
            }
        });

        try {
            const response = await fetch('/api/landlordSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username,
                    email,
                    password,
                    dateOfBirth,
                    houseAddress,
                    meterSerialNumber,
                    meterType,
                    rooms // Include rooms in the request body
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.msg || 'Registration failed');
            }

            setTimeout(() => {
                window.location.href = 'LLogin.html';
            }, 1000);
        } catch (error) {
            console.log("Signup failed: " + error.message);
        }
    });





    document.querySelectorAll(".button2, .button").forEach(button => {
        button.addEventListener("click", function() {
            const popupId = button.getAttribute("data-popup");
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
            setTimeout(() => {
                popup.classList.add("active");
            }, 10); // Small delay to allow the display change to take effect
            document.getElementById("overlay").classList.add("active");
            document.querySelector('.content').classList.add('blur-background');
        });
    });

    document.getElementById("overlay").addEventListener("click", function() {
        document.querySelectorAll(".popup-menu").forEach(popup => {
            popup.classList.remove("active");
            setTimeout(() => {
                popup.style.display = 'none';
            }, 500); // Match this timeout with the animation duration
        });
        document.getElementById("overlay").classList.remove("active");
        document.querySelector('.content').classList.remove('blur-background');
    });


   ////For the additionn of rooms implementation
   /*  document.querySelector('.addroombtn').addEventListener('click', addRoom);

        let roomIndex = 1;

        function addRoom() {
        const container = document.createElement('div');
        container.className = 'room-container';

        const label = document.createElement('label');
        label.className = 'room-label';
        label.innerText = `Room ${roomIndex}`;

        const input = document.createElement('input');
        input.className = 'room-input';
        input.type = 'text';
        input.placeholder = ` Enter room name`;

        container.appendChild(label);
        container.appendChild(input);

        document.querySelector('.add-room-container').appendChild(container);

        roomIndex++;
    } */



    // event listener for login button
        var t4 = document.getElementById("t4");
        if (t4) {
          t4.addEventListener("click", function (e) {
                window.location.href = "TLogin.html";
            });
        }

        var l4 = document.getElementById("l4");
        if (l4) {
          l4.addEventListener("click", function (e) {
                window.location.href = "LLogin.html";
            });
        }

        var t5 = document.getElementById("t5");
        if (t5) {
          t5.addEventListener("click", function (e) {
                window.location.href = "TLogin.html";
            });
        }

        var l5 = document.getElementById("l5");
        if (l5) {
          l5.addEventListener("click", function (e) {
                window.location.href = "LLogin.html";
            });
        }

    
        // Add event listeners for navigation buttons
        document.getElementById("textButton8").addEventListener("click", function () {
            window.location.href = "Home.html";
        });

        document.getElementById("textButton9").addEventListener("click", function () {
            window.location.href = "Helpdesk.html";
        });

        document.getElementById("textButton10").addEventListener("click", function () {
            window.location.href = "About.html";
        });

        document.getElementById("textButton11").addEventListener("click", function () {
            window.location.href = "Security.html";
        });

        document.getElementById("contactUsText").addEventListener("click", function () {
            window.location.href = "Contactus.html";
        });

        document.getElementById("textButton1").addEventListener("click", function () {
            window.location.href = "Helpdesk.html";
        });

        document.getElementById("textButton2").addEventListener("click", function () {
            window.location.href = "About.html";
        });

        document.getElementById("textButton3").addEventListener("click", function () {
            window.location.href = "Security.html";
        });

        document.getElementById("textButton6").addEventListener("click", function () {
            window.location.href = "Privacy.html";
        });

        document.getElementById("textButton7").addEventListener("click", function () {
            window.location.href = "Terms.html";
        });


});





    // document.addEventListener("DOMContentLoaded", function () {
    //     // Previous code...

    //     // Show/Hide password functionality
    //     const eyeIcons = document.querySelectorAll(".eye-icon");
    //     eyeIcons.forEach(icon => {
    //         icon.addEventListener("click", function () {
    //             const input = this.previousElementSibling.querySelector("input");
    //             if (input.type === "password") {
    //                 input.type = "text";
    //                 this.src = "./images/eye-off.svg"; // Change icon to eye-off
    //             } else {
    //                 input.type = "password";
    //                 this.src = "./images/eye.svg"; // Change icon to eye
    //             }
    //         });
    //     });
    // });










    ///server and client side for the form                          
//// DIRECTORY STRUCTURE
/* /my-app
│
├── /controllers
│   └── userController.js
│
├── /models
│   └── userModel.js
│
├── /routes
│   └── userRoutes.js
│
├── server.js
├── package.json
└── /node_modules
 */




//MODEL
/* const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  houseAddress: { type: String, required: false },
  meterSerialNumber: { type: String, required: false },
  meterType: { type: String, required: false },
  rooms: [String] // Array of room names
});

const User = mongoose.model('User', userSchema);

module.exports = User;
 */




//CONTROLLER
/* const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const { username, email, password, dateOfBirth, houseAddress, meterSerialNumber, meterType, rooms } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      dateOfBirth,
      houseAddress,
      meterSerialNumber,
      meterType,
      rooms
    });

    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
 */




//ROUTES
/* const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Signup route
router.post('/landlordSignup', userController.signup);

module.exports = router;
 */




//SERVER 
/* const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('your_mongodb_uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Use routes
app.use('/api', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 */