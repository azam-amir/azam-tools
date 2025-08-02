"use client";
import { animations } from "@/utils/constant";
import { businessHours, contactInfo, socialLinks } from "@/utils/mock";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiClock,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const cardHover = {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={animations.fadeIn}
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-foreground"
    >
      {/* Hero Section with Floating Elements */}
      <motion.section className="text-center mb-20 relative">
        <motion.div
          className="absolute -top-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div variants={animations.item} className="relative">
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <RiCustomerService2Fill className="text-6xl text-primary" />
            </motion.div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have. Reach
            out and we'll respond as soon as possible.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Sections with Floating Animation */}
      <motion.div className="grid lg:grid-cols-2 gap-12">
        <motion.section
          variants={animations.item}
          className="bg-muted/30 p-8 rounded-2xl border border-border backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiSend className="text-3xl text-primary rotate-45" />
            </motion.span>
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
          </div>

          <form className="space-y-6">
            <motion.div variants={animations.item}>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiUser className="text-lg text-primary" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="bg-background/80 border-2 border-border/50 text-foreground text-lg rounded-xl focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-12 p-3.5 transition-all duration-300 hover:border-primary/30"
                  placeholder="John Doe"
                />
              </div>
            </motion.div>

            <motion.div variants={animations.item}>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail className="text-lg text-primary" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-background/80 border-2 border-border/50 text-foreground text-lg rounded-xl focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-12 p-3.5 transition-all duration-300 hover:border-primary/30"
                  placeholder="john@example.com"
                />
              </div>
            </motion.div>

            <motion.div variants={animations.item}>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                Your Message
              </label>
              <div className="relative">
                <div className="absolute top-4 left-4">
                  <FiMessageSquare className="text-lg text-primary" />
                </div>
                <textarea
                  id="message"
                  rows={6}
                  className="bg-background/80 border-2 border-border/50 text-foreground text-lg rounded-xl focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-12 p-4 transition-all duration-300 hover:border-primary/30"
                  placeholder="Tell us how we can help..."
                />
              </div>
            </motion.div>

            <motion.div variants={animations.item} className="pt-4">
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background text-lg font-bold rounded-xl shadow-lg relative overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                {/* Glow effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0"
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                />

                {/* Button content */}
                <div className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                    }}
                  >
                    <FiSend className="text-xl" />
                  </motion.span>
                  <span>Send Message</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.button>
            </motion.div>
          </form>
        </motion.section>

        {/* Premium Contact Info Section */}
        <motion.div variants={animations.fadeIn} className="space-y-8">
          {/* Animated Contact Cards */}
          <motion.div variants={animations.item}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RiCustomerService2Fill className="text-primary" />
              </motion.span>
              Contact Information
            </h2>

            <div className="grid gap-4">
              {contactInfo?.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-5 p-5 rounded-xl border border-border/50 ${contact.color} backdrop-blur-sm hover:border-primary/50 transition-all`}
                  variants={animations.item}
                  whileHover={cardHover}
                  custom={index}
                >
                  <motion.div
                    className={`p-3 rounded-lg ${contact.color.replace(
                      "/10",
                      "/20"
                    )}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                  <motion.div
                    className="ml-auto text-primary"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Social Media Section */}
          <motion.div variants={animations.item} className="pt-6">
            <h2 className="text-2xl font-bold mb-5">Follow Us</h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks?.map((social, index) => (
                <motion.a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 text-white rounded-xl ${social?.color} transition-colors shadow-md`}
                  variants={animations.item}
                  whileHover={{
                    y: -1,
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social?.icon}
                  <span>{social?.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Business Hours with Animation */}
          <motion.div
            variants={animations.item}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <FiClock className="text-2xl text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold">Business Hours</h3>
            </div>
            <div className="space-y-2">
              {businessHours?.map((hour, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between py-2 border-b border-border/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <span className="font-medium">{hour.day}</span>
                  <span className="text-muted-foreground">{hour.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating CTA at Bottom */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        variants={animations.floating}
        animate="animate"
      >
        <motion.a
          href="#contact-form"
          className="flex items-center justify-center w-fit h-fit rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMail className="text-2xl" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
