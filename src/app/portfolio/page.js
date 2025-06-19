"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, ChevronRight, ChevronLeft } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { TbArrowUpRight } from "react-icons/tb";

export default function Portfolio() {

  // Handle scroll animations
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);


  // About Me & Education Animation
  const aboutMeAnim = useScrollAnimation();
  // Technical Skills Animation
  const skillsAnim = useScrollAnimation();
  // Skills Section Animation
  const skillCardsAnim = useScrollAnimation();
  // Past Projects Animation
  const projectsAnim = useScrollAnimation();

  // Technical Skills Logos Data
  const techSkills = [
    { logo: "python.png", name: "Python" },
    { logo: "java.png", name: "Java" },
    { logo: "c++.png", name: "C++" },
    { logo: "c-sharp.png", name: "C#" },
    { logo: "nextjs.png", name: "Nextjs" },
    { logo: "html.png", name: "HTML" },
    { logo: "ts.png", name: "Typescript" },
    { logo: "jslogo.png", name: "Javascript" },
    { logo: "nodejs.png", name: "Nodejs" },
    { logo: "mysql.png", name: "MySQL" },
    { logo: "aseprite.png", name: "Aseprite" },
    { logo: "virtualbox.png", name: "Virtualbox" },
  ];

  // Education Data
  const education = [
    {
      year: "2021 - Present",
      institution: "Polytechnic University of the Philippines",
      degree: "Bachelor of Science in Information Technology",
    },
    {
      year: "2019 - 2021",
      institution: "University of The East",
      degree: "Science, Technology, Engineering, and Mathematics (STEM) Strand",
    },
    {
      year: "2015 - 2019",
      institution: "Rawis High School",
      degree: "High School Diploma",
    },
  ];

  // Work Experience Data
  const workExperience = [
    {
      company: "Lamina Studios",
      role: "Front-End Developer Intern",
      duration: "March 2025 – June 2024",
      description:
        "Developed and maintained the UI for a responsive dive booking platform using React. Collaborated with back-end developers and designers to optimize the user experience and interface consistency."
    }
  ];

  // Skills Data
  const skills = [
    { logo: "webdev.png", name: "Web Development" },
    { logo: "gamedev.png", name: "Game Development" },
    { logo: "graphic.png", name: "Graphic Design" },
    { logo: "database.png", name: "Database Management" },
    { logo: "cyber.png", name: "Cybersecurity" },
    { logo: "virtualization.png", name: "Virtualization" },
  ];

  // Past Projects Data
  const projects = [
    {
      images: ["yapak.png", "yapak2.png", "yapak3.png", "yapak4.png", "yapak5.png", "yapak6.png"],
      title: "YAPAK",
      description: "An educational game designed to promote park ranger duties, environmental awareness, and gamified learning. Designed to be both informative and enjoyable, YAPAK encourages players to develop a deeper appreciation for nature while enhancing problem-solving and decision-making skills in a fun and interactive way.",
      technologies: ["Godot", "Aseprite"],
      link: "https://pup-a2ip.itch.io/yapak",
    },
    {
      images: ["masterlive.png", "masterlive2.png", "masterlive3.png", "masterlive4.png", "masterlive5.png", "masterlive6.png", "masterlive7.png", "masterlive8.png", "masterlive9.png", "masterlive10.png"],
      title: "Master LiveAboards",
      description: "Master provides a seamless and user-friendly digital platform for divers and administrators alike. Offering smooth account management, secure access, and intuitive features designed for a world-class underwater adventure experience. It brings convenience and control together, making every dive easier to plan and manage",
      technologies: ["Nextjs", "Nodejs", "Typescript"],
      link: "https://github.com/roserossssss/dive-site",
    }
  ];

  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));

  const nextImage = (projectIndex) => {
    setImageIndices((prev) =>
      prev.map((value, i) =>
        i === projectIndex
          ? (value + 1) % projects[projectIndex].images.length
          : value
      )
    );
  };

  const prevImage = (projectIndex) => {
    setImageIndices((prev) =>
      prev.map((value, i) =>
        i === projectIndex
          ? (value - 1 + projects[projectIndex].images.length) %
          projects[projectIndex].images.length
          : value
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="w-full bg-black text-white py-4 px-6 fixed top-0 left-0 z-50 shadow-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif italic">
          Portfolio
        </h1>
      </div>

      {/* Main Section */}
      <section id="landing" className="pt-32 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 min-h-[90vh]">
          {/* Image on top for sm/md, left for lg+ */}
          <motion.div
            className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] aspect-[2/3] shadow-xl shadow-black/50 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/me.jpg"
              alt="photo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text below image for sm/md, right of image for lg+ */}
          <motion.div
            className="text-center lg:text-left w-full max-w-xl sm:max-w-2xl px-2 sm:px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins italic whitespace-nowrap">
              Althea Rose S. Sardana
            </h2>

            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-800 mt-3">
              <Typewriter
                words={['Front End Developer', 'Graphic Artist']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={90}
                delaySpeed={1200}
              />
            </h3>

            <hr className="border-t mt-6 border-black w-full" />

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm md:text-base mt-4">
              <button
                className="hover:italic"
                onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                About Me
              </button>
              <span>|</span>
              <button
                className="hover:italic"
                onClick={() => document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Skills
              </button>
              <span>|</span>
              <button
                className="hover:italic"
                onClick={() => document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Past Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about"></section>
      <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center bg-gray-100 px-6 sm:px-9 gap-12">
        {/* About Me & Education Section */}
        <motion.div
          id="about-section"
          ref={aboutMeAnim.ref}
          initial="hidden"
          animate={aboutMeAnim.controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mt-7 font-oppins italic">About Me</h2>
          <p className="text-base sm:text-sm py-3 font-poppins">
            An entry-level IT talent eager to build with purpose, learn with curiosity, and grow with every opportunity.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Educational History</h2>
          {education.map((edu, index) => (
            <div key={edu.id} className="relative pl-8 mb-4">
              <div className="absolute left-6 top-0 h-full w-1 bg-black"></div>
              <div className="absolute left-5 top-2 w-3 h-3 bg-black rounded-full"></div>
              <div className="pl-4">
                <h3 className="text-xl sm:text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-700 text-sm lg:text-lg">{edu.degree}</p>
                <span className="text-gray-500 text-sm">{edu.year}</span>
              </div>
            </div>
          ))}

          {/* Work Experience Section */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 mt-12">Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index} className="relative pl-8 mb-6">
              <div className="absolute left-6 top-0 h-full w-1 bg-black"></div>
              <div className="absolute left-5 top-2 w-3 h-3 bg-black rounded-full"></div>
              <div className="pl-4">
                <h3 className="text-xl sm:text-2xl font-semibold">{work.company}</h3>
                <p className="text-gray-700 text-sm lg:text-lg">{work.role}</p>
                <span className="text-gray-500 text-sm">{work.duration}</span>
                <p className="text-sm sm:text-md text-gray-600 mt-1">{work.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={skillsAnim.ref}
          initial="hidden"
          animate={skillsAnim.controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins italic w-full text-center mb-1 -mt-2">
            Technical Skills
          </h2>

          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4">
            {techSkills.slice(0, 7).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.logo}
                alt={skill.name}
                className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 object-contain shadow-lg rounded-full"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>

          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4">
            {techSkills.slice(7).map((skill, index) => (
              <motion.img
                key={index + 7}
                src={skill.logo}
                alt={skill.name}
                className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 object-contain shadow-lg rounded-full"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section id="skills"></section>
      <motion.div
        id="skills-section"
        ref={skillCardsAnim.ref}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="relative flex flex-col items-center justify-start bg-white px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-16 sm:mb-20 italic text-center text-gray-900">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-[80%] sm:w-[220px] md:w-[240px] lg:w-[250px] h-[320px] sm:h-[340px] lg:h-[350px] rounded-2xl text-black bg-white shadow-md transition duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.75)]"
              initial={{ rotateY: 180, backgroundColor: "#000000", opacity: 0 }}
              whileInView={{
                rotateY: 0,
                backgroundColor: "#ffffff",
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6 px-4 text-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
                <span className="text-xl sm:text-2xl font-semibold break-words">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Divider */}
      <section className="h-[15vh] flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-8 mt-20">
        <motion.p
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black font-poppins italic text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          Recent Projects
        </motion.p>
      </section>

      {/* Past Projects Section */}
      <section id="skills"></section>
      <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          id="projects-section"
          ref={projectsAnim?.ref}
          initial="hidden"
          animate={projectsAnim?.controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl"
        >
          {Array.isArray(projects) &&
            projects.length > 0 &&
            projects.map((project, index) => {
              const currentImageIndex = imageIndices[index];

              return (
                <motion.div
                  key={project.id}
                  className="flex flex-col items-center w-full max-w-[700px] mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.2 }
                  }}
                >
                  {/* Project Image */}
                  <div className="relative w-full">
                    <motion.img
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover shadow-lg rounded-lg transition-transform duration-300"
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 }
                      }}
                      exit={{ opacity: 0, x: 20 }}
                      whileHover={{
                        scaleY: 0.95,
                        scaleX: 0.95,
                        transformOrigin: "bottom",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />

                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index)}
                          className="absolute top-1/2 left-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                        >
                          <ChevronLeft
                            size={32}
                            className="text-white drop-shadow-lg"
                          />
                        </button>

                        <button
                          onClick={() => nextImage(index)}
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                        >
                          <ChevronRight
                            size={32}
                            className="text-white drop-shadow-lg"
                          />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 w-full flex flex-col items-start px-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold font-poppins italic text-gray-900">
                      {project.title || "Untitled Project"}
                    </h3>
                    <p className="text-black mt-3 text-base sm:text-lg max-w-full">
                      {project.description || "No description available."}
                    </p>

                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-4">
                      {/* Icons */}
                      <div className="flex items-center flex-wrap gap-3 mt-2">
                        {project.technologies?.includes("Godot") && (
                          <img src="/godot.png" alt="Godot" className="w-8 h-8" />
                        )}
                        {project.technologies?.includes("Aseprite") && (
                          <img src="/aseprite.png" alt="Aseprite" className="w-8 h-8" />
                        )}
                        {project.technologies?.includes("Nextjs") && (
                          <img src="/nextjs.png" alt="Nextjs" className="w-8 h-8" />
                        )}
                        {project.technologies?.includes("Nodejs") && (
                          <img src="/nodejs.png" alt="Nodejs" className="w-8 h-8" />
                        )}
                        {project.technologies?.includes("Typescript") && (
                          <img src="/ts.png" alt="Typescript" className="w-8 h-8" />
                        )}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-300 hover:-translate-y-1 ${project.title?.toLowerCase() === "yapak"
                            ? "hover:bg-green-700"
                            : "hover:bg-blue-900"
                            }`}
                        >
                          <span>View</span>
                          <FiArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="w-full bg-gray-100 py-24 sm:py-32 px-4 sm:px-6 lg:px-12 flex justify-center items-center"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between gap-20">
          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins italic mb-6 text-gray-900">
              Contact
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mb-10 leading-relaxed">
              Feel free to reach out if you have any questions, project ideas, job offers, or just want to connect!
            </p>

            <form className="w-full max-w-xl space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer h-12 w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-1/2 -translate-y-1/2 -mt-2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1 transition-all duration-200 ease-in-out 
              peer-placeholder-shown:top-1/2 
              peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs 
              peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer h-12 w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1/2 -translate-y-1/2 -mt-2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1 transition-all duration-200 ease-in-out 
              peer-placeholder-shown:top-1/2 
              peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs 
              peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out resize-none"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-1/2 -translate-y-1/2 -mt-2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1 transition-all duration-200 ease-in-out 
              peer-placeholder-shown:top-1/2 
              peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs 
              peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                Send Message
                <TbArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Divider for large screens */}
          <div className="hidden lg:block w-0.5 bg-gray-400 mx-4"></div>

          {/* Resume Download */}
          <div className="flex-1 flex flex-col items-center lg:items-end justify-center w-full">
            <a
              href="/RESUME.pdf"
              download
              className="text-white bg-black px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 w-full sm:w-fit text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <div className="fixed bottom-17 right-9 sm:bottom-18 sm:right-7 flex flex-row items-center space-x-3 sm:space-x-4 z-50">
        <a
          href="https://github.com/roserossssss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Github size={24} className="sm:size-[28px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/althea-rose-sardaña-335b60297"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Linkedin size={24} className="sm:size-[28px]" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=queeniesardana95@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Mail size={24} className="sm:size-[28px]" />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="fixed bottom-0 left-0 w-full h-16 bg-black py-6 px-6 sm:px-10 flex items-center justify-between z-50">
        <div className="hidden sm:block w-1/3"></div>

        {/* Dropdown and Arrow aligned to the right */}
        <div className="relative flex flex-col items-end ml-auto pr-4 sm:pr-0">
          {/* Dropdown Menu */}
          <div
            className={`absolute bottom-16 mb-2 w-36 sm:w-40 bg-white rounded-lg shadow-lg py-2 text-sm font-medium text-black
      transition-all duration-300 ease-out transform origin-top
      ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
    `}
          >
            <button
              onClick={() => {
                document.getElementById("landing")?.scrollIntoView({ behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Landing Page
            </button>
            <button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              About Me
            </button>
            <button
              onClick={() => {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Skills
            </button>
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Projects
            </button>
          </div>

          {/* Arrow Button */}
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <ArrowDown size={20} className="sm:size-[24px]" /> : <ArrowUp size={20} className="sm:size-[24px]" />}
          </button>
        </div>
      </footer>



    </div>
  );
}
