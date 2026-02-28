/* ════════════════════════════════════════════════════════════════════
   ABCD LEARNING HUB — MASTER CONFIGURATION  v5.0
   ONE FILE controls ALL data across the entire website.
   Edit here → changes reflect everywhere automatically.

   FOLDER STRUCTURE:
   abcdLearningHub-2.0/
   ├── index.html               ← main entry point
   ├── config.js                ← THIS FILE (all site data, centralised)
   ├── all-courses/
   │   ├── index.html           ← all categories overview + WhatsApp enrol
   │   ├── diploma-course.html
   │   ├── for-office-work.html
   │   ├── kids-computer.html
   │   ├── ai-course.html
   │   ├── programming.html
   │   ├── designing-course.html
   │   ├── degree-course.html
   │   └── special-course.html
   ├── practice/
   │   ├── index.html           ← all practice links centralised
   │   ├── html-css-task/
   │   ├── js-practice-task/
   │   └── ...more folders
   └── documentation/
       ├── index.html           ← all documentation links centralised
       ├── basic-computer/
       ├── advance-computer/
       ├── designing/
       ├── programming/
       ├── ai-learning/
       └── kids-computer/
════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════
   1. SITE IDENTITY & CONTACT INFO
   ═══════════════════════════════════════════════════════════════════ */
const SITE_CONFIG = {
  name:        "ABCD Learning Hub",
  shortName:   "ABCD",
  tagline:     "India's Premier Computer Education Institute",
  established: "2019",
  phone:       "+91 89448 99747",
  phoneRaw:    "918944899747",
  email:       "sb.abcd321@gmail.com",
  location:    "West Bengal, India",
  fullAddress: "West Bengal, India",
  whatsapp:    "https://wa.me/918944899747",
  twitter:     "https://x.com/SumanBaidya002",
  linkedin:    "https://www.linkedin.com/in/suman-baidya-66679b344/",
  github:      "https://github.com/Suman-Baidya",
  emailLink:   "mailto:sb.abcd321@gmail.com",
  metaDesc:    "ABCD Learning Hub — West Bengal's premier computer education institute. 30+ courses in AI, programming, design, office skills and more.",
};


/* ═══════════════════════════════════════════════════════════════════
   2. PROTECTED PAGES — PASSWORDS & URLS
   Change passwords here. Auto-updates across the whole site.
   ═══════════════════════════════════════════════════════════════════ */
const PASSWORDS = {
  documentation: "1234",
  practice:      "1234",
};

const PROTECTED_URLS = {
  documentation: "/documentation/index.html",
  practice:      "/practice/index.html",
};


/* ═══════════════════════════════════════════════════════════════════
   3. NAVIGATION
   ═══════════════════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Home",        href: "#hero" },
  { label: "Fields",     href: "#courses" },
  { label: "Career",     href: "./career/career.html" },
  { label: "Suggest",      href: "#quiz" },
  { label: "Courses", href: "all-courses/index.html" },
  { label: "Contact",         href: "#contact" },
];

const COURSE_PAGE_LINKS = [
  { label: "All Courses Overview",  href: "all-courses/index.html" },
  { label: "Diploma Courses",       href: "all-courses/diploma-course.html" },
  { label: "For Office Work",       href: "all-courses/for-office-work.html" },
  { label: "Kids Computer",         href: "all-courses/kids-computer.html" },
  { label: "AI Courses",            href: "all-courses/ai-course.html" },
  { label: "Programming",           href: "all-courses/programming.html" },
  { label: "Designing Course",      href: "all-courses/designing-course.html" },
  { label: "Degree Courses",        href: "all-courses/degree-course.html" },
  { label: "Special Courses",       href: "all-courses/special-course.html" },
];


/* ═══════════════════════════════════════════════════════════════════
   4. HERO SECTION
   ═══════════════════════════════════════════════════════════════════ */
const HERO_IMAGES = [
  "https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg",
];

const TYPEWRITER_PHRASES = [
  "Learn to Code. Build Your Dream Career.",
  "From Beginner to Professional — We Guide You.",
  "AI, Web Dev, Design & More Under One Roof.",
  "West Bengal's Most Trusted Computer Institute.",
  "30+ Courses. 500+ Placed Students. One Institute.",
];

const HERO_STATS = [
  { value: "500+", label: "Students Placed" },
  { value: "30+",  label: "Programmes" },
  { value: "50+",  label: "Real Projects" },
  { value: "4.9★", label: "Student Rating" },
];


/* ═══════════════════════════════════════════════════════════════════
   5. ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════════════════ */
const COUNTERS = [
  { icon: "fas fa-user-graduate", target: 500, suffix: "+", label: "Students Placed" },
  { icon: "fas fa-code",          target: 50,  suffix: "+", label: "Projects Completed" },
  { icon: "fas fa-star",          target: 98,  suffix: "%", label: "Satisfaction Rate" },
  { icon: "fas fa-building",      target: 35,  suffix: "+", label: "Hiring Partners" },
];


