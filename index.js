let input = document.querySelector(".emailInput");
let notifyBtn = document.querySelector(".notifyBtn");
let errorDiv = document.querySelector(".errorDiv");

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

input.addEventListener("keyup", function () {
  if (this.value.length === 0) {
    errorDiv.style.display = "none";
  }
});

notifyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let email = input.value;

  if (!validateEmail(email)) {
    errorDiv.innerHTML = "Please provide a valid email address";
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
});
