export interface Skill {
  icon: string
  title: string
  technologies: string
}

export interface Project {
  title: string
  description: string
  image: string
}

export interface Experience {
  title: string
  company: string
  period: string
}

export interface Education {
  degree: string
  school: string
  year: string
}

export interface SocialLink {
  href: string
  path: string
}
