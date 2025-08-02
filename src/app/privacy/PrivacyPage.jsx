"use client";
import { animations } from "@/utils/constant";
import { safetyMeasuresData, yourRightsData } from "@/utils/mock";
import { motion } from "framer-motion";
import {
  FiLock,
  FiShield,
  FiEyeOff,
  FiDatabase,
  FiMail,
  FiUser,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={animations.fadeIn}
      className="max-w-4xl mx-auto px-4 py-16 text-foreground"
    >
      {/* Hero Section */}
      <motion.section variants={animations.item} className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FiLock className="text-5xl text-primary" />
          </motion.div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is our top priority. Here's how we protect it.
        </p>
      </motion.section>

      {/* Policy Sections */}
      <motion.div variants={animations.fadeIn} className="space-y-12">
        {/* Data Collection */}
        <motion.section
          variants={animations.item}
          className="bg-muted/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FiDatabase className="text-2xl text-primary" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Data Collection</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We practice{" "}
              <span className="font-medium text-foreground">
                data minimalism
              </span>
              . AzamTools does not:
            </p>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Collect any personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Use tracking cookies or analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Store your tool usage data</span>
              </li>
            </ul>
            <motion.p
              className="p-4 bg-background rounded-lg border border-primary/20"
              whileHover={{ scale: 1.01 }}
            >
              <span className="font-medium text-foreground">
                All processing happens in your browser.
              </span>{" "}
              We never see, receive, or store the data you process with our
              tools.
            </motion.p>
          </div>
        </motion.section>

        {/* Security */}
        <motion.section
          variants={animations.item}
          className="bg-muted/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FiShield className="text-2xl text-primary" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Security Measures</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We implement{" "}
              <span className="font-medium text-foreground">
                multiple layers of protection
              </span>
              :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {safetyMeasuresData?.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2 p-3 bg-background rounded-lg border border-border"
                  whileHover={{ y: -3 }}
                >
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Third Parties */}
        <motion.section
          variants={animations.item}
          className="bg-muted/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FiEyeOff className="text-2xl text-primary" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Third Parties</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We{" "}
              <span className="font-medium text-foreground">
                don't share data
              </span>{" "}
              with third parties because we don't collect it in the first place.
            </p>
            <p>
              The only exceptions are when using our optional contact form
              (which sends emails via a secure service) or if you choose to
              interact with our GitHub repository.
            </p>
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          variants={animations.item}
          className="bg-muted/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.7 }}
            >
              <FiUser className="text-2xl text-primary" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Your Rights</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Under privacy laws like GDPR, you have rights regarding your data.
              Since we don't collect personal data, these rights are inherently
              respected:
            </p>
            <ul className="space-y-3">
              {yourRightsData?.map((right, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-primary">•</span>
                  <span>{right}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          variants={animations.item}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl text-center"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FiMail className="text-3xl text-primary" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have any questions about our privacy practices, we'd be happy
            to clarify.
          </p>
          <motion.a
            href="mailto:privacy@azamtools.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail /> Contact Our Privacy Team
          </motion.a>
        </motion.section>
      </motion.div>

      {/* Last Updated */}
      <motion.div
        variants={animations.item}
        className="text-center text-sm text-muted-foreground mt-16"
      >
        <p>
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;
