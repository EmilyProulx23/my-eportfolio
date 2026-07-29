// Mobile navigation toggle
const nav = document.getElementById("siteNav");
const toggle = document.getElementById("navToggle");

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
