export type Lang = "id" | "en";

const id = {
  nav: {
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    experience: "Pengalaman",
    education: "Pendidikan",
    contact: "Kontak",
    github: "GitHub",
  },
  hero: {
    hello: "HALO, SAYA FAIZ 👋",
    firstName: "FAIZ",
    middleName: "FERDINAND",
    lastName: "RIZALDI",
    role: "Full Stack Web Developer",
    description:
      "Pelajar RPL yang berfokus pada pengembangan website, aplikasi web, dan aplikasi mobile.",
    available: "TERSEDIA UNTUK PKL",
    viewProjects: "LIHAT PROYEK",
    contactMe: "HUBUNGI SAYA",
  },
  projects: {
    eyebrow: "// proyek-pilihan",
    title: "PROYEK PILIHAN",
    featured: {
      label: "E-Commerce Web Application",
      title: "FaizzStore",
      description:
        "Toko online dengan storefront, autentikasi, manajemen produk, manajemen pesanan, dan dashboard admin.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      view: "Lihat Proyek",
      github: "GitHub",
    },
    grid: [
      {
        label: "Sistem Pembayaran Sekolah",
        title: "SPP Digital",
        description:
          "Sistem pembayaran SPP digital untuk sekolah dengan manajemen siswa, tagihan, pembayaran, dan laporan.",
        tech: ["Next.js", "TypeScript", "Express.js", "MySQL"],
      },
      {
        label: "Aplikasi Mobile To-Do",
        title: "TaskFlow",
        description:
          "Aplikasi manajemen tugas berbasis Flutter untuk membantu pengguna mengatur dan memantau tugas.",
        tech: ["Flutter", "Dart", "Provider"],
      },
      {
        label: "E-Commerce Web Application",
        title: "FaizzStore",
        description:
          "Toko online berbasis PHP dan MySQL dengan fitur storefront, autentikasi pengguna, manajemen produk, manajemen pesanan, dan dashboard admin.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      },
    ],
    view: "Lihat Proyek",
  },
  about: {
    eyebrow: "// tentang-saya",
    title: "TENTANG SAYA",
    paragraphs: [
      "Saya adalah Full Stack Web Developer yang tertarik membangun website, aplikasi web, dan aplikasi mobile dengan desain yang bersih, responsif, dan mudah digunakan.",
      "Selain coding, saya juga tertarik pada UI/UX, problem solving, dan pengembangan produk digital.",
    ],
    facts: [
      { label: "Nama", value: "Faiz Ferdinand Rizaldi" },
      { label: "Peran", value: "Full Stack Web Developer" },
      { label: "Lokasi", value: "Indonesia" },
      { label: "Status", value: "Tersedia untuk PKL" },
    ],
  },
  skills: {
    eyebrow: "// keahlian",
    title: "KEAHLIAN",
    groups: [
      { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
      { title: "Backend", skills: ["PHP", "Laravel", "Node.js", "Express.js"] },
      { title: "Mobile", skills: ["Flutter", "Dart"] },
      { title: "Database", skills: ["MySQL", "MongoDB"] },
      { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
    ],
  },
  experience: {
    eyebrow: "// pengalaman",
    title: "PENGALAMAN",
    items: [
      {
        role: "Full Stack Developer",
        company: "Freelance / Independent Projects",
        period: "2025 - Sekarang",
        description:
          "Membangun berbagai aplikasi web dan mobile, termasuk e-commerce, sistem pembayaran sekolah, dan aplikasi manajemen tugas.",
      },
      {
        role: "Web Developer",
        company: "Proyek Akademik",
        period: "2024",
        description:
          "Mengembangkan berbagai project web untuk kebutuhan pembelajaran, tugas, dan kompetisi.",
      },
    ],
  },
  education: {
    eyebrow: "// pendidikan",
    title: "PENDIDIKAN",
    items: [
      {
        school: "SMK Jakarta Pusat 1",
        major: "Rekayasa Perangkat Lunak",
        description:
          "Mempelajari pengembangan perangkat lunak, manajemen database, teknologi web, dan desain UI/UX.",
      },
    ],
  },
  contact: {
    eyebrow: "// kontak",
    title: "MARI TERHUBUNG",
    description:
      "Saya terbuka untuk kesempatan PKL, project, kolaborasi, dan freelance.",
    github: "GitHub",
    email: "Email",
    getInTouch: "Hubungi Saya",
  },
  footer: {
    copyright: "Faiz Ferdinand Rizaldi. Dibangun dengan presisi teknis.",
    github: "GitHub",
    sourceCode: "Source Code",
  },
};

const en: typeof id = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    github: "GitHub",
  },
  hero: {
    hello: "HELLO, I'M FAIZ 👋",
    firstName: "FAIZ",
    middleName: "FERDINAND",
    lastName: "RIZALDI",
    role: "Full Stack Web Developer",
    description:
      "RPL student focused on building modern websites, web applications, and mobile applications.",
    available: "AVAILABLE FOR INTERNSHIP",
    viewProjects: "VIEW PROJECTS",
    contactMe: "CONTACT ME",
  },
  projects: {
    eyebrow: "// selected-works",
    title: "SELECTED WORKS",
    featured: {
      label: "E-Commerce Web Application",
      title: "FaizzStore",
      description:
        "E-commerce website with storefront, authentication, product management, order management, and admin dashboard.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      view: "View Project",
      github: "GitHub",
    },
    grid: [
      {
        label: "School Payment System",
        title: "SPP Digital",
        description:
          "Digital school payment system with student, billing, payment, and reporting management.",
        tech: ["Next.js", "TypeScript", "Express.js", "MySQL"],
      },
      {
        label: "Mobile To-Do Application",
        title: "TaskFlow",
        description:
          "Flutter-based task management application for organizing and tracking tasks.",
        tech: ["Flutter", "Dart", "Provider"],
      },
      {
        label: "E-Commerce Web Application",
        title: "FaizzStore",
        description:
          "Online store built with PHP and MySQL featuring storefront, user authentication, product management, order management, and admin dashboard.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      },
    ],
    view: "View Project",
  },
  about: {
    eyebrow: "// about-me",
    title: "ABOUT ME",
    paragraphs: [
      "I'm a Full Stack Web Developer interested in building websites, web applications, and mobile applications with clean, responsive, and user-friendly interfaces.",
      "I'm also interested in UI/UX, problem solving, and building digital products.",
    ],
    facts: [
      { label: "Name", value: "Faiz Ferdinand Rizaldi" },
      { label: "Role", value: "Full Stack Web Developer" },
      { label: "Location", value: "Indonesia" },
      { label: "Status", value: "Available for PKL" },
    ],
  },
  skills: {
    eyebrow: "// skills",
    title: "SKILLS",
    groups: [
      { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
      { title: "Backend", skills: ["PHP", "Laravel", "Node.js", "Express.js"] },
      { title: "Mobile", skills: ["Flutter", "Dart"] },
      { title: "Database", skills: ["MySQL", "MongoDB"] },
      { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
    ],
  },
  experience: {
    eyebrow: "// experience",
    title: "EXPERIENCE",
    items: [
      {
        role: "Full Stack Developer",
        company: "Freelance / Independent Projects",
        period: "2025 - Present",
        description:
          "Building web and mobile applications including e-commerce platforms, school payment systems, and task management applications.",
      },
      {
        role: "Web Developer",
        company: "Academic Projects",
        period: "2024",
        description:
          "Developed web applications for coursework, projects, and competitions.",
      },
    ],
  },
  education: {
    eyebrow: "// education",
    title: "EDUCATION",
    items: [
      {
        school: "SMK Jakarta Pusat 1",
        major: "Software Engineering",
        description:
          "Studying software development, database management, web technologies, and UI/UX design.",
      },
    ],
  },
  contact: {
    eyebrow: "// contact",
    title: "LET'S WORK TOGETHER",
    description:
      "I'm open to internship opportunities, projects, collaborations, and freelance work.",
    github: "GitHub",
    email: "Email",
    getInTouch: "Get In Touch",
  },
  footer: {
    copyright: "Faiz Ferdinand Rizaldi. Built with technical precision.",
    github: "GitHub",
    sourceCode: "Source Code",
  },
};

export const translations: Record<Lang, typeof id> = { id, en };
