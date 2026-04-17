"use strict";


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const scrollButton = document.getElementById("scrollTop");
  if (scrollButton) {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
});

// Add scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTop";
scrollTopBtn.textContent = "↑";
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 15px 20px;
  background: #373535;
  color: white;
  border: 2px solid;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer, click;
  font-style: bold;
  box-shadow:  #3d3939 0px 2px 10px;
  z-index: 99;
  transition: all 1s ease;
`;

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.body.appendChild(scrollTopBtn);

document.getElementById("omnipluse").addEventListener("click",function (){
  window.open("https://omnipluse-all-messages.lovable.app")
})
document.getElementById("devstudio").addEventListener("click",function (){
  window.open("https://devstudio-craft.lovable.app")
})
document.getElementById("plusepay").addEventListener("click",function (){
  window.open("https://plusebanking.lovable.app")
})