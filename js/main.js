var counter;

function init() {
  counter = 1

  startSlide(); // קורא לפונקציה של ההשהייה במעבר תמונות

  screenSize();// פונקציה למדידת המסך

}


// קורא לפונקציה כדי למדוד את גובה ורוחב המסך
window.addEventListener("resize", function () {
  screenSize();
})


