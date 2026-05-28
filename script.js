```javascript id="x5u5e6"
// ============================
// LANGUAGE SYSTEM
// ============================

let currentLanguage = "en";

const translations = {

  en: {

    heroTitle:
      "Agile Transformation & Digital Innovation Leader",

    heroText:
      "Helping banks and enterprises accelerate innovation through Agile, AI and high-performing teams.",

    aboutTitle:
      "About Me",

    aboutText:
      "Professional with experience leading Agile transformation, digital innovation and AI adoption initiatives in banking and insurance organizations.",

    servicesTitle:
      "Professional Services",

    service1Title:
      "Agile Coaching",

    service1Text:
      "Scrum implementation, Agile frameworks and team coaching.",

    service2Title:
      "Digital Innovation",

    service2Text:
      "Innovation strategies focused on productivity and competitiveness.",

    service3Title:
      "AI Adoption",

    service3Text:
      "AI integration for enterprise transformation and optimization.",

    service4Title:
      "OKRs & Metrics",

    service4Text:
      "KPI definition, OKRs, flow metrics and performance visibility.",

    experienceTitle:
      "Experience",

    exp1:
      "Agile Coach and transformation initiatives in banking and insurance.",

    exp2:
      "Agile implementation, coaching and organizational transformation.",

    skillsTitle:
      "Core Skills",

    contactTitle:
      "Contact",

    contactText:
      "Open to consulting, Agile coaching, digital transformation and innovation opportunities."

  },

  es: {

    heroTitle:
      "Líder en Transformación Ágil e Innovación Digital",

    heroText:
      "Ayudando a bancos y empresas a acelerar la innovación mediante Agile, IA y equipos de alto rendimiento.",

    aboutTitle:
      "Sobre Mí",

    aboutText:
      "Profesional con experiencia liderando iniciativas de transformación ágil, innovación digital y adopción de inteligencia artificial en organizaciones de banca y seguros.",

    servicesTitle:
      "Servicios Profesionales",

    service1Title:
      "Agile Coaching",

    service1Text:
      "Implementación Scrum, frameworks ágiles y coaching de equipos.",

    service2Title:
      "Innovación Digital",

    service2Text:
      "Estrategias de innovación enfocadas en productividad y competitividad.",

    service3Title:
      "Adopción de IA",

    service3Text:
      "Integración de inteligencia artificial para transformación empresarial y optimización.",

    service4Title:
      "OKRs y Métricas",

    service4Text:
      "Definición de KPIs, OKRs, métricas de flujo y visibilidad de desempeño.",

    experienceTitle:
      "Experiencia",

    exp1:
      "Agile Coach e iniciativas de transformación en banca y seguros.",

    exp2:
      "Implementación ágil, coaching y transformación organizacional.",

    skillsTitle:
      "Habilidades Principales",

    contactTitle:
      "Contacto",

    contactText:
      "Disponible para consultoría, coaching ágil, transformación digital e innovación."

  }

};

// ============================
// CHANGE LANGUAGE
// ============================

function updateLanguage(lang) {

  currentLanguage = lang;

  const elements = translations[lang];

  Object.keys(elements).forEach(id => {

    const element = document.getElementById(id);

    if (element) {
      element.textContent = elements[id];
    }

  });

}

// ============================
// TOGGLE LANGUAGE BUTTON
// ============================

const langToggle = document.getElementById("langToggle");

if (langToggle) {

  langToggle.addEventListener("click", () => {

    if (currentLanguage === "en") {

      updateLanguage("es");

    } else {

      updateLanguage("en");

    }

  });

}

// ============================
// SCROLL ANIMATIONS
// ============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

sections.forEach(section => {

  section.classList.add("hidden-section");

  observer.observe(section);

});

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ============================
// CURRENT YEAR AUTO UPDATE
// ============================

const footer = document.querySelector("footer p");

if (footer) {

  footer.innerHTML =
    `© ${new Date().getFullYear()} Gabriel Huayamave`;

}

// ============================
// INITIAL LOAD
// ============================

document.addEventListener("DOMContentLoaded", () => {

  updateLanguage("en");

  document.body.classList.add("loaded");

});
```
