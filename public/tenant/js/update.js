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
                    // ... populate other fields similarly
                }
            })
            .catch(error => console.error('Error fetching profile:', error));
    } else {
        console.error('No username found in local storage');
    }
});

document.getElementById('saveButton').addEventListener('click', (e) => {
    e.preventDefault();

    const username = localStorage.getItem('username'); // Retrieve the logged-in user's username

    if (username) {
        const userData = {
            username,
            email: document.querySelector('.melpetersgmailcom').value,
            dateOfBirth: document.querySelector('.ddmmyyyy').value,
            meterSerialNumber: document.querySelector('.melpetersgmailcom').value,
            houseAddress: document.querySelector('.xxxxxxx').value,
            phoneNumber: document.querySelector('.xxxxxxx').value,
            meterType: document.querySelector('.prepaidpostpaid').value,
            optional: document.querySelector('.optional').value,
            prepaidPostpaid: document.querySelector('.prepaidpostpaid').value,
        };

        fetch('http://localhost:3000/update-profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Profile updated successfully');
                }
            })
            .catch(error => console.error('Error updating profile:', error));
    } else {
        console.error('No username found in local storage');
    }
});
