/**
 * Project repository data for Athiq Khan's portfolio.
 * To add a new project, simply append an object to the `projects` array.
 */

export const projects = [
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    title: "Personal Developer Portfolio",
    category: "Full-Stack & Design",
    status: "Active / Production",
    badgeType: "live", // 'live', 'in-progress', 'experiment', 'proposed'
    summary:
      "A bespoke, editorial portfolio website showcasing engineering projects, AI exploration, and creative visual work with a refined dark aesthetic.",
    role: "Sole Designer & Developer",
    featured: true,
    accentColor: "#C2F970",
    technologies: ["Node.js", "React.js", "JavaScript", "CSS Modules", "HTML5"],
    demoUrl: "#", // Active on this deployment
    githubUrl: null, // [EDITABLE: Provide your GitHub repo link when public]
    date: "2025 – Present",
    visualType: "code-editorial",
    overview:
      "Built to establish a distinct personal brand combining software craftsmanship and creative technology. Replaces cookie-cutter templates with an authentic editorial aesthetic tailored to an AIML engineering student.",
    problem:
      "Generic portfolio templates often rely on gaudy neon gradients, repetitive 3D models, or exaggerated experience metrics that misrepresent student developers. The goal was to build a restrained, high-performance web experience focused on real craftsmanship.",
    solution:
      "Implemented an editorial dark UI utilizing a strict color token system (#111311 background, #C2F970 lime accent), responsive typography (Manrope & Inter), modular architecture, and structured data handling for instant updates.",
    process: [
      "Designed high-contrast typography hierarchy and color balance in dark mode.",
      "Engineered reusable component architecture using React.js and Node.js environment.",
      "Implemented accessible modal interactions and responsive drawer navigation.",
      "Structured all portfolio data into lightweight, maintainable JavaScript files."
    ],
    challenges:
      "Balancing high visual impact with strict accessibility contrast ratios and zero-bloat performance across mobile and desktop viewports.",
    lessonsLearned:
      "Understanding the power of component-driven design systems, clean CSS variables, and the importance of genuine storytelling over templated filler.",
    keyFeatures: [
      "Dark editorial design system with bespoke typography",
      "Interactive Project Deep-Dive drawer & modal system",
      "Integrated Creative Playground for AI video & visual experiments",
      "Validating contact form with accessible feedback states",
      "Strict semantic HTML with zero framework lock-in"
    ]
  },
  {
    id: "course-explorer",
    slug: "course-explorer",
    title: "Course Explorer Web App",
    category: "Web Application",
    status: "In Progress",
    badgeType: "in-progress",
    summary:
      "A modular React web application for searching, filtering, and bookmarking technical courses with dynamic state management and reusable components.",
    role: "Frontend Developer",
    featured: true,
    accentColor: "#70E2F9",
    technologies: ["React.js", "JavaScript", "CSS", "HTML5", "Local Storage"],
    demoUrl: null, // [EDITABLE: Add live demo URL once deployed]
    githubUrl: null, // [EDITABLE: Add repository URL once published]
    date: "2025",
    visualType: "dashboard-grid",
    overview:
      "An educational exploration tool that enables students to discover courses across domains like AI, Full-Stack, and Python, featuring instantaneous client-side search and category filtering.",
    problem:
      "Finding relevant technical courses across disparate platforms often leads to tab clutter and unstructured tracking without lightweight categorization or personal bookmarking.",
    solution:
      "Designed a single-page React application with atomic components, multi-faceted filtering (difficulty, subject, duration), and persistent client-side state for saved course roadmaps.",
    process: [
      "Structured the course schema with attributes for tags, duration, and prerequisites.",
      "Implemented debounce-assisted search input and combined category filters.",
      "Created reusable CourseCard, FilterPill, and CourseModal components.",
      "Handled responsive grid views adapting smoothly from 1 to 3 columns."
    ],
    challenges:
      "Managing multi-criteria filter state without redundant component re-renders or laggy input response on lower-end devices.",
    lessonsLearned:
      "Mastered React state colocation, custom hooks for filter logic, and component memoization patterns.",
    keyFeatures: [
      "Real-time instant search with multi-tag filtering",
      "Bookmark system leveraging browser storage",
      "Course syllabus view with prerequisite tracker",
      "Mobile-friendly drawer navigation"
    ]
  },
  {
    id: "ai-video-showcase",
    slug: "ai-video-showcase",
    title: "AI Video Creative Showcase",
    category: "Creative Technology",
    status: "Experiment / Active",
    badgeType: "experiment",
    summary:
      "A curated digital showcase featuring AI-generated advertisement concepts, cinematic camera experiments, and visual video editing pipelines.",
    role: "Director & Prompt Engineer",
    featured: true,
    accentColor: "#F9B870",
    technologies: ["AI Video Generation", "Video Editing", "Prompt Engineering", "CSS3"],
    demoUrl: null, // View in the Playground section
    githubUrl: null,
    date: "2025",
    visualType: "cinematic-reel",
    overview:
      "A bridge between generative artificial intelligence and creative motion storytelling, testing prompt-to-video consistency, camera angle choreography, and post-production pacing.",
    problem:
      "Generative video tools frequently suffer from temporal flickering, erratic camera moves, and disjointed narrative arcs if prompt parameters and motion seeds are not carefully controlled.",
    solution:
      "Built a structured prompting framework pairing camera direction tokens with targeted aspect ratios (9:16 vertical reels and 16:9 cinematic wide), followed by manual timing adjustments in video editing software.",
    process: [
      "Formulated prompt matrices testing lighting style, motion vectors, and lens depth.",
      "Curated high-fidelity clip sequences and matched beats with audio rhythm.",
      "Compiled experiments into an interactive portfolio gallery with responsive video players.",
      "Documented prompt parameters alongside each visual specimen."
    ],
    challenges:
      "Achieving consistent visual identity across sequential video clips without character morphing or artifact distortion.",
    lessonsLearned:
      "Directing AI requires precise descriptive vocabulary and iterative seed testing — treating prompt crafting like technical cinematography.",
    keyFeatures: [
      "Side-by-side prompt analysis and resulting video preview",
      "Multi-ratio responsive video layout (16:9 cinematic & 9:16 social)",
      "Zero-autopause interactive video control system",
      "Creative breakdown of post-processing edits"
    ]
  },
  {
    id: "screentime-dashboard",
    slug: "screentime-dashboard",
    title: "Screen-Time Awareness Dashboard",
    category: "Data Visualization",
    status: "Proposed Concept",
    badgeType: "proposed",
    summary:
      "A conceptual analytics dashboard designed to visualize daily screen-time metrics, app usage patterns, and promote intentional digital habits.",
    role: "Concept Designer & Frontend Dev",
    featured: false,
    accentColor: "#F9709E",
    technologies: ["JavaScript", "React.js", "CSS Modules", "HTML5 Canvas"],
    demoUrl: null,
    githubUrl: null,
    date: "Proposed",
    visualType: "analytics-chart",
    overview:
      "A dashboard interface turning raw screen session logs into digestible cognitive awareness charts with daily goal benchmarks and burnout prevention alerts.",
    problem:
      "Standard device screen-time metrics are buried in device settings and presented as static bar graphs without qualitative context or actionable habit suggestions.",
    solution:
      "Conceptualized a sleek dark dashboard breaking down focus intervals versus passive consumption, featuring customizable notification thresholds.",
    process: [
      "Mapped sample JSON data structures representing hourly app session logs.",
      "Drafted high-contrast chart mockups emphasizing focused work blocks.",
      "Prototyped SVG/Canvas visualization cards for breakdown by activity type."
    ],
    challenges:
      "Translating dry time series data into clean, motivational interface visuals without overwhelming visual clutter.",
    lessonsLearned:
      "The subtleties of data hierarchy: summary metrics first, comparative benchmarks second, granular breakdown on demand.",
    keyFeatures: [
      "Focus vs. Distraction hourly breakdown chart",
      "Customizable daily threshold indicators",
      "High-contrast dark analytical color palette",
      "Exportable summary report layout"
    ]
  },
  {
    id: "ai-prompt-lab",
    slug: "ai-prompt-lab",
    title: "AI Prompt Lab & Playground",
    category: "AI & Experimentation",
    status: "Experiment",
    badgeType: "experiment",
    summary:
      "An interactive study environment demonstrating zero-shot, few-shot, and persona-based prompt engineering techniques with side-by-side output evaluation.",
    role: "Developer & AI Researcher",
    featured: false,
    accentColor: "#9E70F9",
    technologies: ["Python", "Prompt Engineering", "HTML", "CSS", "JavaScript"],
    demoUrl: null,
    githubUrl: null,
    date: "2025",
    visualType: "prompt-matrix",
    overview:
      "A structured hands-on lab exploring the variance in LLM responses when applying distinct prompting frameworks, structured delimiters, and chain-of-thought instructions.",
    problem:
      "Many learners use conversational, ambiguous prompts without understanding why results drift, hallucinate, or fail formatting requirements.",
    solution:
      "Structured a comparative lab interface contrasting raw zero-shot input against structured few-shot templates and persona conditioning, illustrating why specific framing yields superior outputs.",
    process: [
      "Documented 15+ prompt test suites across coding, summarization, and creative writing.",
      "Structured comparative UI cards with syntax highlighting for system instructions.",
      "Formulated evaluation criteria covering relevance, structure, and adherence."
    ],
    challenges:
      "Standardizing evaluation metrics to objectively compare qualitative text outputs across varying temperatures.",
    lessonsLearned:
      "Prompt engineering is systematic software specification: clarity of constraints and explicit delimiters matter more than adjectives.",
    keyFeatures: [
      "Side-by-side prompt methodology comparison (Zero-shot vs. Few-shot)",
      "Interactive persona role-play simulator structure",
      "Copy-to-clipboard prompt template library",
      "Token efficiency and constraint guideline reference"
    ]
  }
];
