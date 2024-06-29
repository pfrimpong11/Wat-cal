
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
   