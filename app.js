const inputEl = document.getElementsByTagName("input");
const label = document.querySelectorAll("label")[0];
const labelTwo = document.querySelectorAll("label")[1];
const nextPage = document.querySelector('#next-page-link')

function showLabelOne() {
  label.style.display = "block";
}
function showLabelTwo() {
  labelTwo.style.display = "block";
}

const form = document.querySelector("form");

nextPage.addEventListener('click', () => {
  //Check if all the input fields are filled
  if(inputEl == ''){
    alert(inputEl);
  }
})