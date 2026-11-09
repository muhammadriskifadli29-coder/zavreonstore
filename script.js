const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter koleksi berdasarkan kategori.
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;

    productCards.forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
