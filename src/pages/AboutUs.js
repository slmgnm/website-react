import React from "react";
// Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "./../components/ServicesSection";
import FaqSection from "./../components/FaqSection";
import { motion } from "framer-motion";
import ScrollUp from "./../components/scrollTop";
import { pageAnimation } from "./../animation";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollUp />
    </motion.div>
  );
};

export default AboutUs;
