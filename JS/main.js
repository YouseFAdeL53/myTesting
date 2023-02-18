let myScrollTopPage = document.querySelector(".scrollTop");

// get ScrollHeight

let ScrollHeights = document.documentElement.scrollHeight;

// clientHeight
let clientHeight = document.documentElement.clientHeight;

// Difference

let deffHeight = ScrollHeights - clientHeight;

window.addEventListener("scroll", (e) => {

  let scrollTop = document.documentElement.scrollTop;


  myScrollTopPage.style.width = `${(scrollTop / deffHeight) * 100}%`



})

let myHeader = document.querySelector(".header-area");
window.addEventListener("scroll", () => {
  if (window.scrollY > 72) {
    myHeader.classList.add("headerFixed")
  } else {
    myHeader.classList.remove("headerFixed")
  }
})
// Click On Toggle Show ul
let toggle = document.querySelector(".toggle"),
  myUl = document.querySelector(".links");
toggle.onclick = function () {
  if (this.classList.contains("bx-menu-alt-right")) {
    this.classList.replace("bx-menu-alt-right", "bx-x");
  } else {
    this.classList.replace("bx-x", "bx-menu-alt-right");
  }
  // Add Class to ul
  myUl.classList.toggle("open");
}
document.addEventListener("click", (e) => {
  if (e.target != toggle && e.target != myUl) {
    myUl.classList.remove("open");
    if (toggle.classList.contains("bx-x")) {
      toggle.classList.replace("bx-x", "bx-menu-alt-right")
    }
  }
})
myUl.addEventListener("click", (e) => {
  e.stopPropagation();
})
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector('.info').classList.add("show-info")
  }, 5000);
  let myButton = document.querySelectorAll(".info .mybtns button");
  let text = document.querySelector(".info > h4");
  myButton.forEach(el => {
    el.addEventListener("click", (e) => {
      // condition
      if (e.target.dataset.question === "yes") {
        document.querySelector(".info .inputs").classList.add("show");
        e.target.classList.add("active");
        document.querySelector(".info .mybtns .no").remove();
        text.innerHTML = "Write Your Name"
      } else {
        text.innerHTML = "Okay Website Loading"
        document.querySelector(".info .mybtns .no").classList.add("active");
        document.querySelector(".info .mybtns .yes").remove();
        setInterval(() => {
          document.querySelector(".loader").classList.add("load-close");
          document.body.style.overflow = "auto";
        }, 3000)
      }
    })
  });
  // select
  let submitButton = document.querySelector(".inputs .submit");
  let textInput = document.getElementById("inputText");
  let typeText = document.querySelector(".type")
  submitButton.onclick = function () {
    if (textInput.value !== "") {
      text.innerHTML = `Welcome ${textInput.value}`;
      typeText.innerHTML = `${textInput.value}`
      setInterval(() => {
        document.querySelector(".loader").classList.add("load-close");
        document.body.style.overflow = "auto";
      }, 3000)
    } else {
      alert("Write Your Name")
    }
  }
})