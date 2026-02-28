const SITE_DATA = {

  // ─── HERO ───────────────────────────────────────────────────
  hero: {
    tagline: "Your Computer Skills. Your Future.",
    headline: "Every Great Career Today Starts With Computer Knowledge",
    subtext: "Whether you want to be a doctor, engineer, businessman, or artist — computers are the one skill that multiplies everything else. Discover the career waiting for you.",
    stats: [
      { value: "85%", label: "of all jobs require computer skills" },
      { value: "3×", label: "higher salary for computer-skilled workers" },
      { value: "₹3L+", label: "average starting salary for IT roles" },
      { value: "2030", label: "every major career will be digital" }
    ]
  },

  // ─── BENEFITS ───────────────────────────────────────────────
  benefits: [
    {
      icon: "💰",
      title: "Higher Earning Potential",
      desc: "Computer-skilled professionals earn significantly more than their peers in the same field — across healthcare, business, design, and government jobs.",
      highlight: "2–3× salary boost"
    },
    {
      icon: "🌍",
      title: "Work From Anywhere",
      desc: "Remote work, freelancing, and global job opportunities open up when you have strong computer skills. Work for international companies from West Bengal.",
      highlight: "Global job access"
    },
    {
      icon: "🛡️",
      title: "Job Security",
      desc: "Computer-skilled workers are the last to be laid off and the first to be promoted. Digital skills future-proof your career against automation.",
      highlight: "Crisis-proof career"
    },
    {
      icon: "🚀",
      title: "Fast Career Growth",
      desc: "Promotions come faster for employees who can use computers efficiently. Managers and leaders are almost always digital-first professionals today.",
      highlight: "Faster promotions"
    },
    {
      icon: "🎯",
      title: "Start Your Own Business",
      desc: "Computer skills let you launch a business with almost zero capital — freelancing, online stores, digital services, content creation, and more.",
      highlight: "Entrepreneurship ready"
    },
    {
      icon: "🧠",
      title: "Lifelong Skill",
      desc: "Unlike physical jobs that get harder with age, computer skills grow more valuable as you gain experience. A skill you learn once benefits you for life.",
      highlight: "Grows with you"
    }
  ],

  // ─── CAREERS ────────────────────────────────────────────────
  // salary: "Low" | "Medium" | "High" | "Very High"
  // growth: "Steady" | "Growing" | "Fast Growing" | "Booming"
  // demand: "Moderate" | "High" | "Very High"
  // type: "tech" | "creative" | "business" | "healthcare" | "govt"
  careers: [
    {
      id: "software-dev",
      title: "Software Developer",
      icon: "💻",
      type: "tech",
      tagline: "Build apps and systems the world runs on",
      desc: "Write code to create websites, mobile apps, desktop software, and enterprise systems. One of the most in-demand roles globally.",
      salary: "High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Office / Remote",
      startingPath: ["Basic Computer", "Programming Course", "Web Development", "Projects & Portfolio"],
      keySkills: ["Python / Java / JavaScript", "Problem solving", "Logic building", "Database basics"],
      dayInLife: "Write and test code, collaborate with teams, solve technical problems, ship features.",
      interests: ["coding", "technology", "problem solving", "logic", "math"],
      futuristic: false
    },
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      icon: "🎨",
      type: "creative",
      tagline: "Create visuals that communicate and inspire",
      desc: "Design logos, branding, social media graphics, packaging, advertisements, and digital content for businesses and brands.",
      salary: "Medium",
      growth: "Growing",
      demand: "High",
      workEnv: "Office / Freelance",
      startingPath: ["Basic Computer", "Photoshop & Illustrator", "Design Principles", "Build Portfolio"],
      keySkills: ["Adobe Photoshop", "Illustrator", "Canva Pro", "Colour theory", "Typography"],
      dayInLife: "Create visuals for clients, revise designs, present concepts, deliver final files.",
      interests: ["art", "creativity", "visuals", "drawing", "colours"],
      futuristic: false
    },
    {
      id: "digital-marketer",
      title: "Digital Marketer",
      icon: "📱",
      type: "business",
      tagline: "Help businesses grow online",
      desc: "Manage social media, run Google and Facebook ads, create content strategies, and help brands reach millions of customers online.",
      salary: "Medium",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Office / Remote / Agency",
      startingPath: ["Basic Computer", "Social Media Marketing", "Google Ads", "Analytics & SEO"],
      keySkills: ["Social media platforms", "Google Ads", "Content creation", "Analytics", "Copywriting"],
      dayInLife: "Manage campaigns, create content, analyse results, report to clients or managers.",
      interests: ["marketing", "social media", "communication", "business", "creativity"],
      futuristic: false
    },
    {
      id: "web-designer",
      title: "Web Designer",
      icon: "🌐",
      type: "creative",
      tagline: "Design and build websites people love",
      desc: "Design and build professional websites for businesses, NGOs, government bodies, and individuals using WordPress, Figma, and HTML/CSS.",
      salary: "Medium",
      growth: "Growing",
      demand: "High",
      workEnv: "Freelance / Agency",
      startingPath: ["Basic Computer", "Designing Course", "WordPress / HTML-CSS", "Client Projects"],
      keySkills: ["WordPress", "Figma", "HTML & CSS", "UI/UX basics", "Elementor"],
      dayInLife: "Meet clients, design mockups, build websites, test on devices, launch and hand over.",
      interests: ["design", "technology", "creativity", "business", "art"],
      futuristic: false
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      icon: "📊",
      type: "tech",
      tagline: "Turn numbers into business decisions",
      desc: "Analyse large datasets to find patterns, create dashboards, and help businesses make smarter decisions using Excel, SQL, and Power BI.",
      salary: "High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Office / Remote",
      startingPath: ["Basic Computer", "Advanced Excel", "SQL Basics", "Power BI / Tableau"],
      keySkills: ["Excel (Advanced)", "SQL", "Power BI", "Data visualisation", "Python basics"],
      dayInLife: "Clean data, build dashboards, present insights, answer business questions with data.",
      interests: ["math", "numbers", "logic", "business", "problem solving"],
      futuristic: false
    },
    {
      id: "accountant-tally",
      title: "Accountant / Finance Executive",
      icon: "🧾",
      type: "business",
      tagline: "The financial backbone of every business",
      desc: "Manage company accounts, GST filing, payroll, and financial reports using Tally Prime and Excel. Every business needs an accountant.",
      salary: "Medium",
      growth: "Steady",
      demand: "High",
      workEnv: "Office",
      startingPath: ["Basic Computer", "Tally Prime Course", "Advanced Excel", "GST & Taxation"],
      keySkills: ["Tally Prime", "GST filing", "Excel", "Book-keeping", "Financial statements"],
      dayInLife: "Enter transactions, reconcile accounts, file GST returns, prepare salary slips, generate reports.",
      interests: ["numbers", "finance", "business", "organisation", "accuracy"],
      futuristic: false
    },
    {
      id: "video-editor",
      title: "Video Editor / Content Creator",
      icon: "🎬",
      type: "creative",
      tagline: "Tell stories through video — the world's fastest growing medium",
      desc: "Edit videos for YouTube channels, Instagram reels, corporate films, weddings, news channels, and streaming platforms.",
      salary: "Medium",
      growth: "Fast Growing",
      demand: "High",
      workEnv: "Freelance / Studio",
      startingPath: ["Basic Computer", "Video Editing Course", "YouTube / Social Media", "Client Projects"],
      keySkills: ["Sony Vegas / Premiere Pro", "Colour grading", "Audio editing", "Motion graphics", "Storytelling"],
      dayInLife: "Import footage, cut and arrange clips, add music and effects, export for platform.",
      interests: ["creativity", "movies", "storytelling", "art", "technology"],
      futuristic: false
    },
    {
      id: "ai-ml-engineer",
      title: "AI / Machine Learning Engineer",
      icon: "🤖",
      type: "tech",
      tagline: "Build the intelligent systems of tomorrow",
      desc: "Design and train AI models that power recommendation systems, image recognition, language processing, and autonomous vehicles.",
      salary: "Very High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Remote / Tech Companies",
      startingPath: ["Programming Course", "Data Analysis", "Python & Statistics", "Machine Learning Specialisation"],
      keySkills: ["Python", "TensorFlow / PyTorch", "Statistics & maths", "Data processing", "Cloud platforms"],
      dayInLife: "Train models, evaluate accuracy, deploy to production, research new techniques.",
      interests: ["coding", "math", "AI", "research", "technology", "science"],
      futuristic: false
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Analyst",
      icon: "🛡️",
      type: "tech",
      tagline: "Protect the digital world from threats",
      desc: "Protect companies from hackers and data breaches. One of the most critical and shortage-affected roles in the technology sector.",
      salary: "Very High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Office / Remote / Government",
      startingPath: ["Programming Basics", "Networking Fundamentals", "Security Certifications", "Ethical Hacking"],
      keySkills: ["Network security", "Ethical hacking", "Security tools", "Risk assessment", "Incident response"],
      dayInLife: "Monitor systems for threats, conduct security audits, respond to incidents, train staff.",
      interests: ["technology", "problem solving", "security", "coding", "investigation"],
      futuristic: false
    },
    {
      id: "govt-computer-operator",
      title: "Government Computer Operator",
      icon: "🏛️",
      type: "govt",
      tagline: "Secure, respected government employment",
      desc: "Work in government offices, courts, hospitals, banks, and public departments as a computer operator or data entry professional.",
      salary: "Medium",
      growth: "Steady",
      demand: "High",
      workEnv: "Government Office",
      startingPath: ["Basic Computer (COPA ITI)", "MS Office Course", "Typing Speed", "Government Exam Prep"],
      keySkills: ["MS Word & Excel", "Typing (30+ WPM)", "Data entry", "Government software", "DTP"],
      dayInLife: "Enter and manage data, prepare official documents, operate printers and scanners, file records.",
      interests: ["stability", "government", "service", "organisation", "typing"],
      futuristic: false
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      icon: "✏️",
      type: "creative",
      tagline: "Design apps and websites that feel effortless",
      desc: "Design the look and feel of apps and websites — from wireframes to final visual interfaces — making digital products intuitive and beautiful.",
      salary: "High",
      growth: "Fast Growing",
      demand: "Very High",
      workEnv: "Office / Remote / Agency",
      startingPath: ["Designing Course", "UI/UX Certificate", "Figma Mastery", "Product Design Projects"],
      keySkills: ["Figma", "User research", "Prototyping", "Design systems", "Interaction design"],
      dayInLife: "Research users, sketch wireframes, build prototypes in Figma, test with real users, deliver specs.",
      interests: ["design", "psychology", "technology", "creativity", "problem solving"],
      futuristic: false
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      icon: "☁️",
      type: "tech",
      tagline: "Manage the infrastructure powering the internet",
      desc: "Set up and manage cloud infrastructure on AWS, Azure, and Google Cloud — enabling businesses to scale globally without physical servers.",
      salary: "Very High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Remote / Tech Companies",
      startingPath: ["Programming Basics", "Networking Fundamentals", "AWS / Azure Certification", "DevOps Practices"],
      keySkills: ["AWS / Azure / GCP", "Linux", "Docker & Kubernetes", "Networking", "Security"],
      dayInLife: "Deploy and manage servers, automate infrastructure, monitor performance, reduce costs.",
      interests: ["technology", "systems", "problem solving", "networking", "coding"],
      futuristic: false
    },
    // FUTURISTIC CAREERS
    {
      id: "prompt-engineer",
      title: "AI Prompt Engineer",
      icon: "🧬",
      type: "tech",
      tagline: "Talk to AI systems and shape their outputs",
      desc: "Design and optimise prompts for large language models like ChatGPT to make them perform specific tasks for businesses and applications.",
      salary: "High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Remote / AI Companies",
      startingPath: ["AI Course", "ChatGPT for Work", "Prompt Engineering Practice", "Specialisation"],
      keySkills: ["AI tool usage", "Clear communication", "Critical thinking", "Domain expertise", "Testing"],
      dayInLife: "Write and test prompts, build AI workflows, evaluate outputs, work with product teams.",
      interests: ["AI", "writing", "technology", "problem solving", "language"],
      futuristic: true
    },
    {
      id: "metaverse-developer",
      title: "Metaverse / XR Developer",
      icon: "🥽",
      type: "tech",
      tagline: "Build virtual worlds and immersive experiences",
      desc: "Create virtual reality (VR), augmented reality (AR), and mixed reality experiences for gaming, education, healthcare, and retail.",
      salary: "Very High",
      growth: "Fast Growing",
      demand: "Growing",
      workEnv: "Studios / Remote",
      startingPath: ["Programming Course", "3D Modelling", "Unity / Unreal Engine", "XR Development"],
      keySkills: ["Unity / Unreal", "3D modelling", "C# / C++", "VR hardware knowledge", "UX for XR"],
      dayInLife: "Build virtual environments, code interactions, test on VR headsets, publish experiences.",
      interests: ["gaming", "technology", "creativity", "3D design", "coding"],
      futuristic: true
    },
    {
      id: "drone-programmer",
      title: "Drone & Robotics Programmer",
      icon: "🚁",
      type: "tech",
      tagline: "Programme machines that move in the physical world",
      desc: "Program drones and robots for agriculture, delivery, surveillance, manufacturing, and disaster response — a fast-growing sector in India.",
      salary: "High",
      growth: "Fast Growing",
      demand: "Growing",
      workEnv: "Field / Labs",
      startingPath: ["Programming Course", "Electronics Basics", "Python & Embedded Systems", "Robotics Projects"],
      keySkills: ["Python", "Embedded systems", "Sensors & hardware", "Control algorithms", "CAD basics"],
      dayInLife: "Write flight control code, test hardware, troubleshoot sensors, programme autonomous tasks.",
      interests: ["robots", "technology", "science", "hardware", "coding"],
      futuristic: true
    },
    {
      id: "digital-health",
      title: "Digital Health Technologist",
      icon: "🏥",
      type: "healthcare",
      tagline: "Where medicine meets technology",
      desc: "Build and manage health apps, telemedicine platforms, electronic health records, wearable health devices, and AI diagnostic tools.",
      salary: "High",
      growth: "Booming",
      demand: "Very High",
      workEnv: "Hospitals / Tech Companies",
      startingPath: ["Healthcare Course (DMLT / Nursing)", "Computer Course", "Health IT Basics", "Specialisation"],
      keySkills: ["Health IT systems", "EMR software", "Data privacy", "Medical device integration", "Telehealth"],
      dayInLife: "Configure health systems, train medical staff, analyse patient data, maintain digital records.",
      interests: ["healthcare", "technology", "helping others", "science", "data"],
      futuristic: true
    },
    {
      id: "blockchain-dev",
      title: "Blockchain Developer",
      icon: "⛓️",
      type: "tech",
      tagline: "Build the decentralised internet",
      desc: "Develop smart contracts, decentralised applications (dApps), and blockchain infrastructure for finance, supply chain, and digital identity systems.",
      salary: "Very High",
      growth: "Growing",
      demand: "High",
      workEnv: "Remote / Fintech",
      startingPath: ["Programming Course", "Advanced JavaScript", "Blockchain Fundamentals", "Solidity / Web3"],
      keySkills: ["Solidity", "Web3.js", "Ethereum", "Smart contracts", "Cryptography basics"],
      dayInLife: "Write and audit smart contracts, build dApps, work on consensus mechanisms, write documentation.",
      interests: ["coding", "finance", "security", "technology", "decentralisation"],
      futuristic: true
    }
  ],

  // ─── LEARNING PATHS ─────────────────────────────────────────
  learningPaths: [
    {
      title: "The Tech Path",
      subtitle: "For future developers, AI engineers & data scientists",
      icon: "💻",
      color: "#0ea5e9",
      steps: [
        { step: 1, name: "Computer Basics", duration: "1–2 months", desc: "MS Office, internet, typing, basic file management" },
        { step: 2, name: "Programming Foundation", duration: "3–6 months", desc: "Python or JavaScript fundamentals, logic & problem solving" },
        { step: 3, name: "Specialisation", duration: "6–12 months", desc: "Web development, data science, or AI/ML focus area" },
        { step: 4, name: "Projects & Portfolio", duration: "2–3 months", desc: "Build 3–5 real projects to show employers" },
        { step: 5, name: "Job / Internship", duration: "Launch!", desc: "Apply for jobs or internships, start earning" }
      ]
    },
    {
      title: "The Creative Path",
      subtitle: "For designers, content creators & digital artists",
      icon: "🎨",
      color: "#ec4899",
      steps: [
        { step: 1, name: "Computer Basics", duration: "1–2 months", desc: "MS Office, internet, typing, basic file management" },
        { step: 2, name: "Design Tools", duration: "3–4 months", desc: "Photoshop, Illustrator, Canva, CorelDraw" },
        { step: 3, name: "Specialisation", duration: "3–6 months", desc: "Graphic design, video editing, UI/UX, or web design" },
        { step: 4, name: "Build Portfolio", duration: "1–2 months", desc: "Create 10+ professional design samples" },
        { step: 5, name: "Clients / Job", duration: "Launch!", desc: "Get first clients via Fiverr, Upwork, or local agencies" }
      ]
    },
    {
      title: "The Business Path",
      subtitle: "For marketers, accountants & entrepreneurs",
      icon: "📊",
      color: "#f59e0b",
      steps: [
        { step: 1, name: "Computer Basics", duration: "1–2 months", desc: "MS Office, internet, typing, basic file management" },
        { step: 2, name: "Business Tools", duration: "2–3 months", desc: "Advanced Excel, Tally Prime, or Digital Marketing" },
        { step: 3, name: "Specialisation", duration: "3–4 months", desc: "Accounting, marketing, or business analytics" },
        { step: 4, name: "Certifications", duration: "1–2 months", desc: "Google Digital Garage, Tally certification, or GST practitioner" },
        { step: 5, name: "Job / Business", duration: "Launch!", desc: "Join a firm, open a practice, or launch your service" }
      ]
    },
    {
      title: "The Government Path",
      subtitle: "For stable, respected government employment",
      icon: "🏛️",
      color: "#10b981",
      steps: [
        { step: 1, name: "Computer Basics (COPA)", duration: "1 year", desc: "ITI COPA — government recognised computer operator course" },
        { step: 2, name: "MS Office Expert", duration: "1–3 months", desc: "Word, Excel, PowerPoint to professional level" },
        { step: 3, name: "Typing Speed", duration: "Ongoing", desc: "Achieve 30+ WPM Hindi and English typing" },
        { step: 4, name: "Exam Preparation", duration: "3–6 months", desc: "Prepare for SSC CHSL, WBCS, State computer operator exams" },
        { step: 5, name: "Government Job", duration: "Launch!", desc: "Secure placement in government department" }
      ]
    }
  ],

  // ─── TESTIMONIALS ───────────────────────────────────────────
  testimonials: [
    {
      name: "Priya Mondal",
      role: "Graphic Designer at a Kolkata Ad Agency",
      course: "Certificate in Designing",
      quote: "I used to think designing was only for those who studied art. After the designing course, I landed a job in 3 months. My salary is higher than most of my college friends.",
      image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
    },
    {
      name: "Rahul Das",
      role: "Freelance Web Developer",
      course: "Diploma in Programming",
      quote: "I earn more working 6 hours from home than I did working 10 hours at a factory. Computer skills changed everything for my family.",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/12/startup-593299_1280.jpg"
    },
    {
      name: "Sunita Roy",
      role: "Accounts Executive",
      course: "Tally Prime + Excel",
      quote: "As a parent, I was unsure about investing in computer training. But my daughter's salary after just 6 months of courses paid back the fees 10 times over.",
      image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
    }
  ],

  // ─── CHATBOT CONFIG ─────────────────────────────────────────
  chatbot: {
    name: "CareerBot",
    greeting: "👋 Hi! I'm CareerBot from ABCD Learning Hub. I help students discover the right computer career path.\n\nLet's find the perfect career for you! First, tell me — are you a student or a parent?",
    questions: [
      {
        id: "role",
        question: "Are you a student exploring careers, or a parent helping your child?",
        type: "choice",
        options: ["I'm a student", "I'm a parent", "I'm a working professional"]
      },
      {
        id: "education",
        question: "What is your current education level?",
        type: "choice",
        options: ["Class 8–10", "Class 11–12", "Completed 12th", "Graduate", "Working professional"]
      },
      {
        id: "interests",
        question: "What topics excite you the most? (Pick all that apply)",
        type: "multi",
        options: ["Coding & technology", "Art & design & creativity", "Numbers & finance & business", "Helping people & healthcare", "Social media & marketing", "Gaming & animation", "Government job & stability"]
      },
      {
        id: "preference",
        question: "What kind of work environment do you prefer?",
        type: "choice",
        options: ["Office job (9 to 5)", "Work from home / remote", "Freelance (own schedule)", "Government sector", "Start my own business"]
      },
      {
        id: "salary_priority",
        question: "What matters most to you in a career?",
        type: "choice",
        options: ["Maximum salary", "Job security & stability", "Creative freedom", "Helping society", "Work-life balance"]
      }
    ],
    interestMap: {
      "coding": ["software-dev", "ai-ml-engineer", "cybersecurity", "cloud-engineer"],
      "technology": ["software-dev", "ai-ml-engineer", "cybersecurity", "cloud-engineer", "drone-programmer"],
      "art": ["graphic-designer", "ui-ux-designer", "video-editor", "web-designer"],
      "design": ["graphic-designer", "ui-ux-designer", "web-designer"],
      "creativity": ["graphic-designer", "video-editor", "ui-ux-designer", "web-designer"],
      "numbers": ["data-analyst", "accountant-tally"],
      "finance": ["accountant-tally", "data-analyst", "blockchain-dev"],
      "business": ["digital-marketer", "accountant-tally", "data-analyst"],
      "social media": ["digital-marketer", "video-editor"],
      "marketing": ["digital-marketer"],
      "healthcare": ["digital-health"],
      "gaming": ["metaverse-developer", "ui-ux-designer"],
      "animation": ["video-editor", "metaverse-developer"],
      "government": ["govt-computer-operator"],
      "stability": ["govt-computer-operator", "accountant-tally"],
      "AI": ["ai-ml-engineer", "prompt-engineer"],
      "writing": ["prompt-engineer", "digital-marketer"],
      "science": ["ai-ml-engineer", "drone-programmer"],
      "math": ["data-analyst", "ai-ml-engineer"],
      "problem solving": ["software-dev", "cybersecurity", "data-analyst"],
      "helping others": ["digital-health", "govt-computer-operator"],
      "security": ["cybersecurity"],
      "robots": ["drone-programmer"],
      "3D design": ["metaverse-developer"],
      "language": ["prompt-engineer"],
      "investigation": ["cybersecurity"],
      "organisation": ["govt-computer-operator", "accountant-tally"]
    }
  }
};

// Export for module use
if (typeof module !== 'undefined') module.exports = SITE_DATA;