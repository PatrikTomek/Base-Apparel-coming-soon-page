const email = document.getElementById("email");
const errImg = document.getElementById("error-img");
const errPar = document.getElementById("error-p");

const validateEmail = () => {
  const emailError = () => {
    email.classList.add("error-input");
    errImg.style.display = "flex";
    errPar.style.display = "flex";
  };

  const emailSuccess = () => {
    email.classList.remove("error-input");
    errImg.style.display = "none";
    errPar.style.display = "none";
  };

  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validation.test(email.value)) {
    console.log("Correct!");
    emailSuccess();
    return true;
  } else {
    console.log("Wrong!");
    emailError();
    return false;
  }
};
