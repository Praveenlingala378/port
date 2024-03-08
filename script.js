const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  // Toggle the is-active class for the card based on the target section
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  
  // Set the data-state attribute of the card to the target section
  card.setAttribute("data-state", targetSection);
  
  // Remove is-active class from all sections and buttons
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  
  // Add is-active class to the clicked button and corresponding section
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

// Add click event listeners to all buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

