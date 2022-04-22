AOS.init({
  disable: "phone",
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 1500,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
/*function Redirect() {
  window.location.href = "eror404.html";
}*/
function mailClick() {
  alert("На вашу почту " + " " + document.querySelector("#mail").value + " " + "отправлено письмо с дальнейшими инструкциями.");
}

/*function textClick() {
  alert("На вашу почту " + " " + document.querySelector("#exampleFormControlInput2").value + " " + "отправлено письмо с дальнейшими инструкциями." + "\n" + "Ваш комментарий:" + " " + document.querySelector("#exampleFormControlTextarea2").value + " " + "получен!");
}*/
const email = document.getElementById("№validationCustom03");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
