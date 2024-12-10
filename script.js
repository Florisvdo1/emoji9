document.addEventListener("DOMContentLoaded", () => {
  const placeholders = document.querySelectorAll(".placeholder");
  const emojis = document.querySelectorAll(".emoji");
  const addPlaceholderButtons = document.querySelectorAll(".add-placeholder-btn");

  // Live Clock Functionality
  const currentTime = document.getElementById("current-time");
  function updateClock() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);

  // Drag-and-Drop for Desktop
  emojis.forEach((emoji) => {
    emoji.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.textContent);
    });
  });

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", (e) => e.preventDefault());
    placeholder.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      placeholder.textContent = data;
    });
  });

  // Add New Placeholder
  addPlaceholderButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const newPlaceholder = document.createElement("div");
      newPlaceholder.className = "placeholder";
      newPlaceholder.textContent = "?";
      newPlaceholder.setAttribute("draggable", "true");
      e.target.parentNode.appendChild(newPlaceholder);
    });
  });
});
