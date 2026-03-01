// ===== LOAD COMPONENTS =====
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("nav-container", "/components/nav.html");
  await loadComponent("footer-container", "/components/footer.html");
  await loadComponent("contact-container", "/components/contact-overlay.html");

  setActiveLink();
});

// ===== ACTIVE LINK =====
function setActiveLink() {
  const path = window.location.pathname;

  document.querySelectorAll("[data-link]").forEach(link => {
    if (
      (path.includes("services") && link.dataset.link === "services") ||
      (path.includes("machinery") && link.dataset.link === "machinery") ||
      ((path === "/" || path.includes("index")) && link.dataset.link === "home")
    ) {
      link.classList.add("active");
    }
  });
}

// ===== CONTACT =====
function openContact() {
  document.getElementById("contactOverlay")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContact() {
  document.getElementById("contactOverlay")?.classList.remove("active");
  document.body.style.overflow = "";
}