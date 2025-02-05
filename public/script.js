// Animate stats cards
gsap.from(".stats-card", {
  duration: 0.8,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
  onComplete: () => {
    gsap.set(".stats-card", { clearProps: "all" });
  }
});

// Animate team cards
gsap.from(".team-card", {
  duration: 0.8,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  delay: 0.4,
  ease: "power3.out",
  onComplete: () => {
    gsap.set(".team-card", { clearProps: "all" });
  }
});

// Array of MOMs
const moms = [
  {
    title: "DAY 1",
    date: "February 5, 2025",
    description: "Divide Task into small tasks and assign them to team members.",
    link:"https://drive.google.com/file/d/1YstHLgXCDpf9QdodZacxupmscPGGghyT/view?usp=sharing"
  },
  {
    title: "DAY 2",
    date: "February 6, 2025",
    description: "Completed the task and shared the code with team members and project manager for the final review. New Features and Task assignments.",
    link:"https://drive.google.com/file/d/1YstHLgXCDpf9QdodZacxupmscPGGghyT/view?usp=sharing",
    link:"https://drive.google.com/file/d/1gqD77M4c4Dwi-NmZVcOaTtGiDOPYo8p4/view?usp=sharing"
  },
  
];

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function() {
  const momCardsContainer = document.getElementById("mom-cards");
  let cardsHTML = "";
  
  moms.forEach((mom) => {
    cardsHTML += `
      <div class="mom-card bg-white/5 dark:bg-black/5 p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="font-semibold">${mom.title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">${mom.date}</p>
          </div>
          <i class="ri-file-text-line text-xl"></i>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${mom.description}</p>
        <a href="${mom.link}">
            <button class="text-sm flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                View Details <i class="ri-arrow-right-line"></i>
                </button>
                </a>
      </div>
    `;
  });

  // Insert all MOM cards at once
  momCardsContainer.innerHTML = cardsHTML;

  // Animate MOM cards after they are added to the DOM
  gsap.from(".mom-card", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    ease: "power3.out",
    onComplete: () => {
      gsap.set(".mom-card", { clearProps: "all" });
    }
  });
});