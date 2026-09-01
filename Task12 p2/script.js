var image = document.getElementById("myImage");
var btn = document.getElementById("changeImg");

btn.addEventListener("click", function () {

    if (image.src.includes("1.jpg")) {
        image.src = "image/image2.jpg.png";
    } else {
        image.src = "image/image1.jpg.png";
    }

});
