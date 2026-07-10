import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  secureApp,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "whychooseme",
    title: "Why Me",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Development",
    icon: web,
    items: ["Business Websites", "Landing Pages", "Portfolio Websites", "Company Websites"],
  },
  {
    title: "Full Stack Web Applications",
    icon: backend,
    items: ["Admin Dashboards", "ERP/CRM Systems", "Booking Systems", "SaaS Applications"],
  },
  {
    title: "Android App Development",
    icon: mobile,
    items: ["Native Android Apps", "Firebase Integration", "Authentication", "Offline Storage", "REST API Integration", "Push Notifications"],
  },
  {
    title: "E-Commerce Solutions",
    icon: web,
    items: ["Online Stores", "Payment Integration", "Inventory Management"],
  },
  {
    title: "API Development & Integration",
    icon: backend,
    items: ["REST APIs", "Third-Party APIs", "Payment Gateways", "Authentication"],
  },
  {
    title: "Website & App Maintenance",
    icon: creator,
    items: ["Bug Fixes", "Performance Optimization", "Feature Updates", "Technical Support"],
  },
];

const technologies = [
  { name: "HTML5", icon: html, category: "Frontend" },
  { name: "CSS3", icon: css, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: javascript, category: "Frontend" },
  { name: "TypeScript", icon: typescript, category: "Frontend" },
  { name: "React.js", icon: reactjs, category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap", category: "Frontend" },
  { name: "Material UI (MUI)", icon: "https://cdn.simpleicons.org/mui", category: "Frontend" },
  { name: "Shadcn/UI", icon: "", category: "Frontend" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer", category: "Frontend" },
  { name: "Redux Toolkit", icon: redux, category: "Frontend" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express", category: "Backend" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", category: "Backend" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask", category: "Backend" },
  { name: "REST API", icon: "", category: "Backend" },
  { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens", category: "Backend" },
  { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio", category: "Backend" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio", category: "Mobile" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg", category: "Mobile" },
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin", category: "Mobile" },
  { name: "Jetpack Compose", icon: "https://cdn.simpleicons.org/jetpackcompose", category: "Mobile" },
  { name: "Firebase Authentication", icon: "https://cdn.simpleicons.org/firebase", category: "Mobile" },
  { name: "Firebase Cloud Messaging (FCM)", icon: "https://cdn.simpleicons.org/firebase", category: "Mobile" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", category: "AI/ML" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask", category: "AI/ML" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow", category: "AI/ML" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras", category: "AI/ML" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv", category: "AI/ML" },
  { name: "MediaPipe", icon: "https://cdn.simpleicons.org/mediapipe", category: "AI/ML" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy", category: "AI/ML" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas", category: "AI/ML" },
  { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn", category: "AI/ML" },
  { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface", category: "AI/ML" },
  { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", category: "AI/ML" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain", category: "AI/ML" },
  { name: "RAG", icon: "", category: "AI/ML" },
  { name: "AI Chatbots", icon: "", category: "AI/ML" },
  { name: "Computer Vision", icon: "", category: "AI/ML" },
  { name: "NLP", icon: "", category: "AI/ML" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", category: "Database" },
  { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite", category: "Database" },
  { name: "Firebase Firestore", icon: "https://cdn.simpleicons.org/firebase", category: "Database" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql", category: "Database" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis", category: "Database" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel", category: "Cloud & Deployment" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify", category: "Cloud & Deployment" },
  { name: "DigitalOcean", icon: "https://cdn.simpleicons.org/digitalocean", category: "Cloud & Deployment" },
  { name: "Railway", icon: "", category: "Cloud & Deployment" },
  { name: "Render", icon: "", category: "Cloud & Deployment" },
  { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary", category: "Cloud & Deployment" },
  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions", category: "Cloud & Deployment" },
  { name: "Docker", icon: docker, category: "Cloud & Deployment" },
  { name: "Git", icon: git, category: "Tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github", category: "Tools" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman", category: "Tools" },
  { name: "Figma", icon: figma, category: "Tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg", category: "Tools" },
  { name: "npm", icon: "https://cdn.simpleicons.org/npm", category: "Tools" },
  { name: "Yarn", icon: "https://cdn.simpleicons.org/yarn", category: "Tools" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux", category: "Tools" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger", category: "Tools" },
  { name: "Thunder Client", icon: "", category: "Tools" },
  { name: "Razorpay", icon: "https://cdn.simpleicons.org/razorpay", category: "Payments & Integrations" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe", category: "Payments & Integrations" },
  { name: "Google Maps API", icon: "https://cdn.simpleicons.org/googlemaps", category: "Payments & Integrations" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", category: "Payments & Integrations" },
  { name: "EmailJS", icon: "", category: "Payments & Integrations" },
  { name: "Nodemailer", icon: "", category: "Payments & Integrations" },
  { name: "OAuth (Google Login)", icon: "", category: "Payments & Integrations" },
];

const projects = [
  {
    name: "Inbox.com",
    description:
      "A polished, trustworthy email platform with a premium and privacy-focused design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Inbox.com",
    live_url: "https://inbox.com",
    source_code_link: "#",
  },
  {
    name: "Vapio.io",
    description:
      "A modern developer product site for a voice AI platform with clean structure and strong technical feel.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "ui/ux", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Vapio.io",
    live_url: "https://vapio.io",
    source_code_link: "#",
  },
  {
    name: "Elite Design Engineering",
    description:
      "A professional business website with clear layout and credibility-focused design for an engineering firm.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Elite+Design+Eng",
    live_url: "https://elitedesigneng.com",
    source_code_link: "#",
  },
  {
    name: "Raheja Jade City",
    description:
      "A premium real-estate brand website with strong visual hierarchy showcasing a large mixed-use development.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "real-estate", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Raheja+Jade+City",
    live_url: "https://rahejajadecityjuinagars.com",
    source_code_link: "#",
  },
  {
    name: "SponFest.com",
    description:
      "A hackathon platform website built to communicate collaboration, innovation, and community for sponsors and participants.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "platform", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=SponFest.com",
    live_url: "https://sponfest.com",
    source_code_link: "#",
  },
  {
    name: "Online Movie Booking System",
    description:
      "MovieBook: Streamlined ticketing—browse movies, choose seats, pay securely. Admins handle showtimes.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Movie+Booking",
    source_code_link: "https://github.com/AadityaMahajan03/Online-Movie-Booking-System",
  },
  {
    name: "Secure Exam Platform",
    description:
      "A secure, AI-driven examination application that uses real-time face and gesture recognition to monitor users during online exams.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "mediapipe", color: "green-text-gradient" },
      { name: "opencv", color: "pink-text-gradient" },
    ],
    image: secureApp,
    source_code_link: "https://github.com/AadityaMahajan03/Secure-Exam-Web-App",
  },
  {
    name: "Rental Equipment System",
    description:
      "FarmTech: Rent agri-equipment—browse, book, pay. Providers list; admin controls.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "html/css", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/151030/915EFF?text=Rental+Equipment",
    source_code_link: "https://github.com/AadityaMahajan03/FarmTech_-Rental-System-For-Agriculture-Equipment",
  },
];

const whyChooseMe = [
  "Full Stack Development",
  "Android App Development",
  "Responsive UI/UX",
  "Clean & Scalable Code",
  "Fast Communication",
  "On-Time Delivery",
  "Post-Launch Support",
];

const testimonials = [
  {
    name: "Inbox.com",
    role: "Website",
    feedback:
      "The website was developed with a polished, trustworthy interface that supports the brand's premium and privacy-focused positioning.",
    image: "",
  },
  {
    name: "Vapi / Vapio.io",
    role: "Website",
    feedback:
      "The final site clearly communicates a modern developer product, with clean structure and a strong technical feel that fits a voice AI platform.",
    image: "",
  },
  {
    name: "Elite Design Engineering",
    role: "Website",
    feedback:
      "The website presents the company in a professional way, with a clear layout and a business-focused design that builds credibility.",
    image: "",
  },
  {
    name: "Raheja Jade City",
    role: "Website",
    feedback:
      "The site was crafted to reflect a premium real-estate brand, with strong visual hierarchy and a layout suited to showcasing a large mixed-use development.",
    image: "",
  },
  {
    name: "SponFest.com",
    role: "Website",
    feedback:
      "The platform website was built to communicate collaboration, innovation, and community, making the hackathon concept easy to understand for users and sponsors.",
    image: "",
  },
];

const faqData = [
  {
    question: "Can you build both a website and a mobile app?",
    answer:
      "Yes, I specialize in both web development (frontend + backend) and native Android app development. I can build complete digital solutions that work across platforms.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "I work with modern technologies including React, Next.js, Node.js for web, and Android Studio with Java/Kotlin for mobile apps. My full tech stack is listed in the Tech Stack section.",
  },
  {
    question: "Do you deploy the project?",
    answer:
      "Yes, I handle deployment of websites, web applications, and Android apps to production environments, including Play Store submission for Android apps.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Absolutely. I offer post-launch maintenance packages including bug fixes, performance optimization, feature updates, and technical support.",
  },
  {
    question: "Can you integrate payment gateways or Firebase?",
    answer:
      "Yes, I have experience integrating various payment gateways (Razorpay, Stripe, etc.) and Firebase services (Auth, Firestore, Cloud Messaging, Analytics, etc.).",
  },
];

export {
  services,
  technologies,
  projects,
  whyChooseMe,
  testimonials,
  faqData,
  navLinks,
};
