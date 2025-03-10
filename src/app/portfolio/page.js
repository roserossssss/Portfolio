    "use client";

    import { useEffect, useState} from "react";
    import { FaDiscord } from "react-icons/fa";
    import { Typewriter } from "react-simple-typewriter";
    import { motion, useAnimation } from "framer-motion";
    import { useInView } from "react-intersection-observer";
    import { Github, Linkedin, Eye, ChevronRight, ChevronLeft } from "lucide-react";

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
        { logo: "html.png", name: "HTML" },
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
          images: ["ikigai.png"], 
          title: "IKIGAI Scholarship Program", 
          description: "A web-based scholarship management system that streamlines applications, tracking, and approval processes for students and administrators. It provides an organized platform for submitting scholarship applications, tracking application status, and managing approvals efficiently."
        },
        { 
          images: ["tropicoco.png", "tropicoco2.png", "tropicoco3.png", "tropicoco4.png"], 
          title: "Tropicoco Database System", 
          description: "An inventory and sales management system designed for Tropicoco, enabling efficient product tracking and order processing. It streamlines inventory management, monitors stock levels in real time, and automates sales transactions, ensuring a seamless and organized workflow."
        },
        { 
          images: ["pupmed.png", "pupmed2.png", "pupmed3.png", "pupmed4.png"], 
          title: "PUP Medical and Services", 
          description: "A comprehensive medical appointment and record-keeping platform for PUP students and faculty. It allows users to easily schedule and manage medical appointments, access their health records, and streamline communication with healthcare providers within the university."
        },
        { 
          images: ["outbox.png", "outbox2.png", "outbox3.png", "outbox4.png", "outbox5.png" ], 
          title: "Outbox Desktop Application", 
          description: "The Outbox Wings Unltd desktop app is a user-friendly platform for browsing the menu, making reservations, ordering for delivery or pick-up, and managing user profiles."
        },
        { 
          images: ["yapak.jpg", "yapak2.jpg", "yapak3.jpg", "yapak4.jpg", "yapak5.png"], 
          title: "YAPAK", 
          description: "An educational game designed to promote park ranger duties, environmental awareness, and gamified learning. Designed to be both informative and enjoyable, YAPAK encourages players to develop a deeper appreciation for nature while enhancing problem-solving and decision-making skills in a fun and interactive way."
        }
      ];
      
      return (
      <div className="min-h-screen bg-white text-black">
        <div className="absolute top-5 left-5">
          <div className="w-screen bg-black text-white h-30 flex items-center fixed top-0 left-0 z-50">
            <h1 className="text-7xl font-bold font-serif italic pl-6">Portfolio</h1>
            </div>
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

    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-8 gap-12">
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
        <h2 className="text-8xl font-bold mb-5 font-oppins italic">About Me</h2>
        <p className="text-lg mb-15 font-poppins"> Tech-savvy 4th-year BSIT
          student intern eager to apply
          IT knowledge in real-world
          setting. Equipped with a
          strong foundation in
          programming, web
          development, database,
          troubleshooting, and a
          passion to solve technical
          challenges to contribute to
          innovative projects while swiftly
          adapting to new technologies
          and environments.
        </p>

        <h2 className="text-4xl font-bold mb-5">Education</h2>
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

        {/* Social Media Links */}
    <div className="flex gap-5 mt-8">
      <a href="https://github.com/roserossssss" target="_blank" rel="noopener noreferrer">
        <Github className="w-8 h-8 hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://linkedin.com/in/althea-rose-sardaña-335b60297" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-8 h-8 hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
      <FaDiscord className="w-8 h-8 hover:text-blue-600 transition duration-300" />
      </a>
    </div>

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
        className="w-1/2 flex flex-wrap justify-center gap-6"
      >
        <h2 className="text-5xl font-bold font-poppins italic w-full text-center mb-1 -mt-2">Technical Skills</h2>
        {techSkills.map((skill, index) => (
          <motion.img 
            key={skill.id} 
            src={skill.logo} 
            alt={skill.name} 
            className="w-17 h-17 object-contain shadow-lg rounded-full -mt-5 md-0" 
            whileHover={{ scale: 1.1 }} 
          />
        ))}
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  }}
  className="relative min-h-[130vh] flex flex-col items-center justify-center bg-white px-8"
>
  <div className="absolute top-0 left-0 w-[300px] h-full bg-white"></div>
  <div className="absolute top-0 right-0 w-[300px] h-full bg-white"></div>

  <h2 className="text-8xl font-bold mb-50 mt-20 font-poppins italic">Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.id}
        className={`relative w-[250px] h-[350px] shadow-lg shadow-black rounded-lg flex flex-col items-center justify-center 
          bg-black text-white group transition-all duration-300 ${index % 2 === 0 ? "mt-60" : "mb-80"}`}
        initial={{ opacity: 1, y: 30 }} 
        animate={{
          opacity: 1, 
          y: [0, -200, 0], 
          transition: { 
            duration: 0.6, 
            delay: index * 0.2, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }
        }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "white",
          border: "2px solid black", 
          y: 0, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src={skill.logo} 
            alt={skill.name}
            className="w-50 h-50 transition-all duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold text-black group-hover:text-black transition-all duration-300">
            {skill.name}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


<section className="h-[15vh] flex flex-col items-center justify-center bg-gray-100 px-8 mt-10">
  <motion.p
    className="text-8xl font-semibold text-black font-poppins italic"
    animate={{ y: [0, -10, 0] }} 
    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} 
  >
    Recent Projects
  </motion.p>
</section>

{/* Past Projects Section */}
<section className="min-h-[200vh] flex flex-col items-center justify-center bg-white px-8 relative">
  <motion.div 
  id="projects-section"
    ref={projectsAnim?.ref} 
    initial="hidden" 
    animate={projectsAnim?.controls} 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
    }}
    className="grid grid-cols-1 gap-10 lg:grid-cols-2"
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
          className="flex flex-col items-center max-w-[950px] relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
        >
          <div className="relative">
            <motion.img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-[770px] h-[460px] object-cover shadow-lg rounded-lg transition-transform duration-300 mt-30"
              key={currentImageIndex} s
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ 
                scaleY: 0.9,  
                scaleX: 0.95,  
                transformOrigin: "bottom", 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />

            <div className="absolute bottom-5 right-5 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:scale-110">
              <Eye size={32} className="text-white transition-all duration-300 hover:text-blue-500" />
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={48} className="text-white drop-shadow-lg" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={48} className="text-white drop-shadow-lg" />
                </button>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="mt-6 w-full flex flex-col items-start">
            <h3 className="text-3xl font-semibold font-poppins italic text-gray-900">
              {project.title || "Untitled Project"}
            </h3>
            <p className="text-black mt-2 text-xl max-w-[800px]">
              {project.description || "No description available."}
            </p>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
</section>

    
    {/* Footer Section */}
    <footer className="fixed bottom-0 left-0 w-full h-16 bg-black py-6 flex items-center justify-between px-10">
  <div className="w-1/3"></div>

  <button 
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition duration-300"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
      ➤
    </button>
  </footer>
    </div> 
    );
  }
