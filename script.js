const phases = {
  gather: {
    number: "01",
    title: "Gather",
    copy: "Sweeps Tier 1, Tier 2, and Tier 3 sources to build a candidate list for the daily edition.",
  },
  validate: {
    number: "02",
    title: "Validate",
    copy: "Runs source, cross-reference, archive, consistency, and editorial checks before any story can ship.",
  },
  rank: {
    number: "03",
    title: "Rank & format",
    copy: "Prioritises the most useful stories, applies editorial rules, and prepares a concise delivery-ready briefing.",
  },
  deliver: {
    number: "04",
    title: "Write & deliver",
    copy: "Writes the final edition, records the editorial note, and sends the completed daily briefing through the chosen channel.",
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

document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
document.querySelector("#year").textContent = new Date().getFullYear();
