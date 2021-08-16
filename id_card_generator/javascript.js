
const preview = document.getElementById("preview");
preview.addEventListener("click",prev);

function prev(){
    const inName = document.getElementById("inName").value;
    const inCollage = document.getElementById("inCollage").value;
    const inLocation = document.getElementById("inLocation").value;

    const name = document.getElementById("name");
    const collage = document.getElementById("collage");
    const location = document.getElementById("location");

    name.innerHTML = inName;
    collage.innerHTML = inCollage;
    location.innerHTML = inLocation;

    const canvas = document.getElementById("result");

    canvas.height = canvas.width / 1.616;
    const ctx = canvas.getContext("2d");
    ctx.font = "20px Ariel";
   
    ctx.fillStyle = "#159";
    ctx.rect(0, 0, 300, 56);
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.fillText("Generated ID Card", 75, 35);
    ctx.font = "16px Arial";
 //   ctx.fillText("Undergraduate", 15, 45);   

    ctx.fillStyle ="#000";
    ctx.fillText(name.innerHTML, 110, 90);
    ctx.fillText(collage.innerHTML, 110, 115);
    ctx.fillText(location.innerHTML, 110, 140);

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 10, 65, 80, 105);


}

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
 }

