document.addEventListener('DOMContentLoaded', function () {
    // Function to extract data
    function extractData() {
      return {
        date: document.querySelector('.empty-units').innerText,
        reading_time: document.querySelector('.div').innerText,
        reading_value: document.querySelector('.kw').innerText,
        last_reading_time: document.querySelector('.div1').innerText,
        last_reading_value: document.querySelector('.kw1').innerText,
        last_reading_date: document.querySelector('.div2').innerText,
        percentage: document.querySelector('.kwh').innerText
      };
    }
  
    // CSV Download
    document.getElementById('downloadCsv').addEventListener('click', function () {
      const data = extractData();
      const csvData = [
        ['Label', 'Value'],
        ['Date', data.date],
        ['Reading Time', data.reading_time],
        ['Reading Value', data.reading_value],
        ['Last Reading Time', data.last_reading_time],
        ['Last Reading Value', data.last_reading_value],
        ['Last Reading Date', data.last_reading_date],
        ['Percentage', data.percentage]
      ];
  
      let csvContent = "data:text/csv;charset=utf-8,";
      csvData.forEach(rowArray => {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
      });
  
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  
    // PDF Download
    document.getElementById('downloadPdf').addEventListener('click', function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const data = extractData();
  
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text("Reports", 10, 20);
  
      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.text("User Details", 10, 30);
  
      const labels = ['Date', 'Reading Time', 'Reading Value', 'Last Reading Time', 'Last Reading Value', 'Last Reading Date', 'Percentage'];
      const values = [data.date, data.reading_time, data.reading_value, data.last_reading_time, data.last_reading_value, data.last_reading_date, data.percentage];
  
      doc.setFontSize(12);
      labels.forEach((label, index) => {
        doc.setFont('helvetica', 'bold');
        doc.text(`${label}:`, 10, 40 + (index * 10));
        doc.setFont('helvetica', 'normal');
        doc.text(values[index], 60, 40 + (index * 10));
      });
  
      doc.save('report.pdf');
    });
  });
  