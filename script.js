const techList = document.getElementById("items");
const textInput = document.getElementById("text");
const addBtn = document.getElementById("add-btn");
const removeAllLink = document.getElementById("remove-all");


addBtn.addEventListener("click", () => {
  const tech = textInput.value.trim();
  if (tech !== "") {
    const newDiv = document.createElement("div");
    newDiv.classList.add("tech-box");
    newDiv.innerHTML = tech;
    techList.appendChild(newDiv);
    textInput.value = "";
  }
});

removeAllLink.addEventListener("click", () => {
  techList.innerHTML="";
});