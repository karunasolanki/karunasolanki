interface Project {
  category: string
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    category: 'German Transport Services',
    title: 'Deutsche Bahn V.2',
    description: `The DB Navigator is an official app by Deutsche Bahn that helps passengers plan and organize train journeys. With an extensive, well-maintained network, Deutsche Bahn offers efficient and reliable transportation across Germany and beyond. The case study provided a design opportunity to enhance the app and improve user experience.`,
    imgSrc: '/static/images/db-navigator.png',
    href: 'https://www.google.com',
  },
  {
    category: 'Master Thesis',
    title: "Sahyog: An app for Alzheimer's",
    description: `Improving family caregiving for Alzheimer’s patients in India. Through competitor analysis and user-centered research, I designed Sahyog, an app to empower caregivers with educational resources, situational guidance, and community support. 
    This project reflects my passion for using UX design to create impactful solutions that address real-world challenges.`,
    imgSrc: '/static/images/sahyog-app.png',
    href: '/blog/the-time-machine',
  },
  {
    category: 'Passkeys Authentication',
    title: 'Phishing Resistant MFA: Passkeys',
    description: `From reshaping the developer panel to enhancing the complete website, I optimized the user experience for clarity and engagement. 
    I took the lead in designing four key tools that empower users to integrate and understand passkeys across various platforms.`,
    imgSrc: '/static/images/passkeys-project.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
