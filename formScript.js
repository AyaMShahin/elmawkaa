"use strict";

// Material Input List
const show = () => {
  document.querySelector(".materials").classList.add("active");
};

const hide = () => {
  document.querySelector(".materials").classList.remove("active");
};
// ٍSearch for products
function search() {
  let searchBar = document
    .querySelector(".search-material")
    .value.toUpperCase();
  // let materialItem = document.querySelector(".materials");
  let materialName = document.getElementsByTagName("a");
  for (let index = 0; index < materialName.length; index++) {
    if (materialName[index].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
      materialName[index].style.display = "";
    } else {
      materialName[index].style.display = "none";
    }
  }
}

// Validation of Product Info
function validation() {
  const errorName = document.getElementById("nError"),
    errorQuantity = document.getElementById("qError"),
    errorUnits = document.getElementById("uError"),
    errorRate = document.getElementById("rError"),
    errorType = document.getElementById("tError");
  const regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
  const regName = /\d+$/g; // Javascript reGex for Name validation
  const name = document.forms.RegForm.name.value,
    quantity = document.forms.RegForm.Quantity.value,
    units = document.forms.RegForm.unit.value,
    cementRate = document.forms.RegForm.rate.value,
    cementType = document.forms.RegForm.type.value;

  // if a form field is empty, this function writes a message, and returns false, to prevent the form from being submitted:
  if (name == "" || regName.test(name)) {
    errorName.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  } else if (name !== "") {
    errorName.innerHTML = "";
  }
  if (quantity == "") {
    errorQuantity.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  } else if (quantity !== "") {
    errorQuantity.innerHTML = "";
  }
  if (units.selectedIndex == -1) {
    errorUnits.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  } else if (units.selectedIndex !== -1) {
    errorUnits.innerHTML = "";
    // return true;
  }
  if (cementRate.selectedIndex == -1) {
    errorRate.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  } else if (cementRate.selectedIndex !== -1) {
    errorRate.innerHTML = "";
    // return true;
  }
  if (cementType.selectedIndex == -1) {
    errorType.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  } else if (cementType.selectedIndex !== -1) {
    errorType.innerHTML = "";
    // return true;
  }
  return true;
}
