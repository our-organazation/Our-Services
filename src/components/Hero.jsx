export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Experience The Best Leading IT Solutions</h1>
            <p>
              Innovative technology, seamless infrastructure, and reliable support services. We help businesses
              transform their digital landscape with cutting-edge solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <svg
                  className="btn-icon"
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/474x/90/56/d3/9056d37cff0fcead7492b2a4fb4b01cf.jpg" alt="IT Professional" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

