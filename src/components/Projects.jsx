export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>Our Recently Completed Projects</h2>
        <div className="projects-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="project-card">
              <img src={`/placeholder.svg`} alt={`Project ${item}`} className="project-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

