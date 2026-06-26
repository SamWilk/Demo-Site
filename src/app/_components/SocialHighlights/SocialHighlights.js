import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "Yelp",
    handle: "Claimed profile, 5.0 rating, 7 reviews, and 14 project photos",
    href: "https://www.yelp.com/biz/burress-home-services-jacksonville",
    icon: "y",
  },
  {
    name: "Facebook",
    handle: "Local page for Burress Home Services updates",
    href: "https://www.facebook.com/p/Burress-Home-Services-61568135999341/",
    icon: "f",
  },
  {
    name: "Phone",
    handle: "Call directly for repair, installation, and renovation help",
    href: "tel:+19048850229",
    icon: "904",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Profiles and proof</p>
        <h2>Recent project photos and local review signals support the work.</h2>
        <p>
          Burress Home Services appears on Yelp as a claimed Jacksonville handyman and
          general contractor business with a 5.0 rating, visible photos, and service
          coverage across nearby communities.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {highlights.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
