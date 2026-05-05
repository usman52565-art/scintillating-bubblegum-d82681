/* ========================================
   Smart Online Academy - Main JavaScript
   ======================================== */

// ========================================
// Language Configuration
// ========================================

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navCourses: "Courses",
    navCategories: "Categories",
    navAbout: "About",
    navBlog: "Blog",
    navContact: "Contact",
    
    // Home Page
    heroTitle: "Learn Skills. Earn Online.",
    heroSubtitle: "Master digital, finance, and creative skills with top-rated courses",
    ctaBrowse: "Browse Courses",
    ctaLearnMore: "Learn More",
    
    // Featured Section
    featuredTitle: "Featured Courses",
    featuredDesc: "Discover our most popular and highly-rated courses",
    
    // Categories
    categoriesTitle: "Browse by Category",
    categoriesDesc: "Find courses tailored to your interests",
    categoryDigital: "Digital Skills",
    categoryFinance: "Finance & Business",
    categoryCreative: "Creative Skills",
    categoryPersonal: "Personal Development",
    categoryTechnical: "Technical Skills",
    courseCount: "courses",
    
    // Why Choose Us
    whyChooseTitle: "Why Choose Smart Online Academy",
    whyChooseDesc: "We provide the best learning experience",
    expertCourses: "Expert Courses",
    expertCoursesDesc: "Learn from industry professionals with years of experience",
    lifetimeAccess: "Lifetime Access",
    lifetimeAccessDesc: "Once purchased, access your courses forever",
    learnAnytime: "Learn Anytime",
    learnAnytimeDesc: "Study at your own pace, whenever and wherever you want",
    
    // Testimonials
    testimonialsTitle: "What Our Students Say",
    testimonialsDesc: "Real reviews from real learners",
    
    // Courses Page
    allCoursesTitle: "All Courses",
    searchPlaceholder: "Search courses...",
    filterCategory: "Filter by Category",
    filterLanguage: "Filter by Language",
    filterAll: "All Categories",
    noCoursesFound: "No courses found. Try adjusting your filters.",
    buyNow: "Buy Now",
    
    // Course Detail
    whatYouWillLearn: "What You Will Learn",
    courseModules: "Course Modules",
    instructor: "Instructor",
    reviews: "Reviews",
    coursePrice: "Price",
    courseLevel: "Level",
    courseDuration: "Duration",
    courseStudents: "Students",
    
    // Categories Page
    allCategoriesTitle: "All Categories",
    
    // About Page
    aboutTitle: "About Smart Online Academy",
    aboutDesc: "Empowering learners worldwide to achieve their dreams",
    ourMission: "Our Mission",
    ourMissionText: "We believe everyone deserves access to quality education. Our mission is to democratize learning by providing affordable, high-quality courses that help people develop skills and earn money online.",
    ourVision: "Our Vision",
    ourVisionText: "To become the world's leading platform for online learning, where millions of people can develop practical skills, start businesses, and transform their lives.",
    
    // Contact Page
    contactTitle: "Get in Touch",
    contactDesc: "We'd love to hear from you. Send us a message!",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Your Message",
    contactSend: "Send Message",
    
    // Footer
    footerAbout: "About",
    footerCourses: "Courses",
    footerCategories: "Categories",
    footerBlog: "Blog",
    footerContact: "Contact",
    footerFollowUs: "Follow Us",
    footerCopyright: "© 2025 Smart Online Academy. All rights reserved.",
    
    // Blog
    blogTitle: "Blog",
    blogDesc: "Insights, tips, and stories about online learning",
    readMore: "Read More",
    
    // Newsletter
    newsletterTitle: "Subscribe to Our Newsletter",
    newsletterDesc: "Get the latest courses and tips delivered to your inbox",
    newsletterPlaceholder: "Enter your email",
    newsletterSubscribe: "Subscribe",
    
    // Other
    language: "Language",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    backToTop: "Back to Top",
    whatsapp: "WhatsApp",
    email: "Email",
    phone: "Phone",
  },
  pt: {
    // Navigation
    navHome: "Início",
    navCourses: "Cursos",
    navCategories: "Categorias",
    navAbout: "Sobre",
    navBlog: "Blog",
    navContact: "Contato",
    
    // Home Page
    heroTitle: "Aprenda Habilidades. Ganhe Online.",
    heroSubtitle: "Domine habilidades digitais, financeiras e criativas com cursos top-rated",
    ctaBrowse: "Explorar Cursos",
    ctaLearnMore: "Saiba Mais",
    
    // Featured Section
    featuredTitle: "Cursos em Destaque",
    featuredDesc: "Descubra nossos cursos mais populares e bem avaliados",
    
    // Categories
    categoriesTitle: "Navegue por Categoria",
    categoriesDesc: "Encontre cursos adaptados aos seus interesses",
    categoryDigital: "Habilidades Digitais",
    categoryFinance: "Finanças e Negócios",
    categoryCreative: "Habilidades Criativas",
    categoryPersonal: "Desenvolvimento Pessoal",
    categoryTechnical: "Habilidades Técnicas",
    courseCount: "cursos",
    
    // Why Choose Us
    whyChooseTitle: "Por que Escolher Smart Online Academy",
    whyChooseDesc: "Oferecemos a melhor experiência de aprendizado",
    expertCourses: "Cursos de Especialistas",
    expertCoursesDesc: "Aprenda com profissionais da indústria com anos de experiência",
    lifetimeAccess: "Acesso Vitalício",
    lifetimeAccessDesc: "Uma vez comprado, acesse seus cursos para sempre",
    learnAnytime: "Aprenda a Qualquer Hora",
    learnAnytimeDesc: "Estude no seu próprio ritmo, quando e onde quiser",
    
    // Testimonials
    testimonialsTitle: "O Que Nossos Alunos Dizem",
    testimonialsDesc: "Avaliações reais de alunos reais",
    
    // Courses Page
    allCoursesTitle: "Todos os Cursos",
    searchPlaceholder: "Pesquisar cursos...",
    filterCategory: "Filtrar por Categoria",
    filterLanguage: "Filtrar por Idioma",
    filterAll: "Todas as Categorias",
    noCoursesFound: "Nenhum curso encontrado. Tente ajustar seus filtros.",
    buyNow: "Comprar Agora",
    
    // Course Detail
    whatYouWillLearn: "O que Você Aprenderá",
    courseModules: "Módulos do Curso",
    instructor: "Instrutor",
    reviews: "Avaliações",
    coursePrice: "Preço",
    courseLevel: "Nível",
    courseDuration: "Duração",
    courseStudents: "Alunos",
    
    // Categories Page
    allCategoriesTitle: "Todas as Categorias",
    
    // About Page
    aboutTitle: "Sobre Smart Online Academy",
    aboutDesc: "Capacitando aprendizes em todo o mundo para alcançar seus sonhos",
    ourMission: "Nossa Missão",
    ourMissionText: "Acreditamos que todos merecem acesso a educação de qualidade. Nossa missão é democratizar a aprendizagem fornecendo cursos acessíveis e de alta qualidade que ajudem as pessoas a desenvolver habilidades e ganhar dinheiro online.",
    ourVision: "Nossa Visão",
    ourVisionText: "Ser a plataforma líder mundial de aprendizado online, onde milhões de pessoas possam desenvolver habilidades práticas, iniciar negócios e transformar suas vidas.",
    
    // Contact Page
    contactTitle: "Entre em Contato",
    contactDesc: "Adoraríamos ouvir de você. Envie-nos uma mensagem!",
    contactName: "Seu Nome",
    contactEmail: "Seu Email",
    contactMessage: "Sua Mensagem",
    contactSend: "Enviar Mensagem",
    
    // Footer
    footerAbout: "Sobre",
    footerCourses: "Cursos",
    footerCategories: "Categorias",
    footerBlog: "Blog",
    footerContact: "Contato",
    footerFollowUs: "Nos Siga",
    footerCopyright: "© 2025 Smart Online Academy. Todos os direitos reservados.",
    
    // Blog
    blogTitle: "Blog",
    blogDesc: "Insights, dicas e histórias sobre aprendizado online",
    readMore: "Ler Mais",
    
    // Newsletter
    newsletterTitle: "Inscreva-se em Nossa Newsletter",
    newsletterDesc: "Receba os últimos cursos e dicas entregues na sua caixa de entrada",
    newsletterPlaceholder: "Digite seu email",
    newsletterSubscribe: "Inscrever",
    
    // Other
    language: "Idioma",
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    backToTop: "Voltar ao Topo",
    whatsapp: "WhatsApp",
    email: "Email",
    phone: "Telefone",
  }
};

