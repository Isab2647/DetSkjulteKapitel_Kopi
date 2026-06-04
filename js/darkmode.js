const html = document.querySelector("html");
const toggleSwitches = document.querySelectorAll("[role='switch']");

function toggleSwitchFn(event) {
  const isDark = event.target.checked === true;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
  toggleSwitches.forEach(s => s.checked = isDark);
}

function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  html.classList.toggle("dark", isDark);
  toggleSwitches.forEach(s => s.checked = isDark);
}

getSavedTheme();
toggleSwitches.forEach(s => s.addEventListener("change", toggleSwitchFn));