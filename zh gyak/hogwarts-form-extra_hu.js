// 8. alpont: szuletesi datum ellenorzese
function calculateYearsSince(dateString) {
  const date = new Date(dateString);
  const diff = Date.now() - date.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

console.log("Életkor:" + calculateYearsSince("1961-07-04"));

const form = document.getElementById("hogwarts-form");

// a form dob elementjének eseménykezelője, ami a dob mezőbe írt érték változásakor fut le
form.dob.addEventListener("input", function (event) {
  console.log("Megadott születési dátum:" + form.dob.value);
  const ageInYears = calculateYearsSince(form.dob.value);
  console.log("Életkor:" + ageInYears);
  if (ageInYears >= 11) {
    // a form dob elementjének érvényességét állítja be
    form.dob.setCustomValidity("");
  } else {
    form.dob.setCustomValidity(
      "Túl fiatal vagy még Roxforthoz, az alsó korhatár 11 év"
    );
  }
});
// 8. alpont vege

// 6. alpont: házak kiválasztása
function setHouseStatus(status) {
  const houses = document.querySelectorAll("div input[name=house]");
  for (let i = 0; i < houses.length; i++) {
    houses[i].disabled = !status;
  }
}

const houseList = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
function clearRadioButtons() {
  for (let i = 0; i < houseList.length; i++) {
    document.getElementById(houseList[i]).checked = false;
  }
}

const teszlek = document.getElementById("teszlekValasztas");
teszlek.addEventListener("click", function (event) {
  if (teszlek.checked) {
    console.log("Teszlek gomb be van kapcsolva");
    setHouseStatus(false);
  } else {
    console.log("Teszlek gomb ki van kapcsolva");
    setHouseStatus(true);
  }
});
// 6. alpont vege

// 7. alpont: jelszo ismetlese
const passwordAgain = document.getElementById("passwordAgain");
const password = document.getElementById("password");
document.getElementById("passwordAgain").addEventListener("input", function () {
  if (passwordAgain.value !== password.value) {
    passwordAgain.setCustomValidity("A két jelszó nem egyezik meg!");
  } else {
    passwordAgain.setCustomValidity("");
  }
});