// ========================================
// Course Database (Mock)
// ========================================

const courses = [
  {
    id: 1,
    title_en: "Economics Notes Pack 2025 – Demand, Supply, Elasticity & Fiscal Policy",
    title_pt: "Pacote de Notas de Economia 2025 – Demanda, Oferta, Elasticidade e Política Fiscal",
    description_en: "A complete English notes bundle covering demand, supply, elasticity and fiscal policy for economics students.",
    description_pt: "Um pacote completo de notas em inglês cobrindo demanda, oferta, elasticidade e política fiscal para estudantes de economia.",
    category: "finance",
    language: "en",
    price: "$19.99",
    rating: 4.8,
    reviews: 350,
    image: "assets/images/EconomicsNotesPack2025.png",
    instructor: "Emily Carter",
    level: "Intermediate",
    duration: "4 weeks",
    students: 1240,
    hotmart_link: "https://go.hotmart.com/S102671281X",
    modules: [
      "Understanding Demand and Supply",
      "Price Elasticity of Demand",
      "Elasticity of Supply",
      "Market Equilibrium",
      "Fiscal Policy and Government Intervention"
    ]
  },
  {
    id: 2,
    title_en: "100 AI Prompts for Viral YouTube Videos – Achieve 4000+ Watch Time Fast",
    title_pt: "100 Prompts de IA para Vídeos Virais do YouTube – Alcance Mais de 4000 de Tempo de Visualização Rápido",
    description_en: "A powerful English course pack that provides 100 AI prompts designed to create viral YouTube videos and boost watch time quickly.",
    description_pt: "Um pacote poderoso em inglês que oferece 100 prompts de IA projetados para criar vídeos virais no YouTube e aumentar o tempo de exibição rapidamente.",
    category: "technical",
    language: "en",
    price: "$0.00",
    rating: 4.9,
    reviews: 420,
    image: "assets/images/UsmanmArt.jpg",
    instructor: "Usman Art",
    level: "Intermediate",
    duration: "3 weeks",
    students: 1980,
    hotmart_link: "https://go.hotmart.com/A103401009U",
    modules: [
      "Getting Started with AI Video Prompts",
      "Prompt Structures for Engagement",
      "Viral Hook and Title Prompts",
      "Content Planning with AI",
      "Optimizing Watch Time and Retention"
    ]
  },
  {
    id: 3,
    title_en: "30 Dias de Produtividade",
    title_pt: "30 Dias de Produtividade",
    description_en: "A complete Portuguese productivity course to help you boost focus, manage your time, and achieve your goals in 30 days.",
    description_pt: "Um curso completo de produtividade em português para ajudá-lo a aumentar o foco, gerenciar seu tempo e alcançar seus objetivos em 30 dias.",
    category: "personal",
    language: "pt",
    price: "$0.00",
    rating: 4.7,
    reviews: 310,
    image: "assets/images/InstagramPostAumentesuaProdutividade.png",
    instructor: "Productivity Team",
    level: "Intermediate",
    duration: "30 days",
    students: 1320,
    hotmart_link: "https://go.hotmart.com/D103391624V",
    modules: [
      "Setting Productivity Goals",
      "Time Blocking and Prioritization",
      "Overcoming Distractions",
      "Daily Productivity Habits",
      "Review and Growth Planning"
    ]
  },
  {
    id: 4,
    title_en: "30 Days to Organize Your Finances",
    title_pt: "30 Dias para Organizar Suas Finanças",
    description_en: "A practical Portuguese finance course to organize your money, control spending, and build a stable budget in 30 days.",
    description_pt: "Um curso prático em português para organizar seu dinheiro, controlar gastos e construir um orçamento estável em 30 dias.",
    category: "finance",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 240,
    image: "assets/images/Untitleddesign14.png",
    instructor: "Finance Expert",
    level: "Beginner",
    duration: "30 days",
    students: 980,
    hotmart_link: "https://go.hotmart.com/X103427644P",
    modules: [
      "Analyze Your Monthly Income",
      "Track Your Spending",
      "Build a Simple Budget",
      "Reduce Debt and Save",
      "Plan Your Financial Future"
    ]
  },
  {
    id: 5,
    title_en: "Professional Nail Design Academy",
    title_pt: "Academia de Design de Unhas Profissional",
    description_en: "A Brazilian Portuguese course teaching professional nail design techniques, business setup, and salon-ready skills in a structured program.",
    description_pt: "Um curso em português que ensina técnicas profissionais de design de unhas, montagem de negócios e habilidades prontas para salão em um programa estruturado.",
    category: "beauty",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 180,
    image: "assets/images/Naildesigner.jpg",
    instructor: "Nail Designer",
    level: "Beginner",
    duration: "30 days",
    students: 520,
    hotmart_link: "https://go.hotmart.com/A103456898S",
    modules: [
      "Nail Shape and Preparation",
      "Gel and Acrylic Technique",
      "Nail Art and Decoration",
      "Client Consultation",
      "Salon Marketing and Pricing"
    ]
  },
  {
    id: 6,
    title_en: "Complete Canine Training",
    title_pt: "Adestramento Canino Completo",
    description_en: "A Portuguese course that teaches complete dog training methods, behavior management, and owner communication for happy pets.",
    description_pt: "Um curso em português que ensina métodos completos de adestramento canino, gerenciamento de comportamento e comunicação com o dono para pets felizes.",
    category: "pets",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 210,
    image: "assets/images/MasteringCanineLearning.png",
    instructor: "Canine Trainer",
    level: "Beginner",
    duration: "30 days",
    students: 670,
    hotmart_link: "https://go.hotmart.com/T102884591X",
    modules: [
      "Understanding Dog Behavior",
      "Basic Obedience Training",
      "Advanced Commands and Tricks",
      "Problem Solving and Correction",
      "Building Trust and Bonding"
    ]
  },
  {
    id: 7,
    title_en: "Financial Literacy for Beginners",
    title_pt: "Alfabetização Financeira para Iniciantes",
    description_en: "A beginner-friendly Portuguese course that introduces core financial habits, budgeting, saving, and smart money decisions.",
    description_pt: "Um curso em português para iniciantes que introduz hábitos financeiros essenciais, orçamento, poupança e decisões inteligentes com o dinheiro.",
    category: "finance",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 200,
    image: "assets/images/Untitleddesign17.png",
    instructor: "Finance Educator",
    level: "Beginner",
    duration: "30 days",
    students: 760,
    hotmart_link: "https://go.hotmart.com/S103446360C",
    modules: [
      "Understanding Income and Expenses",
      "Creating Your First Budget",
      "Smart Saving Habits",
      "Managing Debt Wisely",
      "Planning for Financial Goals"
    ]
  },
  {
    id: 8,
    title_en: "Autism: Success Guide",
    title_pt: "Autismo: Guia de Sucesso",
    description_en: "A Portuguese guide course covering strategies for supporting autistic individuals, building routines, and celebrating progress.",
    description_pt: "Um curso em português que aborda estratégias para apoiar pessoas autistas, construir rotinas e celebrar o progresso.",
    category: "health",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 150,
    image: "assets/images/Addaheading.png",
    instructor: "Autism Specialist",
    level: "Beginner",
    duration: "30 days",
    students: 430,
    hotmart_link: "https://go.hotmart.com/N102943071Q",
    modules: [
      "Understanding Autism",
      "Creating Supportive Routines",
      "Communication Techniques",
      "Sensory-Friendly Strategies",
      "Tracking Progress and Success"
    ]
  },
  {
    id: 9,
    title_en: "Budget & Expense Tracker 2025 – Excel + Google Sheets Template",
    title_pt: "Budget & Expense Tracker 2025 – Excel + Google Sheets Template",
    description_en: "A practical English course for building a complete budget and expense tracking system in Excel and Google Sheets.",
    description_pt: "Um curso prático em inglês para criar um sistema completo de orçamento e rastreamento de despesas no Excel e Google Sheets.",
    category: "finance",
    language: "en",
    price: "$19.99",
    rating: 4.7,
    reviews: 190,
    image: "assets/images/BudgetExpenseTracker2025.png",
    instructor: "Finance Template Expert",
    level: "Beginner",
    duration: "30 days",
    students: 820,
    hotmart_link: "https://go.hotmart.com/T102720550J",
    modules: [
      "Setting Up Your Budget Template",
      "Tracking Expenses in Excel",
      "Using Google Sheets for Reports",
      "Automating Monthly Calculations",
      "Reviewing and Improving Your Budget"
    ]
  },
  {
    id: 10,
    title_en: "ChatGPT Masterclass 2025 – Earn Money with AI Tools",
    title_pt: "ChatGPT Masterclass 2025 – Earn Money with AI Tools",
    description_en: "A hands-on English course for using ChatGPT and AI tools to create income-generating products and services in 2025.",
    description_pt: "Um curso prático em inglês para usar o ChatGPT e ferramentas de IA na criação de produtos e serviços que geram renda em 2025.",
    category: "ai",
    language: "en",
    price: "$29.99",
    rating: 4.8,
    reviews: 230,
    image: "assets/images/ChatGPTMasterclass2025.png",
    instructor: "AI Business Coach",
    level: "Beginner",
    duration: "30 days",
    students: 950,
    hotmart_link: "https://go.hotmart.com/I102700526M",
    modules: [
      "Understanding AI Tools",
      "Using ChatGPT for Content",
      "Creating Digital Products",
      "Monetizing AI Skills",
      "Scaling with Automation"
    ]
  },
  {
    id: 11,
    title_en: "Constelar na Água – Complete Self-Knowledge Course",
    title_pt: "Constelar na Água – Curso Completo de Autoconhecimento",
    description_en: "An immersive Portuguese course for deep self-knowledge and personal transformation through constellation therapy and introspection.",
    description_pt: "Um curso imersivo em português para autoconhecimento profundo e transformação pessoal através da terapia de constelações e introspecção.",
    category: "personal",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 280,
    image: "assets/images/CONSTELARNAAGUA.png",
    instructor: "Constellation Specialist",
    level: "Beginner",
    duration: "30 days",
    students: 640,
    hotmart_link: "https://go.hotmart.com/Y104370513R",
    modules: [
      "Introduction to Constellation Work",
      "Understanding Self-Knowledge",
      "Water Element and Emotional Healing",
      "Personal Transformation Techniques",
      "Integration and Life Changes"
    ]
  },
  {
    id: 12,
    title_en: "Theoretical Private Pilot Course (PPL)",
    title_pt: "Curso Teórico de Piloto Privado (PPL)",
    description_en: "A comprehensive Portuguese course covering all theoretical aspects of private pilot training, flight regulations, and aviation principles.",
    description_pt: "Um curso abrangente em português cobrindo todos os aspectos teóricos do treinamento de piloto privado, regulamentos de voo e princípios da aviação.",
    category: "technical",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 195,
    image: "assets/images/PILOTOPRIVADOPPL.jpg",
    instructor: "Aviation Expert",
    level: "Intermediate",
    duration: "30 days",
    students: 380,
    hotmart_link: "https://go.hotmart.com/V104370104O",
    modules: [
      "Aviation Fundamentals and Theory",
      "Aircraft Systems and Performance",
      "Flight Navigation and Planning",
      "Weather and Flight Operations",
      "Regulations and Safety Procedures"
    ]
  },
  {
    id: 13,
    title_en: "Digital Marketing Mastery 2025 – Learn to Grow Any Business Online",
    title_pt: "Digital Marketing Mastery 2025 – Aprenda a Crescer Qualquer Negócio Online",
    description_en: "A comprehensive Portuguese course teaching advanced digital marketing strategies to grow any business online in 2025.",
    description_pt: "Um curso abrangente em português ensinando estratégias avançadas de marketing digital para crescer qualquer negócio online em 2025.",
    category: "digital",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 320,
    image: "assets/images/DigitalMarketingMastery2025.png",
    instructor: "Digital Marketing Expert",
    level: "Intermediate",
    duration: "30 days",
    students: 780,
    hotmart_link: "https://go.hotmart.com/D102707044W",
    modules: [
      "Social Media Marketing Strategy",
      "Content Marketing and SEO",
      "Email Marketing and Automation",
      "Paid Advertising Mastery",
      "Analytics and Business Growth"
    ]
  },
  {
    id: 14,
    title_en: "Sweet Profession: Advanced Cake Designer Course",
    title_pt: "Doce Profissão: Curso Avançado de Cake Designer",
    description_en: "A comprehensive Portuguese course teaching advanced cake design techniques, business setup, and professional pastry skills.",
    description_pt: "Um curso abrangente em português ensinando técnicas avançadas de design de bolos, montagem de negócios e habilidades profissionais de confeitaria.",
    category: "creative",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 210,
    image: "assets/images/Untitleddesign19.png",
    instructor: "Cake Design Master",
    level: "Intermediate",
    duration: "30 days",
    students: 550,
    hotmart_link: "https://go.hotmart.com/V103469760V",
    modules: [
      "Cake Decorating Fundamentals",
      "Advanced Design Techniques",
      "Flavor and Ingredient Selection",
      "Client Management and Pricing",
      "Building Your Cake Business"
    ]
  },
  {
    id: 15,
    title_en: "CFTV Specialist Course",
    title_pt: "Especialista em CFTV",
    description_en: "A comprehensive Portuguese course for becoming a CFTV specialist, covering installation, maintenance, and security systems.",
    description_pt: "Um curso abrangente em português para se tornar um especialista em CFTV, cobrindo instalação, manutenção e sistemas de segurança.",
    category: "technical",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 175,
    image: "assets/images/DomineoM.png",
    instructor: "Security Systems Expert",
    level: "Intermediate",
    duration: "30 days",
    students: 420,
    hotmart_link: "https://go.hotmart.com/P103024786P",
    modules: [
      "CFTV Fundamentals and Components",
      "Camera Installation and Setup",
      "Video Recording and Storage",
      "System Maintenance and Troubleshooting",
      "Professional Services and Business Growth"
    ]
  },
  {
    id: 16,
    title_en: "FSW Method – Engineering and Architecture",
    title_pt: "FSW Method – Engenharia e Arquitetura",
    description_en: "A specialized Portuguese course on FSW (Friction Stir Welding) Method for engineering and architecture applications.",
    description_pt: "Um curso especializado em português sobre o Método FSW (Friction Stir Welding) para aplicações em engenharia e arquitetura.",
    category: "technical",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 145,
    image: "assets/images/FSWMethod.png",
    instructor: "Engineering Specialist",
    level: "Advanced",
    duration: "30 days",
    students: 280,
    hotmart_link: "https://go.hotmart.com/R102884043D",
    modules: [
      "FSW Method Fundamentals",
      "Engineering Principles and Applications",
      "Architectural Design Integration",
      "Material Selection and Performance",
      "Project Implementation and Best Practices"
    ]
  },
  {
    id: 17,
    title_en: "Industrial Management Pro",
    title_pt: "Industrial Management Pro",
    description_en: "A Portuguese course focused on advanced industrial management practices, operations optimization, and leadership in manufacturing.",
    description_pt: "Um curso em português focado em práticas avançadas de gestão industrial, otimização de operações e liderança na manufatura.",
    category: "finance",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.8,
    reviews: 210,
    image: "assets/images/Addaheadinggf.png",
    instructor: "Industry Management Expert",
    level: "Intermediate",
    duration: "30 days",
    students: 520,
    hotmart_link: "https://go.hotmart.com/A102865709I",
    modules: [
      "Industrial Operations and Strategy",
      "Process Optimization and Efficiency",
      "Quality Management and Safety",
      "Leadership and Team Performance",
      "Business Growth and Sustainability"
    ]
  },
  {
    id: 18,
    title_en: "Professional Manicure & Pedicure Complete",
    title_pt: "Manicure e Pedicure Profissional Completo",
    description_en: "A complete Portuguese course for professional manicure and pedicure techniques, salon service setup, and customer care.",
    description_pt: "Curso completo de Manicure e Pedicure Profissional, com técnicas para serviços de salão, cuidados com as unhas e atendimento ao cliente.",
    category: "creative",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 95,
    image: "assets/images/ManicurePedicurePro.png",
    instructor: "Expert Nail Technician",
    level: "Beginner",
    duration: "30 days",
    students: 240,
    hotmart_link: "https://go.hotmart.com/V103469358C",
    modules: [
      "Manicure and Pedicure Basics",
      "Nail Preparation and Sanitation",
      "Professional Nail Finishing Techniques",
      "Client Service and Salon Procedures",
      "Building Your Beauty Business"
    ]
  },
  {
    id: 19,
    title_en: "Master English Grammar in 30 Days",
    title_pt: "Domine a Gramática Inglesa em 30 Dias",
    description_en: "A focused English grammar course designed to help learners master core rules, sentence structure, and practical usage in 30 days.",
    description_pt: "Um curso de gramática inglesa focado para ajudar os alunos a dominar regras essenciais, estrutura de frases e uso prático em 30 dias.",
    category: "personal",
    language: "en",
    price: "$0.00",
    rating: 4.8,
    reviews: 120,
    image: "assets/images/Untitleddesign21.png",
    instructor: "English Grammar Coach",
    level: "Beginner",
    duration: "30 days",
    students: 400,
    hotmart_link: "https://go.hotmart.com/J102702430J",
    modules: [
      "English Grammar Fundamentals",
      "Tenses and Verb Forms",
      "Sentence Structure and Punctuation",
      "Common Grammar Mistakes",
      "Practice with Real Exercises"
    ]
  },
  {
    id: 20,
    title_en: "Master Incorp™ – Complete Real Estate Development Training",
    title_pt: "Master Incorp™ – Formação Completa em Incorporação Imobiliária",
    description_en: "A detailed course on real estate development and property incorporation, teaching investment, planning, and execution strategies.",
    description_pt: "Um curso completo sobre incorporação imobiliária, ensinando investimento, planejamento e estratégias de execução para projetos de sucesso.",
    category: "finance",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 130,
    image: "assets/images/MasterIncorp.png",
    instructor: "Real Estate Expert",
    level: "Intermediate",
    duration: "30 days",
    students: 300,
    hotmart_link: "https://go.hotmart.com/K104321938B",
    modules: [
      "Understanding Property Incorporation",
      "Market Analysis and Investment",
      "Project Planning and Financing",
      "Legal and Regulatory Best Practices",
      "Executing and Managing Real Estate Projects"
    ]
  },
  {
    id: 21,
    title_en: "Modern Social Media Templates – Photoshop + Canva Editable Pack",
    title_pt: "Modelos Modernos de Redes Sociais – Pacote Editável Photoshop + Canva",
    description_en: "A comprehensive pack of modern social media templates for Photoshop and Canva, perfect for creating engaging content across platforms.",
    description_pt: "Um pacote completo de modelos modernos para redes sociais no Photoshop e Canva, ideal para criar conteúdo envolvente em todas as plataformas.",
    category: "creative",
    language: "en",
    price: "$0.00",
    rating: 4.8,
    reviews: 85,
    image: "assets/images/ugDesigner.png",
    instructor: "Graphic Design Specialist",
    level: "Beginner",
    duration: "30 days",
    students: 180,
    hotmart_link: "https://go.hotmart.com/S102820951X",
    modules: [
      "Introduction to Social Media Design",
      "Using Photoshop for Templates",
      "Canva Editing Techniques",
      "Customizing Templates for Brands",
      "Exporting and Optimizing for Platforms"
    ]
  },
  {
    id: 22,
    title_en: "The Definitive Scrum Master Manual",
    title_pt: "O Manual Definitivo do Scrum Master",
    description_en: "A comprehensive guide to becoming a certified Scrum Master, covering Agile principles, Scrum framework, and practical implementation.",
    description_pt: "Um guia completo para se tornar um Scrum Master certificado, cobrindo princípios Ágeis, framework Scrum e implementação prática.",
    category: "technical",
    language: "pt",
    price: "R$ 0.00",
    rating: 4.9,
    reviews: 110,
    image: "assets/images/OnlineCourse.png",
    instructor: "Agile Coach",
    level: "Intermediate",
    duration: "30 days",
    students: 250,
    hotmart_link: "https://go.hotmart.com/O103390550J",
    modules: [
      "Introduction to Agile and Scrum",
      "Scrum Master Roles and Responsibilities",
      "Sprint Planning and Execution",
      "Facilitating Scrum Events",
      "Coaching Teams and Organizations"
    ]
  },
  {
    id: 23,
    title_en: "Online Lettering Mastery Course™",
    title_pt: "Curso Online de Domínio em Lettering™",
    description_en: "A comprehensive online course teaching advanced lettering techniques, from basics to professional mastery for digital and traditional media.",
    description_pt: "Um curso online abrangente ensinando técnicas avançadas de lettering, desde o básico até o domínio profissional para mídias digitais e tradicionais.",
    category: "creative",
    language: "en",
    price: "$0.00",
    rating: 4.8,
    reviews: 95,
    image: "assets/images/LetteringMasteryCourse.png",
    instructor: "Lettering Artist",
    level: "Beginner",
    duration: "30 days",
    students: 220,
    hotmart_link: "https://go.hotmart.com/N105570210F",
    modules: [
      "Introduction to Lettering Basics",
      "Tools and Materials for Lettering",
      "Digital Lettering Techniques",
      "Hand-Lettering Styles and Practice",
      "Creating Professional Lettering Projects"
    ]
  },
  {
    id: 24,
    title_en: "Portfolio Builder Kit – Canva + Google Sites Templates for Freelancers",
    title_pt: "Kit Construtor de Portfólio – Modelos Canva + Google Sites para Freelancers",
    description_en: "A complete kit with Canva and Google Sites templates designed to help freelancers build professional portfolios quickly and effectively.",
    description_pt: "Um kit completo com modelos do Canva e Google Sites projetados para ajudar freelancers a construir portfólios profissionais de forma rápida e eficaz.",
    category: "digital",
    language: "en",
    price: "$0.00",
    rating: 4.7,
    reviews: 75,
    image: "assets/images/PortfolioBuilderKit2025.png",
    instructor: "Freelance Marketing Expert",
    level: "Beginner",
    duration: "30 days",
    students: 160,
    hotmart_link: "https://go.hotmart.com/S102720947G",
    modules: [
      "Understanding Freelance Portfolios",
      "Using Canva for Portfolio Design",
      "Google Sites Setup and Customization",
      "Showcasing Work and Testimonials",
      "Optimizing for Client Acquisition"
    ]
  }
];

