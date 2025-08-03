import project1Img from "../assets/images/1.png";

export const mockProjectsVisual = (t) => [
  {
    id: 1,
    title: t("project1.title"),    
    image: project1Img,
    description: t("project1.description"),
    technologies: ["Java", "MySQL", "Spring Boot"],
    type: t("project1.type"),
    github: "https://github.com/MaoDhell/Construccion2LauraEscobar",
  }
];


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