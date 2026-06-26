import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "Jacksonville",
  "Jacksonville Beach",
  "St. Augustine",
  "32210",
  "32225",
  "32256",
];

const proofPoints = [
  {
    metric: "5.0",
    label: "Yelp rating",
    detail: "Customers point to professional, detail-focused work across home repair projects.",
  },
  {
    metric: "7",
    label: "Yelp reviews",
    detail: "A claimed local profile with visible customer feedback and project photos.",
  },
  {
    metric: "1,475",
    label: "local searches",
    detail: "Yelp search visibility within 25 miles for handyman services.",
  },
];

const services = [
  {
    title: "Handyman Repairs",
    copy: "Door repair, drywall patching, window repair, caulking, cabinet repair, assembly, and the small fixes that keep a home working.",
    href: "#contact",
  },
  {
    title: "Renovation Support",
    copy: "Remodeling help, deck construction, tile work, flooring, siding, painting, and project punch-list support.",
    href: "#contact",
  },
  {
    title: "Home Systems Help",
    copy: "Plumbing repair, electrical repair, appliance installation, gutter repair, gutter cleaning, and practical maintenance tasks.",
    href: "#contact",
  },
];

const checklist = [
  "Prepared for each job",
  "On-time appointments",
  "Clean work areas",
  "Detail-oriented finish",
  "Small repairs",
  "Larger renovations",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jacksonville handyman and home services</p>
            <h1>Reliable repairs, renovations, and punch-list help for local homes.</h1>
            <p className={styles.heroText}>
              Burress Home Services handles the practical work homeowners need done
              right: repairs, improvements, installation, painting, tile, decks,
              flooring, gutters, and more across Jacksonville and nearby areas.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="tel:+19048850229">
                Call (904) 885-0229
              </a>
              <Link className={styles.secondaryButton} href="#services">
                View services
              </Link>
            </div>
            <div className={styles.businessTypes} aria-label="Service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className={styles.section} id="proof">
        <SectionIntro
          eyebrow="Local trust signals"
          title="A claimed Jacksonville business profile with strong customer proof."
        />
        <div className={styles.winGrid}>
          {proofPoints.map((point) => (
            <article className={styles.winCard} key={point.label}>
              <strong>{point.metric}</strong>
              <h3>{point.label}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.splitSection} id="approach">
        <div>
          <p className={styles.eyebrow}>How the work gets handled</p>
          <h2>Prepared, punctual, professional, and careful in your home.</h2>
          <p>
            The business positioning centers on showing up ready, keeping the work
            clean, and paying attention to the details that separate a quick patch
            from a finished repair.
          </p>
        </div>
        <div className={styles.checkPanel}>
          {checklist.map((item) => (
            <div className={styles.checkItem} key={item}>
              <span aria-hidden="true">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="services">
        <SectionIntro
          eyebrow="Services"
          title="A practical range of repair and improvement services."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Request help</Link>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
