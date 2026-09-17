export const metadata = {
  title: "About Us | E-CITIZEN Kenya Services Hub",
  description:
    "Learn about E-CITIZEN Kenya Services Hub, an independent information and service-discovery website."
};

export default function AboutPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">
          ← Back to E-CITIZEN Kenya Services Hub
        </a>

        <h1>About Us</h1>

        <p className="legal-updated">
          E-CITIZEN Kenya Services Hub
        </p>

        <section>
          <h2>Who We Are</h2>
          <p>
            E-CITIZEN Kenya Services Hub is an independent information
            and service-discovery website created to make it easier for
            visitors to understand common government services available
            online in Kenya.
          </p>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>
            We provide simple, accessible information about selected
            government services, including passports, driving licences,
            tax services, birth certificates, certificates of good
            conduct, business registration and other commonly searched
            services.
          </p>

          <p>
            Our goal is to help visitors understand a service before
            continuing to the appropriate official government platform.
          </p>
        </section>

        <section>
          <h2>We Are Independent</h2>
          <p>
            E-CITIZEN Kenya Services Hub is not operated by, affiliated
            with, sponsored by or endorsed by the Government of Kenya or
            the official eCitizen platform.
          </p>

          <p>
            We do not process government applications, issue government
            documents or collect government service fees.
          </p>
        </section>

        <section>
          <h2>Official Services</h2>
          <p>
            Where an official online government service is available,
            our website provides a link that allows visitors to continue
            to the relevant official platform.
          </p>

          <p>
            Visitors should always confirm current service requirements,
            fees and procedures on the official government platform
            before making an application or payment.
          </p>
        </section>

        <section>
          <h2>Our Information Approach</h2>
          <p>
            We aim to present information in a clear and easy-to-understand
            format. Government requirements and procedures can change,
            therefore information on this website should be treated as
            general guidance rather than an official government notice.
          </p>
        </section>

        <div className="legal-disclaimer">
          <strong>Important:</strong> E-CITIZEN Kenya Services Hub is an
          independent website. For official government services, applications,
          payments and current requirements, always use the relevant official
          government platform.
        </div>
      </div>
    </main>
  );
}
