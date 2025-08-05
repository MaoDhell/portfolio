import project1Img from "../assets/images/payaso.png";
import project2Img from "../assets/images/Gishiki .png";
import project3Img from "../assets/images/Frasquito .png";
import project4Img from "../assets/images/down.jpg";

export const mockProjectsVisual = (t) => [
  {
    id: 1,
    title: t("viproject1.title"),    
    image: project1Img,
    description: t("viproject1.description"),
    technologies: ["Photoshop"],
    type: ["Personales", "Ilustracion"],
  },
  {
    id: 2,
    title: t("viproject2.title"),   
    image: project2Img,
    description: t("viproject2.description"),
    technologies: ["Photoshop"],
    type: ["Personales", "Ilustracion"],
  },
  {
    id: 3,
    title: t("viproject3.title"),
    image: project3Img,
    description: t("viproject3.description"), 
    technologies: ["Photoshop"],
    type: ["Personales", "Ilustracion", "Arte Conceptual"],
  },
  {
    id: 4,
    title: t("viproject4.title"),
    image: project4Img,
    description: t("viproject4.description"),
    technologies: ["Photoshop"],
    type: ["Personales", "Ilustracion", "Arte Conceptual"],
  }
  
];


export const technologies = [
  'All', 'Photoshop', 'Illustrator', 'Blender', 'Figma', 
  'Unreal Engine', 'Unity', 'ZBrush', 'Substance Painter', 
  'After Effects', 'InDesign'
  
];

export const projectTypes = [
  'All',
  'Ilustracion',
  'Assets',
  'Props',
  'Diseños 3D',
  'Concept art',
  'Arte Conceptual',
  'Escenarios',
  'Freelance',
  'Personales'
];