document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function updateCalendar() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();

        const dateElements = [
            { dateClass: '.june1', dayClass: '.sunday' },
            { dateClass: '.june2', dayClass: '.monday' },
            { dateClass: '.june3', dayClass: '.tuesday' },
            { dateClass: '.june4', dayClass: '.wednesday' },
            { dateClass: '.june5', dayClass: '.thursday' },
            { dateClass: '.june6', dayClass: '.friday' },
            { dateClass: '.june7', dayClass: '.saturday' },
            { dateClass: '.june8', dayClass: '.sunday1' },
            { dateClass: '.june9', dayClass: '.monday1' },
            { dateClass: '.june10', dayClass: '.tuesday1' },
            { dateClass: '.june11', dayClass: '.wednesday1' },
            { dateClass: '.june12', dayClass: '.thursday1' },
            { dateClass: '.june13', dayClass: '.friday1' },
            { dateClass: '.june14', dayClass: '.saturday1' }
        ];

        dateElements.forEach((element, index) => {
            let dateElement = document.querySelector(element.dateClass);
            let dayElement = document.querySelector(element.dayClass);

            if (dateElement && dayElement) {
                let currentDate = new Date(today);

                // Update for current month
                if (month === 5) {
                    currentDate.setDate(today.getDate() - index);
                } 
                // Update for past months
                else if (month < 5) {
                    currentDate.setMonth(month - (index / 14));
                    currentDate.setDate(15 - (index % 14));
                } 
                // Update for future months
                else {
                    currentDate.setMonth(month + Math.floor(index / 14));
                    currentDate.setDate((index % 14) + 1);
                }

                let dayName = daysOfWeek[currentDate.getDay()];
                let dayDate = currentDate.getDate();
                let monthName = currentDate.toLocaleString('default', { month: 'long' });

                dateElement.innerText = `${dayDate} ${monthName}`;
                dayElement.innerText = dayName;
            }
        });
    }

    updateCalendar();
});
