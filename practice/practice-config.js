// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ABCD Learning Hub — Practice Hub Configuration                      ║
// ║  File: practice/practice-config.js                                   ║
// ║                                                                      ║
// ║  ✅ Edit ONLY this file to manage all practice page content          ║
// ║  ✅ No HTML or JavaScript knowledge needed                           ║
// ║  ✅ Changes here reflect instantly on the practice page              ║
// ╚══════════════════════════════════════════════════════════════════════╝

const PRACTICE_CONFIG = {

  // ════════════════════════════════════════════════════════════════════
  // PAGE META
  // ════════════════════════════════════════════════════════════════════

  // Browser tab title
  pageTitle: "Practice | ABCD Learning Hub",

  // Subtitle text shown below the hero heading
  pageSubtitle: "Hands-on tasks, challenges & mini-projects across every subject. No theory — just practice.",

  // Placeholder text inside the search input
  searchPlaceholder: "Search tasks… Python, Flexbox, VLOOKUP, Prompting…",


  // ════════════════════════════════════════════════════════════════════
  // TOP NAVIGATION LINKS
  // Set  active: true  on the page this config belongs to
  // ════════════════════════════════════════════════════════════════════

  navLinks: [
    { label: "Home",     href: "../index.html",             active: false },
    { label: "Courses",  href: "../all-courses/index.html", active: false },
    { label: "Practice", href: "#",                         active: true  },
    { label: "Docs",     href: "../documentation/index.html",         active: false },
  ],


  // ════════════════════════════════════════════════════════════════════
  // HERO STATS ROW
  // Big-number chips shown below the search bar
  //   n  →  the large value displayed
  //   l  →  small label beneath it
  // ════════════════════════════════════════════════════════════════════

  stats: [
    { n: "8+",    l: "Subjects"   },
    { n: "60+",   l: "Tasks"      },
    { n: "3",     l: "Levels"     },
    { n: "Free",  l: "Always"     },
  ],


  // ════════════════════════════════════════════════════════════════════
  // DIFFICULTY LEVELS
  // Color-codes the badge on every task row.
  // Keys must match the `level` field in tasks[] below exactly.
  //   color   → badge text & dot color
  //   bg      → badge background fill
  //   border  → badge outline color
  // ════════════════════════════════════════════════════════════════════

  levels: {
    Beginner: {
      color:  "#06d6a0",
      bg:     "rgba(6,214,160,.12)",
      border: "rgba(6,214,160,.28)",
    },
    Intermediate: {
      color:  "#ffd166",
      bg:     "rgba(255,209,102,.12)",
      border: "rgba(255,209,102,.28)",
    },
    Advanced: {
      color:  "#ff6b6b",
      bg:     "rgba(255,107,107,.12)",
      border: "rgba(255,107,107,.28)",
    },
    Project: {
      color:  "#a78bfa",
      bg:     "rgba(167,139,250,.12)",
      border: "rgba(167,139,250,.28)",
    },
  },


  // ════════════════════════════════════════════════════════════════════
  // GATE OVERLAY PERKS
  // Bullet points shown on the sign-in lock screen.
  // Start each string with an emoji — it becomes the row icon.
  // ════════════════════════════════════════════════════════════════════

  gatePerks: [
    "💻 60+ hands-on coding & office challenges",
    "🏆 Beginner → Advanced progression path",
    "⏱️ Estimated time shown for every task",
    "📊 Track your practice progress",
  ],


  // ════════════════════════════════════════════════════════════════════
  // FOOTER EXTRAS
  // Optional extra links appended after the nav links in the footer.
  // Uncomment lines below to enable them.
  // ════════════════════════════════════════════════════════════════════

  footerExtras: [
    // { label: "Submit a Task Idea", href: "#" },
    // { label: "Report an Issue",    href: "#" },
  ],


  // ════════════════════════════════════════════════════════════════════
  // PRACTICE CATEGORIES
  // ════════════════════════════════════════════════════════════════════
  //
  //  id           → unique slug, no spaces (used for page anchoring)
  //  title        → card heading text
  //  icon         → emoji in the card icon box
  //  color        → hex accent color (glow, dots, progress bar)
  //  gradient     → [startColor, endColor] for progress fill & left stripe
  //  description  → short blurb shown under the card title
  //  folder       → path to task files RELATIVE to practice/index.html
  //                 e.g. "html-css-task/" → practice/html-css-task/
  //
  //  tasks[]
  //    .title  → task name shown in the row
  //    .file   → filename inside `folder`  (e.g. "task-01.html")
  //    .level  → must match a key in `levels` above exactly
  //    .badge  → "New" | "Hot" | "Updated" | ""   (empty = no badge)
  //    .est    → estimated time string  (e.g. "15 min")
  //
  // ════════════════════════════════════════════════════════════════════

  categories: [

    // ── HTML & CSS ───────────────────────────────────────────────────
    {
      id:          "html-css",
      title:       "HTML & CSS",
      icon:        "🎨",
      color:       "#f97316",
      gradient:    ["#f97316", "#fb923c"],
      description: "Build layouts, style components, master Flexbox, Grid and CSS animations.",
      folder:      "html-css-task/",
      tasks: [
        { title: "HTML vs CSS vs JS",     file: "html_css_js/index.html", level: "Beginner",     badge: "",        est: "30 min" },
        { title: "Basic HTML Page Structure",     file: "htmlProject/index.html", level: "Beginner",     badge: "",        est: "30 min" },
        { title: "Multi-Page Layout Concept-HTML",            file: "multiPage/index.html", level: "Beginner",     badge: "",        est: "60 min" },
        { title: "Multi-Page Layout with CSS",        file: "multiPage_withCSS/index.html", level: "Intermediate", badge: "",        est: "30 min" },
        { title: "Multi-Page Layout with Advance CSS",     file: "multiPage_with_AdvanceCSS/index.html", level: "Intermediate", badge: "Hot",     est: "25 min" },
        { title: "Portfolio Mini Project",    file: "portfolio/portfolio.html", level: "Project",     badge: "",        est: "120 min" },
        { title: "Modern Type of Portfolio",     file: "portfolio/modern-portfolio.html", level: "Project",      badge: "New",     est: "120 min" },
        { title: "Dark/Light Mode Portfolio",     file: "portfolio/dark-light.html", level: "Project",      badge: "New",     est: "120 min" },
      ],
    },

    // ── JavaScript ───────────────────────────────────────────────────
    // {
    //   id:          "javascript",
    //   title:       "JavaScript",
    //   icon:        "⚡",
    //   color:       "#fbbf24",
    //   gradient:    ["#fbbf24", "#f59e0b"],
    //   description: "DOM manipulation, functions, events, async JS and mini-projects.",
    //   folder:      "js-practice-task/",
    //   tasks: [
        // { title: "Variables & Data Types",        file: "task-01.html", level: "Beginner",     badge: "",        est: "15 min" },
        // { title: "DOM Manipulation Basics",       file: "task-02.html", level: "Beginner",     badge: "",        est: "20 min" },
        // { title: "Event Listeners & Forms",       file: "task-03.html", level: "Intermediate", badge: "",        est: "25 min" },
        // { title: "Fetch API & JSON",              file: "task-04.html", level: "Intermediate", badge: "Hot",     est: "30 min" },
        // { title: "ES6+ Features Deep Dive",       file: "task-05.html", level: "Advanced",     badge: "",        est: "40 min" },
        // { title: "Todo App Mini Project",         file: "task-06.html", level: "Project",      badge: "New",     est: "75 min" },
        // { title: "Weather App with API",          file: "task-07.html", level: "Project",      badge: "New",     est: "90 min" },
    //   ],
    // },

    // ── Python ───────────────────────────────────────────────────────
    // {
    //   id:          "python",
    //   title:       "Python",
    //   icon:        "🐍",
    //   color:       "#4f7fff",
    //   gradient:    ["#4f7fff", "#6366f1"],
    //   description: "Python fundamentals, loops, functions, file handling and scripting.",
    //   folder:      "python-task/",
    //   tasks: [
        // { title: "Print & Variables",             file: "task-01.html", level: "Beginner",     badge: "",        est: "10 min" },
        // { title: "Lists, Tuples & Dicts",         file: "task-02.html", level: "Beginner",     badge: "",        est: "20 min" },
        // { title: "Functions & Scope",             file: "task-03.html", level: "Intermediate", badge: "",        est: "25 min" },
        // { title: "File Handling",                 file: "task-04.html", level: "Intermediate", badge: "",        est: "30 min" },
        // { title: "OOP — Classes & Objects",       file: "task-05.html", level: "Advanced",     badge: "Hot",     est: "45 min" },
        // { title: "Calculator CLI Project",        file: "task-06.html", level: "Project",      badge: "",        est: "60 min" },
    //   ],
    // },

    // ── MS Excel ─────────────────────────────────────────────────────
    {
      id:          "ms-excel",
      title:       "MS Excel",
      icon:        "📊",
      color:       "#10b981",
      gradient:    ["#10b981", "#059669"],
      description: "Formulas, charts, pivot tables, VLOOKUP and real data analysis tasks.",
      folder:      "excel-task/",
      tasks: [
        { title: "Basic Formulas — SUM, AVG",     file: "excel-beginner-bengali.html", level: "Beginner",     badge: "",        est: "15 min" },
        { title: "Biginer to Advanced Formulas",        file: "excel-practice.html", level: "Medium",     badge: "",        est: "20 min" },
        // { title: "VLOOKUP & HLOOKUP",             file: "task-03.html", level: "Intermediate", badge: "Hot",     est: "30 min" },
        // { title: "Pivot Tables & Charts",         file: "task-04.html", level: "Intermediate", badge: "",        est: "35 min" },
        // { title: "Advanced IF & Nested Formulas", file: "task-05.html", level: "Advanced",     badge: "",        est: "40 min" },
        // { title: "Sales Dashboard Project",       file: "task-06.html", level: "Project",      badge: "New",     est: "90 min" },
      ],
    },

    // ── MS Word ──────────────────────────────────────────────────────
    {
      id:          "ms-word",
      title:       "MS Word",
      icon:        "📝",
      color:       "#3b82f6",
      gradient:    ["#3b82f6", "#2563eb"],
      description: "Document formatting, styles, mail merge, tables and professional reports.",
      folder:      "word-task/",
      tasks: [
        { title: "Paragraph & Text Formatting",   file: "word-practice.html", level: "Beginner",     badge: "",        est: "10 min" },
        // { title: "Styles & Headings",             file: "task-02.html", level: "Beginner",     badge: "",        est: "15 min" },
        // { title: "Tables & Borders",              file: "task-03.html", level: "Intermediate", badge: "",        est: "20 min" },
        // { title: "Mail Merge",                    file: "task-04.html", level: "Intermediate", badge: "Hot",     est: "30 min" },
        // { title: "Professional CV / Resume",      file: "task-05.html", level: "Project",      badge: "New",     est: "45 min" },
      ],
    },

    // ── MS Power Point ──────────────────────────────────────────────────────
    {
      id:          "ms-powerpoint",
      title:       "MS Power Point",
      icon:        "💽",
      color:       "#f59e0b",
      gradient:    ["#f59e0b", "#fbbf24"],
      description: "Presentation design, slide transitions, animations and storytelling with PowerPoint.",
      folder:      "powerpoint-task/",
      tasks: [
        { title: "PPT question with Bengali Lang",   file: "ppt-beginner-bengali.html", level: "Beginner",     badge: "",        est: "10 min" },
        { title: "Make professional slides",             file: "ppt-practice.html", level: "Medium",     badge: "",        est: "15 min" },
        // { title: "Tables & Borders",              file: "task-03.html", level: "Intermediate", badge: "",        est: "20 min" },
        // { title: "Mail Merge",                    file: "task-04.html", level: "Intermediate", badge: "Hot",     est: "30 min" },
        // { title: "Professional CV / Resume",      file: "task-05.html", level: "Project",      badge: "New",     est: "45 min" },
      ],
    },

    // ── Canva Design ─────────────────────────────────────────────────
    {
      id:          "canva-design",
      title:       "Canva Design",
      icon:        "🖌️",
      color:       "#ec4899",
      gradient:    ["#ec4899", "#db2777"],
      description: "Posters, logos, social media graphics and brand identity design tasks.",
      folder:      "canva-task/",
      tasks: [
        // { title: "Instagram Post Design",         file: "task-01.html", level: "Beginner",     badge: "",        est: "20 min" },
        // { title: "Flyer / Poster Design",         file: "task-02.html", level: "Beginner",     badge: "",        est: "25 min" },
        // { title: "Logo Design Basics",            file: "task-03.html", level: "Intermediate", badge: "Hot",     est: "40 min" },
        // { title: "Brand Kit Creation",            file: "task-04.html", level: "Intermediate", badge: "",        est: "45 min" },
        // { title: "Full Presentation Deck",        file: "task-05.html", level: "Project",      badge: "New",     est: "90 min" },
      ],
    },

    // ── AI Prompting ─────────────────────────────────────────────────
    {
      id:          "ai-prompting",
      title:       "AI Prompting",
      icon:        "🤖",
      color:       "#8b5cf6",
      gradient:    ["#8b5cf6", "#7c3aed"],
      description: "Write effective AI prompts for ChatGPT, Gemini, image gen and automation.",
      folder:      "ai-task/",
      tasks: [
        // { title: "Prompt Basics — Be Specific",   file: "task-01.html", level: "Beginner",     badge: "",        est: "10 min" },
        // { title: "Role-Playing Prompts",          file: "task-02.html", level: "Beginner",     badge: "",        est: "15 min" },
        // { title: "Chain-of-Thought Prompting",    file: "task-03.html", level: "Intermediate", badge: "Hot",     est: "20 min" },
        // { title: "Image Generation Prompts",      file: "task-04.html", level: "Intermediate", badge: "New",     est: "25 min" },
        // { title: "Build a GPT Workflow",          file: "task-05.html", level: "Advanced",     badge: "New",     est: "40 min" },
        // { title: "AI-Powered Blog Post Project",  file: "task-06.html", level: "Project",      badge: "New",     est: "60 min" },
      ],
    },

    // ── Typing Speed ─────────────────────────────────────────────────
    {
      id:          "kids-practice",
      title:       "Kids Practice",
      icon:        "⌨️",
      color:       "#06d6a0",
      gradient:    ["#06d6a0", "#0ea5a0"],
      description: "Improve typing knowledge and speed for kids.",
      folder:      "kids-practice/",
      tasks: [
        { title: "Play Interesting Games",        file: "index.html", level: "Beginner",     badge: "",        est: "10 min" },
        // { title: "Numbers & Symbols Row",         file: "task-02.html", level: "Beginner",     badge: "",        est: "10 min" },
        // { title: "Speed Test — 30 WPM Target",    file: "task-03.html", level: "Intermediate", badge: "",        est: "15 min" },
        // { title: "Speed Test — 50 WPM Target",    file: "task-04.html", level: "Advanced",     badge: "Hot",     est: "15 min" },
        // { title: "Keyboard Shortcuts Master",     file: "task-05.html", level: "Advanced",     badge: "New",     est: "20 min" },
      ],
    },

  ], // ← end categories

}; // ← end PRACTICE_CONFIG

// CommonJS export — ignored in the browser, useful for Node / testing
if (typeof module !== "undefined") module.exports = PRACTICE_CONFIG;
