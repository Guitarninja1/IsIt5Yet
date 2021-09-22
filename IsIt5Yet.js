function isIt5Yet() {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  if (hours >= 17) {
    document.querySelector(
      "p"
    ).textContent = `Drink up me hartys YO HO! You could have been drinking for ${
      hours - 17
    } hours and ${min} minutes`;
  } else {
    if (hours <= 17) {
      document.querySelector("p").textContent = "Have you thought about AA?";
    }
  }
}
document.addEventListener("DOMContentLoaded", isIt5Yet);