// ========================================
// Blog Posts Database (Mock)
// ========================================

const blogPosts = [
  {
    id: 1,
    title_en: "How to Earn Money Online in 2025",
    title_pt: "Como Ganhar Dinheiro Online em 2025",
    excerpt_en: "Discover the top strategies to generate income online and build a sustainable business.",
    excerpt_pt: "Descubra as principais estratégias para gerar renda online e construir um negócio sustentável.",
    author: "John Smith",
    date: "2025-05-01",
    image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=Earn+Money",
    category: "finance"
  },
  {
    id: 2,
    title_en: "Top Digital Skills You Need in 2025",
    title_pt: "As Principais Habilidades Digitais que Você Precisa em 2025",
    excerpt_en: "Learn which digital skills are most in-demand and will boost your career.",
    excerpt_pt: "Aprenda quais habilidades digitais estão mais em demanda e impulsionarão sua carreira.",
    author: "Sarah Chen",
    date: "2025-04-28",
    image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Digital+Skills",
    category: "digital"
  },
  {
    id: 3,
    title_en: "AI Tools Every Entrepreneur Should Know",
    title_pt: "Ferramentas de IA Que Todo Empreendedor Deve Conhecer",
    excerpt_en: "Explore the best AI tools that can help streamline your business operations.",
    excerpt_pt: "Explore as melhores ferramentas de IA que podem ajudar a agilizar suas operações comerciais.",
    author: "Mike Johnson",
    date: "2025-04-25",
    image: "https://via.placeholder.com/600x400/ec4899/ffffff?text=AI+Tools",
    category: "technical"
  }
];

