export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-image">
            <img src="/placeholder.svg" alt="Subscribe" className="rounded-lg" />
          </div>
          <div className="newsletter-form">
            <h2>Subscribe Our Newsletter To Get Updates</h2>
            <p>Stay informed about the latest technology trends and our service offerings</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

