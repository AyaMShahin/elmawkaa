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
// Edit file input style
const input = document.getElementById("inputStyle");
let imageName = document.querySelector(".upload");

input.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];

  imageName.innerText = inputImage.name;
});
