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
// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const quantity = document.getElementById("quantity");
// const cementRate = document.getElementById("rate");
// const cementType = document.getElementById("type");
// const unit = document.getElementById("unit");
function validation() {
  const errorMsg = document.getElementById("error");
  const regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
  const regName = /\d+$/g; // Javascript reGex for Name validation
  const name = document.forms.RegForm.name.value,
    quantity = document.forms.RegForm.Quantity.value,
    units = document.forms.RegForm.unit.value,
    cementRate = document.forms.RegForm.rate.value,
    cementType = document.forms.RegForm.type.value;

  // if a form field is empty, this function writes a message, and returns false, to prevent the form from being submitted:
  if (name == "" || regName.test(name)) {
    errorMsg.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  }
  if (quantity == "") {
    errorMsg.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  }
  if (
    units.selectedIndex == -1 ||
    cementRate.selectedIndex == -1 ||
    cementType.selectedIndex == -1
  ) {
    errorMsg.innerHTML = "هذه الخانة مطلوبة";
    console.log("Empty");
    return false;
  }
  return true;
}
// Targeting submit button

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   engine(nameID, "هذه الخانة مطلوبة");
//   engine(quantity, "هذه الخانة مطلوبة");
//   engine(cementRate, "هذه الخانة مطلوبة");
//   engine(cementType, "هذه الخانة مطلوبة");
//   engine(unit, "هذه الخانة مطلوبة");
// });

// id will target our id
// serial will target our class [error class]
//message will print a message inside our .error class

// let engine = (id, serial, message) => {
// We want the JavaScript to print a message inside the error class whenever the user submits a blank form
//   if (id.value.trim() === "") {
//     errorMsg.innerHTML = message;
//     return false;
//   } else {
//     errorMsg.innerHTML = "";
//   }
// };
