import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import "./App.css";

import Privacy from "./Privacy.jsx";
import Terms from "./Terms.jsx";
import NotFound from "./NotFound.jsx";

/* =========================
   REELS
========================= */

const reels = [
  {
    number: "01",
    title: "Cinematic Edit Collaboration Reel",
    category: "CINEMATIC EDITING",
    file: "/portfolio/reels/cinematic-edit-collaboration.mp4",
    thumbnail: "/portfolio/reels/img1.jpg",
  },
  {
    number: "02",
    title: "Cinematic Reel Edit",
    category: "REEL EDITING",
    file: "/portfolio/reels/cinematic-reel-edit.mp4",
    thumbnail: "/portfolio/reels/img2.jpg",
  },
  {
    number: "03",
    title: "Product Shoot and Edit",
    category: "PRODUCT VIDEO",
    file: "/portfolio/reels/product-shoot-edit.mp4",
    thumbnail: "/portfolio/reels/img3.jpg",
  },
];

const graphics = Array.from(
  { length: 13 },
  (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    file: `/portfolio/graphics/Post ${index + 1}.png`,
  })
);

const thumbnails = [
  {
    number: "01",
    file: "/portfolio/graphics/YT Thumbnail 1.png",
  },
  {
    number: "02",
    file: "/portfolio/graphics/YT Thumbnail 2.png",
  },
];

const socialProjects = [
  {
    number: "01",
    file: "/portfolio/social/IMG_5548.PNG",
  },
  {
    number: "02",
    file: "/portfolio/social/IMG_5549.PNG",
  },
  {
    number: "03",
    file: "/portfolio/social/IMG_5550.PNG",
  },
  {
    number: "04",
    file: "/portfolio/social/IMG_5551.PNG",
  },
  {
    number: "05",
    file: "/portfolio/social/IMG_5552.PNG",
  },
];

const projections = [
  "IMG_1155.jpg",
  "IMG_1395.jpg",
  "IMG_1642.jpg",
  "IMG_1643.jpg",
  "IMG_1644.jpg",
  "IMG_1645.jpg",
  "IMG_2128.jpg",
  "IMG_2129.jpg",
  "IMG_2130.jpg",
  "IMG_2131.jpg",
  "IMG_2132.jpg",
  "IMG_2136.jpg",
  "IMG_2137.jpg",
  "IMG_2138.jpg",
  "IMG_2140.jpg",
  "IMG_2141.jpg",
  "IMG_2143.jpg",
  "IMG_2145(1).jpg",
  "IMG_2145.jpg",
  "IMG_2148.jpg",
  "IMG_2149.jpg",
  "IMG_2150.jpg",
  "IMG_2151.jpg",
  "IMG_2152.jpg",
  "IMG_2153.jpg",
  "IMG_2154.jpg",
].map((file, index) => ({
  number: String(index + 1).padStart(2, "0"),
  file: `/portfolio/photography/Projections/${file}`,
}));

const vlf = [
  "IMG_0177.jpg",
  "IMG_0178.jpg",
  "IMG_0315.jpg",
  "IMG_0326.jpg",
  "IMG_0327.jpg",
  "IMG_0344.jpg",
  "IMG_0347.jpg",
  "IMG_0358.jpg",
  "IMG_0376.jpg",
  "IMG_0397.jpg",
  "IMG_0424.jpg",
  "IMG_0425.jpg",
  "IMG_0485.jpg",
  "IMG_0548.jpg",
  "IMG_0549.jpg",
  "IMG_0550.jpg",
].map((file, index) => ({
  number: String(index + 1).padStart(2, "0"),
  file: `/portfolio/photography/VLF/${file}`,
}));

/* =========================
   TRANSITIONS
========================= */

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   SCROLL TO TOP
========================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =========================
   IMAGE LIGHTBOX
========================= */

function ImageLightbox({
  src,
  alt,
  className = "",
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <>
      <img
        className={`${className} portfolio-image-trigger`}
        src={src}
        alt={alt}
        onDoubleClick={() => setOpen(true)}
      />

      {open &&
        createPortal(
          <div
            className="lightbox-backdrop"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close fullscreen image"
              onClick={(event) => {
                event.stopPropagation();
                setOpen(false);
              }}
            >
              ×
            </button>

            <img
              className="lightbox-image"
              src={src}
              alt={alt}
              onClick={(event) =>
                event.stopPropagation()
              }
            />
          </div>,
          document.body
        )}
    </>
  );
}

/* =========================
   NAVIGATION
========================= */

