const cards = document.querySelectorAll(".card");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3")?.textContent || "Details";
    const company = card.dataset.company || "";
    const duration = card.dataset.duration || "";
    const details = card.dataset.details || "";

    modalTitle.textContent = title;
    modalContent.innerHTML = `
      <p><strong>${company}</strong> | ${duration}</p>
      ${details}
    `;

    openModal();
  });
});

closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function openModal() {
  modalOverlay.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalOverlay.style.display = "none";
  document.body.classList.remove("modal-open");
}
// Placeholder for future enhancements
console.log("Portfolio loaded");

