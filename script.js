let questions = [];

function login() {
  let modme = document.getElementById("modmeid").value;
  let pass = document.getElementById("password").value;

  let p = document.getElementById("welcome");
  let bye = document.getElementById("bye");

  localStorage.setItem("modme", modme);
  localStorage.setItem("pass", pass);

  if (modme === "633161" && pass === "serkan") {
    p.textContent = "Welcome to my House ✌️⭕";
    setTimeout(() => {
      p.textContent = "";
    }, 2000);
  } else {
    bye.textContent = "Get out from my House! (❁´◡`❁)";
    setTimeout(() => {
      bye.textContent = "";
    }, 2000);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    login();
  }
});

document.getElementById("promptButton").addEventListener("click", function () {
  let userInput = prompt("What is your question?");
  if (userInput) {
    questions.push(userInput);
    updateQuestionsDisplay();
  }
});

function updateQuestionsDisplay() {
  document.getElementById("output").innerHTML = questions.join("<br>");
}

window.onload = function () {
  if (localStorage.getItem("modme")) {
    document.getElementById("modmeid").value = localStorage.getItem("modme");
  }
  if (localStorage.getItem("pass")) {
    document.getElementById("password").value = localStorage.getItem("pass");
  }
};
