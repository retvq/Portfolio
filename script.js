function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Handle dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Apply saved dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Toggle dark mode and save preference
darkModeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode); // Save preference
});
const darkModeToggleMobile = document.getElementById("dark-mode-toggle-mobile");

// Apply saved dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Toggle dark mode and save preference
darkModeToggleMobile.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode); // Save preference
});
