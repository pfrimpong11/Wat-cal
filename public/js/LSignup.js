// LSignup.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
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
                    meterType  
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
                    console.log("Signup failed");
                }

            
        
    });



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
        input.placeholder = ` Enter room name`;

        container.appendChild(label);
        container.appendChild(input);

        document.querySelector('.add-room-container').appendChild(container);

        roomIndex++;
    }



    // event listener for login button
    document.getElementById("login").addEventListener("click", function () {
        window.location.href = "LLogin.html";
    })

    
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

        document.getElementById("buttonContainer").addEventListener("click", function () {
            window.location.href = "TLogin.html";
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
