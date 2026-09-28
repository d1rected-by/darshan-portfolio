import { Link } from "react-router-dom";

function Terms() {
  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <Link className="legal-back" to="/">
          ← Back to home
        </Link>

        <p className="eyebrow">LEGAL</p>

        <h1>
          Terms &
          <br />
          Conditions.
        </h1>

        <p className="legal-updated">
          Last updated: 28 September 2026
        </p>

        <section className="legal-section">
          <h2>About this website</h2>
          <p>
            Darshan | Creative Portfolio is a personal
            portfolio website operated by Darshan Bhawsar.
            The website presents creative work, projects,
            skills and professional contact information.
          </p>
        </section>

        <section className="legal-section">
          <h2>Portfolio content</h2>
          <p>
            Unless otherwise stated, the design, layout,
            written content and original creative work
            presented on this website belong to Darshan
            Bhawsar or are displayed with appropriate
            permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>Use of website content</h2>
          <p>
            You may view the website and its portfolio
            content for personal and professional reference.
            You may not reproduce, redistribute, modify,
            publish or commercially use portfolio work without
            appropriate permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>External links</h2>
          <p>
            This website may link to external websites,
            platforms or services. These websites are
            operated independently and may have their own
            terms and policies.
          </p>
        </section>

        <section className="legal-section">
          <h2>Accuracy</h2>
          <p>
            Reasonable effort is made to keep the information
            on this website accurate and current. However,
            portfolio content, project availability and other
            information may change over time.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes</h2>
          <p>
            These Terms & Conditions may be updated when
            necessary. The latest version will be available on
            this page.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            For questions regarding these terms or the
            portfolio, contact:
          </p>

          <a href="mailto:darshan.bhawsar05@gmail.com">
            darshan.bhawsar05@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}

export default Terms;