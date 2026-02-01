(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if ((path === "" && href.endsWith("index.html")) || href.endsWith(path)) a.classList.add("active");
  });
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
})();
