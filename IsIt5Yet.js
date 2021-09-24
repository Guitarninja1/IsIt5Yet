function hideDiv() {
  switch (new Date().getHours()) {
  }
  document.querySelector("[data-aa]").setAttribute("hidden", true);
}
function showDiv() {
  document.querySelector("[data-aa]").removeAttribute("hidden");
}
function isIt5Yet() {
  const now = new Date();
  switch (new Date().getHours()) {
    case 0:
      hideDiv();
      document.querySelector("[data-p]").textContent =
        "GO HOME!!!! Or you can deal with a random gru since it's not 5 yet.";
      break;
    case 1:
      hideDiv();
      document.querySelector("[data-p]").textContent =
        "It's 1am... sleep it off.";
      break;
    case 2:
      hideDiv();
      document.querySelector("[data-p]").textContent =
        "Seriously... It's 2am now... Get some sleep!";
    case 3:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Not yet, but I always was told that ghosts are most active right now...";
      break;
    case 4:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Not even close. Either you work the night shift or you are about to have a really rough day.";
      break;
    case 5:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Have you ever looked at a pudding cup and though... Man... String theory is wierd...? Also, It's still not 5.";
      break;
    case 6:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Slow your roll. You have 11 hours left buddy.";
      break;
    case 7:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Lets be honest... we both know it's not 5 yet...";
      break;
    case 8:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Still a ways to go yet.";
      break;
    case 9:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Nope. Not yet. Not by a long shot.";
      break;
    case 10:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Time for second breakfast! Though it's still a while before 5";
      break;
    case 11:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Nope. But it's almost lunch time!";
      break;
    case 12:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Not yet, but it is lunch time";
      break;
    case 13:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Maybe watch a movie or something? Still a ways off yet.";
      break;
    case 14:
      showDiv();
      document.querySelector("[data-p]").textContent = "time > 5";
      break;
    case 15:
      showDiv();
      document.querySelector("[data-p]").textContent =
        "Maybe try hamboning for the next 2 hours? You know... to kill time.";
      break;
    case 16:
      showDiv();
      document.querySelector("[data-p]").textContent = "Almost There!!!!";
      break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      hideDiv();
      const hours = now.getHours();
      const min = now.getMinutes();
      document.querySelector(
        "[data-p]"
      ).textContent = `Drink up me hartys YO HO! You could have been drinking for ${
        hours - 17
      } hours and ${min} minutes.`;
      break;
    default:
      document.querySelector("[data-p]").textContent =
        "Have you thought about AA?";
      break;
  }
}
document.addEventListener("DOMContentLoaded", isIt5Yet);