function Navigation() {
  const location = useLocation();

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        DARSHAN | CREATIVE PORTFOLIO
      </Link>

      <nav className="main-nav">
        <Link
          className={
            location.pathname === "/"
              ? "active"
              : ""
          }
          to="/"
        >
          Home
        </Link>

        <Link
          className={
            location.pathname.startsWith("/reels")
              ? "active"
              : ""
          }
          to="/reels"
        >
          Reels
        </Link>

        <Link
          className={
            location.pathname.startsWith("/graphics")
              ? "active"
              : ""
          }
          to="/graphics"
        >
          Graphics
        </Link>

        <Link
          className={
            location.pathname.startsWith("/social")
              ? "active"
              : ""
          }
          to="/social"
        >
          Social
        </Link>

        <Link
          className={
            location.pathname.startsWith(
              "/photography"
            )
              ? "active"
              : ""
          }
          to="/photography"
        >
          Photography
        </Link>
      </nav>

      <Link
        className="header-contact"
        to="/contact"
      >
        Let&apos;s talk <span>↗</span>
      </Link>
    </header>
  );
}

/* =========================
   PAGE WRAPPER
========================= */

function Page({ children }) {
  return (
    <motion.main
      className="page"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}

/* =========================
   HOME
========================= */

function Home() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <Page>
      <section
        className="hero"
        ref={heroRef}
      >
        <motion.div
          className="hero-background"
          style={{
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
          }}
        />

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">
            VISUAL STORYTELLER · VIDEO EDITOR ·
            DESIGNER
          </p>

          <h1>
            I turn ideas
            <br />
            into <span>visual stories.</span>
          </h1>

          <p className="hero-description">
            I create cinematic edits, digital
            graphics and social content built around
            strong visuals, rhythm and storytelling.
          </p>

          <div className="hero-actions">
            <Link
              className="text-link"
              to="/reels"
            >
              Explore the work <span>↘</span>
            </Link>

            <Link
              className="text-link muted-link"
              to="/contact"
            >
              Get in touch <span>↗</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </motion.div>
      </section>

      <section className="intro-section section-pad">
        <motion.div
          className="intro-visual"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="intro-frame"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="intro-frame-top">
              <span>VISUAL</span>
              <span>01</span>
            </div>

            <div className="intro-orbit orbit-one" />
            <div className="intro-orbit orbit-two" />

            <motion.div
              className="intro-core"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="intro-frame-bottom">
              <span>CODE</span>
              <span>CUT</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="intro-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p className="intro-label">
            THE APPROACH
          </p>

          <h2>
            Different mediums.
            <br />
            One visual language.
          </h2>

          <p>
            From short-form edits to social
            campaigns and graphic compositions,
            every project starts with the same goal:
            make the viewer stop and look.
          </p>
        </motion.div>
      </section>

      <section className="work-section section-pad">
        <motion.div
          className="work-section-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="intro-label">
            EXPLORE THE WORK
          </p>

          <h2>
            Built across
            <br />
            <span>different frames.</span>
          </h2>
        </motion.div>

        <div className="work-grid">
          <WorkCategory
            title="Reel Editing"
            description="Cinematic edits, short-form videos and product-focused visual storytelling."
            meta="VIDEO"
            to="/reels"
            variant="reels"
          />

          <WorkCategory
            title="Graphic Design"
            description="Social posts, campaign graphics and visual communication designed for digital platforms."
            meta="DESIGN"
            to="/graphics"
            variant="graphics"
          />

          <WorkCategory
            title="Social Media"
            description="Content planning, creative direction and visual execution for social platforms."
            meta="CONTENT"
            to="/social"
            variant="social"
          />

          <WorkCategory
            title="Photography"
            description="Frames, moments and visual stories captured through photography."
            meta="FRAMES"
            to="/photography"
            variant="photography"
          />
        </div>
      </section>

      <section className="home-about section-pad">
        <motion.div
          className="about-home-visual"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="about-line"
            animate={{
              scaleX: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span>CREATIVE / TECHNICAL</span>

          <motion.div
            className="about-circle"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.div
          className="about-home-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p className="intro-label">
            ABOUT ME
          </p>

          <h2>Creator behind the cut.</h2>

          <Link
            className="text-link"
            to="/about"
          >
            More about me <span>↗</span>
          </Link>
        </motion.div>
      </section>

      <ContactCTA />
    </Page>
  );
}

/* =========================
   WORK CATEGORY CARD
========================= */

function WorkCategory({
  title,
  description,
  meta,
  to,
  variant,
}) {
  return (
    <motion.article
      className={`work-card ${variant}`}
      initial={{
        opacity: 0,
        y: 90,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="work-card-visual">
        <div className="visual-label">
          {meta}
        </div>

        <div className="motion-art">
          {variant === "reels" && (
            <>
              <motion.div
                className="reel-art-frame"
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div />
                <div />
                <div />
              </motion.div>

              <motion.span
                className="art-play"
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ▶
              </motion.span>
            </>
          )}

          {variant === "graphics" && (
            <>
              <motion.div
                className="graphic-art-box"
                animate={{
                  rotate: [0, 6, 0, -6, 0],
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>TYPE</span>
                <strong>01</strong>
              </motion.div>

              <motion.div
                className="graphic-art-line"
                animate={{
                  scaleX: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}

          {variant === "social" && (
            <>
              <motion.div
                className="social-art-grid"
                animate={{
                  gap: [10, 18, 10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </motion.div>

              <motion.div
                className="social-art-cursor"
                animate={{
                  x: [0, 80, 20, 100, 0],
                  y: [0, 20, 60, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}

          {variant === "photography" && (
            <>
              <motion.div
                className="photo-art-frame"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="photo-art-sun" />
                <div className="photo-art-horizon" />
              </motion.div>

              <motion.div
                className="photo-art-frame-small"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className="work-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          className="work-card-link"
          to={to}
        >
          View project <span>↗</span>
        </Link>
      </div>
    </motion.article>
  );
}

/* =========================
   REELS PAGE
========================= */

function Reels() {
  return (
    <Page>
      <ProjectHeader
        eyebrow="SELECTED WORK"
        title={
          <>
            Reel
            <br />
            Editing.
          </>
        }
        description="Cinematic edits, short-form storytelling and product-focused video work."
      />

      <section className="projects-section">
        <div className="project-grid reels-grid">
          {reels.map((project, index) => (
            <motion.article
              className="reel-project"
              key={project.file}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="reel-video-wrap">
                <video
                  className="reel-video"
                  controls
                  preload="metadata"
                  playsInline
                  poster={project.thumbnail}
                  src={project.file}
                >
                  Your browser does not support
                  video playback.
                </video>

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-meta">
                <span>{project.category}</span>

                <h2>{project.title}</h2>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* =========================
   GRAPHICS PAGE
========================= */

function Graphics() {
  return (
    <Page>
      <ProjectHeader
        eyebrow="SELECTED WORK"
        title={
          <>
            Graphic
            <br />
            Design.
          </>
        }
        description="Digital graphics, social content and visual communication created for different brands and platforms."
      />

      <section className="projects-section">
        <div className="subsection-heading">
          <span>01</span>

          <h2>Instagram Posts</h2>

          <p>Selected social graphics.</p>
        </div>

        <div className="graphics-grid">
          {graphics.map((graphic, index) => (
            <motion.figure
              className="graphic-item"
              key={graphic.file}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 0.8,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="graphic-image-wrap">
                <ImageLightbox
                  src={graphic.file}
                  alt={`Graphic design project ${graphic.number}`}
                />

                <span>
                  {graphic.number}
                </span>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="subsection-heading thumbnails-heading">
          <span>02</span>

          <h2>YouTube Thumbnails</h2>

          <p>Long-form video cover design.</p>
        </div>

        <div className="thumbnail-grid">
          {thumbnails.map((thumbnail, index) => (
            <motion.figure
              className="thumbnail-item"
              key={thumbnail.file}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="thumbnail-image-wrap">
                <ImageLightbox
                  src={thumbnail.file}
                  alt={`YouTube thumbnail project ${thumbnail.number}`}
                />

                <span>
                  {thumbnail.number}
                </span>
              </div>
            </motion.figure>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* =========================
   SOCIAL PAGE
========================= */

function Social() {
  return (
    <Page>
      <ProjectHeader
        eyebrow="SELECTED WORK"
        title={
          <>
            Social
            <br />
            Media.
          </>
        }
        description="Content planning, creative execution and social media work designed to build a consistent visual presence."
      />

      <section className="projects-section social-projects-section">
        <div className="subsection-heading">
          <span>01</span>

          <h2>Social Content</h2>

          <p>Selected social media work.</p>
        </div>

        <div className="social-grid">
          {socialProjects.map((project, index) => (
            <motion.figure
              className="social-project"
              key={project.file}
              initial={{
                opacity: 0,
                y: 90,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.9,
                delay: (index % 5) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="social-image-wrap">
                <ImageLightbox
                  src={project.file}
                  alt={`Social media project ${project.number}`}
                />

                <span>
                  {project.number}
                </span>
              </div>
            </motion.figure>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* =========================
   PHOTOGRAPHY
========================= */

function PhotographyGallery({
  title,
  items,
}) {
  return (
    <section className="photography-collection">
      <div className="photography-section-heading">
        <div>
          <span className="collection-label">
            COLLECTION
          </span>

          <h2>{title}</h2>
        </div>

        <span className="collection-count">
          {String(items.length).padStart(2, "0")}{" "}
          FRAMES
        </span>
      </div>

      <div className="photography-grid">
        {items.map((photo, index) => (
          <motion.figure
            className="photography-item"
            key={photo.file}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.85,
              delay: (index % 4) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="photography-image-wrap">
              <ImageLightbox
                src={photo.file}
                alt={`${title} photograph ${photo.number}`}
              />

              <span>{photo.number}</span>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Photography() {
  return (
    <Page>
      <ProjectHeader
        eyebrow="FRAMES BY DARSHAN"
        title={
          <>
            Photo-
            <br />
            graphy.
          </>
        }
        description="A collection of photographs, event frames and visual moments captured through different live experiences."
      />

      <section className="photography-page">
        <PhotographyGallery
          title="Projections"
          items={projections}
        />

        <PhotographyGallery
          title="VLF"
          items={vlf}
        />
      </section>
    </Page>
  );
}

/* =========================
   PROJECT HEADER
========================= */

function ProjectHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="project-header">
      <motion.div
        className="project-header-content"
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="eyebrow">{eyebrow}</p>

        <h1>{title}</h1>

        <p className="project-header-description">
          {description}
        </p>
      </motion.div>
    </section>
  );
}

/* =========================
   ABOUT
========================= */

function About() {
  return (
    <Page>
      <ProjectHeader
        eyebrow="ABOUT DARSHAN BHAWSAR"
        title={
          <>
            Creator
            <br />
            behind the cut.
          </>
        }
        description="A visual creator working between editing, design, storytelling and technology."
      />

      <section className="about-content section-pad">
        <motion.div
          className="about-copy"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            I&apos;m Darshan Bhawsar, a CSE student
            specializing in AI and Machine Learning,
            with a strong interest in visual
            storytelling and creative work.
          </p>

          <p>
            My work sits at the intersection of
            video editing, graphic design, social
            media and visual communication. I enjoy
            taking an idea, finding its visual
            language and turning it into something
            people can actually see, feel and
            remember.
          </p>

          <p>
            I work with tools such as DaVinci
            Resolve, Photoshop, Canva and modern
            creative workflows, while continuing to
            build my technical skills through
            computer science and AI/ML.
          </p>

          <p>
            I&apos;m particularly drawn to cinematic
            editing, photography, composition, music
            and storytelling. Whether it is a
            short-form reel, a social graphic or a
            visual campaign, I care about rhythm,
            composition and the small details that
            make the final piece feel intentional.
          </p>

          <p>
            This portfolio is a collection of that
            work and an evolving record of where
            I&apos;m going as a creator.
          </p>
        </motion.div>
      </section>
    </Page>
  );
}

/* =========================
   CONTACT
========================= */

function Contact() {
  return (
    <Page>
      <section className="contact-page">
        <motion.p
          className="eyebrow"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          HAVE A PROJECT IN MIND?
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Let&apos;s make
          <br />
          something{" "}
          <span>worth watching.</span>
        </motion.h1>

        <motion.div
          className="contact-details"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <a href="mailto:darshan.bhawsar05@gmail.com">
            darshan.bhawsar05@gmail.com ↗
          </a>

          <a href="tel:+919009445581">
            +91 9009445581
          </a>
        </motion.div>
      </section>
    </Page>
  );
}

/* =========================
   CONTACT CTA
========================= */

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div>
        <span>LET&apos;S WORK TOGETHER</span>

        <h2>
          Have an idea?
          <br />
          Let&apos;s make it visual.
        </h2>
      </div>

      <Link
        className="circle-link"
        to="/contact"
      >
        <span>GET IN TOUCH</span>
        <strong>↗</strong>
      </Link>
    </section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link
          className="footer-brand"
          to="/"
        >
          DARSHAN | CREATIVE PORTFOLIO
        </Link>

        <p>
          Visual storyteller, video editor and
          designer.
        </p>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Darshan | Creative Portfolio
        </span>

        <div className="footer-links">
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms &amp; Conditions
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   APP
========================= */

function App() {
  return (
    <>
      <Navigation />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/reels"
          element={<Reels />}
        />

        <Route
          path="/graphics"
          element={<Graphics />}
        />

        <Route
          path="/social"
          element={<Social />}
        />

        <Route
          path="/photography"
          element={<Photography />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/privacy"
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;