// ========================================
// Testimonials Database
// ========================================

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Digital Marketer",
    text_en: "Smart Online Academy helped me increase my income by 300% within 6 months!",
    text_pt: "Smart Online Academy me ajudou a aumentar minha renda em 300% em 6 meses!",
    rating: 5,
    avatar: "AT"
  },
  {
    name: "Maria Silva",
    role: "Web Designer",
    text_en: "The best investment I've made in my career. Highly recommend!",
    text_pt: "O melhor investimento que fiz em minha carreira. Altamente recomendado!",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "James Wilson",
    role: "Developer",
    text_en: "Excellent courses with real-world projects. Worth every penny.",
    text_pt: "Cursos excelentes com projetos do mundo real. Vale cada centavo.",
    rating: 5,
    avatar: "JW"
  },
  {
    name: "Ana Costa",
    role: "Entrepreneur",
    text_en: "These courses transformed how I do business. Game-changer!",
    text_pt: "Esses cursos transformaram a forma como faço negócios. Mudou o jogo!",
    rating: 5,
    avatar: "AC"
  }
];

// ========================================
// State Management
// ========================================

let currentLanguage = localStorage.getItem('language') || 'en';
let darkMode = localStorage.getItem('darkMode') === 'true';

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeLanguage();
  initializeEventListeners();
  loadPageContent();
});

