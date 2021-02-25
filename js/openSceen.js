var OpenSceen_ar = [{
    backgroundImag: "../images/openScreen/1.jpg",
    headline: "Mardi Gras New Orleans Costume parade",
    text: `The parades in New Orleans are organized by social clubs known as
    krewes most follow the same parade schedule and route each year.`
  },

  {
    backgroundImag: "../images/openScreen/2.jpg",
    headline: "Mardi Gras New Museums",
    text: `The parades are organized by social clubs known as bla bla bla`

  },
  {
    backgroundImag: "../images/openScreen/3.jpg",
    headline: "Mardi Gras New Orleans bars",
    text: `New Orleans bars... `

  },
  {
    backgroundImag: "../images/openScreen/4.jpg",
    headline: "Mardi Gras New Orleans sreet",
    text: `New Orleans sreet ara bla bla bla`

  },
  {
    backgroundImag: "../images/openScreen/5.jpg",
    headline: "Mardi Gras New Orleans Outdoors",
    text: `The parades in New Orleans are organized by social clubs known as`

  }

]

function startSlide() {
  timerIndex = setInterval(changeSlidePic, 3000);
}

function changeSlidePic() {
  counter++
  if (counter <= 5) {
    openSceenImg.src = "images/openScreen/" + counter + ".jpg";
    openScreenH3.innerHTML = OpenSceen_ar[counter - 1].headline;
    openScreenP.innerHTML = OpenSceen_ar[counter - 1].text;
  } else {
    counter = 1;
    openSceenImg.src = "images/openScreen/" + counter + ".jpg";
    openScreenH3.innerHTML = OpenSceen_ar[counter].headline;
    openScreenP.innerHTML = OpenSceen_ar[counter].text;
  }
}