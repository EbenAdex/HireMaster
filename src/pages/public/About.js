import {
  HiOutlineShieldCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

function About() {
  return (
    <section className="modern-page">
      <div className="modern-page__intro">
        <p className="modern-page__tag">About HireMaster</p>
        <h1>
          HireMaster is a managed recruitment and opportunity processing
          platform built around structure, screening, and trust.
        </h1>
        <p>
          HireMaster was created to solve a problem that exists in many hiring
          and programme environments: opportunities are often available, but the
          process of publishing them properly, receiving applications in an
          organized manner, reviewing candidates, and identifying qualified
          applicants is usually inefficient, stressful, and poorly documented.
        </p>
      </div>

      <div className="modern-page__content">
        <div className="modern-page__block">
          <h2>What HireMaster actually does</h2>
          <p>
            HireMaster does not primarily function as a self-service job board
            where employers freely come to create accounts and post jobs on
            their own. Instead, HireMaster functions as a managed recruitment
            platform. Partner companies or institutions provide opportunity
            details and requirements to HireMaster, and the HireMaster
            administrative team then publishes those opportunities on the
            platform.
          </p>
          <p>
            Applicants apply through HireMaster, and the HireMaster team reviews
            and screens submitted applications according to the criteria
            provided by the partner organization. Only candidates who meet the
            role requirements or satisfy the screening threshold are then
            forwarded to the client.
          </p>
        </div>

        <div className="modern-page__grid">
          <article className="modern-info-card">
            <span className="modern-info-card__icon">
              <HiOutlineClipboardDocumentList />
            </span>
            <h3>Structured Intake</h3>
            <p>
              Opportunities are received, prepared, and published through a
              controlled process managed by HireMaster administrators.
            </p>
          </article>

          <article className="modern-info-card">
            <span className="modern-info-card__icon">
              <HiOutlineAdjustmentsHorizontal />
            </span>
            <h3>Screening and Filtering</h3>
            <p>
              Applications are reviewed against client criteria so that only
              relevant candidates progress to the forwarding stage.
            </p>
          </article>

          <article className="modern-info-card">
            <span className="modern-info-card__icon">
              <HiOutlineShieldCheck />
            </span>
            <h3>Professional Handling</h3>
            <p>
              HireMaster helps create order, improve documentation, and reduce
              recruitment disorder for both applicants and partner organizations.
            </p>
          </article>
        </div>

        <div className="modern-page__block">
          <h2>Why this model matters</h2>
          <p>
            Many companies do not just need visibility for a job opening. They
            need help handling the first layer of recruitment. That means
            organizing applications, reducing noise, identifying stronger
            candidates, and ensuring that only suitable applications reach the
            next stage. HireMaster exists to provide that value.
          </p>
          <p>
            For applicants, this model also improves clarity. They are not
            applying into a scattered or informal process. They are applying
            through a platform that is structured around review, documentation,
            and progression.
          </p>
        </div>

        <div className="modern-page__block">
          <h2>The HireMaster vision</h2>
          <p>
            The broader vision of HireMaster is to become a trusted managed
            recruitment platform that helps organizations improve how they
            receive, screen, and process applications. This includes support for
            student programmes, internships, graduate recruitment, entry-level
            hiring, and professional role intake where administrative order and
            candidate filtering matter.
          </p>
          <p>
            In this sense, HireMaster is not simply a listing platform. It is a
            recruitment operations system built to bridge the gap between role
            publication and qualified candidate delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;