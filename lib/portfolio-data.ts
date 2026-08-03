import portfolioData from "@/data/portfolio.json";

export interface PersonalInfo {
  name: string;
  title: string;
  currentRole: string;
  bio: string;
  philosophy: string;
  welcomeMessage: string;
  availability: string;
  location: string;
  profileImage: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  location: string;
  description: string;
  coursework: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  category: string;
  status: string;
  featured: boolean;
  link: string;
  github: string;
  demoCredentials?: {
    username: string;
    password: string;
  };
  features: string[];
  challenges: string[];
  duration: string;
  teamSize: number;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  validUntil: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Stats {
  yearsOfExperience: number;
  projectsCompleted: number;
  clientsSatisfied: number;
  linesOfCode: number;
  githubContributions: number;
  technologiesMastered: number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  contact: ContactInfo;
  skills: {
    categories: SkillCategory[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  testimonials: Testimonial[];
  stats: Stats;
}

// Data access functions
export const getPersonalInfo = (): PersonalInfo => portfolioData.personal;
export const getContactInfo = (): ContactInfo => portfolioData.contact;
export const getSkills = (): SkillCategory[] => portfolioData.skills.categories;
export const getExperience = (): Experience[] => portfolioData.experience;
export const getEducation = (): Education[] => portfolioData.education;
export const getProjects = (): Project[] => portfolioData.projects;
export const getFeaturedProjects = (): Project[] =>
  portfolioData.projects.filter((p) => p.featured);
export const getProjectById = (id: number): Project | undefined =>
  portfolioData.projects.find((p) => p.id === id);
export const getCertifications = (): Certification[] =>
  portfolioData.certifications;
export const getTestimonials = (): Testimonial[] => portfolioData.testimonials;
export const getStats = (): Stats => portfolioData.stats;

// Legacy compatibility - for existing site config
export const getLegacySiteConfig = () => ({
  name: portfolioData.personal.name,
  owner: portfolioData.personal.name,
  currentRole: portfolioData.personal.currentRole,
  welcomeMessage: portfolioData.personal.welcomeMessage,
  description: portfolioData.personal.bio,
  links: {
    github: portfolioData.contact.github,
    twitter: portfolioData.contact.twitter,
    linkedin: portfolioData.contact.linkedin,
    email: `mailto:${portfolioData.contact.email}`,
  },
  portfolio: {
    sections: {
      about: {
        title: "About Me",
        description: portfolioData.personal.bio,
      },
      skills: portfolioData.skills.categories.map((cat) => ({
        name: cat.name,
        items: cat.items.map((skill) => skill.name),
      })),
      experience: portfolioData.experience.map((exp) => ({
        title: exp.title,
        company: exp.company,
        period: exp.period,
        description: exp.description,
      })),
      education: portfolioData.education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree,
        period: edu.period,
      })),
      projects: portfolioData.projects.map((proj) => ({
        title: proj.title,
        description: proj.description,
        image: proj.image,
        tags: proj.tags,
        link: proj.link,
        github: proj.github,
      })),
    },
  },
});

export default portfolioData as PortfolioData;
