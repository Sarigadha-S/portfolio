export const profile = {
  name: 'Sari S', title: 'Senior UI Developer', location: 'Kerala, India',
  email: 'sarisgadha@gmail.com', phone: '8907176399',
  linkedin: 'https://www.linkedin.com/in/shari-s-866546210', linkedinLabel: 'linkedin.com/in/shari-s-866546210',
}
export const skills = [
  { group: 'Frontend Development', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Tailwind CSS', 'jQuery'] },
  { group: 'UI / UX', items: ['Responsive Design', 'Accessibility', 'WCAG', 'Cross-Browser Compatibility', 'Performance Optimization'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jira'] },
  { group: 'AI Tools', items: ['Claude AI', 'ChatGPT', 'GitHub Copilot', 'Cursor'] },
  { group: 'Ways of working', items: ['Agile / Scrum', 'Cross-functional collaboration', 'Project management'] },
]
export type Project = { id: string; name: string; kind: 'mccord'|'sales'|'vssc'|'wgs'|'erp'|'site'; badge: string; desc: string; tech: string[]; contribution: string[]; note?: string }
export const projects: Project[] = [
  { id: 'mccord', name: 'McCord – Water Management System', kind: 'mccord', badge: 'Private / Client Project',
    desc: 'A water management system with dashboards for flow, consumption and leakage monitoring.',
    tech: ['React.js', 'Tailwind CSS', 'Python', 'MongoDB'],
    contribution: ['Developed responsive user interfaces', 'Built interactive dashboards', 'Worked on water flow monitoring, leakage detection and consumption monitoring interfaces', 'Improved UI performance', 'Collaborated with backend developers on API integration'] },
  { id: 'sales', name: 'Sales Management System', kind: 'sales', badge: 'Private / Client Project',
    desc: 'A sales management application with dashboards for sales and returns data and performance tracking.',
    tech: ['React.js', 'Tailwind CSS', 'Python', 'MongoDB'],
    contribution: ['Designed responsive frontend components', 'Developed dashboards for sales and returns data', 'Created interfaces for performance tracking', 'Integrated APIs', 'Improved usability'] },
  { id: 'vssc', name: 'VSSC – Material Purchase & Permission Management System', kind: 'vssc', badge: 'Private / Client Project',
    desc: 'An enterprise workflow application for material purchase and permission management.', tech: [],
    contribution: ['Developed frontend pages', 'Created responsive layouts', 'Improved usability', 'Collaborated with cross-functional teams', 'Supported smooth workflow implementation'] },
  { id: 'wgs', name: 'World Governments Summit – GovTech Prize Website', kind: 'wgs', badge: 'Professional Project',
    desc: 'A responsive, accessible website for the GovTech Prize.', tech: [],
    contribution: ['Developed responsive web pages', 'Worked on accessible UI', 'Implemented UI components according to project requirements', 'Ensured cross-browser compatibility', 'Optimized performance'] },
  { id: 'erp', name: 'Dcube ERP – CRM', kind: 'erp', badge: 'Private / Internal Project',
    desc: 'A CRM/ERP-style internal business application.', tech: ['PHP', 'HTML', 'Cursor AI'],
    contribution: ['Worked on the Project module, independently handling frontend and backend tasks'],
    note: 'AI-assisted development using Cursor AI, with implementation, review, debugging, and integration handled as part of my development workflow.' },
  { id: 'site', name: 'Dcube Website', kind: 'site', badge: 'Professional Project',
    desc: 'A responsive corporate website.', tech: ['HTML', 'CSS', 'Bootstrap', 'Cursor AI'],
    contribution: ['Worked on frontend development', 'Created responsive web pages with HTML, CSS and Bootstrap'],
    note: 'AI-assisted frontend development using Cursor AI.' },
]
export const experience = [
  { years: '2018 – 2020', role: 'HTML Developer', company: 'Innowiz Technologies', period: 'Oct 2018 – Feb 2020', text: 'Started my professional career building web pages in HTML.' },
  { years: '2020', role: 'HTML Developer', company: 'Creace Technologies Pvt Ltd', period: 'Feb 2020 – Oct 2020', text: 'Continued HTML development in a new team.' },
  { years: '2020 – 2022', role: 'Front End Developer', company: 'Richkenmedia Pvt Limited', period: 'Oct 2020 – Jun 2022', text: 'Moved into broader frontend development.' },
  { years: '2022 – Present', role: 'Senior UI Developer', company: 'DCUBE Ai', period: 'Nov 2022 – Present', text: 'Building responsive, accessible interfaces with React.js, working with Agile, cross-functional teams.' },
]

export const recognition = [
  { title: 'Best Performance of the Year', org: 'DCUBE Ai', meta: 'Certificate of Appreciation, 22 December 2023', text: 'Recognised for outstanding contribution to the company in 2023.' },
  { title: 'Performance Award Nomination', org: 'DCUBE Ai', meta: 'Q2 2026', text: 'Nominated for showing adaptability and eagerness to learn, quickly picking up different technologies and putting new skills into practice.' },
  { title: 'One Million Prompters Certificate', org: 'Dubai Government', meta: 'Certificate', text: 'Certificate received through the One Million Prompters programme.' },
]
