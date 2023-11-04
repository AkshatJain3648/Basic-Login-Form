const inputEl = document.querySelectorAll("input");
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

form.addEventListener("submit", function (event) {
  // Get all of the text input elements on the form.
  const textInputs = document.querySelectorAll('input[type="text"]');

  // Get all of the number input elements on the form.
  const numberInputs = document.querySelectorAll('input[type="number"]');

  // Check if all of the text input elements have some content.
  for (const textInput of textInputs) {
    if (textInput.value === "") {
      event.preventDefault();
      alert("Please enter some content for all of the text input fields.");
      return;
    }
  }

  // Check if all of the number input elements have 10 digits.
  for (const numberInput of numberInputs) {
    if (numberInput.value.length !== 10) {
      event.preventDefault();
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    else{
        nextPage.classList.remove('inactive-link')
    }

  }

  // If all of the validation checks pass, allow the form to be submitted.
  form.submit();
});

//For carousel
new Splide( '#image-carousel' ).mount();
