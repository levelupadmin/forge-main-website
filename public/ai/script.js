/* ============================================
   FORGE AI RESIDENCY — Static Site JavaScript
   ============================================ */

const TALLY_URL = "https://tally.so/r/kdWEXR";

function openTally() {
  window.open(TALLY_URL, "_blank", "noopener,noreferrer");
}

/* ============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Mark body so CSS knows JS is loaded
  document.body.classList.add("js-loaded");

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "50px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));

  // Fallback: reveal everything after 3s in case observer doesn't fire
  setTimeout(() => {
    reveals.forEach((el) => el.classList.add("visible"));
  }, 3000);

  // Initialize all components
  initNavbar();
  initParallax();
  initScrollBoldText();
  initTrailer();
  initPillars();
  initSchedule();
  initMentorsCarousel();
  initTestimonials();
  initFAQs();
  initPricingToggle();
  initDotGrid();
  initBackToTop();
});

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const desktopPill = document.querySelector(".navbar-pill");
  const mobilebar = document.querySelector(".mobile-nav-bar");
  const desktopLogo = document.getElementById("nav-logo-desktop");
  const mobileLogo = document.getElementById("nav-logo-mobile");
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuOverlay = document.getElementById("mobile-menu-overlay");
  const menuClose = document.getElementById("mobile-menu-close");
  const menuLinks = menuOverlay ? menuOverlay.querySelectorAll("a") : [];
  const menuCta = document.getElementById("mobile-menu-cta");

  function updateNavbar() {
    const scrolled = window.scrollY > 60;
    if (desktopPill) {
      desktopPill.classList.toggle("transparent", !scrolled);
      desktopPill.classList.toggle("solid", scrolled);
    }
    if (mobilebar) {
      mobilebar.classList.toggle("transparent", !scrolled);
      mobilebar.classList.toggle("solid", scrolled);
    }
    if (desktopLogo) {
      desktopLogo.src = scrolled ? "assets/levelup-logo-dark.png" : "assets/levelup-logo.png";
    }
    if (mobileLogo) {
      mobileLogo.src = scrolled ? "assets/levelup-logo-dark.png" : "assets/levelup-logo.png";
    }
    // Update nav link colors
    const desktopLinks = document.querySelectorAll(".navbar-pill a");
    desktopLinks.forEach(link => {
      if (scrolled) {
        link.style.color = "rgba(0,0,0,0.55)";
      } else {
        link.style.color = "rgba(255,255,255,0.85)";
      }
    });
    // Mobile hamburger color
    if (menuBtn) {
      menuBtn.style.color = scrolled ? "var(--foreground)" : "#fff";
    }
  }

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();

  // Mobile menu
  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener("click", () => {
      menuOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  if (menuClose && menuOverlay) {
    menuClose.addEventListener("click", () => {
      menuOverlay.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuOverlay) menuOverlay.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
  if (menuCta) {
    menuCta.addEventListener("click", () => {
      if (menuOverlay) menuOverlay.classList.remove("open");
      document.body.style.overflow = "";
      openTally();
    });
  }
}

/* ============================================
   PARALLAX (desktop only)
   ============================================ */
