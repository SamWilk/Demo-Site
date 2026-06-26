import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Request service</p>
        <h2>Need a repair, installation, or renovation task handled?</h2>
        <p>
          Call Burress Home Services for handyman and general contractor help in
          Jacksonville, Jacksonville Beach, St. Augustine, and surrounding service areas.
        </p>
      </div>
      <div className={styles.actions}>
        <a className={styles.primaryButton} href="tel:+19048850229">
          Call (904) 885-0229
        </a>
        <a
          className={styles.secondaryButton}
          href="https://www.yelp.com/biz/burress-home-services-jacksonville"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Yelp profile
        </a>
      </div>
    </section>
  );
}
