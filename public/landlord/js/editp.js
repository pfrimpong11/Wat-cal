
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
      input.placeholder = `Enter room name`;

      container.appendChild(label);
      container.appendChild(input);

      document.querySelector('.add-room-container').appendChild(container);

      roomIndex++;
    }
   