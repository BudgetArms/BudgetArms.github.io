document.addEventListener("DOMContentLoaded", () => {
  const events = document.querySelectorAll(".timeline-event");

  events.forEach((event) => {
    event.addEventListener("mouseenter", () => {
      event.style.backgroundColor = "#000";
      event.style.transform = "scaleX(1.5)";
      event.style.transition = "transform 0.2s ease";
    });

    event.addEventListener("mouseleave", () => {
      event.style.backgroundColor = "#191919";
      event.style.transform = "scaleX(1)";
    });
  });
});