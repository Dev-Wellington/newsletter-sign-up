const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const btn = document.querySelector(".btn-subscribe");
const sucess = document.querySelector(".sucess")
const dismiss = document.querySelector(".dismiss")
const hiddenContent = document.querySelectorAll("main,header");
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


btn.addEventListener("click",(e)  => {
    e.preventDefault();
    hiddenContent.forEach((content) => {
        content.style.display = "none";
    });
    sucess.style.display = "block";
    sucess.style.display = "flex";

});
dismiss.addEventListener("click", () => {
    hiddenContent.forEach((content) => {
        content.style.display = "block";
    });
    sucess.style.display = "none";
});

btn.disabled = true;

email.addEventListener("input", function (event) {
    event.preventDefault()
    if (!validateEmail(email.value)) {
        email.style.border = "1px solid hsl(4, 100%, 67%)";
        email.style.outline = "hsl(4, 100%, 67%)";
        email.style.color = "hsl(4, 100%, 67%)";
        emailError.textContent = "Valid email required";
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
    } else {
        email.style.border = "";
        email.style.outline = "";
        email.style.color = "";
        emailError.textContent = " ";
        btn.disabled = false;
        
    }
});