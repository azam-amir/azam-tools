"use client";

import { animations, SOCIAL_LINKS } from "@/utils/constant";
import {
  ourMissionData,
  siteFeatures,
  siteStates,
  socialLinks,
} from "@/utils/mock";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import {
  FiCode,
  FiDollarSign,
  FiGithub,
  FiGlobe,
  FiLock,
  FiMail,
  FiRefreshCw,
  FiStar,
  FiUser,
  FiZap,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={animations.fadeIn}
      className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-foreground"
    >
      {/* Hero Section */}
      <motion.section
        variants={animations.slideDown}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight flex items-center justify-center gap-3">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <FaTools className="text-primary" />
          </motion.span>{" "}
          About AzamTools
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering users worldwide with free, fast, and privacy-first online
          tools
        </p>
        <div className="flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={animations.slideUp}
        className="space-y-6 bg-muted/50 p-6 rounded-xl border border-border"
      >
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <FiStar className="text-primary" />
          </motion.span>{" "}
          Our Mission
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            At AzamTools, we believe everyone deserves access to high-quality
            digital tools without compromising privacy or breaking the bank. Our
            mission is to:
          </p>
          <motion.ul className="space-y-3" variants={animations.container}>
            {ourMissionData?.map((item, index) => (
              <motion.li
                key={index}
                variants={animations.item}
                className="flex items-start gap-3"
              >
                <motion.span
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.3,
                  }}
                  className="text-primary mt-1"
                >
                  ✓
                </motion.span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={animations.container}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
      >
        {siteStates?.map((stat, index) => (
          <motion.div
            key={index}
            variants={animations.item}
            whileHover={animations.cardHover}
            className="bg-muted/50 p-4 rounded-xl border border-border"
          >
            <motion.div
              transition={{ duration: 1, repeat: Infinity }}
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              {stat?.value}
            </motion.div>
            <div className="text-sm text-muted-foreground">{stat?.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Features Section */}
      <motion.section variants={animations.fadeIn} className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiStar className="text-primary" />
          </motion.span>{" "}
          Why Choose AzamTools?
        </h2>
        <motion.div
          variants={animations.container}
          className="grid md:grid-cols-2 gap-6"
        >
          {siteFeatures?.map((feature, index) => (
            <motion.div
              key={index}
              variants={animations.item}
              whileHover={animations.cardHover}
              className="bg-muted/50 p-5 rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              <motion.div className="mb-2">{feature?.icon}</motion.div>
              <h3 className="text-lg font-semibold mb-1">{feature?.title}</h3>
              <p className="text-muted-foreground">{feature?.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Creator Section */}
      <motion.section
        variants={animations.scaleIn}
        className="space-y-6 bg-muted/50 p-6 rounded-xl border border-border"
      >
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
          <motion.span
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FiUser className="text-primary" />
          </motion.span>{" "}
          Behind the Scenes
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                backgroundPosition: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center"
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-5xl"
              >
                👋
              </motion.span>
            </motion.div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <motion.h3
              className="text-xl font-semibold"
              transition={{ duration: 4, repeat: Infinity }}
            >
              Muhammad Azam Raza
            </motion.h3>
            <p className="text-muted-foreground">
              A passionate full-stack developer from Pakistan with over 5 years
              of experience building web applications. AzamTools started as a
              side project to solve common problems faced by developers and
              students.
            </p>
            <motion.p
              className="text-muted-foreground"
              animate={{
                borderLeftWidth: "2px",
                borderLeftColor: "#3b82f6",
                paddingLeft: "1rem",
              }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              "I wanted to create tools that I wished existed when I was
              learning to code - simple, accessible, and free for everyone."
            </motion.p>
            <motion.div
              className="flex gap-3 pt-2"
              variants={animations.container}
            >
              {socialLinks?.map((link, index) => (
                <motion.a
                  key={index}
                  variants={animations.item}
                  href={link?.url}
                  className="text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  {link?.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Want to Contribute?
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={animations.container}
        >
          <motion.a
            variants={animations.item}
            href="mailto:azam.amir.dev@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail /> Contact Me
          </motion.a>
          <motion.a
            variants={animations.item}
            href={SOCIAL_LINKS.GITHUB}
            className="inline-flex items-center gap-2 px-6 py-3 bg-muted border border-border text-foreground rounded-xl hover:bg-muted/70 transition font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub /> View on GitHub
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
