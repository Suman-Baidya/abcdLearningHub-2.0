// ================================================================
//  ABCD Learning Hub — Documentation Hub Config  (doc/doc-config.js)
//  ✅ Edit ONLY this file to update anything on doc/index.html
// ================================================================

const DOC_CONFIG = {

  // ── Page Meta ──────────────────────────────────────────────────
  pageTitle:         "Docs | ABCD Learning Hub",
  pageHeading:       "Learning Documentation",
  pageTagline:       "Every note, guide & lesson — beautifully organised.",
  pageSubtitle:      "Browse all study material across 6 subject areas. Click any topic to open it directly.",
  searchPlaceholder: "Search any topic, eg: Excel, Python, AI…",

  // ── Top Navigation Links ───────────────────────────────────────
  // active: true  →  highlights that link as current page
  navLinks: [
    { label: "Home",      href: "../index.html",             active: false },
    { label: "Courses",   href: "../all-courses/index.html", active: false },
    { label: "Practice",  href: "../practice/index.html",    active: false },
    { label: "Docs",      href: "#",                         active: true  },
  ],

  // ── Hero Stats ─────────────────────────────────────────────────
  // Set to null to auto-calculate from categories below
  statsOverride: null,

  // ── Documentation Categories ───────────────────────────────────
  // color    : accent used for card border, icon bg, dots
  // gradient : [from, to] used for the animated card glow
  // folder   : path relative to doc/index.html
  // badge    : "New" | "Updated" | "Hot" | ""

  categories: [

    {
      id:          "basic-computer",
      title:       "Basic Computer",
      icon:        "🖥️",
      color:       "#3b82f6",
      gradient:    ["#3b82f6", "#06b6d4"],
      description: "Hardware, OS, MS Office basics and essential typing for absolute beginners.",
      folder:      "basic-computer/",
      docs: [
        { title: "Introduction to Computers",    file: "computer-learning-hub.html",    badge: "Hot" },
        { title: "Paint for Mouse Learning",           file: "ms-paint-advanced-guide.html", badge: "" },
        { title: "Keyboard Typing Guide",  file: "TypeDocs-Complete-Teaching-Guide.html",       badge: "Updated" },
        // { title: "Microsoft Word Basics",         file: "ms-word.html",  badge: "" },
        // { title: "Microsoft Excel Basics",        file: "ms-excel.html", badge: "" },
        // { title: "Microsoft PowerPoint Basics",   file: "ms-ppt.html",   badge: "" },
        // { title: "Internet & Email Basics",       file: "internet.html", badge: "" },
        // { title: "Typing & Keyboard Shortcuts",   file: "typing.html",   badge: "" },
      ],
    },

    {
      id:          "advance-computer",
      title:       "Advance Computer",
      icon:        "⚙️",
      color:       "#8b5cf6",
      gradient:    ["#8b5cf6", "#a855f7"],
      description: "Advanced Office tools, networking, cybersecurity and system admin.",
      folder:      "advance-computer/",
      docs: [
        { title: "Advance of Microsoft Word",         file: "msword-docs.html", badge: "Updated"    },
        { title: "Excel with Formulas & Functions",                      file: "excel-docs.html",          badge: "Updated"    },
        { title: "Advance PPT with PowerPoint",              file: "powerpoint-docs.html",     badge: "Hot"    },
        { title: "All about Google Workspace",         file: "google-workspace-docs.html",  badge: "New" },
        // { title: "Hardware Troubleshooting",         file: "troubleshoot.html",   badge: ""    },
        // { title: "Cloud & Google Workspace",         file: "cloud.html",          badge: ""    },
      ],
    },

    {
      id:          "designing",
      title:       "Designing",
      icon:        "🎨",
      color:       "#ec4899",
      gradient:    ["#ec4899", "#f43f5e"],
      description: "Graphic design principles, Canva, Photoshop, Illustrator and UI/UX.",
      folder:      "designing/",
      docs: [
        // { title: "Design Principles & Colour Theory", file: "design-basics.html", badge: ""    },
        { title: "Photoshop & Bengali Typer",        file: "photoshop-docs.html", badge: ""    },
        { title: "Canva — Complete Guide",             file: "canva-docs.html",         badge: "New"    },
    //     { title: "Adobe Photoshop Basics",             file: "photoshop.html",     badge: ""    },
    //     { title: "Adobe Illustrator Basics",           file: "illustrator.html",   badge: ""    },
    //     { title: "UI/UX Design Fundamentals",          file: "uiux.html",          badge: "New" },
    //     { title: "Logo & Poster Design",               file: "logo-poster.html",   badge: ""    },
      ],
    },

    {
      id:          "programming",
      title:       "Programming",
      icon:        "💻",
      color:       "#10b981",
      gradient:    ["#10b981", "#14b8a6"],
      description: "HTML, CSS, JavaScript, Python and full-stack web development.",
      folder:      "programming/",
      docs: [
        { title: "HTML Fundamentals",       file: "learn-html.html",         badge: ""        },
        { title: "CSS Styling & Layouts",   file: "learn-css.html",          badge: ""        },
        // { title: "JavaScript Basics",       file: "js-basics.html",    badge: ""        },
        // { title: "JavaScript Advanced",     file: "js-advanced.html",  badge: "Updated" },
        // { title: "Python Fundamentals",     file: "python.html",       badge: ""        },
        // { title: "Git & GitHub",            file: "git.html",          badge: ""        },
        // { title: "Responsive Web Design",   file: "responsive.html",   badge: ""        },
      ],
    },

    {
      id:          "ai-learning",
      title:       "AI Learning",
      icon:        "🤖",
      color:       "#f59e0b",
      gradient:    ["#f59e0b", "#fb923c"],
      description: "AI tools, prompt engineering, ChatGPT, Gemini and the future of work.",
      folder:      "ai-learning/",
      docs: [
        { title: "All about Generative AI", file: "genai-course.html",   badge: "New"    },
        // { title: "Prompt Engineering Guide",          file: "prompt-eng.html", badge: "New" },
        // { title: "ChatGPT — Complete Guide",          file: "chatgpt.html",    badge: ""    },
        // { title: "Google Gemini Guide",               file: "gemini.html",     badge: "New" },
        // { title: "AI Image Generation",               file: "ai-image.html",   badge: ""    },
        // { title: "AI for Office Productivity",        file: "ai-office.html",  badge: ""    },
      ],
    },

    {
      id:          "kids-computer",
      title:       "Kids Computer",
      icon:        "🧒",
      color:       "#f97316",
      gradient:    ["#f97316", "#fbbf24"],
      description: "Fun, age-appropriate guides — Scratch, typing, MS Paint and internet safety.",
      folder:      "kids-computer/",
      docs: [
        { title: "All about Computer for Kids",        file: "computerverse-kids.html",    badge: "Updated"    },
        { title: "Fun with MS Paint for Kids",       file: "ms-paint-kids-guide.html",      badge: ""    },
        { title: "Kids Keyboard Fun",       file: "kids-wordpad-keyboard.html",      badge: "Hot"    },
        { title: "Kids Typing Guide and Fun",         file: "wordpad-keyboard-kids.html",            badge: ""    },
        { title: "WordPad for Kids Fun",       file: "wordpad-docs.html",          badge: "New" },
        { title: "Coding for Kids",  file: "kids-coding-docs.html",  badge: "New"    },
      ],
    },

  ], // ← end categories

  // ── Footer Extra Links (beyond site social links) ──────────────
  footerExtras: [
    // { label: "Privacy Policy", href: "../privacy.html" },
  ],

}; // ← end DOC_CONFIG

if (typeof module !== "undefined") module.exports = DOC_CONFIG;
