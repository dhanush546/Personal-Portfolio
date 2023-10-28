function displayWelcomeMessage() {
    console.log("Welcome to Genius In You With Genius 2023!");
  }
  function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Form submitted with name:", name, "and email:", email);
  }
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", handleSubmit);
  
