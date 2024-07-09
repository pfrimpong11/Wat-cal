document.addEventListener('DOMContentLoaded', function() {
    // Get today's date
    const today = new Date();

    // Array of day names in order
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Month names in order
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Selectors for elements
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

    function updateElementDates() {
        let currentDate = new Date(today);

        dateElements.forEach((element, index) => {
            let dateElement = document.querySelector(element.dateClass);
            let dayElement = document.querySelector(element.dayClass);

            if (dateElement && dayElement) {
                // Calculate the date for each element (decreasing)
                currentDate.setDate(today.getDate() - index);

                let dayName = daysOfWeek[currentDate.getDay()];
                let dayDate = currentDate.getDate();
                let monthName = currentDate.toLocaleString('default', { month: 'long' });

                dateElement.innerText = `${dayDate} ${monthName}`;
                dayElement.innerText = dayName;
            }
        });
    }

    updateElementDates();

    // Function to update month buttons
    function updateMonthButtons() {
        const monthElements = [
            { selector: '.janbtn', monthIndex: 0 },
            { selector: '.febbtn', monthIndex: 1 },
            { selector: '.marbtn', monthIndex: 2 },
            { selector: '.aprbtn', monthIndex: 3 },
            { selector: '.maybtn', monthIndex: 4 },
            { selector: '.junbtn', monthIndex: 5 },
            { selector: '.julbtn', monthIndex: 6 },
            { selector: '.augbtn', monthIndex: 7 },
            { selector: '.sepbtn', monthIndex: 8 },
            { selector: '.octbtn', monthIndex: 9 },
            { selector: '.novbtn', monthIndex: 10 },
            { selector: '.decbtn', monthIndex: 11 }
        ];

        monthElements.forEach(element => {
            const monthElement = document.querySelector(element.selector);
            if (monthElement) {
                const monthName = months[element.monthIndex];
                const year = today.getFullYear();
                monthElement.innerText = `${monthName}, ${year}`;
            }
        });
    }

    updateMonthButtons();
});