/* ═══════════════════════════════════════════════════════════════════
   6. ABOUT SECTION
   ═══════════════════════════════════════════════════════════════════ */
const ABOUT = {
  image:      "https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg",
  badgeLabel: "5+ Years",
  badgeSub:   "Of Academic Excellence in All over India",
  para1:      "ABCD Learning Hub is West Bengal's most trusted computer education institute. We combine rigorous academic structure with real-world project experience, guided by mentors who have worked at leading technology companies across India.",
  para2:      "Whether you are a school student, a college graduate, or a working professional — we have a programme designed precisely for you, with dedicated mentorship until you achieve your goals.",
  pillars: [
    { icon: "fas fa-laptop-code",  title: "100% Practical Training",  sub: "Hands-on projects from day one" },
    { icon: "fas fa-user-tie",     title: "Industry Expert Mentors",  sub: "Learn from working professionals" },
    { icon: "fas fa-briefcase",    title: "Internship & Placement",   sub: "Direct referrals to hiring partners" },
    { icon: "fas fa-certificate",  title: "Recognised Certificates", sub: "Industry-valued credentials" },
    // { icon: "fas fa-video",        title: "Live + Recorded Classes",  sub: "Flexible study options" },
    // { icon: "fas fa-users",        title: "Lifetime Alumni Network",  sub: "Community support forever" },
  ],
  stats: [
    { value: "500+", label: "Placed" },
    { value: "50+",  label: "Projects" },
    { value: "8+",   label: "Tracks" },
    { value: "98%",  label: "Satisfaction" },
  ],
};


/* ═══════════════════════════════════════════════════════════════════
   7. WHY CHOOSE US
   ═══════════════════════════════════════════════════════════════════ */
const WHY_CARDS = [
  { icon: "fa-chalkboard-teacher", title: "Expert-Led Instruction",        desc: "Every course taught by professionals actively working in industry. Real experience, real insights — not just theory." },
  { icon: "fa-project-diagram",    title: "Project-Based Learning",        desc: "Build real portfolio-worthy projects from week one. Employers see what you've created, not just a certificate." },
  { icon: "fa-handshake",          title: "Guaranteed Placement Support",  desc: "Resume reviews, mock interviews, LinkedIn optimisation and direct referrals until you land the job." },
  { icon: "fa-rupee-sign",         title: "Most Affordable in India",         desc: "Premium education at a fraction of city-institute costs. EMI options, scholarships and free trial classes." },
  { icon: "fa-clock",              title: "Flexible Batch Timings",        desc: "Morning, evening and weekend batches. Online + offline hybrid — fits around your commitments." },
  { icon: "fa-infinity",           title: "Lifetime Access & Support",     desc: "Updated materials for life. Alumni groups, career advice and mentor access long after graduation." },
];


/* ═══════════════════════════════════════════════════════════════════
   8. ALL COURSES DATA
   ─────────────────────────────────────────────────────────────────
   Each course: { code, name, desc, longDesc, duration, fee, tag, image }
   tag: "popular" | "demanding" | null
   fee: null for degree courses (contact-based)
   ═══════════════════════════════════════════════════════════════════ */
