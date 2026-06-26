import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Project Gallery | Burress Home Services",
  description:
    "View project photos from Burress Home Services, a Jacksonville handyman and home services business.",
};

const projectGroups = [
  {
    title: "Marine grade finish project",
    description: "Before, finish detail, and red undertone detail grouped together.",
    layout: "three",
    photos: [
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/gADxx5II800wPgBor1_uyg/l.jpg",
        alt: "Burress Home Services project before photo in Jacksonville, FL",
        label: "Before",
        caption: "Before project work",
      },
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/lUt5tWbgjCEvOpH5Yi8Fuw/l.jpg",
        alt: "Finished Burress Home Services project with black and red undertone marine grade finish",
        label: "After",
        caption: "Black and red undertone marine grade finish",
      },
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/jSEViit6Gvl0oeHAQGIqLw/l.jpg",
        alt: "Burress Home Services red undertone project detail",
        label: "Detail",
        caption: "Red undertone finish detail",
      },
    ],
  },
  {
    title: "Troy project",
    description: "Before and after images from the same customer project.",
    layout: "pair",
    photos: [
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/3RCDxmK6sqBmbO4Kk4ftYw/l.jpg",
        alt: "Burress Home Services before photo for Troy project",
        label: "Before",
        caption: "Before project work",
      },
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/vpAJlulDydD3l0EnKiYITg/l.jpg",
        alt: "Burress Home Services after photo for Troy project",
        label: "After",
        caption: "After project work",
      },
    ],
  },
];

const additionalPhotos = [
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/yrb4JKY4D-DLzivxblu1VQ/l.jpg",
    alt: "Burress Home Services project photo in Jacksonville, FL",
    caption: "Project photo",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/hWLImP8Kxcw5ZJtvbQ-LFQ/l.jpg",
    alt: "Burress Home Services home repair project in Jacksonville, FL",
    caption: "Home service project",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/K0jsSBVVUKQjcWkkJ8NSCg/l.jpg",
    alt: "Burress Home Services repair project photo",
    caption: "Repair project",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/U-ccJkP6Hun8LcEmWt0Fnw/l.jpg",
    alt: "Burress Home Services improvement project photo",
    caption: "Home improvement project",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/KXGMjuHBdAaZDM3MKpCayQ/l.jpg",
    alt: "Burress Home Services project detail photo",
    caption: "Project detail",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/kXqRN_W4Qll6PIoxBDmxFg/l.jpg",
    alt: "Burress Home Services completed work photo",
    caption: "Completed work",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/7F9Z_W8Shpx-WS4QYTKl2w/l.jpg",
    alt: "Burress Home Services home services project photo",
    caption: "Home service project",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/b6eeKvhaqNXjAVr8xKhVIw/l.jpg",
    alt: "Burress Home Services Jacksonville project photo",
    caption: "Jacksonville project",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Project gallery</p>
          <h1>Photos from recent Burress Home Services work.</h1>
          <p>
            A visual look at repair, finish, and improvement projects from the
            Jacksonville service area.
          </p>
          <Link href="/#contact">Request service</Link>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Before and after gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Before and after</p>
          <h2>Grouped project photos</h2>
        </div>

        <div className={styles.projectStack}>
          {projectGroups.map((project, projectIndex) => (
            <article className={styles.projectGroup} key={project.title}>
              <div className={styles.projectHeader}>
                <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div
                className={`${styles.groupedPhotos} ${
                  project.layout === "pair" ? styles.photoPair : ""
                }`}
              >
                {project.photos.map((photo, photoIndex) => (
                  <figure className={styles.groupPhoto} key={photo.src}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={720}
                        height={560}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={projectIndex === 0 && photoIndex < 2}
                      />
                      <span>{photo.label}</span>
                    </div>
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>More project photos</p>
          <h2>Additional work from the service area</h2>
        </div>

        <div className={styles.galleryGrid}>
          {additionalPhotos.map((photo, index) => (
            <article className={styles.photoCard} key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={720}
                height={560}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{photo.caption}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
