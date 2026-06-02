const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");

function toggleSwitchFn(event) {
  const isDark = event.target.checked === true;
  html.classList.toggle("dark", isDark)
  localStorage.setItem("isDarkMode", isDark)
}

function getSavedTheme(){
  const isDark = localStorage.getItem("isDarkMode") === "true"
  html.classList.toggle("dark", isDark)
  toggleSwitch.checked = isDark
}

getSavedTheme()

toggleSwitch?.addEventListener("change", toggleSwitchFn)