const ALL_COURSES = [

  /* ── CATEGORY 1: DIPLOMA COURSES ── */
  {
    category:     "Diploma Courses",
    categorySlug: "diploma",
    icon:         "fas fa-graduation-cap",
    pageLink:     "all-courses/diploma-course.html",
    coursePageLink:"./diploma-course.html",
    image:        "https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg",
    cardDesc:     "8 diploma programmes from 6 to 18 months — foundational to advanced.",
    courses: [
      { code:"DCA",          name:"Diploma in Computer Application",                                            desc:"MS Office, internet & computer basics.",                                    longDesc:"A comprehensive introduction covering MS Office Suite (Word, Excel, PowerPoint), internet usage, email, and computer fundamentals. Ideal for beginners and those entering office-based roles.",                                                                                                               duration:"6 Months",  fee:"Rs. 5,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg" },
      { code:"DWT",          name:"Diploma in Web Technology",                                                  desc:"All about websites, HTML/CSS, Google Workspace.",                           longDesc:"Learn how websites work from the ground up. Covers HTML5, CSS3, responsive design, Google Workspace, and basic web hosting — perfect for aspiring web professionals or business owners.",                                                                                                                       duration:"9 Months",  fee:"Rs. 8,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg" },
      { code:"DCA-WD",       name:"Diploma in Computer Application & Web Design",                               desc:"From basic computer foundations to front-end web development.",                longDesc:"A dual-track diploma that starts with computer fundamentals and progresses through HTML, CSS, JavaScript basics, and web design principles. Graduate ready to build and maintain websites professionally.",                                                                                                       duration:"12 Months", fee:"Rs. 12,000/-", tag:null,        image:"https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg" },
      { code:"DOAEP",        name:"Diploma in Office Expert & Publishing",                                      desc:"Basic to semi-advanced computer for office professionals.",                  longDesc:"The most in-demand office programme. Covers MS Office in depth, desktop publishing tools (PageMaker, CorelDraw basics), and professional computer operation skills required in any modern office.",                                                                                                             duration:"12 Months", fee:"Rs. 8,000/-",  tag:"demanding", image:"https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg" },
      { code:"ADOAP",        name:"Advance Diploma in Office Accounting Power",                                 desc:"Advanced computer, Tally, and accounting software.",                        longDesc:"Covers Microsoft Excel (macros, pivot tables, VLOOKUP), Tally ERP, financial reporting, and data management. Designed for finance and accounting professionals seeking digital proficiency.",                                                                                                                    duration:"12 Months", fee:"Rs. 15,000/-", tag:null,        image:"https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg" },
      { code:"DDME",         name:"Diploma in Digital Marketing Education",                                     desc:"SEO, social media, Google Ads, and digital strategy.",                      longDesc:"Complete digital marketing diploma covering SEO, SEM, Google Ads, Facebook & Instagram advertising, content marketing, email campaigns, analytics, and building a full digital marketing strategy.",                                                                                                           duration:"12 Months", fee:"Rs. 18,000/-", tag:null,        image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
      { code:"ADITA",        name:"Advance Diploma in IT & Application",                                        desc:"Basic to advanced IT including programming languages.",                      longDesc:"Our most comprehensive IT diploma spanning computer fundamentals, networking basics, one programming language (Python or JavaScript), database concepts, and application development. The ultimate all-in-one IT programme.",                                                                                       duration:"18 Months", fee:"Rs. 25,000/-", tag:null,        image:"https://cdn.pixabay.com/photo/2019/10/03/12/12/programmer-4523101_1280.jpg" },
      { code:"DGAIA & PPE",  name:"Diploma in Generative AI Architecture & Professional Prompt Engineering",   desc:"AI architecture, ChatGPT, LLMs, and prompt engineering mastery.",            longDesc:"The most sought-after programme. Learn the architecture of large language models, master professional prompt engineering, build AI-powered tools, integrate the ChatGPT API, and explore emerging AI applications across industries.",                                                                             duration:"12 Months", fee:"Rs. 24,000/-", tag:"popular",   image:"https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg" },
    ],
  },

  /* ── CATEGORY 2: FOR OFFICE WORK ── */
  {
    category:     "For Office Work",
    categorySlug: "office",
    icon:         "fas fa-briefcase",
    pageLink:     "all-courses/for-office-work.html",
    coursePageLink: "./for-office-work.html",
    image:        "https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg",
    cardDesc:     "6 focused programmes for office professionals — MS Office, Tally, Data Entry.",
    courses: [
      { code:"DOAEP",  name:"Diploma in Office Expert & Publishing",        desc:"Basic to semi-advanced computer for office use.",              longDesc:"The most demanded office programme. Covers all MS Office tools in depth, desktop publishing, and essential computer operation skills. Most demanded by employers across West Bengal.",                                                                                                              duration:"12 Months", fee:"Rs. 8,000/-",  tag:"demanding", image:"https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg" },
      { code:"ADOAP",  name:"Advance Diploma in Office Accounting Power",   desc:"Advanced Excel, Tally, and accounting software.",             longDesc:"Advanced MS Excel, Tally ERP, financial reporting, and data management for accounting and finance professionals wanting to excel in digital office environments.",                                                                                                           duration:"12 Months", fee:"Rs. 15,000/-", tag:null,        image:"https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg" },
      { code:"CCCO",   name:"Certificate Course for Computer Operation",    desc:"Quick-start MS Office course for office work.",               longDesc:"A focused 3-month certificate to get productive in an office environment quickly. Covers MS Word, Excel, PowerPoint, email, internet, and basic computer operation.",                                                                                                           duration:"3 Months",  fee:"Rs. 3,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg" },
      { code:"DDTP",   name:"Diploma in Desk Top Publication",              desc:"DTP tools and MS Office for print and office work.",          longDesc:"Covers DTP software (PageMaker, CorelDraw), MS Office essentials, and document design for creating professional print and digital materials used in offices and publishing.",                                                                                                  duration:"6 Months",  fee:"Rs. 5,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
      { code:"CCBA",   name:"Certificate in Computer Basic Application",    desc:"OS, MS Office, internet, and data entry from scratch.",       longDesc:"Designed for absolute beginners entering the workforce. Covers operating systems, MS Office (Word, Excel), internet navigation, email, and professional data entry techniques.",                                                                                                 duration:"6 Months",  fee:"Rs. 5,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg" },
      { code:"CDEE",   name:"Certificate in Data Entry Expert",             desc:"Professional speed and accuracy data entry training.",        longDesc:"A focused training programme to master data entry speed, accuracy, keyboard shortcuts, spreadsheet data management, and industry-standard data entry workflows.",                                                                                                               duration:"6 Months",  fee:"Rs. 5,000/-",  tag:null,        image:"https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg" },
    ],
  },

  /* ── CATEGORY 3: KIDS COMPUTER ── */
  {
    category:     "Kids Computer",
    categorySlug: "kids",
    icon:         "fas fa-child",
    pageLink:     "all-courses/kids-computer.html",
    coursePageLink: "./kids-computer.html",
    image:        "https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg",
    cardDesc:     "3 structured programmes for children — fun, foundational, age-appropriate.",
    courses: [
      { code:"Kids-Prog",  name:"Kids Programming",                                    desc:"Scratch, block-based coding and logical thinking.",               longDesc:"An engaging, gamified introduction to programming for children. Covers Scratch programming, block-based coding, logical thinking, and creating simple animations and games. No prior experience required.",                         duration:"Flexible", fee:"Rs. 5,000/-",        tag:null, image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
      { code:"Smart Kids", name:"Smart Kids Programme",                                desc:"3-year structured computer education for children aged 10+.",     longDesc:"A comprehensive 3-year programme for children above 10 years. Covers computer basics, MS Office, internet safety, basic coding, and digital skills — building a strong foundation for future technology careers.",            duration:"3 Years",  fee:"Rs. 4,000/- per year", tag:null, image:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg" },
      { code:"ICGS",       name:"Intensive Computer Guidance for Smart Kids",          desc:"3-year structured computer programme for children below age 10.", longDesc:"Specially designed for young learners below age 10. A 3-year curriculum using age-appropriate activities, Scratch programming, touch-typing, internet basics, and interactive digital learning tools.",                         duration:"3 Years",  fee:"Rs. 4,000/- per year", tag:null, image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
    ],
  },

  /* ── CATEGORY 4: AI COURSES ── */
  {
    category:     "AI Courses",
    categorySlug: "ai",
    icon:         "fas fa-robot",
    pageLink:     "all-courses/ai-course.html",
    coursePageLink: "./ai-course.html",
    image:        "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg",
    cardDesc:     "8 cutting-edge AI programmes — from daily AI tools to building LLM apps.",
    courses: [
      { code:"DGAIA & PPE", name:"Diploma in Generative AI Architecture & Professional Prompt Engineering", desc:"AI architecture, ChatGPT API, LLMs, and prompt engineering.",        longDesc:"Explore the architecture of large language models, master prompt engineering techniques, integrate the ChatGPT API, and build real AI-powered applications. The most popular programme in our institute.",                                                      duration:"12 Months", fee:"Rs. 40,000/-", tag:"popular", image:"https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg" },
      { code:"ADAOBM",      name:"Advanced Diploma in AI Operations for Business & Media",                  desc:"Deploy AI tools across business operations and media workflows.",      longDesc:"Learn to use AI tools for marketing, business operations, content creation, social media automation, and media production. For business professionals and content creators wanting to leverage AI.",                                                             duration:"12 Months", fee:"Rs. 25,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
      { code:"MMMGAI",      name:"Mastery in Multi-Modal Gen-AI: Text, Image, Voice & Video",              desc:"Generate text, image, voice & video content using AI tools.",          longDesc:"A cutting-edge programme covering multi-modal AI creation. Learn to generate text (ChatGPT), images (Midjourney, DALL-E), voice (ElevenLabs), and video (Runway) using professional AI workflows.",                                                              duration:"12 Months", fee:"Rs. 35,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg" },
      { code:"CPAI",        name:"Certificate in Professional AI",                                         desc:"Core AI knowledge and practical tools for professionals.",             longDesc:"A foundational AI certificate covering machine learning principles, AI tools for professionals, ChatGPT usage, prompt basics, and AI-assisted productivity — for non-technical professionals.",                                                                   duration:"6 Months",  fee:"Rs. 15,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
      { code:"AI-WORK",     name:"AI for Official & Routine Knowledge",                                    desc:"Use AI in daily office and professional tasks.",                       longDesc:"Practical AI training for office workers. Use ChatGPT, Copilot, Gemini, and other AI tools for drafting documents, summarising reports, data analysis, and automating repetitive tasks.",                                                                      duration:"6 Months",  fee:"Rs. 15,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg" },
      { code:"AI-EWSM",     name:"AI Essentials for Work & Social Media",                                  desc:"Leverage AI for social media content and digital marketing.",          longDesc:"For content creators, marketers, and social media managers. Covers using AI to generate posts, captions, images, reel scripts, ad copy, and social media strategy automation.",                                                                                  duration:"6 Months",  fee:"Rs. 15,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg" },
      { code:"AD-PAL",      name:"Advanced Diploma in Python for AI & LLM Engineering",                   desc:"Build AI models and LLM-powered applications using Python.",           longDesc:"Our most advanced AI programme. Learn Python deeply then apply it: training models, fine-tuning LLMs, building RAG systems, integrating APIs, and deploying AI-powered applications. Requires programming background.",                                           duration:"12 Months", fee:"Rs. 60,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2019/10/03/12/12/programmer-4523101_1280.jpg" },
      { code:"DAIAC",       name:"Diploma in AI App Creation",                                             desc:"Design and build AI chatbots and intelligent applications.",           longDesc:"Learn to design, build, and deploy AI-powered applications and chatbots. Covers prompt engineering, no-code AI tools, API integration, chatbot architecture, and publishing AI apps for real business use cases.",                                                duration:"12 Months", fee:"Rs. 35,000/-", tag:null,      image:"https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg" },
    ],
  },

  /* ── CATEGORY 5: PROGRAMMING ── */
  {
    category:     "Programming",
    categorySlug: "programming",
    icon:         "fas fa-code",
    pageLink:     "all-courses/programming.html",
    coursePageLink: "./programming.html",
    image:        "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
    cardDesc:     "5 developer-focused programmes from web foundations to full-stack mastery.",
    courses: [
      { code:"DIPWD",     name:"Diploma in Internet Programming & Web Design",                     desc:"Foundation of coding — HTML, CSS, JS and web design.",              longDesc:"The ideal entry point into programming. Covers HTML5, CSS3, responsive design, JavaScript fundamentals, and basics of web hosting and deployment. Graduate ready to build professional websites.",                                                            duration:"6 Months",  fee:"Rs. 13,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg" },
      { code:"ADWDWDE",   name:"Advance Diploma in Web Designing & Web Development Expert",        desc:"Full web development — front-end, back-end, and databases.",        longDesc:"A comprehensive advanced diploma covering the complete web stack: HTML/CSS/JS, React.js, Node.js, REST APIs, MongoDB, Git, and deployment. Prepares students for full-stack developer roles.",                                                               duration:"12 Months", fee:"Rs. 25,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2019/10/03/12/12/programmer-4523101_1280.jpg" },
      { code:"DCEP",      name:"Diploma in Computer Programming Expert",                           desc:"Master a complete programming language — Python, Java or C++.",   longDesc:"Deep mastery of one programming language of your choice (Python, Java, or C++). Covers syntax, OOP, data structures, algorithms, file handling, and real-world project development.",                                                                        duration:"12 Months", fee:"Rs. 25,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg" },
      { code:"ADWDSWDE",  name:"Advance Diploma in Web Design Solution & Web Development",         desc:"Advanced web design with frameworks and full-stack development.",  longDesc:"Our most extensive programming diploma. Covers advanced CSS frameworks, JavaScript/TypeScript, React, backend development, database design, system architecture, and complete deployment pipelines.",                                                           duration:"18 Months", fee:"Rs. 27,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg" },
      { code:"Kids-Prog", name:"Kids Programming",                                                 desc:"Block-based and introductory coding for young learners.",          longDesc:"Fun, game-based programming for children using Scratch and visual block coding to teach logical thinking, sequences, loops, and simple programming concepts in an age-appropriate way.",                                                                      duration:"Flexible",  fee:"Rs. 5,000/-",  tag:null, image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
    ],
  },

  /* ── CATEGORY 6: DESIGNING ── */
  {
    category:     "Designing Course",
    categorySlug: "designing",
    icon:         "fas fa-paint-brush",
    pageLink:     "all-courses/designing-course.html",
    coursePageLink: "./designing-course.html",
    image:        "https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg",
    cardDesc:     "4 creative programmes — Photoshop, Figma, UI/UX and graphic design.",
    courses: [
      { code:"DCA-WD",  name:"Diploma in Computer Application & Web Design",           desc:"Web designing with front-end tools and UI principles.",                    longDesc:"Covers web design fundamentals, HTML/CSS for designers, Figma for wireframing, and basic UI principles. Bridge the gap between design thinking and technical implementation.",                                                                               duration:"12 Months", fee:"Rs. 18,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg" },
      { code:"PDGDU",   name:"Professional Diploma in Graphic Design & UI/UX",         desc:"Photoshop, Illustrator, CorelDraw, Figma, Canva — complete design stack.", longDesc:"The most comprehensive design programme. Master Adobe Photoshop, Illustrator, CorelDraw, Figma, and Canva. Covers visual design principles, UI/UX methodology, user research, wireframing, and portfolio building.",                                          duration:"12 Months", fee:"Rs. 20,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
      { code:"CDMVC",   name:"Certification in Digital Media & Visual Communication",  desc:"Web/app prototyping and visual communication for digital media.",         longDesc:"Focused on digital media creation and visual storytelling. Covers motion graphics basics, web and app UI prototyping, brand identity design, and creating cohesive digital communication materials.",                                                          duration:"12 Months", fee:"Rs. 20,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
      { code:"CCDT",    name:"Certificate in Creative Design Tools",                   desc:"Photoshop, CorelDraw, and Figma for beginners.",                          longDesc:"A focused, hands-on certificate for those wanting to get started with professional design tools quickly. Covers Adobe Photoshop, CorelDraw, and Figma with practical project-based tasks from day one.",                                                     duration:"6 Months",  fee:"Rs. 8,000/-",  tag:null, image:"https://cdn.pixabay.com/photo/2015/07/31/14/59/creative-869200_1280.jpg" },
    ],
  },

  /* ── CATEGORY 7: DEGREE COURSES ── */
  {
    category:     "Degree Courses",
    categorySlug: "degree",
    icon:         "fas fa-university",
    pageLink:     "all-courses/degree-course.html",
    coursePageLink: "./degree-course.html",
    image:        "https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg",
    cardDesc:     "Academic degree guidance — ITI, Nursing, Pharmacy and more.",
    courses: [
      { code:"ITI",      name:"ITI — Industrial Training Institute", desc:"Fitter, Electrician, Welder, Diesel Mechanic.",    longDesc:"Comprehensive guidance for ITI trade programmes including Fitter, Electrician, Welder, and Diesel Mechanic. We assist with admission, preparation, and practical skill development.", duration:"1–2 Years", fee:null, tag:null, image:"https://cdn.pixabay.com/photo/2023/01/14/17/54/computer-7718730_1280.jpg" },
      { code:"Nursing",  name:"Nursing Programmes",                  desc:"GNM, ANM, B.Sc Nursing — guidance and support.",  longDesc:"Structured academic guidance for GNM, ANM, and B.Sc Nursing — covering curriculum support, examination preparation, and digital skills relevant to modern healthcare practice.",          duration:"2–4 Years", fee:null, tag:null, image:"https://cdn.pixabay.com/photo/2022/01/18/21/22/laptop-6948268_1280.jpg" },
      { code:"Pharmacy", name:"Pharmacy Programmes",                  desc:"D.Pharm, B.Pharm — guidance and support.",       longDesc:"Academic support for D.Pharm and B.Pharm students. Covers course-aligned digital tools, documentation skills, and examination preparation resources.",                                      duration:"2–4 Years", fee:null, tag:null, image:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg" },
    ],
  },

  /* ── CATEGORY 8: SPECIAL COURSES ── */
  {
    category:     "Special Courses",
    categorySlug: "special",
    icon:         "fas fa-star",
    pageLink:     "all-courses/special-course.html",
    coursePageLink: "./special-course.html",
    image:        "https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg",
    cardDesc:     "4 skill-boosting short courses — Excel, typing, digital marketing.",
    courses: [
      { code:"Adv-Excel", name:"Advanced Excel",                        desc:"Pivot tables, VLOOKUP, macros, and advanced formulas.",    longDesc:"Master Microsoft Excel professionally. Covers pivot tables, advanced formulas (VLOOKUP, INDEX/MATCH), data validation, conditional formatting, macros/VBA basics, and building Excel dashboards.",  duration:"3 Months",  fee:"Rs. 4,000/-",  tag:null, image:"https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_1280.jpg" },
      { code:"MKD",       name:"Master Key Depression — Speed Typing",  desc:"Increase typing speed and accuracy with structured drills.", longDesc:"A dedicated typing programme to build professional keyboard speed and accuracy. Covers touch-typing techniques, keyboarding drills, speed benchmarks, and Unicode typing for Bengali/Hindi.",         duration:"3 Months",  fee:"Rs. 2,000/-",  tag:null, image:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg" },
      { code:"ADMS",      name:"Advance Digital Marketing Solution",     desc:"SEO, SEM, Google Ads, social ads, and digital strategy.",  longDesc:"Advanced digital marketing covering SEO, SEM, Google Ads, Facebook/Instagram advertising, YouTube marketing, email campaigns, analytics, and end-to-end digital marketing strategies.",              duration:"6 Months",  fee:"Rs. 15,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
      { code:"DDME",      name:"Diploma in Digital Marketing Education", desc:"Comprehensive 12-month digital marketing diploma.",          longDesc:"The most comprehensive digital marketing programme — a full diploma covering all digital channels, advanced analytics, e-commerce marketing, influencer strategies, and professional portfolio development.",   duration:"12 Months", fee:"Rs. 24,000/-", tag:null, image:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg" },
    ],
  },

]; /* ← END ALL_COURSES */


/* ═══════════════════════════════════════════════════════════════════
   9. GALLERY
   ═══════════════════════════════════════════════════════════════════ */
const GALLERY = [
  { src:"https://cdn.pixabay.com/photo/2019/10/03/12/12/programmer-4523101_1280.jpg",   label:"Coding Sessions",  tall:true  },
  { src:"https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",       label:"Live Classes",     tall:false },
  { src:"https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_1280.jpg",   label:"Team Projects",    tall:false },
  { src:"https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684_1280.jpg",     label:"Computer Lab",     tall:false },
  { src:"https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",       label:"Project Demos",    tall:false },
];


/* ═══════════════════════════════════════════════════════════════════
   10. QUIZ DATA
   ═══════════════════════════════════════════════════════════════════ */
const QUIZ_DATA = [
  {
    q: "What is your primary goal?",
    opts: [
      { label:"Land a tech / IT job",               score:{ programming:3, ai:2, diploma:1 } },
      { label:"Improve my office & computer skills",score:{ office:3, diploma:2, special:1 } },
      { label:"Work in graphic or web design",      score:{ designing:3, programming:1 } },
      { label:"Understand and use AI tools",        score:{ ai:3, special:1 } },
      { label:"Education for my child",             score:{ kids:3 } },
      { label:"Academic degree guidance",           score:{ degree:3 } },
    ],
  },
  {
    q: "What is your current experience level?",
    opts: [
      { label:"Complete beginner — zero experience",score:{ diploma:2, office:2, kids:1 } },
      { label:"Basic computer knowledge",           score:{ office:1, diploma:1, designing:1 } },
      { label:"Some online learning done",          score:{ programming:1, ai:1, designing:1 } },
      { label:"I already code and want to advance", score:{ programming:3, ai:2 } },
    ],
  },
  {
    q: "How much time can you invest per week?",
    opts: [
      { label:"Under 5 hours (very part-time)",   score:{ special:2, office:1 } },
      { label:"5–10 hours (regular learner)",     score:{ diploma:2, designing:1 } },
      { label:"10–20 hours (serious student)",    score:{ programming:2, ai:2 } },
      { label:"Full-time — I want to finish fast",score:{ programming:3, ai:3, diploma:1 } },
    ],
  },
  {
    q: "Which area excites you most?",
    opts: [
      { label:"Building websites & web apps",     score:{ programming:3, designing:1 } },
      { label:"AI, ChatGPT & future technology",  score:{ ai:3 } },
      { label:"Graphics, UI design & creativity", score:{ designing:3 } },
      { label:"Digital marketing & social media", score:{ special:2, ai:1 } },
      { label:"Office software & data entry",     score:{ office:3, diploma:1 } },
      { label:"My child's digital future",        score:{ kids:3 } },
    ],
  },
];


/* ═══════════════════════════════════════════════════════════════════
   11. ROADMAP
   ═══════════════════════════════════════════════════════════════════ */
const ROADMAP = [
  { phase:"Phase 01", title:"Foundational Skills",       desc:"Mastering HTML, CSS, and Version Control with Git. Building responsive static websites and understanding the fundamental architecture of the web from the ground up." },
  { phase:"Phase 02", title:"Logic & Programming",       desc:"Learning JavaScript or Python. Developing algorithmic thinking, data structures, OOP, and systematic problem-solving — the core skills of every software role." },
  { phase:"Phase 03", title:"Frameworks & Ecosystem",   desc:"Deep-diving into React.js for Front-End or Node.js/Django for Back-End. State management, REST APIs, authentication, and database integration." },
  { phase:"Phase 04", title:"Real-World Project Work",  desc:"Building production-grade applications with database design, cloud deployment, agile workflows, and peer code reviews — portfolio-ready projects." },
  { phase:"Phase 05", title:"Career & Placement Launch",desc:"Portfolio review, resume crafting, LinkedIn optimisation, mock interviews, and active referrals to our verified network of 35+ hiring partners." },
];


/* ═══════════════════════════════════════════════════════════════════
   12. FAQ
   ═══════════════════════════════════════════════════════════════════ */
const FAQ_DATA = [
  { q:"Why should I invest in learning programming?",         a:"Programming is the core skill of the digital economy. It opens high-salaried jobs, remote work globally, freelancing income, and the ability to build your own startup." },
  { q:"I'm from a non-technical background. Can I join?",     a:"Absolutely — 60% of our placed students come from Commerce, Arts, and Science. We start from first principles and advance methodically with personal mentorship throughout." },
  { q:"Do you provide placement support?",                    a:"Comprehensively. Resume writing, LinkedIn optimisation, mock technical & HR interviews, and direct referrals to 35+ hiring partners. We don't stop until you land your first role." },
  { q:"What are the fees and payment options?",               a:"Fees range from Rs. 2,000 to Rs. 60,000 depending on the programme. We offer flexible EMI plans, merit scholarships, sibling discounts, and early-bird offers." },
  { q:"What laptop specs do I need?",                         a:"An Intel i3 / AMD Ryzen 3 with 8 GB RAM is sufficient for most programmes. Design and AI courses benefit from a dedicated GPU, but it is not mandatory to begin." },
  { q:"How do I access Documentation and Practice areas?",   a:"Both areas are password-protected and provided to enrolled students. Contact us via WhatsApp or email to receive your access credentials from our admin team." },
];


/* ═══════════════════════════════════════════════════════════════════
   13. TESTIMONIALS
   ═══════════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { name:"Rohit Das",    role:"Web Developer",          org:"TCS",              course:"ADWDWDE",    location:"Kolkata, WB",   stars:5, avatar:"R", msg:"ABCD Learning Hub completely changed my career. The project-based methodology and real industry mentorship prepared me thoroughly. I landed a TCS offer within 3 weeks of completing the course." },
  { name:"Sneha Roy",    role:"UI/UX Designer",          org:"Freelance",        course:"PDGDU",      location:"West Bengal",   stars:5, avatar:"S", msg:"The PDGDU programme is world-class — current curriculum, deeply experienced mentors, and a wonderfully supportive community. I secured my first freelance client within 8 weeks of completion." },
  { name:"Amit Kumar",   role:"Python Developer",        org:"Infosys",          course:"DCEP",       location:"West Bengal",   stars:5, avatar:"A", msg:"Coming from Commerce I was apprehensive, but ABCD Hub made Python logical and fun. I am now a working developer at Infosys — something I never imagined just 14 months ago." },
  { name:"Priya Sharma", role:"Digital Marketing Mgr",  org:"Marketing Agency", course:"DDME",       location:"Siliguri, WB",  stars:5, avatar:"P", msg:"The DDME diploma transformed my career completely. Real client projects, up-to-date curriculum, and brilliant placement support. Now earning 3× my previous salary." },
  { name:"Rahul Dey",    role:"AI Prompt Engineer",      org:"Tech Startup",     course:"DGAIA & PPE",location:"West Bengal",   stars:5, avatar:"R", msg:"The DGAIA & PPE programme is unlike anything else in Bengal. The AI architecture knowledge and prompt engineering skills gave me a massive competitive edge in the job market." },
];


/* ═══════════════════════════════════════════════════════════════════
   14. PRACTICE SECTION  (for practice/index.html)
   ═══════════════════════════════════════════════════════════════════ */
const PRACTICE_SECTIONS = [
  { title:"HTML & CSS Tasks",  icon:"fab fa-html5",       color:"#e34c26", folder:"html-css-task/",    desc:"Structured tasks to practise HTML structure and CSS styling from beginner to advanced level." },
  { title:"JavaScript Lab",    icon:"fab fa-js-square",   color:"#f7df1e", folder:"js-practice-task/", desc:"Hands-on JS exercises covering DOM, events, APIs, and ES6+ modern features." },
  { title:"Python Exercises",  icon:"fab fa-python",      color:"#3776ab", folder:"python-tasks/",     desc:"Python challenges from basic syntax through OOP, file handling, and real-world scripts." },
  { title:"Design Challenges", icon:"fas fa-paint-brush", color:"#ec4899", folder:"design-tasks/",     desc:"Figma and graphic design challenges to build creative skills and a strong portfolio." },
  { title:"AI Prompting Lab",  icon:"fas fa-robot",       color:"#8b5cf6", folder:"ai-prompting/",     desc:"Practise prompt engineering with real examples, challenges, and evaluated AI outputs." },
];


/* ═══════════════════════════════════════════════════════════════════
   15. DOCUMENTATION SECTION  (for doc/index.html)
   ═══════════════════════════════════════════════════════════════════ */
const DOC_SECTIONS = [
  { title:"Basic Computer",   icon:"fas fa-desktop",     color:"#4a9eff", folder:"basic-computer/",   desc:"Fundamentals of computer hardware, OS, MS Office, and internet usage guides." },
  { title:"Advance Computer", icon:"fas fa-server",      color:"#f59e0b", folder:"advance-computer/", desc:"Advanced topics: networking, Excel macros, Tally ERP, and system administration." },
  { title:"Designing",        icon:"fas fa-paint-brush", color:"#ec4899", folder:"designing/",        desc:"Photoshop, Illustrator, CorelDraw, Figma, and Canva reference documentation." },
  { title:"Programming",      icon:"fas fa-code",        color:"#10b981", folder:"programming/",      desc:"Complete guides for HTML/CSS, JavaScript, Python, React, Node.js and more." },
  { title:"AI Learning",      icon:"fas fa-robot",       color:"#8b5cf6", folder:"ai-learning/",      desc:"LLM guides, prompt engineering references, ChatGPT API tutorials, and AI project notes." },
  { title:"Kids Computer",    icon:"fas fa-child",       color:"#f97316", folder:"kids-computer/",    desc:"Kid-friendly documentation for Scratch, computer basics, and beginner coding activities." },
];
