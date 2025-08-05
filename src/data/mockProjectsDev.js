import project1Img from "../assets/images/1.png";
import project2Img from "../assets/images/Zentrix.png";

export const mockProjectsDev = (t) => [
  {
    id: 1,
    title: t("project1.title"),    
    image: project1Img,
    description: t("project1.description"),
    technologies: ["Java", "MySQL", "Spring Boot"],
    type: t("project1.type"),
    github: "https://github.com/MaoDhell/Construccion2LauraEscobar",
  },
   {
    id: 2,
    title: t("project2.title"),    
    image: project2Img,
    description: t("project2.description"),
    technologies: ["React", "Tailwind", "Node.js"],
    type: t("project2.type"),
    github: "https://github.com/danielalvarezm527/BilBot",
  }
];


export const technologies = [
  'All', 'React', 'Python', 'Blender', 'Java', 'HTML/CSS', 
  'Tailwind', 'Firebase', 'Three.js', 'Unity', 'SQL Server', 
  'Node.js', 'Express', 'Spring Boot', 'MySQL'
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