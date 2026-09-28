import { Link } from "react-router-dom";

function Privacy() {
  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <Link className="legal-back" to="/">
          ← Back to home
        </Link>

        <p className="eyebrow">LEGAL</p>

        <h1>
          Privacy
          <br />
          Policy.
        </h1>

        <p className="legal-updated">
          Last updated: 28 September 2026
        </p>

        <section className="legal-section">
          <h2>Overview</h2>
          <p>
            Darshan | Creative Portfolio is the personal
            portfolio website of Darshan Bhawsar. This
            Privacy Policy explains how information may be
            handled when you visit or contact this website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information I collect</h2>
          <p>
            This website does not intentionally collect
            sensitive personal information from visitors.
          </p>

          <p>
            If you contact me by email, I may receive the
            information you choose to provide, such as your
            name, email address, project details and message.
          </p>
        </section>

        <section className="legal-section">
          <h2>How information is used</h2>
          <p>
            Information sent through the contact details on
            this website may be used to respond to enquiries,
            discuss projects and communicate with you about
            your request.
          </p>
        </section>

        <section className="legal-section">
          <h2>Portfolio content</h2>
          <p>
            Images, videos, graphics and other creative work
            displayed on this website are presented as part
            of my portfolio. Some work may have been created
            for clients, collaborations, academic projects
            or other creative purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>Third-party services</h2>
          <p>
            This website may contain links to external
            websites or services. Those services operate under
            their own privacy policies and terms. I am not
            responsible for the privacy practices of external
            websites.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to this policy</h2>
          <p>
            This Privacy Policy may be updated when the
            website or its features change. The latest version
            will be published on this page.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact:
          </p>

          <a href="mailto:darshan.bhawsar05@gmail.com">
            darshan.bhawsar05@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}

export default Privacy;