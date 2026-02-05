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
import { MapPinIcon } from "@heroicons/react/24/outline";


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
  const frontendSkills = [
    "HTML",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "Java",
    "C++",
    "C#",
    "MySQL",
  ];

  const developerTools = [
    "Github",
    "JIRA",
    "VS Code",
    "Discord",
    "Teams",
    "Aseprite",
    "Figma",
    "Canva",
  ];


  // Education Data
  const education = [
    {
      year: "2021 - 2025",
      institution: "Polytechnic University of the Philippines",
      latin: "Magna Cum Laude",
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
      duration: "March 2025 – June 2025",
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

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  const project = projects[currentProjectIndex]
  const currentImageIndex = imageIndices[currentProjectIndex]

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      {/* Main Section */}
      <section id="landing" className="pt-16 px-4 mb-10 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Avatar */}
            <motion.div
              className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]
  aspect-square rounded-md overflow-hidden shadow-md group"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Default image */}
              <img
                src="/PORTFOLIO PIC.jpg"
                alt="Althea Rose Sardana"
                className="absolute inset-0 w-full h-full object-cover object-[center_10%]
    transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover image */}
              <img
                src="/PORTFOLIO PIC 2.jpg"
                alt="Althea Rose Sardana Hover"
                className="absolute inset-0 w-full h-full object-cover object-[center_15%]
    opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>


            {/* Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 flex-1">
              {/* Name */}
              <h1 className="text-2xl sm:text-3xl mt-4 font-bold font-poppins">
                Althea Rose S. Sardana
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <p>Pasig City, Philippines</p>
              </div>


              {/* Roles */}
              <p className="text-xs sm:text-sm text-gray-700">
                <Typewriter
                  words={['Front End Developer', 'Graphic Artist']}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={90}
                  delaySpeed={1200}
                />
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-3">
                {/* Send Message */}
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm
                hover:bg-white hover:text-black hover: border border-black transition flex items-center gap-2"
                >
                  Send Message
                </button>

                {/* Download Resume */}
                <a
                  href="/SARDAÑA, ALTHEA ROSE_RESUME.pdf"
                  download
                  className="px-4 py-2 border border-black rounded-lg text-sm
                hover:bg-gray-100 transition flex items-center gap-2"
                >
                  Download Resume
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <section id="about-section" className="bg-gray-100 py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          <motion.div
            ref={skillsAnim.ref}
            initial="hidden"
            animate={skillsAnim.controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="flex flex-col gap-10"
          >
            {/* About Me */}
            <div className="bg-transparent border border-gray-100 rounded-xl p-6 -mt-24 shadow-md hover:shadow-lg transition
">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                About Me
              </h2>
              <p className="text-gray-700 text-sm sm:text-lg lg:text-sm leading-relaxed">
                I am a recent Bachelor of Science in Information Technology graduate with foundational knowledge in programming, web development, and database management, and game development. During my studies, I developed strong problem-solving skills and gained experience working with different technologies through academic projects and hands-on activities.
              </p>

              <p className="text-gray-700 text-sm sm:text-lg lg:text-sm leading-relaxed mt-4">
                As a fresh graduate, I am eager to begin my career in the IT industry and continuously improve my technical and professional skills. I am highly motivated, adaptable, and ready to contribute to a team while learning and growing in a dynamic work environmen
              </p>
            </div>


            {/* Tech Stack */}
            <div className="bg-transparent border border-gray-100 rounded-xl p-6 -mt-5 shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Technical Skills
              </h2>

              <div className="flex flex-col gap-8">

                {/* Frontend */}
                <div>
                  <h3 className="text-sm sm:text-xs lg:text-base font-semibold -mt-2 mb-2">
                    Frontend
                  </h3>
                  <div className="flex justify-start flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-2 text-xs lg:text-xs
  border border-gray-100 rounded-lg
  text-gray-700 bg-gray-100
  shadow-sm
  transition-transform transition-shadow
  duration-150 ease-out
  hover:-translate-y-1 hover:shadow-lg"
                      >
                        {skill}
                      </span>

                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-sm sm:text-lg lg:text-base font-semibold -mt-5 mb-2">
                    Backend
                  </h3>
                  <div className="flex justify-start flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-2 text-xs lg:text-xs border border-gray-100 rounded-lg text-gray-700 bg-gray-100 shadow-sm transition-transform transition-shadow duration-150 ease-out hover:-translate-y-1 hover:shadow-lg"
                      >
                        {skill}
                      </span>

                    ))}
                  </div>
                </div>

                {/* Developer Tools */}
                <div>
                  <h3 className="text-sm sm:text-lg lg:text-base font-semibold -mt-2 mb-2">
                    Developer Tools
                  </h3>
                  <div className="flex justify-start flex-wrap gap-2">
                    {developerTools.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-2 text-xs lg:text-xs border border-gray-100 rounded-lg text-gray-700 bg-gray-100 shadow-sm transition-transform transition-shadow duration-150 ease-out hover:-translate-y-1 hover:shadow-lg"
                      >
                        {skill}
                      </span>

                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          <motion.div
            ref={aboutMeAnim.ref}
            initial="hidden"
            animate={aboutMeAnim.controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="flex flex-col gap-10"
          >
            {/* Education */}
            <div className="bg-transparent border border-gray-100 rounded-xl lg:-mt-24 -mt-5 p-6 shadow-md hover:shadow-lg transition
">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Educational History
              </h2>

              {education.map((edu) => (
                <div key={edu.id} className="relative pl-6 mb-5">
                  <div className="absolute left-2 top-0 h-full w-[2px] bg-black/70" />
                  <div className="absolute left-1 top-2 w-2 h-2 bg-black rounded-full" />

                  <div className="pl-4">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 text-xs italic font-medium">
                      {edu.latin}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Experience */}
            <div className="bg-transparent border border-gray-100 rounded-xl -mt-5 p-6 shadow-md hover:shadow-lg transition
">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Work Experience
              </h2>

              {workExperience.map((work, index) => (
                <div key={index} className="relative pl-6 mb-6">
                  <div className="absolute left-2 top-0 h-full w-[2px] bg-black/70" />
                  <div className="absolute left-1 top-2 w-2 h-2 bg-black rounded-full" />

                  <div className="pl-4">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {work.company}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {work.role}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {work.duration}
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Skills*/}
          <div id="skills-section">
            <div
              className="bg-transparent border border-gray-100 rounded-xl -mt-32 p-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Skills
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 rounded-lg p-3 shadow-sm
                     flex flex-col items-center justify-center
                     hover:shadow-md hover:-translate-y-1
                     transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-7 h-7 object-contain mb-2"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-center text-gray-700">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="flex flex-col">

            <motion.div
              className="bg-transparent border border-gray-100 rounded-xl p-6
    shadow-md hover:shadow-lg transition-all duration-300
    mt-0 lg:-mt-52 xl:-mt-56 min-w-0"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Recent Projects
              </h2>

              {/* Project Content */}
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <motion.img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px]
                   object-cover rounded-lg shadow"
                  whileHover={{ scale: 0.97 }}
                />

                {/* Info */}
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-700 mt-2">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-4 gap-4">
                    {/* Tech Icons */}
                    <div className="flex gap-3">
                      {project.technologies?.map((tech) => (
                        <img
                          key={tech}
                          src={`/${tech.toLowerCase()}.png`}
                          alt={tech}
                          className="w-6 h-6"
                        />
                      ))}
                    </div>

                    {/* View Buttons */}
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
                        View
                        <FiArrowUpRight
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={prevProject}
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                >
                  ← Prev
                </button>

                <button
                  onClick={nextProject}
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="w-full bg-gray-100 mb-6 -mt-4 lg:-mt-32 py-16 sm:py-24 px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-16"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 -mt-24 sm:-mt-16 lg:mt-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900">
              Contact
            </h2>

            <p className="text-sm sm:text-base text-gray-700 max-w-md mb-8 leading-relaxed">
              Feel free to reach out if you have any questions, project ideas, job offers,
              or just want to connect!
            </p>
            <form className="w-full max-w-md space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  required
                  className="peer h-12 w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base
                       placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1
                       transition-all duration-200
                       peer-placeholder-shown:top-1/2
                       peer-focus:top-0 peer-focus:text-xs
                       peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  required
                  className="peer h-12 w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base
                       placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1
                       transition-all duration-200
                       peer-placeholder-shown:top-1/2
                       peer-focus:top-0 peer-focus:text-xs
                       peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Email
                </label>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  required
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-4 pb-1 text-sm sm:text-base
                       placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base text-gray-700 bg-gray-100 px-1
                       transition-all duration-200
                       peer-placeholder-shown:top-1/2
                       peer-focus:top-0 peer-focus:text-xs
                       peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Message
                </label>
              </motion.div>

              {/* Submit */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-transparent text-black px-6 py-3 rounded-lg
           border border-gray-300
           hover:bg-gray-900 hover:text-white transition flex items-center gap-2"
              >
                Send Message
                <TbArrowUpRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>


      {/* Social Links */}
      <div className="fixed bottom-17 right-9 sm:bottom-18 sm:right-7 flex flex-row items-center space-x-3 sm:space-x-4 z-50">
        <a
          href="https://github.com/roserossssss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-green-500 transition duration-300"
        >
          <Github size={24} className="sm:size-[28px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/althea-rose-sardaña-335b60297"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-500 transition duration-300"
        >
          <Linkedin size={24} className="sm:size-[28px]" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=queeniesardana95@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-500 transition duration-300"
        >
          <Mail size={24} className="sm:size-[28px]" />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="fixed bottom-0 left-0 w-full h-16 bg-black py-6 px-6 sm:px-10 flex items-center justify-between z-50">
        <div className="hidden sm:block w-1/3"></div>

        <div className="relative flex flex-col items-end ml-auto pr-4 sm:pr-0">
          {/* Arrow Button */}
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
      rounded-full bg-white text-black hover:bg-gray-300
      transition duration-300"
            onClick={() =>
              document.getElementById("landing")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            title="Back to top"
          >
            <ArrowUp size={20} className="sm:size-[24px]" />
          </button>
        </div>
      </footer>

    </div>
  );
}