// ========================================
// Theme Management
// ========================================

function initializeTheme() {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  }
}

function toggleTheme() {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  
  updateThemeToggleButton();
}

function updateThemeToggleButton() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.innerHTML = darkMode ? '☀️' : '🌙';
    btn.title = darkMode ? translate('lightMode') : translate('darkMode');
  }
}

// ========================================
// Language Management
// ========================================

function initializeLanguage() {
  updateAllText();
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateAllText();
}

function translate(key) {
  return translations[currentLanguage]?.[key] || translations['en'][key] || key;
}

function updateAllText() {
  // Update navigation
  const navLinks = {
    'nav-home': 'navHome',
    'nav-courses': 'navCourses',
    'nav-categories': 'navCategories',
    'nav-about': 'navAbout',
    'nav-blog': 'navBlog',
    'nav-contact': 'navContact'
  };
  
  Object.entries(navLinks).forEach(([id, key]) => {
    const elem = document.getElementById(id);
    if (elem) elem.textContent = translate(key);
  });
  
  // Update language button
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = currentLanguage.toUpperCase();
  }
  
  // Update theme button
  updateThemeToggleButton();
  
  // Reload page-specific content
  loadPageContent();
}

// ========================================
// Event Listeners
// ========================================

function initializeEventListeners() {
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Language Toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLanguage === 'en' ? 'pt' : 'en');
    });
  }
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu?.classList.toggle('active');
    });
  }
  
  // Close mobile menu on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });
  
  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isActive = header.classList.contains('active');
      
      // Close all others
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
      });
      
      // Toggle current
      if (!isActive) {
        header.classList.add('active');
        body.classList.add('active');
      }
    });
  });
  
  // Lazy Load Images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }
  
  // Newsletter Form
  const newsletterForm = document.querySelector('[data-newsletter-form]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]');
      if (email?.value) {
        alert(`Thanks for subscribing with ${email.value}!`);
        email.value = '';
      }
    });
  }
  
  // Contact Form
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for your message! We will contact you soon.');
      contactForm.reset();
    });
  }
}

