export const ROUTES = {
  HOME: "/",
  TOOLS: "/tools",
  CATEGORY: (slug) => `/tools/category/${slug}`,
  TOOL: (slug) => `/tools/${slug}`,
  CONTACT: "/contact",
  ABOUT: "/about",
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
};
