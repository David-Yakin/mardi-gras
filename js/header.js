var navFlag = false;

function onBurgerClick() {
  if (!navFlag) {
    navFlag = true;
    id_nav.classList.remove("d-none");


  } else {
    navFlag = false;
    id_nav.classList.add("d-none");
  }
}

function onSearchBtnClick(){

}
