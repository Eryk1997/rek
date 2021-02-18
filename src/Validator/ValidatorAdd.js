export function ValidatorAdd(data) {
  let elNameError = document.getElementById("errorName");
  let elSurnameError = document.getElementById("errorSurname");
  let elEmailError = document.getElementById("errorEmail");

  if (data.includes("create Client")) {
    elNameError.innerHTML = "";
    elSurnameError.innerHTML = "";
    elEmailError.innerHTML = "";
    alert("Dodano");
  } else if (data.includes("update Client")) {
    elNameError.innerHTML = "";
    elSurnameError.innerHTML = "";
    elEmailError.innerHTML = "";
    alert("Zaktualizowano");
  } else {
    //walidacja imienia
    if (data.includes("Name is too short"))
      elNameError.innerHTML = "Imie jest za krótkie";
    else if (data.includes("Name is too long"))
      elNameError.innerHTML = "Imie jest za długie";
    else elNameError.innerHTML = "";

    //walidacja nazwiska
    if (data.includes("Surname is too short"))
      elSurnameError.innerHTML = "Nazwisko jest za krótkie";
    else if (data.includes("Surname is too long"))
      elSurnameError.innerHTML = "Nazwisko jest za długie";
    else elSurnameError.innerHTML = "";

    //walidacja email
    if (data.includes("Email is too short"))
      elEmailError.innerHTML = "Email jest za krótki";
    else if (data.includes("Email is too long"))
      elEmailError.innerHTML = "Email jest za długi";
    else elEmailError.innerHTML = "";
  }
}
