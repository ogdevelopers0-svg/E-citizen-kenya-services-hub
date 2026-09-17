export const metadata = {
  title: "Disclaimer | E-CITIZEN Kenya Services Hub",
  description:
    "Disclaimer for E-CITIZEN Kenya Services Hub."
};

export default function DisclaimerPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">
          ← Back to E-CITIZEN Kenya Services Hub
        </a>

        <h1>Disclaimer</h1>

        <p className="legal-updated">
          Last updated: September 2026
        </p>

        <section>
          <h2>Independent Website</h2>
          <p>
            E-CITIZEN Kenya Services Hub is an independent website
            created to provide general information and help visitors
            find online government services in Kenya.
          </p>

          <p>
            This website is not owned, operated, controlled, sponsored
            or endorsed by the Government of Kenya or the official
            eCitizen platform.
          </p>
        </section>

        <section>
          <h2>Information Provided</h2>
          <p>
            Information on this website is provided for general
            informational purposes. We aim to make information clear
            and useful, but government requirements, fees, procedures
            and service availability may change.
          </p>

          <p>
            Visitors should verify current information with the relevant
            official government agency before relying on it.
          </p>
        </section>

        <section>
          <h2>Official Government Services</h2>
          <p>
            Where we provide links to government services, those links
            are intended to help visitors continue to the relevant
            official platform.
          </p>

          <p>
            E-CITIZEN Kenya Services Hub does not process government
            applications, issue government documents, approve
            applications or collect government service fees.
          </p>
        </section>

        <section>
          <h2>External Websites</h2>
          <p>
            Clicking a service link may take you to an external
            website. External websites have their own terms, privacy
            policies and operating procedures.
          </p>

          <p>
            We are not responsible for the content, availability,
            security, privacy practices or transactions carried out
            on external websites.
          </p>
        </section>

        <section>
          <h2>Payments</h2>
          <p>
            We do not request or collect government service payments
            through this website.
          </p>

          <p>
            Users should exercise caution and confirm that they are
            using the appropriate official government payment channel
            before making any payment.
          </p>
        </section>

        <section>
          <h2>Advertising</h2>
          <p>
            This website may display advertisements provided by
            third-party advertising services. Advertisements are
            independent from the editorial and informational content
            provided by this website.
          </p>
        </section>

        <section>
          <h2>No Guarantee</h2>
          <p>
            While reasonable efforts are made to maintain useful
            information, we do not guarantee that the information on
            this website is complete, accurate, current or suitable
            for every individual circumstance.
          </p>
        </section>

        <section>
          <h2>Use of This Website</h2>
          <p>
            By using this website, you acknowledge that it is an
            independent information resource and that official
            government platforms should be used for applications,
            payments and authoritative service information.
          </p>
        </section>

        <div className="legal-disclaimer">
          <strong>Important:</strong> For official government services,
          applications, payments and current requirements, always verify
          information through the relevant official Government of Kenya
          platform.
        </div>
      </div>
    </main>
  );
}
