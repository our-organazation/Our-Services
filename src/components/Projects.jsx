// export default function Projects() {
//   return (
//     <section className="projects-section" id="projects">
//       <div className="container">
//         <h2>Our Recently Completed Projects</h2>
//         <div className="projects-grid">
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="project-card">
//               <img src={`/placeholder.svg`} alt={`Project ${item}`} className="project-image" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import React from "react";
import greenhaven from '../assets/image.png';
import salon from '../assets/salon.png';
export default function Projects() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Mobotsane hair",
      category: "Web Development",
      image: salon,
      description:
        "A fully responsive salon website.",
      link: "https://mobotsanebeauty.vercel.app/",
    },
    {
      id: 2,
      title: "Auto",
      category: "Software Solution",
      image: "/placeholder.svg",
      description:
        "Comprehensive ",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Real Estate Property Finder",
      category: "Data Analytics",
      image: greenhaven,
      description:
        "A complex property search and filtering interface.",
      link: "https://green-haven-residences.vercel.app/",
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "Software Solution",
      image: "/placeholder.svg",
      description:
        "Comprehensive healthcare management system for patient records, appointment scheduling, and billing.",
      link: "https://example.com/project2",
    },
  ]

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>Our Recently Completed Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successful projects delivered for clients across various industries
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <a key={project.id} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                  <div className="view-project-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 80)}...</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="projects-cta">
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project With Us
          </a>
        </div>
      </div>
    </section>
  )
}

