// TSignup.js

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
                const response = await fetch('/api/tenantSignup', {
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
                window.location.href = 'TLogin.html';
                }, 1000);
            } catch (error) {
                console.log("Signup failed");
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
            

    // Event listener for login button
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