// ========================================
// Filter and Search
// ========================================

function filterCourses() {
  const searchInput = document.querySelector('[data-course-search]');
  const categoryFilter = document.querySelector('[data-category-filter]');
  const languageFilter = document.querySelector('[data-language-filter]');
  
  const searchTerm = searchInput?.value.toLowerCase() || '';
  const selectedCategory = categoryFilter?.value || '';
  const selectedLanguage = languageFilter?.value || '';
  
  const filtered = courses.filter(course => {
    const titleKey = currentLanguage === 'pt' ? 'title_pt' : 'title_en';
    const descKey = currentLanguage === 'pt' ? 'description_pt' : 'description_en';
    const title = course[titleKey]?.toLowerCase() || '';
    const desc = course[descKey]?.toLowerCase() || '';
    
    const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLanguage = !selectedLanguage || course.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });
  
  renderCourses(filtered);
}

function renderCourses(courseList) {
  const container = document.querySelector('[data-courses-container]');
  if (!container) return;
  
  if (courseList.length === 0) {
    container.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 3rem;"><p>${translate('noCoursesFound')}</p></div>`;
    return;
  }
  
  container.innerHTML = courseList.map(course => createCourseCard(course)).join('');
}

function createCourseCard(course) {
  const titleKey = currentLanguage === 'pt' ? 'title_pt' : 'title_en';
  const descKey = currentLanguage === 'pt' ? 'description_pt' : 'description_en';
  const title = course[titleKey];
  const description = course[descKey];
  
  const stars = '⭐'.repeat(Math.floor(course.rating));
  
  return `
    <div class="course-card">
      <div class="course-image">
        <img src="${course.image}" alt="${title}" loading="lazy">
      </div>
      <div class="course-info">
        <div class="course-category">${course.category}</div>
        <h3 class="course-title">${title}</h3>
        <p class="course-description">${description}</p>
        <div class="course-meta">
          <div class="course-rating">${stars}</div>
          <span>${course.reviews} reviews</span>
        </div>
        <div class="course-footer">
          <a href="course.html?id=${course.id}" class="btn btn-secondary btn-sm">${translate('ctaLearnMore')}</a>
          <a href="${course.hotmart_link}" target="_blank" class="btn btn-primary btn-sm">${translate('buyNow')}</a>
        </div>
      </div>
    </div>
  `;
}

