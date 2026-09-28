import { motion } from "motion/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="eyebrow">ERROR 404</p>

        <h1>
          Page not
          <br />
          <span>found.</span>
        </h1>

        <p className="not-found-description">
          The page you&apos;re looking for doesn&apos;t
          exist or may have moved.
        </p>

        <Link
          className="text-link"
          to="/"
        >
          Back to home <span>↗</span>
        </Link>
      </motion.div>
    </main>
  );
}

export default NotFound;