function initParallax() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const heroVideoWrap = document.querySelector(".hero-video-wrap");
  const experienceParallax = document.querySelector(".parallax-inner");

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (heroVideoWrap) {
          heroVideoWrap.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        if (experienceParallax) {
          experienceParallax.style.transform = `translateY(${scrollY * -0.08}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================
   SCROLL BOLD TEXT
   ============================================ */
function initScrollBoldText() {
  const container = document.querySelector(".scroll-bold-text");
  if (!container) return;

  const words = container.querySelectorAll(".word");
  if (!words.length) return;

  function updateWords() {
    const rect = container.getBoundingClientRect();
    const viewH = window.innerHeight;
    const start = viewH * 0.9;
    const end = viewH * 0.4;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

    words.forEach((word, i) => {
      const wordProgress = i / words.length;
      if (progress > wordProgress) {
        word.classList.add("active");
      } else {
        word.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateWords, { passive: true });
  updateWords();
}

/* ============================================
   TRAILER VIDEO
   ============================================ */
function initTrailer() {
  const playBtn = document.getElementById("trailer-play");
  const container = document.getElementById("trailer-container");
  if (!playBtn || !container) return;

  playBtn.addEventListener("click", () => {
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1" title="Forge AI Residency Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer-iframe"></iframe>';
  });
}

/* ============================================
   PILLARS (tabbed carousel with auto-rotation)
   ============================================ */
function initPillars() {
  const pillars = [
    {
      tag: "PILLAR 01", title: "CONTENT",
      desc: "Create content, visuals, and video that used to need a full production team.",
      builds: [
        "AI generated scripts, UGC ads and social media creatives",
        "A content system you can repeat after you leave",
      ],
      tools: ["Higgsfield", "Gemini", "Midjourney"],
      toolLogos: { Higgsfield: "assets/tools/higgsfield.png", Gemini: "assets/tools/gemini.png", Midjourney: "assets/tools/midjourney.png" },
      image: "assets/pillars/pillar-01.jpg",
    },
    {
      tag: "PILLAR 02", title: "OPERATIONS",
      desc: "Map the manual work in your business and build AI that handles it for you.",
      builds: [
        "2 live AI automations and an AI agent of your choice",
        "A workflow saving at least 5 hours a week, running without you",
      ],
      tools: ["Claude", "n8n", "Claude Core"],
      toolLogos: { Claude: "assets/tools/claude.png", n8n: "assets/tools/n8n.png", "Claude Core": "assets/tools/claudecore.png" },
      image: "assets/pillars/pillar-02.jpg",
    },
    {
      tag: "PILLAR 03", title: "PRODUCT",
      desc: "Build a working product without writing a single line of code. Spec it, prompt it, ship it.",
      builds: [
        "A functional product or internal tool you can demo live on Day 9",
        "The foundation to keep building back home",
      ],
      tools: ["Emergent", "Lizard AI", "OpenAI", "Perplexity"],
      toolLogos: { Emergent: "assets/tools/emergent.png", "Lizard AI": "assets/tools/lizardai.png", OpenAI: "assets/tools/openai.png", Perplexity: "assets/tools/perplexity.png" },
      image: "assets/pillars/pillar-03.jpg",
    },
  ];

  let activeIndex = 0;
  let isPaused = false;
  let timer;

  // Mobile elements
  const mobileTabs = document.querySelectorAll(".pillar-tab");
  const mobileImage = document.getElementById("pillar-mobile-image");
  const mobileTag = document.getElementById("pillar-mobile-tag");
  const mobileTitle = document.getElementById("pillar-mobile-title");
  const mobileDesc = document.getElementById("pillar-mobile-desc");
  const mobileTools = document.getElementById("pillar-mobile-tools");
  const mobileBuilds = document.getElementById("pillar-mobile-builds");
  const mobileProgress = document.getElementById("pillar-mobile-progress");

  // Desktop elements
  const desktopBg = document.getElementById("pillar-desktop-bg");
  const desktopBadge = document.getElementById("pillar-desktop-badge");
  const desktopTitle = document.getElementById("pillar-desktop-title");
  const desktopDesc = document.getElementById("pillar-desktop-desc");
  const desktopTools = document.getElementById("pillar-desktop-tools");
  const desktopBuilds = document.getElementById("pillar-desktop-builds");
  const desktopThumbs = document.getElementById("pillar-desktop-thumbs");
  const desktopProgress = document.getElementById("pillar-desktop-progress");
  const pillarHero = document.querySelector(".pillar-hero");

  function updatePillar() {
    const p = pillars[activeIndex];

    // Mobile
    if (mobileImage) mobileImage.src = p.image;
    if (mobileTag) mobileTag.textContent = p.tag;
    if (mobileTitle) mobileTitle.textContent = p.title;
    if (mobileDesc) mobileDesc.textContent = p.desc;
    if (mobileTools) {
      mobileTools.innerHTML = p.tools.map((t, i) =>
        `<div class="pillar-tool-logo" style="margin-left:${i > 0 ? '-6px' : '0'}"><img src="${p.toolLogos[t] || ''}" alt="${t}" loading="lazy"></div>`
      ).join("");
    }
    if (mobileBuilds) {
      mobileBuilds.innerHTML =
        '<span class="pillar-builds-label">What you\'ll build</span>' +
        p.builds.map(b => `<p class="pillar-build-item"><span class="arrow">→</span>${b}</p>`).join("");
    }
    if (mobileProgress) {
      mobileProgress.innerHTML = '<div class="pillar-progress-bar"></div>';
    }

    mobileTabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === activeIndex);
      tab.classList.toggle("inactive", i !== activeIndex);
    });

    // Desktop
    if (desktopBg) desktopBg.style.backgroundImage = `url(${p.image})`;
    if (desktopBadge) desktopBadge.textContent = p.tag;
    if (desktopTitle) desktopTitle.textContent = p.title;
    if (desktopDesc) desktopDesc.textContent = p.desc;
    if (desktopTools) {
      desktopTools.innerHTML = p.tools.map((t, i) =>
        `<div class="pillar-tool-logo" style="margin-left:${i > 0 ? '-6px' : '0'}"><img src="${p.toolLogos[t] || ''}" alt="${t}" loading="lazy"></div>`
      ).join("");
    }
    if (desktopBuilds) {
      desktopBuilds.innerHTML =
        '<span class="pillar-builds-label" style="color:#fff;">What you\'ll build</span>' +
        p.builds.map(b => `<p class="pillar-build-item"><span class="arrow">→</span>${b}</p>`).join("");
    }
    if (desktopThumbs) {
      desktopThumbs.innerHTML = pillars
        .map((tp, i) => ({ tp, i }))
        .filter(({ i }) => i !== activeIndex)
        .map(({ tp, i }) =>
          `<div class="pillar-thumb" data-index="${i}">
            <div class="pillar-thumb-bg" style="background-image:url(${tp.image})"></div>
            <div class="pillar-thumb-grad"></div>
            <div class="pillar-thumb-content">
              <span class="pillar-thumb-tag">${tp.tag}</span>
              <span class="pillar-thumb-name">${tp.title}</span>
            </div>
          </div>`
        ).join("");

      desktopThumbs.querySelectorAll(".pillar-thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
          activeIndex = parseInt(thumb.dataset.index);
          updatePillar();
          startTimer();
        });
      });
    }
    if (desktopProgress) {
      desktopProgress.innerHTML = '<div class="pillar-progress-bar"></div>';
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!isPaused) {
        activeIndex = (activeIndex + 1) % 3;
        updatePillar();
      }
    }, 5000);
  }

  mobileTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      if (i === activeIndex) return;
      activeIndex = i;
      updatePillar();
      startTimer();
    });
  });

  if (pillarHero) {
    pillarHero.addEventListener("mouseenter", () => isPaused = true);
    pillarHero.addEventListener("mouseleave", () => isPaused = false);
  }

  updatePillar();
  startTimer();
}

/* ============================================
   SCHEDULE ACCORDION
   ============================================ */
function initSchedule() {
  const items = document.querySelectorAll(".schedule-item");
  const scheduleImg = document.getElementById("schedule-hero-image");
  const images = [
    "assets/schedule/schedule-online-prep.png",
    "assets/schedule/schedule-day1.png",
    "assets/schedule/schedule-days23-v2.png",
    "assets/schedule/schedule-days45.png",
    "assets/schedule/schedule-days678.jpg",
    "assets/schedule/schedule-day9.jpg",
  ];

  const plusSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  const xSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  function updateToggleIcons() {
    items.forEach((it) => {
      const toggle = it.querySelector(".schedule-toggle");
      if (toggle) toggle.innerHTML = it.classList.contains("active") ? xSvg : plusSvg;
    });
  }

  items.forEach((item, i) => {
    const header = item.querySelector(".schedule-item-header");
    header.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");
      items.forEach((it) => it.classList.remove("active"));
      if (!wasActive) {
        item.classList.add("active");
        if (scheduleImg) scheduleImg.src = images[i];
      } else {
        if (scheduleImg) scheduleImg.src = "assets/schedule/schedule-default.jpg";
      }
      updateToggleIcons();
    });
  });

  // Open first by default
  if (items[0]) {
    items[0].classList.add("active");
    if (scheduleImg) scheduleImg.src = images[0];
  }
  updateToggleIcons();
}

/* ============================================
   MENTORS CAROUSEL
   ============================================ */
function initMentorsCarousel() {
  const track = document.getElementById("mentors-track");
  const slides = document.querySelectorAll(".mentor-slide");
  const prevBtn = document.getElementById("mentor-prev");
  const nextBtn = document.getElementById("mentor-next");
  const dots = document.querySelectorAll(".mentor-dot");
  let current = 0;

  function update() {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === current);
      s.classList.toggle("inactive", i !== current);
    });
    dots.forEach((d, i) => d.classList.toggle("active", i === current));

    // Center the active slide
    if (track && slides[current]) {
      const container = track.parentElement;
      const containerWidth = container.offsetWidth;
      const slideWidth = slides[current].offsetWidth;
      const slideLeft = slides[current].offsetLeft;
      const offset = slideLeft - (containerWidth / 2) + (slideWidth / 2);
      track.style.transform = `translateX(-${offset}px)`;
    }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { current = (current - 1 + slides.length) % slides.length; update(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { current = (current + 1) % slides.length; update(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { current = i; update(); }));
  slides.forEach((s, i) => s.addEventListener("click", () => { current = i; update(); }));

  update();
}

/* ============================================
   TESTIMONIALS CAROUSEL
   ============================================ */
function initTestimonials() {
  const testimonials = [
    { quote: "honestly did not expect to ship something real in 9 days. like actually real. i built an automation that now handles all my lead followups and a landing page for my new offer. my team thought i hired someone lol. the people in the room were the best part though, still talk and build with half of them every week.", name: "Rishi Malhotra", role: "Co-founder, Koda Labs", location: "Mumbai" },
    { quote: "I've done Udemy courses, YouTube rabbit holes, paid for like 3 different AI tools I never properly used.. this was different. you actually sit and build the thing. no theory, no slides, just here's the tool, here's what we're making today. clicked for me in a way nothing else had.", name: "Ananya Iyer", role: "Freelance Designer", location: "Chennai" },
    { quote: "Was skeptical tbh. thought it would be a lot of 'AI is the future' type content. It wasn't. Day 2 I made my first AI video ad. Day 5 my automation was live. Day 8 I demoed a client dashboard I built from scratch. zero coding background. genuinely changed how I think about what's possible.", name: "Kabir Sehgal", role: "Founder, Blok Studio", location: "Delhi" },
    { quote: "the dot matrix slide alone was worth the trip. but what stayed with me was the people. a founder from Bangalore, a marketer from Delhi, an operator from Pune, all of us just heads down building for 9 days straight. made friends I'll keep for years. also my content output has 3x'd since I got back so.. yeah.", name: "Meera Nambiar", role: "Brand Strategist, Swiggy", location: "Bangalore" },
    { quote: "I run ops for a 40 person company. I came in knowing exactly what was broken, I just didn't know how to fix it. Left with 2 automations running and a third half built. saved us probably 12 hours a week already. the ROI math is very simple.", name: "Aryan Kapoor", role: "Head of Operations, Vahan", location: "Pune" },
    { quote: "ok so I went in thinking I'd learn some tools. came out having completely rethought how I run my agency. the business thinking session on day 3 actually hit different, mapped out my whole workflow and realised I was manually doing 6 things that didn't need a human. fixed 4 of them by day 6.", name: "Priya Sood", role: "Founder, The Copy Co.", location: "Jaipur" },
    { quote: "My biggest fear was being the least technical person in the room. I was probably top 3 non-technical. didn't matter at all?? the tools are genuinely built for people like us. and the mentors don't make you feel stupid for asking basic questions. best 9 days I've spent on my business in 3 years.", name: "Vikram Nair", role: "Senior Marketing Manager, CRED", location: "Bangalore" },
    { quote: "came for the AI. stayed for the community. still in the group chat every day. we've already referred 3 clients between us and one person in my batch is building something I'm going to invest in. didn't expect any of that when I signed up.", name: "Shreya Bhatia", role: "Founder, Mosaic Ventures", location: "Mumbai" },
  ];

  const cardWrap = document.getElementById("testimonial-card");
  const dotsWrap = document.getElementById("testimonial-dots");
  if (!cardWrap) return;

  let current = 0;

  function render() {
    const t = testimonials[current];
    cardWrap.innerHTML = `
      <div class="testimonial-accent-line"></div>
      <div class="testimonial-body">
        <span class="testimonial-quote-mark" aria-hidden="true">"</span>
        <p class="testimonial-quote">${t.quote}</p>
        <div class="testimonial-attribution">
          <p class="testimonial-name">${t.name}</p>
          <p class="testimonial-role">${t.role}</p>
          <p class="testimonial-location"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${t.location}</p>
        </div>
      </div>`;
    if (dotsWrap) {
      dotsWrap.innerHTML = testimonials.map((_, i) =>
        `<button class="carousel-dot${i === current ? ' active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
      ).join("");
      dotsWrap.querySelectorAll(".carousel-dot").forEach(d => {
        d.addEventListener("click", () => { current = parseInt(d.dataset.index); render(); });
      });
    }
  }

  render();

  // Auto-advance
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    render();
  }, 5000);

  // Swipe support
  let startX = 0;
  cardWrap.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  cardWrap.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) { current = (current + 1) % testimonials.length; render(); }
    else if (diff < -50) { current = (current - 1 + testimonials.length) % testimonials.length; render(); }
  });
}

