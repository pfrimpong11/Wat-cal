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
    const contentDiv = container.querySelector('.containers-inner');

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
    window.location.href = "../other/Home.html";
});
}

 // Function to change the displayed month and update corresponding data
  function changeMonth(button, month) {
      // Update the displayed month in the UI
      document.querySelector('.month').textContent = month;

      // Remove 'active' class from all buttons
      const buttons = document.querySelectorAll('.month-navigation div');
      buttons.forEach(btn => {
          btn.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Display the data container corresponding to the selected month
      const selectedContainer = document.getElementById(`${month.toLowerCase()}-2024`);
      if (selectedContainer) {
          selectedContainer.style.display = 'block';
      } else {
          console.error(`Data container for ${month} not found.`);
      }
  }


/// Initialize the page with default month (June, 2024 in this case)
  document.addEventListener('DOMContentLoaded', function() {
      changeMonth(document.querySelector('.janbtn'), 'January');
  });

 /// Mock data for each month
  const data = {
      "january-2024": {
          percentageConsumption: "23%",
          readingValue: "23000KW",
          readingTime: "16:00",
          date: "25/01/2024",
          lastReadingTime: "16:00",
          lastReadingValue: "23000KW",
          lastReadingDate: "24/01/2024"
      },
      "february-2024": {
          percentageConsumption: "22%",
          readingValue: "22000KW",
          readingTime: "15:00",
          date: "26/02/2024",
          lastReadingTime: "15:00",
          lastReadingValue: "22000KW",
          lastReadingDate: "25/02/2024"
      },
      "march-2024": {
          percentageConsumption: "21%",
          readingValue: "21000KW",
          readingTime: "14:00",
          date: "27/03/2024",
          lastReadingTime: "14:00",
          lastReadingValue: "21000KW",
          lastReadingDate: "26/03/2024"
      },
      "april-2024": {
          percentageConsumption: "20%",
          readingValue: "20000KW",
          readingTime: "13:00",
          date: "28/04/2024",
          lastReadingTime: "13:00",
          lastReadingValue: "20000KW",
          lastReadingDate: "27/04/2024"
      },
      "may-2024": {
          percentageConsumption: "19%",
          readingValue: "19000KW",
          readingTime: "12:00",
          date: "29/05/2024",
          lastReadingTime: "12:00",
          lastReadingValue: "19000KW",
          lastReadingDate: "28/05/2024"
      },
      "june-2024": {
          percentageConsumption: "18%",
          readingValue: "18000KW",
          readingTime: "11:00",
          date: "30/06/2024",
          lastReadingTime: "11:00",
          lastReadingValue: "18000KW",
          lastReadingDate: "29/06/2024"
      },
      "july-2024": {
          percentageConsumption: "17%",
          readingValue: "17000KW",
          readingTime: "10:00",
          date: "31/07/2024",
          lastReadingTime: "10:00",
          lastReadingValue: "17000KW",
          lastReadingDate: "30/07/2024"
      },
      "august-2024": {
          percentageConsumption: "16%",
          readingValue: "16000KW",
          readingTime: "09:00",
          date: "01/08/2024",
          lastReadingTime: "09:00",
          lastReadingValue: "16000KW",
          lastReadingDate: "31/07/2024"
      },
      "september-2024": {
          percentageConsumption: "15%",
          readingValue: "15000KW",
          readingTime: "08:00",
          date: "02/09/2024",
          lastReadingTime: "08:00",
          lastReadingValue: "15000KW",
          lastReadingDate: "01/09/2024"
      },
      "october-2024": {
          percentageConsumption: "14%",
          readingValue: "14000KW",
          readingTime: "07:00",
          date: "03/10/2024",
          lastReadingTime: "07:00",
          lastReadingValue: "14000KW",
          lastReadingDate: "02/10/2024"
      },
      "november-2024": {
          percentageConsumption: "13%",
          readingValue: "13000KW",
          readingTime: "06:00",
          date: "04/11/2024",
          lastReadingTime: "06:00",
          lastReadingValue: "13000KW",
          lastReadingDate: "03/11/2024"
      },
      "december-2024": {
          percentageConsumption: "12%",
          readingValue: "12000KW",
          readingTime: "05:00",
          date: "05/12/2024",
          lastReadingTime: "05:00",
          lastReadingValue: "12000KW",
          lastReadingDate: "04/12/2024"
      }
  };

  // Function to update the DOM with the selected month's data
  function updateData(month) {
      const containersInner = document.querySelector('.containers-inner');
      const monthData = data[month];

      // Update elements in containers-inner based on monthData
      containersInner.querySelector('.header-placeholders').textContent = monthData.date;
      containersInner.querySelector('.div').textContent = monthData.readingTime;
      containersInner.querySelector('.kw').textContent = monthData.readingValue;
      containersInner.querySelector('.div1').textContent = monthData.lastReadingTime;
      containersInner.querySelector('.kw1').textContent = monthData.lastReadingValue;
      containersInner.querySelector('.div2').textContent = monthData.lastReadingDate;
      containersInner.querySelector('.usage-percentage').textContent = monthData.percentageConsumption;
  }

  // Event listeners for month buttons
  document.querySelector('.janbtn').addEventListener('click', () => updateData('january-2024'));
  document.querySelector('.febbtn').addEventListener('click', () => updateData('february-2024'));
  document.querySelector('.marbtn').addEventListener('click', () => updateData('march-2024'));
  document.querySelector('.aprbtn').addEventListener('click', () => updateData('april-2024'));
  document.querySelector('.maybtn').addEventListener('click', () => updateData('may-2024'));
  document.querySelector('.junbtn').addEventListener('click', () => updateData('june-2024'));
  document.querySelector('.julbtn').addEventListener('click', () => updateData('july-2024'));
  document.querySelector('.augbtn').addEventListener('click', () => updateData('august-2024'));
  document.querySelector('.sepbtn').addEventListener('click', () => updateData('september-2024'));
  document.querySelector('.octbtn').addEventListener('click', () => updateData('october-2024'));
  document.querySelector('.nvobtn').addEventListener('click', () => updateData('november-2024'));
  document.querySelector('.decbtn').addEventListener('click', () => updateData('december-2024'));

  document.addEventListener('DOMContentLoaded', function() {
    // Set current date for .empty-units
    const dateElement = document.querySelector('.header-placeholders');
    // Set current time for .div
    const timeElements = document.querySelectorAll('.div');

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);
    
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }

    timeElements.forEach(element => {
        if (element) {
            element.textContent = formattedTime;
        }
    });
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
