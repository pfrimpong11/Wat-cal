function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  
  const img = new Image();
  img.src = './images/designLogo.png'; // Your local image path
  img.onload = function() {
    const base64String = getBase64Image(img);
    console.log(base64String);
  };
  