export const metadata = {
  title: "Contact Us | E-CITIZEN Kenya Services Hub",
  description:
    "Contact E-CITIZEN Kenya Services Hub for questions, suggestions and website feedback."
};

export default function ContactPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">
          ← Back to E-CITIZEN Kenya Services Hub
        </a>

        <h1>Contact Us</h1>

        <p className="legal-updated">
          E-CITIZEN Kenya Services Hub
        </p>

        <section>
          <h2>Get in Touch</h2>

          <p>
            We welcome questions, suggestions and feedback about the
            information provided on E-CITIZEN Kenya Services Hub.
          </p>
        </section>

        <section>
          <h2>Website Feedback</h2>

          <p>
            If you notice information that needs clarification or an
            issue with a link on our website, please contact us so that
            we can review it.
          </p>
        </section>

        <section>
          <h2>Government Service Enquiries</h2>

          <p>
            We are an independent information website and do not process
            government applications or provide official government
            support.
          </p>

          <p>
            For questions about an application, payment, certificate,
            account or government service, please contact the relevant
            official government agency or use the official eCitizen
            platform.
          </p>

          <a
  className="official-button"
  href="https://accounts.ecitizen.go.ke/en"
>
  Visit Official eCitizen
</a>
        </section>

        <section>
          <h2>Feedback and Suggestions</h2>

          <p>
            We welcome suggestions that can help make this website
            clearer, easier to navigate and more useful to visitors
            looking for information about Kenyan government services.
          </p>
        </section>

        <div className="legal-disclaimer">
          <strong>Important:</strong> E-CITIZEN Kenya Services Hub is an
          independent website and is not the official Government of Kenya
          eCitizen portal.
        </div>
      </div>
    </main>
  );
}
