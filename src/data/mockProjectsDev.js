import imageRef from "../assets/images/down.jpg";


export const mockProjectsDev = [
  {
    id: 1,
    title: "Sistema de gestión veterinaria",    
    image: imageRef,
    description: "Aplicación para administrar información de pacientes (mascotas), historial médico, citas y más...",
    technologies: ["Java", "MySQL", "Spring Boot"],
    type: "Aplicaciones Web",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Juego 3D Unity",
    description: "Juego de aventuras en 3D desarrollado en Unity con mecánicas innovadoras...",
    technologies: ["Unity", "C#"],
    type: "Videojuegos",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Portfolio Web",
    description: "Sitio web personal desarrollado con React y diseño moderno...",
    technologies: ["React", "Tailwind", "Three.js"],
    type: "Aplicaciones Web",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Modelo 3D Blender",
    description: "Diseño de personaje 3D con texturizado y animaciones...",
    technologies: ["Blender", "Python"],
    type: "Diseños 3D",
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para análisis de datos con gráficos...",
    technologies: ["React", "Firebase", "HTML/CSS"],
    type: "Interfaces UI",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa...",
    technologies: ["React", "Firebase", "Tailwind"],
    type: "Productos digitales",
    github: "#",
    demo: "#"
  },
  {
    id: 7,
    title: "Database Management",
    description: "Sistema de gestión de base de datos empresarial...",
    technologies: ["SQL Server", "Java"],
    type: "Proyectos de clase",
    github: "#",
    demo: "#"
  },
  {
    id: 8,
    title: "Open Source Contribution",
    description: "Contribuciones a proyectos de código abierto en GitHub...",
    technologies: ["JavaScript", "React"],
    type: "Open Source / Personales",
    github: "#",
    demo: "#"
  }
];

// También puedes exportar las constantes relacionadas
export const technologies = [
  'All', 'React', 'Python', 'Blender', 'Java', 'HTML/CSS', 
  'Tailwind', 'Firebase', 'Three.js', 'Unity', 'SQL Server'
];

export const projectTypes = [
  'All',
  'Aplicaciones Web',
  'Videojuegos', 
  'Diseños 3D',
  'Interfaces UI',
  'Productos digitales',
  'Proyectos de clase',
  'Freelance',
  'Personales'
];