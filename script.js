const email = document.querySelector(".email");
const form = document.querySelector(".form");
const emptyMessage = document.querySelector(".empty-email-message");
const invalidMessage = document.querySelector(".invalid-email-message");
const errorIcon = document.querySelector(".icon-error");

form.addEventListener("submit", (e) => {
  if (!email.value) {
    e.preventDefault();
    emptyMessage.textContent = "You must type in an email";
    errorIcon.style.display = "block";
  } else {
    emptyMessage.textContent = "";
    errorIcon.style.display = "none";
  }
});

email.addEventListener("input", () => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      invalidMessage.textContent = "";
      errorIcon.style.display = "none";
    } else {
      invalidMessage.textContent = "Please provide a valid email";
      errorIcon.style.display = "block";
      emptyMessage.textContent = "";
    }
  } else {
    emptyMessage.textContent = "You must type in an email";
    errorIcon.style.display = "block";
    invalidMessage.textContent = "";
  }
});
