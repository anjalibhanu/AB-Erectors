console.log("AB Erectors website loaded!");

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   REVIEW STARS
========================================================= */

document.querySelectorAll(".review-card").forEach((card) => {
  const starsContainer = card.querySelector(".stars");

  if (!starsContainer) {
    return;
  }

  const rating = Math.max(0, Math.min(5, Number(card.dataset.rating) || 0));

  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  starsContainer.textContent = stars;
});

/* =========================================================
   LANGUAGE TRANSLATIONS
========================================================= */

window.setLanguage = function (language) {
  const translations = {
    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      reviews: "Reviews",
      contact: "Contact",

      heroTag: "STRUCTURAL FABRICATION & ERECTION",

      heroTitle: "Building Strength.<br><span>Creating With Precision.</span>",

      heroDescription:
        "With 25+ years of experience, AB Erectors delivers reliable structural steel fabrication, erection and civil construction solutions for industrial and commercial projects across Bengaluru.",

      experience: "of Experience",

      servicesBtn: "Our Services",

      contactBtn: "Contact Us",

      heroNote:
        "Trusted workmanship • Safety-focused execution • Timely delivery",

      aboutTag: "ABOUT US",

      aboutTitle: "Built for strength. <span>Made to last.</span>",

      aboutText1:
        "AB Erectors is a dedicated construction and fabrication team committed to delivering strong, durable and cost-effective solutions.",

      aboutText2:
        "From structural steel fabrication and erection to civil construction works, we focus on quality workmanship, safety, precision and timely project delivery.",

      servicesTag: "WHAT WE DO",

      servicesTitle: "Our <span>Services</span>",

      servicesData: [
        {
          name: "Contract Works",
          description:
            "Reliable contracting, erection and construction work for different projects.",
        },
        {
          name: "Staircase Works",
          description:
            "Fabrication and installation of durable staircase structures.",
        },
        {
          name: "Steel Fabrication",
          description:
            "Custom structural and metal fabrication based on project specifications.",
        },
        {
          name: "Welding Work",
          description:
            "Professional welding and metal joining work for structural and project requirements.",
        },
      ],

      projectsTag: "OUR WORK",

      projectsTitle: "Recent <span>Projects</span>",

      projectsEmpty: "Our project gallery will be updated with recent work.",

      reviewsTag: "CLIENT FEEDBACK",

      reviewsTitle: "What Our <span>Clients Say</span>",

      reviewClient: "Client",

      noReviews: "Client reviews will appear here.",

      contactTag: "GET IN TOUCH",

      contactTitle: "Let's discuss your <span>project.</span>",

      contactIntro:
        "Have a fabrication, erection or construction requirement? Get in touch with AB Erectors to discuss your project.",

      call: "Call Us",

      whatsapp: "WhatsApp",

      email: "Email",

      location: "Location",

      callNow: "Call Now",

      whatsappUs: "WhatsApp Us",

      sendEmail: "Send Email",

      enquiryButton: "Send Enquiry",

      namePlaceholder: "Your Name",

      phonePlaceholder: "Phone Number",

      emailPlaceholder: "Email (optional)",

      messagePlaceholder: "Tell us about your project...",

      footerTitle: "AB ERECTORS",

      footerSubtitle: "Fabrication & Contracting",

      footerLocation: "Bengaluru, Karnataka",
    },

    /* =====================================================
       MALAYALAM
    ===================================================== */

    ml: {
      home: "ഹോം",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      services: "സേവനങ്ങൾ",
      projects: "പ്രോജക്ടുകൾ",
      reviews: "അഭിപ്രായങ്ങൾ",
      contact: "ബന്ധപ്പെടുക",

      heroTag: "സ്ട്രക്ചറൽ ഫാബ്രിക്കേഷൻ & എറക്ഷൻ",

      heroTitle:
        "ശക്തമായ നിർമ്മാണം.<br><span>കൃത്യതയോടെ സൃഷ്ടിക്കുന്നു.</span>",

      heroDescription:
        "25 വർഷത്തിലേറെ പരിചയത്തോടെ, ബെംഗളൂരുവിലെ വ്യാവസായിക, വാണിജ്യ പദ്ധതികൾക്കായി വിശ്വസനീയമായ സ്ട്രക്ചറൽ സ്റ്റീൽ ഫാബ്രിക്കേഷൻ, എറക്ഷൻ, സിവിൽ കൺസ്ട്രക്ഷൻ സേവനങ്ങൾ AB Erectors നൽകുന്നു.",

      experience: "പരിചയം",

      servicesBtn: "ഞങ്ങളുടെ സേവനങ്ങൾ",

      contactBtn: "ബന്ധപ്പെടുക",

      heroNote:
        "വിശ്വസനീയമായ ജോലി • സുരക്ഷയ്ക്ക് മുൻഗണന • സമയബന്ധിതമായ പൂർത്തീകരണം",

      aboutTag: "ഞങ്ങളെക്കുറിച്ച്",

      aboutTitle:
        "ശക്തിക്കായി നിർമ്മിച്ചത്. <span>നീണ്ടുനിൽക്കാൻ തയ്യാറാക്കിയത്.</span>",

      aboutText1:
        "AB Erectors ശക്തവും ഈടുറ്റതും ചെലവ് കുറഞ്ഞതുമായ പരിഹാരങ്ങൾ നൽകുന്നതിന് പ്രതിജ്ഞാബദ്ധമായ ഒരു നിർമ്മാണ, ഫാബ്രിക്കേഷൻ ടീമമാണ്.",

      aboutText2:
        "സ്ട്രക്ചറൽ സ്റ്റീൽ ഫാബ്രിക്കേഷൻ, എറക്ഷൻ മുതൽ സിവിൽ കൺസ്ട്രക്ഷൻ ജോലികൾ വരെ, ഗുണമേന്മയുള്ള ജോലി, സുരക്ഷ, കൃത്യത, സമയബന്ധിതമായ പൂർത്തീകരണം എന്നിവയിൽ ഞങ്ങൾ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.",

      servicesTag: "ഞങ്ങൾ ചെയ്യുന്നത്",

      servicesTitle: "ഞങ്ങളുടെ <span>സേവനങ്ങൾ</span>",

      servicesData: [
        {
          name: "കരാർ ജോലികൾ",
          description:
            "വിവിധ പദ്ധതികൾക്കായി വിശ്വസനീയമായ കരാർ, എറക്ഷൻ, നിർമ്മാണ പ്രവർത്തനങ്ങൾ.",
        },
        {
          name: "പടിക്കൽ ജോലികൾ",
          description: "ഈടുറ്റ പടിക്കൽ ഘടനകളുടെ ഫാബ്രിക്കേഷനും ഇൻസ്റ്റാളേഷനും.",
        },
        {
          name: "സ്റ്റീൽ ഫാബ്രിക്കേഷൻ",
          description:
            "പദ്ധതിയുടെ ആവശ്യാനുസരണം കസ്റ്റം സ്ട്രക്ചറൽ, മെറ്റൽ ഫാബ്രിക്കേഷൻ.",
        },
        {
          name: "വെൽഡിംഗ് ജോലികൾ",
          description:
            "സ്ട്രക്ചറൽ, പ്രോജക്ട് ആവശ്യങ്ങൾക്കായുള്ള പ്രൊഫഷണൽ വെൽഡിംഗ്, മെറ്റൽ ജോയിനിംഗ് ജോലികൾ.",
        },
      ],

      projectsTag: "ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ",

      projectsTitle: "സമീപകാല <span>പ്രോജക്ടുകൾ</span>",

      projectsEmpty: "ഞങ്ങളുടെ പുതിയ പ്രോജക്ടുകളുടെ ചിത്രങ്ങൾ ഇവിടെ ചേർക്കും.",

      reviewsTag: "ഉപഭോക്താക്കളുടെ അഭിപ്രായങ്ങൾ",

      reviewsTitle: "ഞങ്ങളുടെ <span>ഉപഭോക്താക്കൾ പറയുന്നു</span>",

      reviewClient: "ഉപഭോക്താവ്",

      noReviews: "ഉപഭോക്താക്കളുടെ അഭിപ്രായങ്ങൾ ഇവിടെ കാണാം.",

      contactTag: "ബന്ധപ്പെടുക",

      contactTitle: "നിങ്ങളുടെ <span>പ്രോജക്ടിനെക്കുറിച്ച്</span> സംസാരിക്കാം.",

      contactIntro:
        "ഫാബ്രിക്കേഷൻ, എറക്ഷൻ അല്ലെങ്കിൽ കൺസ്ട്രക്ഷൻ ആവശ്യങ്ങളുണ്ടോ? നിങ്ങളുടെ പ്രോജക്ടിനെക്കുറിച്ച് സംസാരിക്കാൻ AB Erectors-നെ ബന്ധപ്പെടുക.",

      call: "വിളിക്കുക",

      whatsapp: "വാട്ട്സ്ആപ്പ്",

      email: "ഇമെയിൽ",

      location: "സ്ഥലം",

      callNow: "ഇപ്പോൾ വിളിക്കുക",

      whatsappUs: "വാട്ട്സ്ആപ്പിൽ ബന്ധപ്പെടുക",

      sendEmail: "ഇമെയിൽ അയയ്ക്കുക",

      enquiryButton: "അന്വേഷണം അയയ്ക്കുക",

      namePlaceholder: "നിങ്ങളുടെ പേര്",

      phonePlaceholder: "ഫോൺ നമ്പർ",

      emailPlaceholder: "ഇമെയിൽ (ഓപ്ഷണൽ)",

      messagePlaceholder: "നിങ്ങളുടെ പ്രോജക്ടിനെക്കുറിച്ച് പറയുക...",

      footerTitle: "AB ERECTORS",

      footerSubtitle: "ഫാബ്രിക്കേഷൻ & കോൺട്രാക്ടിംഗ്",

      footerLocation: "ബെംഗളൂരു, കർണാടക",
    },

    /* =====================================================
       KANNADA
    ===================================================== */

    kn: {
      home: "ಮುಖಪುಟ",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      services: "ಸೇವೆಗಳು",
      projects: "ಯೋಜನೆಗಳು",
      reviews: "ಅಭಿಪ್ರಾಯಗಳು",
      contact: "ಸಂಪರ್ಕಿಸಿ",

      heroTag: "ಸ್ಟ್ರಕ್ಚರಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್ & ಎರೆಕ್ಷನ್",

      heroTitle: "ಬಲವಾದ ನಿರ್ಮಾಣ.<br><span>ನಿಖರತೆಯಿಂದ ನಿರ್ಮಿಸುತ್ತೇವೆ.</span>",

      heroDescription:
        "25 ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚಿನ ಅನುಭವದೊಂದಿಗೆ, ಬೆಂಗಳೂರಿನ ಕೈಗಾರಿಕಾ ಮತ್ತು ವಾಣಿಜ್ಯ ಯೋಜನೆಗಳಿಗೆ AB Erectors ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಟ್ರಕ್ಚರಲ್ ಸ್ಟೀಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್, ಎರೆಕ್ಷನ್ ಮತ್ತು ಸಿವಿಲ್ ಕನ್‌ಸ್ಟ್ರಕ್ಷನ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",

      experience: "ಅನುಭವ",

      servicesBtn: "ನಮ್ಮ ಸೇವೆಗಳು",

      contactBtn: "ಸಂಪರ್ಕಿಸಿ",

      heroNote:
        "ವಿಶ್ವಾಸಾರ್ಹ ಕೆಲಸ • ಸುರಕ್ಷತೆಗೆ ಆದ್ಯತೆ • ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ",

      aboutTag: "ನಮ್ಮ ಬಗ್ಗೆ",

      aboutTitle:
        "ಬಲಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. <span>ದೀರ್ಘಕಾಲ ಉಳಿಯಲು ಮಾಡಲಾಗಿದೆ.</span>",

      aboutText1:
        "AB Erectors ಬಲವಾದ, ಬಾಳಿಕೆ ಬರುವ ಮತ್ತು ವೆಚ್ಚ-ಪರಿಣಾಮಕಾರಿ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸಲು ಬದ್ಧವಾಗಿರುವ ನಿರ್ಮಾಣ ಮತ್ತು ಫ್ಯಾಬ್ರಿಕೇಶನ್ ತಂಡವಾಗಿದೆ.",

      aboutText2:
        "ಸ್ಟ್ರಕ್ಚರಲ್ ಸ್ಟೀಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್ ಮತ್ತು ಎರೆಕ್ಷನ್‌ನಿಂದ ಸಿವಿಲ್ ಕನ್‌ಸ್ಟ್ರಕ್ಷನ್ ಕೆಲಸಗಳವರೆಗೆ, ನಾವು ಗುಣಮಟ್ಟದ ಕೆಲಸ, ಸುರಕ್ಷತೆ, ನಿಖರತೆ ಮತ್ತು ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.",

      servicesTag: "ನಾವು ಮಾಡುವ ಕೆಲಸ",

      servicesTitle: "ನಮ್ಮ <span>ಸೇವೆಗಳು</span>",

      servicesData: [
        {
          name: "ಗುತ್ತಿಗೆ ಕೆಲಸಗಳು",
          description:
            "ವಿವಿಧ ಯೋಜನೆಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಗುತ್ತಿಗೆ, ಎರೆಕ್ಷನ್ ಮತ್ತು ನಿರ್ಮಾಣ ಕೆಲಸಗಳು.",
        },
        {
          name: "ಮೆಟ್ಟಿಲು ಕೆಲಸಗಳು",
          description:
            "ಬಾಳಿಕೆ ಬರುವ ಮೆಟ್ಟಿಲು ರಚನೆಗಳ ಫ್ಯಾಬ್ರಿಕೇಶನ್ ಮತ್ತು ಅಳವಡಿಕೆ.",
        },
        {
          name: "ಸ್ಟೀಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್",
          description:
            "ಯೋಜನೆಯ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಕಸ್ಟಮ್ ಸ್ಟ್ರಕ್ಚರಲ್ ಮತ್ತು ಮೆಟಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್.",
        },
        {
          name: "ವೆಲ್ಡಿಂಗ್ ಕೆಲಸಗಳು",
          description:
            "ಸ್ಟ್ರಕ್ಚರಲ್ ಮತ್ತು ಯೋಜನಾ ಅಗತ್ಯಗಳಿಗಾಗಿ ವೃತ್ತಿಪರ ವೆಲ್ಡಿಂಗ್ ಮತ್ತು ಮೆಟಲ್ ಜಾಯಿನಿಂಗ್ ಕೆಲಸ.",
        },
      ],

      projectsTag: "ನಮ್ಮ ಕೆಲಸ",

      projectsTitle: "ಇತ್ತೀಚಿನ <span>ಯೋಜನೆಗಳು</span>",

      projectsEmpty: "ನಮ್ಮ ಇತ್ತೀಚಿನ ಯೋಜನೆಗಳ ಚಿತ್ರಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.",

      reviewsTag: "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು",

      reviewsTitle: "ನಮ್ಮ <span>ಗ್ರಾಹಕರು ಹೇಳುತ್ತಾರೆ</span>",

      reviewClient: "ಗ್ರಾಹಕರು",

      noReviews: "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.",

      contactTag: "ಸಂಪರ್ಕಿಸಿ",

      contactTitle: "ನಿಮ್ಮ <span>ಯೋಜನೆಯ ಬಗ್ಗೆ</span> ಚರ್ಚಿಸೋಣ.",

      contactIntro:
        "ಫ್ಯಾಬ್ರಿಕೇಶನ್, ಎರೆಕ್ಷನ್ ಅಥವಾ ಕನ್‌ಸ್ಟ್ರಕ್ಷನ್ ಅಗತ್ಯವಿದೆಯೇ? ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ಚರ್ಚಿಸಲು AB Erectors ಅನ್ನು ಸಂಪರ್ಕಿಸಿ.",

      call: "ಕರೆ ಮಾಡಿ",

      whatsapp: "ವಾಟ್ಸ್ಆಪ್",

      email: "ಇಮೇಲ್",

      location: "ಸ್ಥಳ",

      callNow: "ಈಗ ಕರೆ ಮಾಡಿ",

      whatsappUs: "ವಾಟ್ಸ್ಆಪ್ ಮಾಡಿ",

      sendEmail: "ಇಮೇಲ್ ಕಳುಹಿಸಿ",

      enquiryButton: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",

      namePlaceholder: "ನಿಮ್ಮ ಹೆಸರು",

      phonePlaceholder: "ಫೋನ್ ಸಂಖ್ಯೆ",

      emailPlaceholder: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",

      messagePlaceholder: "ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ...",

      footerTitle: "AB ERECTORS",

      footerSubtitle: "ಫ್ಯಾಬ್ರಿಕೇಶನ್ & ಕಾಂಟ್ರಾಕ್ಟಿಂಗ್",

      footerLocation: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
    },
  };

  const text = translations[language];

  if (!text) {
    return;
  }

  /* =====================================================
     NAVBAR
  ===================================================== */

  const navItems = document.querySelectorAll(".nav-links > a");

  if (navItems.length >= 6) {
    navItems[0].textContent = text.home;
    navItems[1].textContent = text.about;
    navItems[2].textContent = text.services;
    navItems[3].textContent = text.projects;
    navItems[4].textContent = text.reviews;
    navItems[5].textContent = text.contact;
  }

  /* =====================================================
     HERO
  ===================================================== */

  const heroTag = document.querySelector(".hero-tag");

  if (heroTag) {
    heroTag.innerHTML = "<span></span>" + text.heroTag;
  }

  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {
    heroTitle.innerHTML = text.heroTitle;
  }

  const heroDescription = document.querySelector(".hero-description");

  if (heroDescription) {
    heroDescription.textContent = text.heroDescription;
  }

  const experience = document.querySelector(".hero-experience span");

  if (experience) {
    experience.textContent = text.experience;
  }

  const primaryHeroButton = document.querySelector(
    ".hero-buttons .primary-btn",
  );

  if (primaryHeroButton) {
    primaryHeroButton.textContent = text.servicesBtn;
  }

  const secondaryHeroButton = document.querySelector(
    ".hero-buttons .secondary-btn",
  );

  if (secondaryHeroButton) {
    secondaryHeroButton.textContent = text.contactBtn;
  }

  const heroNote = document.querySelector(".hero-note");

  if (heroNote) {
    heroNote.textContent = text.heroNote;
  }

  /* =====================================================
     SECTION TAGS
  ===================================================== */

  const sectionTags = document.querySelectorAll(".section-tag");

  if (sectionTags.length >= 5) {
    sectionTags[0].textContent = text.aboutTag;

    sectionTags[1].textContent = text.servicesTag;

    sectionTags[2].textContent = text.projectsTag;

    sectionTags[3].textContent = text.reviewsTag;

    sectionTags[4].textContent = text.contactTag;
  }

  /* =====================================================
     ABOUT
  ===================================================== */

  const aboutTitle = document.querySelector(".about h2");

  if (aboutTitle) {
    aboutTitle.innerHTML = text.aboutTitle;
  }

  const aboutTexts = document.querySelectorAll(".about-text");

  if (aboutTexts[0]) {
    aboutTexts[0].textContent = text.aboutText1;
  }

  if (aboutTexts[1]) {
    aboutTexts[1].textContent = text.aboutText2;
  }

  /* =====================================================
     SERVICES
  ===================================================== */

  const servicesTitle = document.querySelector(".services h2");

  if (servicesTitle) {
    servicesTitle.innerHTML = text.servicesTitle;
  }

  const serviceCards = document.querySelectorAll(".service-card");

  if (text.servicesData) {
    serviceCards.forEach((card, index) => {
      const service = text.servicesData[index];

      if (!service) {
        return;
      }

      const title = card.querySelector("h3");

      const description = card.querySelector("p");

      if (title) {
        title.textContent = service.name;
      }

      if (description) {
        description.textContent = service.description;
      }
    });
  }

  /* =====================================================
     PROJECTS
  ===================================================== */

  const projectsTitle = document.querySelector(".projects h2");

  if (projectsTitle) {
    projectsTitle.innerHTML = text.projectsTitle;
  }

  const projectEmpty = document.querySelector(".projects-empty p");

  if (projectEmpty) {
    projectEmpty.textContent = text.projectsEmpty;
  }

  /* =====================================================
     REVIEWS
  ===================================================== */

  const reviewsTitle = document.querySelector(".reviews h2");

  if (reviewsTitle) {
    reviewsTitle.innerHTML = text.reviewsTitle;
  }

  document.querySelectorAll(".review-name span").forEach((span) => {
    span.textContent = text.reviewClient;
  });

  const noReviews = document.querySelector(".reviews-empty p");

  if (noReviews) {
    noReviews.textContent = text.noReviews;
  }

  /* =====================================================
     CONTACT
  ===================================================== */

  const contactTitle = document.querySelector(".contact h2");

  if (contactTitle) {
    contactTitle.innerHTML = text.contactTitle;
  }

  const contactIntro = document.querySelector(".contact-intro");

  if (contactIntro) {
    contactIntro.textContent = text.contactIntro;
  }

  const contactCards = document.querySelectorAll(".contact-card");

  if (contactCards.length >= 4) {
    const callTitle = contactCards[0].querySelector("h3");

    const callLink = contactCards[0].querySelector("a");

    if (callTitle) {
      callTitle.textContent = text.call;
    }

    if (callLink) {
      callLink.textContent = text.callNow;
    }

    const whatsappTitle = contactCards[1].querySelector("h3");

    const whatsappLink = contactCards[1].querySelector("a");

    if (whatsappTitle) {
      whatsappTitle.textContent = text.whatsapp;
    }

    if (whatsappLink) {
      whatsappLink.textContent = text.whatsappUs;
    }

    const emailTitle = contactCards[2].querySelector("h3");

    const emailLink = contactCards[2].querySelector("a");

    if (emailTitle) {
      emailTitle.textContent = text.email;
    }

    if (emailLink) {
      emailLink.textContent = text.sendEmail;
    }

    const locationTitle = contactCards[3].querySelector("h3");

    if (locationTitle) {
      locationTitle.textContent = text.location;
    }
  }

  /* =====================================================
     ENQUIRY FORM
  ===================================================== */

  const enquiryButton = document.querySelector(".enquiry-form button");

  if (enquiryButton) {
    enquiryButton.textContent = text.enquiryButton;
  }

  const formName = document.querySelector('.enquiry-form input[name="name"]');

  const formPhone = document.querySelector('.enquiry-form input[name="phone"]');

  const formEmail = document.querySelector('.enquiry-form input[name="email"]');

  const formMessage = document.querySelector(
    '.enquiry-form textarea[name="message"]',
  );

  if (formName) {
    formName.placeholder = text.namePlaceholder;
  }

  if (formPhone) {
    formPhone.placeholder = text.phonePlaceholder;
  }

  if (formEmail) {
    formEmail.placeholder = text.emailPlaceholder;
  }

  if (formMessage) {
    formMessage.placeholder = text.messagePlaceholder;
  }

  /* =====================================================
     FOOTER
  ===================================================== */

  const footerStrong = document.querySelector("footer strong");

  const footerParagraphs = document.querySelectorAll(
    "footer .footer-container > p",
  );

  const footerBrandParagraph = document.querySelector(".footer-brand p");

  if (footerStrong) {
    footerStrong.textContent = text.footerTitle;
  }

  if (footerBrandParagraph) {
    footerBrandParagraph.textContent = text.footerSubtitle;
  }

  if (footerParagraphs[1]) {
    footerParagraphs[1].textContent = text.footerLocation;
  }
};
function showProjectImages(button) {
  const projectCard = button.closest(".project-card");
  const images = projectCard.querySelectorAll(".project-all-images img");

  if (!images.length) {
    return;
  }

  const overlay = document.createElement("div");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0, 0, 0, 0.92)";
  overlay.style.zIndex = "9999";
  overlay.style.overflowY = "auto";
  overlay.style.padding = "40px 20px";
  overlay.style.boxSizing = "border-box";

  const closeButton = document.createElement("button");

  closeButton.innerHTML = "✕";
  closeButton.style.position = "fixed";
  closeButton.style.top = "20px";
  closeButton.style.right = "25px";
  closeButton.style.background = "#ffffff";
  closeButton.style.color = "#000000";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "50%";
  closeButton.style.width = "42px";
  closeButton.style.height = "42px";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "10000";

  closeButton.onclick = function () {
    overlay.remove();
  };

  overlay.appendChild(closeButton);

  const gallery = document.createElement("div");

  gallery.style.maxWidth = "1000px";
  gallery.style.margin = "40px auto";
  gallery.style.display = "grid";
  gallery.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
  gallery.style.gap = "20px";

  images.forEach(function (image) {
    const newImage = document.createElement("img");

    newImage.src = image.src;
    newImage.alt = image.alt;

    newImage.style.width = "100%";
    newImage.style.height = "300px";
    newImage.style.objectFit = "cover";
    newImage.style.borderRadius = "10px";

    gallery.appendChild(newImage);
  });

  overlay.appendChild(gallery);

  document.body.appendChild(overlay);
}
