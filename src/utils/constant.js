export const ROUTES = {
  HOME: "/",
  TOOLS: "/tools",
  CATEGORY: (slug) => `/tools/category/${slug}`,
  TOOL: (slug) => `/tools/${slug}`,
  ABOUT: "/about",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
};

export const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  },
  cardHover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  },
  floating: {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export const SOCIAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/muhammad-azam-593665289",
  UP_WORK: "https://www.upwork.com/freelancers/~01dae6184b1ea10101",
  GITHUB: "https://github.com/azam-amir",
  FACEBOOK: "https://www.facebook.com/profile.php?id=100095507323714",
  INSTAGRAM: "https://www.instagram.com/azamstylixh",
  YOUTUBE: "https://www.youtube.com/@AzAmTech-pw8ts",
  TWITTER: "https://twitter.com/azamstylish",
};