function createBlogCard(post) {
  const titleKey = currentLanguage === 'pt' ? 'title_pt' : 'title_en';
  const excerptKey = currentLanguage === 'pt' ? 'excerpt_pt' : 'excerpt_en';
  const title = post[titleKey];
  const excerpt = post[excerptKey];
  
  return `
    <div class="card">
      <div class="card-image">
        <img src="${post.image}" alt="${title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${title}</h3>
        <p>${excerpt}</p>
        <small style="color: var(--text-secondary);">${post.date} • ${post.author}</small>
      </div>
      <div class="card-footer">
        <a href="#" class="text-primary">${translate('readMore')}</a>
      </div>
    </div>
  `;
}

function createTestimonialCard(testimonial) {
  const textKey = currentLanguage === 'pt' ? 'text_pt' : 'text_en';
  const text = testimonial[textKey];
  const stars = '⭐'.repeat(testimonial.rating);
  
  return `
    <div class="testimonial">
      <div class="testimonial-rating">${stars}</div>
      <p>"${text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.avatar}</div>
        <div class="testimonial-meta">
          <p style="margin: 0;"><strong>${testimonial.name}</strong></p>
          <p style="margin: 0;">${testimonial.role}</p>
        </div>
      </div>
    </div>
  `;
}

// ========================================
// Page Content Loader
// ========================================

function loadPageContent() {
  const pageName = document.body.getAttribute('data-page');
  
  switch(pageName) {
    case 'home':
      loadHomePage();
      break;
    case 'courses':
      loadCoursesPage();
      break;
    case 'course-detail':
      loadCourseDetailPage();
      break;
    case 'categories':
      loadCategoriesPage();
      break;
    case 'about':
      loadAboutPage();
      break;
    case 'contact':
      loadContactPage();
      break;
    case 'blog':
      loadBlogPage();
      break;
  }
}

