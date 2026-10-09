const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const typewriter = document.querySelector("#typewriter-text");

if (typewriter && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const descriptions = [
    "Cybersecurity & Computer Science Student",
    "Full-Stack Software Developer",
    "Cybersecurity Specialist",
    "Founder & Entrepreneur",
    "Swimming Coach | 3 Years of Experience",
  ];
  let descriptionIndex = 0;
  let characterIndex = descriptions[0].length;
  let isDeleting = true;

  const typeNextCharacter = () => {
    const description = descriptions[descriptionIndex];

    if (isDeleting) {
      characterIndex -= 1;
      typewriter.textContent = description.slice(0, characterIndex);
      if (characterIndex === 0) {
        isDeleting = false;
        descriptionIndex = (descriptionIndex + 1) % descriptions.length;
        window.setTimeout(typeNextCharacter, 350);
        return;
      }
      window.setTimeout(typeNextCharacter, 35);
      return;
    }

    characterIndex += 1;
    typewriter.textContent = description.slice(0, characterIndex);
    if (characterIndex === description.length) {
      isDeleting = true;
      window.setTimeout(typeNextCharacter, 1800);
      return;
    }
    window.setTimeout(typeNextCharacter, 65);
  };

  window.setTimeout(typeNextCharacter, 1800);
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}