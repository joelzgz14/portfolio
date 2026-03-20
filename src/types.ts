// src/types.ts

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  videoUrl?: string; // El signo ? indica que es opcional
}

export interface PersonalInfo {
  name: string;
  location: string;
  roleHeadline: string;
  skills: string;
  avatarUrl: string;
  cvUrl: string;
  links: {
    github: string;
    linkedin: string;
  };
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
}