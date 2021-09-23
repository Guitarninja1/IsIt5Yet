function isIt5Yet() {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  switch (new Date().getHours()) {
    default:
      document.querySelector("#isIt5Yet").textContent =
        "Have you thought about AA?";
      break;
    case 0:
      document.querySelector("#isIt5Yet").textContent = "GO HOME!!!!";
      break;
    case 1:
      document.querySelector("#isIt5Yet").textContent =
        "It's 1am... sleep it off";
      break;
    case 2:
      document.querySelector("#isIt5Yet").textContent =
        "Seriously... It's 2am now... Get some sleep!";
    case 3:
      document.querySelector("#isIt5Yet").textContent =
        "I know Matchbox20 said It's 3am somewhere... that somewhere is here and now, GO TO BED!";
      break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      document.querySelector(
        "#isIt5Yet"
      ).textContent = `Drink up me hartys YO HO! You could have been drinking for ${
        hours - 17
      } hours and ${min} minutes.`;
      break;
  }
}
document.addEventListener("DOMContentLoaded", isIt5Yet);