function loadHomePage() {
  // Featured Courses
  const featuredContainer = document.querySelector('[data-featured-courses]');
  if (featuredContainer) {
    const featured = courses.slice(0, 3);
    featuredContainer.innerHTML = featured.map(c => createCourseCard(c)).join('');
  }
  
  // Testimonials
  const testimonialContainer = document.querySelector('[data-testimonials]');
  if (testimonialContainer) {
    testimonialContainer.innerHTML = testimonials.map(t => createTestimonialCard(t)).join('');
  }
  
  // Update text content
  updatePageText({
    'hero-title': 'heroTitle',
    'hero-subtitle': 'heroSubtitle',
    'featured-title': 'featuredTitle',
    'featured-desc': 'featuredDesc',
    'categories-title': 'categoriesTitle',
    'categories-desc': 'categoriesDesc',
    'why-choose-title': 'whyChooseTitle',
    'testimonials-title': 'testimonialsTitle',
    'testimonials-desc': 'testimonialsDesc',
    'newsletter-title': 'newsletterTitle',
    'newsletter-desc': 'newsletterDesc',
    'cta-title': 'heroTitle',
    'cta-subtitle': 'heroSubtitle'
  });
}

function loadCoursesPage() {
  renderCourses(courses);
  
  // Add filter listeners
  const searchInput = document.querySelector('[data-course-search]');
  const categoryFilter = document.querySelector('[data-category-filter]');
  const languageFilter = document.querySelector('[data-language-filter]');
  
  [searchInput, categoryFilter, languageFilter].forEach(elem => {
    if (elem) elem.addEventListener('change', filterCourses);
  });
  
  if (searchInput) searchInput.addEventListener('input', filterCourses);
  
  updatePageText({
    'page-title': 'allCoursesTitle'
  });
}

function loadCourseDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const courseId = parseInt(params.get('id')) || 1;
  const course = courses.find(c => c.id === courseId) || courses[0];
  
  const titleKey = currentLanguage === 'pt' ? 'title_pt' : 'title_en';
  const descKey = currentLanguage === 'pt' ? 'description_pt' : 'description_en';
  
  // Update hero
  const heroContainer = document.querySelector('[data-course-hero]');
  if (heroContainer) {
    const stars = '⭐'.repeat(Math.floor(course.rating));
    heroContainer.innerHTML = `
      <h1>${course[titleKey]}</h1>
      <div class="course-rating">${stars} (${course.reviews} reviews)</div>
      <p>${course[descKey]}</p>
    `;
  }
  
  // Update sidebar
  const sidebarContainer = document.querySelector('[data-course-sidebar]');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = `
      <h3>${course[titleKey]}</h3>
      <div class="course-sidebar-meta">
        <div class="sidebar-item">
          <span>${translate('courseLevel')}:</span>
          <strong>${course.level}</strong>
        </div>
          <strong>${course.level}</strong>
        </div>
        <div class="sidebar-item">
          <span>${translate('courseDuration')}:</span>
          <strong>${course.duration}</strong>
        </div>
        <div class="sidebar-item">
          <span>${translate('courseStudents')}:</span>
          <strong>${course.students.toLocaleString()}</strong>
        </div>
      </div>
      <a href="${course.hotmart_link}" target="_blank" class="btn btn-primary btn-lg" style="width: 100%; text-align: center;">
        ${translate('buyNow')}
      </a>
    `;
  }
  
  // Update modules
  const modulesContainer = document.querySelector('[data-course-modules]');
  if (modulesContainer) {
    modulesContainer.innerHTML = `
      <h3>${translate('courseModules')}</h3>
      <div class="accordion">
        ${course.modules.map((mod, idx) => `
          <div class="accordion-item">
            <div class="accordion-header">
              <span>Module ${idx + 1}: ${mod}</span>
              <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-body">
              <p>Comprehensive lessons and practical exercises for ${mod}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    // Re-initialize accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        
        document.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('active');
          h.nextElementSibling.classList.remove('active');
        });
        
        if (!isActive) {
          header.classList.add('active');
          body.classList.add('active');
        }
      });
    });
  }
}

function loadCategoriesPage() {
  const categoryData = [
    { id: 'digital', icon: '💻', name: 'categoryDigital', count: 12 },
    { id: 'finance', icon: '💰', name: 'categoryFinance', count: 8 },
    { id: 'creative', icon: '🎨', name: 'categoryCreative', count: 15 },
    { id: 'personal', icon: '🌟', name: 'categoryPersonal', count: 10 },
    { id: 'technical', icon: '⚙️', name: 'categoryTechnical', count: 20 }
  ];
  
  const container = document.querySelector('[data-categories-container]');
  if (container) {
    container.innerHTML = categoryData.map(cat => `
      <div class="category-card">
        <div class="category-icon">${cat.icon}</div>
        <h4>${translate(cat.name)}</h4>
        <p class="category-count">${cat.count} ${translate('courseCount')}</p>
      </div>
    `).join('');
  }
}

function loadAboutPage() {
  updatePageText({
    'about-title': 'aboutTitle',
    'about-desc': 'aboutDesc',
    'our-mission': 'ourMission',
    'our-mission-text': 'ourMissionText',
    'our-vision': 'ourVision',
    'our-vision-text': 'ourVisionText'
  });
}

function loadContactPage() {
  updatePageText({
    'contact-title': 'contactTitle',
    'contact-desc': 'contactDesc',
    'contact-name-label': 'contactName',
    'contact-email-label': 'contactEmail',
    'contact-message-label': 'contactMessage',
    'contact-send': 'contactSend'
  });
}

function loadBlogPage() {
  const container = document.querySelector('[data-blog-container]');
  if (container) {
    container.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
  }
  
  updatePageText({
    'blog-title': 'blogTitle',
    'blog-desc': 'blogDesc'
  });
}

function updatePageText(textMap) {
  Object.entries(textMap).forEach(([id, key]) => {
    const elem = document.getElementById(id);
    if (elem) elem.textContent = translate(key);
  });
}

// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
