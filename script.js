const phases = {
  gather: {
    number: "01",
    title: "Gather",
    copy: "Hermes gathers candidate stories from a source catalogue and writes structured JSON for the deterministic pipeline.",
  },
  validate: {
    number: "02",
    title: "Validate",
    copy: "Runs freshness, source metadata, cross-reference, archive, consistency, and editorial-count checks before ranking.",
  },
  rank: {
    number: "03",
    title: "Rank & format",
    copy: "Ranks the validated stories by importance, caps the edition at 12, and formats it for delivery.",
  },
  deliver: {
    number: "04",
    title: "Write & deliver",
    copy: "Writes the latest edition and dated archive, then optionally invokes Hermes for delivery.",
  },
};

const steps = document.querySelectorAll(".pipeline-step");
const phaseNumber = document.querySelector("#phase-number");
const phaseTitle = document.querySelector("#phase-title");
const phaseCopy = document.querySelector("#phase-copy");

steps.forEach((step) => {
  step.addEventListener("click", () => {
    const phase = phases[step.dataset.step];

    steps.forEach((item) => {
      const selected = item === step;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    phaseNumber.textContent = phase.number;
    phaseTitle.textContent = phase.title;
    phaseCopy.textContent = phase.copy;
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
