function processMtnPayment() {
    const phoneNumber = document.getElementById('mtnPhoneNumber').value;
    const amount = document.getElementById('mtnAmount').value;
    const meterNumber = document.getElementById('mtnMeterNumber').value;

    if (!phoneNumber || !amount || !meterNumber) {
      alert('Please fill all the fields');
      return;
    }

    const paymentData = {
      phoneNumber,
      amount,
      meterNumber
    };

    fetch('/process-mtn-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Payment successful');
      } else {
        alert('Payment failed: ' + data.message);
      }
    })
    .catch(error => {
      alert('Error processing payment: ' + error.message);
    });
  }



  function processVodafonePayment() {
    const phoneNumber = document.getElementById('vodafonePhoneNumber').value;
    const amount = document.getElementById('vodafoneAmount').value;
    const meterNumber = document.getElementById('vodafoneMeterNumber').value;

    if (!phoneNumber || !amount || !meterNumber) {
      alert('Please fill all the fields');
      return;
    }

    const paymentData = {
      phoneNumber,
      amount,
      meterNumber
    };

    fetch('/process-vodafone-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Payment successful');
      } else {
        alert('Payment failed: ' + data.message);
      }
    })
    .catch(error => {
      alert('Error processing payment: ' + error.message);
    });
  }