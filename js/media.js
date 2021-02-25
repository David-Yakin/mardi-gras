function screenSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var imgSize = w / 1.5;

    // console.log("The window width is: " + w);
    // console.log("The window hight is: " + h);
    // console.log("The img width is: " + imgSize);

    id_slideShow.style.width = parseInt(imgSize) + "px";
}