/* ============================================
   FAQS ACCORDION
   ============================================ */
function initFAQs() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      items.forEach((it) => it.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ============================================
   PRICING TOGGLE
   ============================================ */
function initPricingToggle() {
  const inclusionsBtn = document.getElementById("toggle-inclusions");
  const exclusionsBtn = document.getElementById("toggle-exclusions");
  const inclusionsList = document.getElementById("inclusions-list");
  const exclusionsList = document.getElementById("exclusions-list");

  if (!inclusionsBtn) return;

  function showInclusions() {
    inclusionsBtn.className = "toggle-pill inclusions-active";
    exclusionsBtn.className = "toggle-pill inactive";
    inclusionsList.style.display = "block";
    exclusionsList.style.display = "none";
  }
  function showExclusions() {
    exclusionsBtn.className = "toggle-pill exclusions-active";
    inclusionsBtn.className = "toggle-pill inactive";
    exclusionsList.style.display = "block";
    inclusionsList.style.display = "none";
  }

  inclusionsBtn.addEventListener("click", showInclusions);
  exclusionsBtn.addEventListener("click", showExclusions);
  showInclusions();
}

/* ============================================
   DOT GRID (Why AI Now)
   ============================================ */
function initDotGrid() {
  const grid = document.getElementById("dot-grid");
  if (!grid) return;

  const TOTAL = 1000;
  const GREY = 840;
  const GREEN = 152;
  const AMBER = 7;

  let html = "";
  for (let i = 0; i < TOTAL; i++) {
    let cls = "dot ";
    if (i < GREY) cls += "grey";
    else if (i < GREY + GREEN) cls += "green";
    else if (i < GREY + GREEN + AMBER) cls += "amber";
    else cls += "red";
    html += `<div class="${cls}"></div>`;
  }
  grid.innerHTML = html;
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
