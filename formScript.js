"use strict";
const date = document.getElementById("date");
const company = document.getElementById("company");
date.min = new Date().toISOString().split("T")[0];
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

// DisplayPage(pagination, currentPage);
// setUpPagination(pagination);
// Validation of Product Info

function validation() {
  const errorName = document.getElementById("nError"),
    errorQuantity = document.getElementById("qError"),
    errorUnits = document.getElementById("uError"),
    errorRate = document.getElementById("rError"),
    errorType = document.getElementById("tError");
  const regName = /\d+$/g; // Javascript reGex for Name validation
  const name = document.forms.RegForm.name.value,
    quantity = document.forms.RegForm.Quantity.value,
    units = document.forms.RegForm.unit.value,
    cementRate = document.forms.RegForm.rate.value,
    cementType = document.forms.RegForm.type.value;

  // if a form field is empty, this function writes a message, and returns false, to prevent the form from being submitted:
  if (name == "" || regName.test(name)) {
    errorName.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (name !== "") {
    errorName.innerHTML = "";
  }
  if (quantity == "") {
    errorQuantity.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (quantity !== "") {
    errorQuantity.innerHTML = "";
  }
  if (units.selectedIndex == -1) {
    errorUnits.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (units.selectedIndex !== -1) {
    errorUnits.innerHTML = "";
    // return true;
  }
  if (cementRate.selectedIndex == -1) {
    errorRate.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (cementRate.selectedIndex !== -1) {
    errorRate.innerHTML = "";
    // return true;
  }
  if (cementType.selectedIndex == -1) {
    errorType.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (cementType.selectedIndex !== -1) {
    errorType.innerHTML = "";
    // return true;
  }
  return (check = true);
}
function projectValidate() {
  const errorLocation = document.getElementById("lError"),
    errorAddress = document.getElementById("adError"),
    errorLevel = document.getElementById("levError"),
    errorDate = document.getElementById("dError");
  // D = document.getElementById("tError");

  const location = document.forms.RegForm.place.value,
    address = document.forms.RegForm.address.value,
    levels = document.forms.RegForm.level.value;
  // date = document.forms.RegForm.rate.value,

  // Create a new Date that converts the input date
  let dateValue = new Date(date.value);
  // Extract pieces of the date:
  let pattern =
    /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;

  if (location.selectedIndex == -1) {
    errorLocation.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (location.selectedIndex !== -1) {
    errorLocation.innerHTML = "";
    // return true;
  }

  if (address == "") {
    errorAddress.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (address !== "") {
    errorAddress.innerHTML = "";
  }
  if (levels.selectedIndex == -1) {
    errorLevel.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (levels.selectedIndex !== -1) {
    errorLevel.innerHTML = "";
    // return true;
  }
  // if (!pattern.test(dateValue) || dateValue == "") {
  //   errorDate.innerHTML = "هذه الخانة مطلوبة";
  // console.log("Empty");
  //   return false;
  // } else if (dateValue !== "") {
  //   errorDate.innerHTML = "";
  // return true;
}
function InfoValidation() {
  const errorCompany = document.getElementById("cError"),
    errorUsername = document.getElementById("fillError"),
    errorPhone = document.getElementById("phError"),
    errorEmail = document.getElementById("eError");

  const companyName = document.forms.RegForm.company.value,
    username = document.forms.RegForm.fill.value,
    phoneNum = document.forms.RegForm.phone.value,
    userEmail = document.forms.RegForm.email.value;
  const regPhone = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g; // Javascript reGex for Phone Number validation.
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Javascript reGex for email validation.

  if (companyName == "") {
    errorCompany.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (companyName !== "") {
    errorCompany.innerHTML = "";
    company.style.border = "1px solid #28A745";
  }
  if (username == "") {
    errorUsername.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (username !== "") {
    errorUsername.innerHTML = "";
    username.style.border = "1px solid #28A745;";
  }

  if (phoneNum == "") {
    errorPhone.innerHTML = "هذه الخانة مطلوبة";
    return false;
  } else if (!regPhone.test(phoneNum)) {
    errorPhone.innerHTML = `برجاء ادخال رقم موبايل واتساب صحيح (بالأرقام الانجليزية) يعمل في مصر بدون كود الدولة مثال: 01012345678`;
    return false;
  } else if (phoneNum !== "" || regPhone.test(phoneNum)) {
    errorPhone.innerHTML = "";
  }

  if (userEmail == "") {
    errorEmail.innerHTML = "هذه الخانة مطلوبة";
    // console.log("Empty");
    return false;
  } else if (!mailformat.test(userEmail)) {
    errorEmail.innerHTML = `برجاء ادخال ايميل صحيح (بالانجليزية)  مثال: ahmed@gmail.com`;
    return false;
  } else if (userEmail !== "" || mailformat.test(userEmail)) {
    errorEmail.innerHTML = "";
  }
}
