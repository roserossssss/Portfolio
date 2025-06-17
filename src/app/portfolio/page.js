"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, ChevronRight, ChevronLeft } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";


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
      images: ["yapak.jpg", "yapak2.jpg", "yapak4.jpg", "yapak5.png"],
      title: "YAPAK",
      description: "An educational game designed to promote park ranger duties, environmental awareness, and gamified learning. Designed to be both informative and enjoyable, YAPAK encourages players to develop a deeper appreciation for nature while enhancing problem-solving and decision-making skills in a fun and interactive way.",
      technologies: ["Godot", "Aseprite"],
      link: "https://example.com/yapak",
    },
    {
      images: ["yapak.jpg", "yapak2.jpg", "yapak4.jpg", "yapak5.png"],
      title: "Master LiveAboards",
      description: "An educational game designed to promote park ranger duties, environmental awareness, and gamified learning. Designed to be both informative and enjoyable, YAPAK encourages players to develop a deeper appreciation for nature while enhancing problem-solving and decision-making skills in a fun and interactive way.",
      technologies: ["Nextjs", "Typescript"],
      link: "https://example.com/masterliveaboards",
    }
  ];


  return (
    <div className="min-h-screen bg-white text-black">
      <div className="absolute top-5 left-5">
        <div className="w-screen bg-black text-white h-30 flex items-center fixed top-0 left-0 z-50">
          <h1 className="text-7xl font-bold font-serif italic pl-6">Portfolio</h1>
        </div>s
      </div>

      {/* Main Section */}
      <div className="flex items-center justify-center gap-8 mt-10 min-h-[95vh] h-[50px] border-l-400 border-black">
        <motion.img
          src="/me.jpg"
          alt="photo"
          className="w-[470px] h-[750px] object-cover mt-78 shadow-5xl shadow-black/500 relative ml-[-500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="-mt-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-8xl font-bold font-poppins italic mt-50">
            Althea Rose S. Sardana
          </h2>

          <h3 className="text-2xl font-medium text-gray-800 mt-2">
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

          <hr className="border-t-1 border-black mt-7 w-[900px]" />
          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-2xl mt-2 self-start ml-1">
            <button
              className="cursor-pointer hover:italic focus:outline-none"
              onClick={() => document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })}
            >
              About Me
            </button>

            <span>|</span>

            <button
              className="cursor-pointer hover:italic focus:outline-none"
              onClick={() => document.getElementById("skills-section").scrollIntoView({ behavior: "smooth" })}
            >
              Skills
            </button>

            <span>|</span>

            <button
              className="cursor-pointer hover:italic focus:outline-none"
              onClick={() => document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" })}
            >
              Past Projects
            </button>
          </div>
        </motion.div>
      </div>

      <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-9 gap-12">
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
          className="w-1/2"
        >
          <h2 className="text-8xl font-bold mb-10 font-oppins italic">About Me</h2>
          <p className="text-lg mb-15 font-poppins">  An entry-level IT talent eager to
            build with purpose, learn with
            curiosity, and grow with every
            opportunity.
          </p>

          <h2 className="text-4xl font-bold mb-5">Educational History</h2>
          {education.map((edu, index) => (
            <div key={edu.id} className="relative pl-8">
              <div className="absolute left-6 top-0 h-full w-1 bg-black"></div>
              <div className="absolute left-5 top-2 w-3 h-3 bg-black rounded-full"></div>
              <div className="pl-4">
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-700">{edu.degree}</p>
                <span className="text-gray-500">{edu.year}</span>
              </div>
            </div>
          ))}

          {/* Work Experience Section */}
          <h2 className="text-4xl font-bold mb-5 mt-12">Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index} className="relative pl-8 mb-6">
              <div className="absolute left-6 top-0 h-full w-1 bg-black"></div>
              <div className="absolute left-5 top-2 w-3 h-3 bg-black rounded-full"></div>
              <div className="pl-4">
                <h3 className="text-2xl font-semibold">{work.company}</h3>
                <p className="text-gray-700">{work.role}</p>
                <span className="text-gray-500">{work.duration}</span>
                <p className="text-md text-gray-600 mt-1">{work.description}</p>
              </div>
            </div>
          ))}

        </motion.div>


        {/* Technical Skills Section */}
        <motion.div
          ref={skillsAnim.ref}
          initial="hidden"
          animate={skillsAnim.controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-5xl font-bold font-poppins italic w-full text-center mb-1 -mt-2">Technical Skills</h2>

          {/* First Row: First 5 Skills */}
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4">
            {techSkills.slice(0, 7).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain shadow-lg rounded-full"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>

          {/* Second Row: Remaining 4 Skills */}
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4">
            {techSkills.slice(7).map((skill, index) => (
              <motion.img
                key={index + 5}
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain shadow-lg rounded-full"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
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
        className="relative flex flex-col items-center justify-start bg-white px-8 py-12"
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-20 font-poppins italic text-center text-gray-900">
          Skills
        </h2>

        {/* Horizontally Scrollable Skill Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-10 px-4 min-w-fit perspective-[1000px] ml-28">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] h-[350px] rounded-2xl text-black shadow-xl transition-all duration-700 transform-style-preserve-3d"
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
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-24 h-24 object-contain"
                  />
                  <span className="text-2xl font-semibold font-poppins">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Section Divider */}
      <section className="h-[15vh] flex flex-col items-center justify-center bg-gray-100 px-8 mt-20">
        <motion.p
          className="text-8xl font-semibold text-black font-poppins italic"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          Recent Projects
        </motion.p>
      </section>


      {/* Past Projects Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-white px-8 py-20 relative">
        <motion.div
          id="projects-section"
          ref={projectsAnim?.ref}
          initial="hidden"
          animate={projectsAnim?.controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {Array.isArray(projects) && projects.length > 0 && projects.map((project, index) => {
            const [currentImageIndex, setCurrentImageIndex] = useState(0);

            const nextImage = () => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
              );
            };

            const prevImage = () => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
              );
            };

            return (
              <motion.div
                key={project.id}
                className="flex flex-col items-center max-w-[750px] w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
              >
                {/* Project Image */}
                <div className="relative w-full">
                  <motion.img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-[400px] object-cover shadow-lg rounded-lg transition-transform duration-300"
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
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
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft size={40} className="text-white drop-shadow-lg" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight size={40} className="text-white drop-shadow-lg" />
                      </button>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="mt-6 w-full flex flex-col items-start px-2">
                  <h3 className="text-3xl font-semibold font-poppins italic text-gray-900">
                    {project.title || "Untitled Project"}
                  </h3>
                  <p className="text-black mt-2 text-lg max-w-[700px]">
                    {project.description || "No description available."}
                  </p>

                  <div className="w-full flex justify-between items-center mt-4">
                    {/* Icons on the left */}
                    <div className="flex items-center gap-4">
                      {project.technologies?.includes("Godot") && (
                        <img src="/godot.png" alt="Godot" className="w-8 h-8" />
                      )}
                      {project.technologies?.includes("Aseprite") && (
                        <img src="/aseprite.png" alt="Aseprite" className="w-8 h-8" />
                      )}
                      {project.technologies?.includes("Nextjs") && (
                        <img src="/nextjs.png" alt="Nextjs" className="w-8 h-8" />
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
                        className="group flex items-center gap-1 text-lg text-black cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
                      >
                        <span className="font-medium">View</span>
                        <FiArrowUpRight
                          size={16}
                          className="transition-colors duration-300 group-hover:text-blue-900"
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
        className="w-full bg-gray-100 py-44 px-8 flex justify-center items-center"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between gap-12">
          {/* Contact Form & Text */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold font-poppins italic mb-6 text-gray-900">
              Contact
            </h2>

            <p className="text-lg text-gray-700 max-w-md mb-8">
              Feel free to reach out if you have any questions, project ideas, or just want to connect!
            </p>

            <form className="w-full max-w-md space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-0.5 bg-gray-400 mx-7"></div>

          {/* Resume Download Section */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <a
              href="/RESUME.pdf"
              download
              className="text-white bg-black px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 self-start lg:self-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>


      {/* Social Links */}
      <div className="fixed bottom-20 right-6 flex flex-row items-center space-x-4 z-50">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Github size={36} />
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          <Mail size={36} />
        </a>
      </div>


      {/* Footer Section */}
      <footer className="fixed bottom-0 left-0 w-full h-16 bg-black py-6 flex items-center justify-between px-10">
        <div className="w-1/3"></div>

        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={24} />
        </button>
      </footer>

    </div>
  );
}
