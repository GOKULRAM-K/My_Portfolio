"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Home.module.css";
import Image from "next/image";
import Navbar from "./components/navbar";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "./components/ParticlesBackground";
export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />
      <main className={styles.main}>
        {/* Home */}
        <section id="home" className={`${styles.section} ${styles.hero}`}>
          <h1 className={styles.heroText}>
            <span className={styles.typing}>
              <Typewriter
                words={[
                  "Hi, I'm Gokul Ram",
                  "हाय, मैं गोकुल राम हूँ",
                  "こんにちは、ゴクル・ラムです",
                  "नमः, अहं गोकुल रामः अस्मि",
                  "Hola, soy Gokul Ram",
                  "வணக்கம், நான் கோகுல் ராம்",
                ]}
                loop={true}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
                cursor
                cursorStyle="|"
              />
            </span>
          </h1>

          <br />
          <br />
          <br />
          <p className={styles.subTag}>
            My OS:&nbsp;
            <span className={styles.badgeOrange}>COMPUTER SCIENCE</span>
            &nbsp;|&nbsp; Status:&nbsp;
            <span className={styles.badgeGreen}>ACTIVE</span>
          </p>

          <p className={styles.introLine}>
            From code to research to patents — a journey to craft technology
            with vision and purpose.
          </p>

          <div className={styles.heroButtons}>
            <a href="/GokulRam_CV.pdf" className={styles.button}>
              Download CV
            </a>
            <a href="#contact" className={styles.buttonSecondary}>
              Hire Me
            </a>
          </div>
        </section>

        {/* About */}

        {/* About */}
        <motion.section
          id="about"
          className={`${styles.section} ${styles.timelineSection}`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <section className={`${styles.section} ${styles.timelineModern}`}>
            <h2 className={styles.sectionTitle}>My Journey</h2>
            <div className={styles.timelineTrack}>
              {[
                {
                  year: "2011",
                  text: "Inspired by my mom (CS graduate), curiosity for how machines ‘think’ began.",
                },
                {
                  year: "2018",
                  text: "Built my first X/O game in plain Python — no libraries, fully hard-coded.",
                },
                {
                  year: "2021",
                  text: "10th grade milestone — 97.2% (School Rank 4, BVB School).",
                },
                {
                  year: "2022",
                  text: "Fascinated by ML/DL/GenAI. Conducted a Blockchain workshop for 90+ peers @ School.",
                },
                {
                  year: "2023",
                  text: "12th topper in Mathematics (99%). Earned PCEP & PCAP certifications.",
                },
                {
                  year: "2024",
                  text: "Earned my first AWS Certification (Cloud Practitioner). First high-impact journal paper accepted (Elsevier, IF 7.9) — 11 global citations.",
                },
                {
                  year: "2025",
                  text: "Python Developer Intern at KRG Technologies Inc. — LLM + OCR powered resume parsing system.",
                },
                {
                  year: "Future",
                  text: "Next: Shaping technology that is powerful, ethical, and built to serve people at scale.",
                  isFuture: true, // ✅ flag for styling
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${styles.timelineItemModern} ${
                    i % 2 === 0 ? styles.left : styles.right
                  } ${item.isFuture ? styles.futureItem : ""}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.bubble}>
                    <h4>{item.year}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
              <div className={styles.verticalLine} />
            </div>
          </section>
          {/* 2. Quick Stats */}
          <h2 className={styles.sectionTitle}>Quick Stats</h2>
          <div className={styles.statsGrid}>
            {[
              { label: "Years Coding", value: "8+" },
              { label: "Projects", value: "6+" },
              { label: "Research Publications", value: "5" },
              { label: "Patents Published", value: "2" },
              { label: "Languages Spoken", value: "3" },
            ].map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          {/* 4. Philosophy Quotes */}
          <h2 className={styles.sectionTitle}> </h2> <br />
          <h1 className={styles.centralQuote}>
            Building with <span className={styles.highlight}>purpose</span> –
            scaling with vision. <br />
            Technology means nothing unless it serves
            <span className={styles.highlight}> people</span>.
          </h1>
          <br />
          <br />
          <br />
          <br />
          {/* 6. Hobbies Section */}
          <h2 className={styles.sectionTitle}>Hobbies</h2>
          <div className={styles.hobbiesScroll}>
            {[
              {
                title: "Meditation",
                desc: "Helps me in practicing focus, clarity, and calm to handle complex challenges.",
                icon: "/icons/yoga.png",
              },
              {
                title: "Business Case Studies",
                desc: 'Studying Amazon, TATA, Huawei, Tesla, and Nokia - "THE" ultimate learning experience.',
                icon: "/icons/budget.png",
              },
              {
                title: "World Politics",
                desc: "G7, BRICS, Quad, ASEAN, G20 — fights, mockery, endless drama… who could resist?",
                icon: "/icons/journalism.png",
              },
              {
                title: "Analytical Play",
                desc: "Chess and Sudoku: the ultimate brain fuel - Up for a play anytime. Playing since age 6.",
                icons: ["/icons/strategy.png", "/icons/pastime_1.png"],
              },
            ].map((hobby, i) => (
              <div key={i} className={styles.hobbyCard}>
                <h4 className={styles.hobbyTitle}>{hobby.title}</h4>

                {/* Single icon hobbies */}
                {hobby.icon && (
                  <img
                    src={hobby.icon}
                    alt={hobby.title}
                    className={styles.hobbyIcon}
                  />
                )}

                {/* Multiple icons for Analytical Play */}
                {hobby.icons && (
                  <div className={styles.iconRow}>
                    {hobby.icons.map((icon, j) => (
                      <img key={j} src={icon} alt={`${hobby.title} ${j}`} />
                    ))}
                  </div>
                )}

                <p className={styles.hobbyDesc}>{hobby.desc}</p>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          {/* 7. Achievements */}
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <div className={styles.achievementsGrid}>
            {[
              {
                number: "1",
                label: "High Impact Journal",
                icon: "📑",
                subtext:
                  "Impact Factor 7.9, cited across Saudi Arabia, Hungary, Botswana, Malaysia, China, and India",
              },
              {
                number: "2",
                label: "Published Patents",
                icon: "💡",
                subtext: "4 more in filing (AI, IoT, Self-care)",
              },
              {
                number: "4",
                label: "Other Publications",
                icon: "🌍",
                subtext: "3 International Conferences and IGI Global",
              },
              {
                number: "7+",
                label: "Hackathons",
                icon: "⚡",
                subtext: "Top 14 finish in one",
              },
            ].map((item, i) => (
              <div key={i} className={styles.achievementCard}>
                <div className={styles.iconCircle}>{item.icon}</div>
                <h3 className={styles.achievementNumber}>{item.number}</h3>
                <p className={styles.achievementLabel}>{item.label}</p>
                <span className={styles.achievementSubtext}>
                  {item.subtext}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        {/* Experience */}
        <motion.section
          id="workExperienceSection"
          className={styles.workExperienceSection}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Experience</h2>

          <div className={styles.workExperienceCard}>
            <div className={styles.workExperienceHeader}>
              <img
                src="/icons/krg_1.png"
                alt="KRG Technologies Inc."
                className={styles.workExperienceLogo}
              />
              <div>
                <h3 className={styles.workExperienceRole}>
                  Python Developer Intern
                </h3>
                <p className={styles.workExperienceCompany}>
                  KRG Technologies Inc. · Internship
                </p>
                <p className={styles.workExperienceDate}>
                  Jun 2025 – Jul 2025 ·{" "}
                  <span className={styles.workExperienceLocation}>
                    Chennai, India (On-site)
                  </span>
                </p>
              </div>
            </div>

            <p className={styles.workExperienceSummary}>
              Contributed to an intelligent resume parsing platform leveraging
              LLMs and OCR to extract, structure, and match candidate data at
              scale.
            </p>

            <ul className={styles.workExperienceHighlights}>
              <li>
                Designed and implemented scalable backend APIs using Python,
                Flask, and SQLite.
              </li>
              <li>
                Integrated LLMs to transform unstructured resumes into
                structured, queryable data.
              </li>
              <li>
                Supported OCR pipeline for parsing scanned resumes, enhancing
                data accuracy.
              </li>
              <li>
                Improved candidate filtering & ranking features, reducing manual
                screening effort by 95%.
              </li>
            </ul>
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        {/* Skills and Expertise */}
        <motion.section
          id="skills"
          className={styles.skillsSection}
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.sectionTitle}>Skills and Expertise</h2>

          <div className={styles.skillsContainer}>
            {[
              {
                domain: "Programming & Web Development",
                skills: [
                  { src: "/icons/Python.png", name: "Python 3.x" },
                  { src: "/icons/Java.png", name: "Java" },
                  { src: "/icons/C.png", name: "C" },
                  { src: "/icons/C++ (CPlusPlus).png", name: "C++" },
                  { src: "/icons/MySQL (1).png", name: "MySQL" },
                  { src: "/icons/SQLite.png", name: "SQLite" },
                  { src: "/icons/HTML5.png", name: "HTML5" },
                  { src: "/icons/CSS3.png", name: "CSS3" },
                  { src: "/icons/JavaScript.png", name: "JavaScript" },
                  { src: "/icons/Node.js.png", name: "Node.js" },
                  { src: "/icons/React.png", name: "React" },
                  { src: "/icons/Flask.png", name: "Flask" },
                  { src: "/icons/Spring.png", name: "Spring" },
                  { src: "/icons/Bootstrap.png", name: "Bootstrap" },
                ],
              },
              {
                domain: "Machine Learning & Deep Learning",
                skills: [
                  { src: "/icons/TensorFlow.png", name: "TensorFlow" },
                  { src: "/icons/PyTorch.png", name: "PyTorch" },
                  { src: "/icons/Keras.png", name: "Keras" },
                  { src: "/icons/scikit-learn.png", name: "Scikit-learn" },
                  { src: "/icons/Pandas.png", name: "Pandas" },
                  { src: "/icons/Numpy.png", name: "NumPy" },
                  {
                    src: "/icons/hf-logo.png",
                    name: "Hugging Face Transformers",
                  },
                ],
              },
              {
                domain: "Data Analytics & Visualization",
                skills: [
                  { src: "/icons/powerbi_1.png", name: "Power BI" },
                  { src: "/icons/excel_1.png", name: "Excel" },
                  { src: "/icons/Matplotlib.png", name: "Matplotlib" },
                  { src: "/icons/seaborn_1.svg", name: "Seaborn" },
                  { src: "/icons/plotly.jpg", name: "Plotly" },
                ],
              },
              {
                domain: "Cloud & Tools",
                skills: [
                  { src: "/icons/AWS.png", name: "AWS (EC2, S3, Lambda)" },
                  { src: "/icons/Docker.png", name: "Docker" },
                  { src: "/icons/Git.png", name: "Git" },
                  { src: "/icons/GitHub.png", name: "GitHub" },
                  { src: "/icons/Jupyter.png", name: "Jupyter Notebook" },
                  { src: "/icons/tesseract_1.png", name: "Tesseract OCR" },
                  { src: "/icons/librosa.png", name: "Librosa" },
                ],
              },
            ].map((group, index) => (
              <motion.div
                key={group.domain}
                className={styles.skillRow}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className={styles.domainBadge}>{group.domain}</div>
                <div className={styles.skillIcons}>
                  {group.skills.map((skill, i) => (
                    <img
                      key={i}
                      src={skill.src}
                      alt={skill.name}
                      data-skill={skill.name} // custom tooltip
                      className={styles.skillIcon}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills (Text-Only Section) */}
          <div className={styles.softSkillsSection}>
            <h3 className={styles.softSkillsTitle}>Soft Skills</h3>
            <div className={styles.softSkillsList}>
              {[
                "Problem-Solving",
                "Critical Thinking",
                "Research-Oriented Approach",
                "Communication",
                "Team Collaboration",
                "Leadership",
                "Mentorship",
              ].map((skill, i) => (
                <span key={i} className={styles.softSkill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        <motion.section
          id="publications"
          className={styles.publicationsSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Publications</h2>

          <div className={styles.publicationsGrid}>
            {[
              {
                type: "Journal Paper",
                title:
                  "Ensemble deep learning model for protein secondary structure prediction using NLP metrics and explainable AI",
                publisher: "Elsevier – Results in Engineering",
                date: "Dec 2024",
                impactFactor: "7.9",
                citations: 11,
                description:
                  "An ensemble DL model outperforming individual models for protein secondary structure prediction, achieving 94.41% accuracy.",
                authors: ["Gokul Ram K", "Dr. Parvathi R", "Dr. Vignesh U"],
                link: "https://www.sciencedirect.com/science/article/pii/S2590123024016876",
              },
              {
                type: "Conference Paper",
                title:
                  "Enhancing Sentiment Analysis of Customer Reviews Using Deep Learning, Data Augmentation and Explainable AI",
                publisher:
                  "IEEE – 2024 4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)",
                date: "Oct 2024",
                citations: 0,
                description:
                  "Proposes a deep learning framework for sentiment analysis with data augmentation and LIME-based explainability.",
                authors: [
                  "Gokul Ram K",
                  "Dr. Rajakumar R",
                  "Dr. Ilavendhan A",
                  "Dr. Padmanaban R",
                  "Dr. Vijayaprabakaran K",
                ],
                link: "https://ieeexplore.ieee.org/abstract/document/10866623",
              },
              {
                type: "Conference Paper",
                title:
                  "Optimization of Cloud based Monitoring Application in Software Engineering",
                publisher:
                  "IEEE – 2024 3rd International Conference on Automation, Computing and Renewable Systems (ICACRS)",
                date: "Sep 2024",
                citations: 0,
                description:
                  "Focuses on cloud-based observability, testing, and deployment strategies to enhance software engineering practices.",
                authors: [
                  "Dr. Vignesh U",
                  "Dr. Monica K M",
                  "Gokul Ram K",
                  "Ghaayathri Devi K",
                ],
                link: "https://ieeexplore.ieee.org/abstract/document/10841613",
              },
              {
                type: "Book Chapter",
                title:
                  "Optimizing Resource Management With Edge and Network Processing for Disaster Response Using Insect Robot Swarms",
                publisher:
                  "IGI Global – Exploring the Micro World of Robotics Through Insect Robots",
                date: "2025",
                citations: 0,
                description:
                  "Explores edge and network processing with insect robot swarms for real-time disaster response and efficient resource management.",
                authors: [
                  "Gokul Ram K",
                  "Dr. Vignesh U",
                  "Dr. Abdulkareem Sh. Mahdi Al-Obaidi",
                ],
                link: "https://www.igi-global.com/chapter/optimizing-resource-management-with-edge-and-network-processing-for-disaster-response-using-insect-robot-swarms/359271",
              },
              {
                type: "Book Chapter",
                title:
                  "Data analysis of female education in the age of COVID-19: A comprehensive review",
                publisher:
                  "CRC Press – Progressive Computational Intelligence, Information Technology and Networking",
                date: "2025",
                citations: 0,
                description:
                  "Examines the impact of COVID-19 on female education, highlighting e-learning, academic motivation, and mental health challenges.",
                authors: ["Dr. Vignesh U", "Gokul Ram K", "Dr. Monica K M"],
                link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003650010-62/data-analysis-female-education-age-covid-19-comprehensive-review-vignesh-monica-gokul-ram",
              },
            ].map((pub, i) => (
              <motion.div
                key={i}
                className={`${styles.publicationCard} ${
                  styles[pub.type.replace(" ", "").toLowerCase()]
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className={styles.pubTag}>{pub.type}</span>

                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pubTitle}
                  >
                    {pub.title}
                  </a>
                ) : (
                  <h3 className={styles.pubTitle}>{pub.title}</h3>
                )}

                <div className={styles.pubMeta}>
                  <span>{pub.date}</span>
                  <span>{pub.publisher}</span>
                  {pub.impactFactor && (
                    <span className={styles.impactFactor}>
                      Impact Factor {pub.impactFactor}
                    </span>
                  )}
                  {pub.citations > 0 && (
                    <span className={styles.citations}>
                      {pub.citations} Citations
                    </span>
                  )}
                </div>

                <p className={styles.pubDesc}>{pub.description}</p>
                <p className={styles.pubAuthors}>
                  {pub.authors.map((a, idx) => (
                    <span key={idx}>
                      {a.includes("Gokul Ram K") ? <strong>{a}</strong> : a}
                      {idx < pub.authors.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        {/* Patents */}
        <motion.section
          id="patents"
          className={styles.patentsSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Patents</h2>

          <div className={styles.patentsGrid}>
            {[
              {
                title:
                  "ARTIFICIAL INTELLIGENCE (AI) BASED SMART IRRIGATION CONTROLLER SYSTEM AND METHOD",
                applicationNo: "202541038729",
                status: "Issued",
                date: "May 16, 2025",
                domains: ["Agriculture", "AI/ML", "IoT", "Cloud Computing"],
              },
              {
                title:
                  "A SYSTEM AND METHOD FOR EMOTIONS READING PROVIDING PATH FOR SELF-CARE",
                applicationNo: "202441052499",
                status: "Issued",
                date: "Jul 9, 2024",
                domains: [
                  "Affective Computing",
                  "Healthcare",
                  "Embedded Systems",
                  "HCI",
                ],
              },
            ].map((pat, i) => (
              <motion.div
                key={i}
                className={styles.patentCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {/* Domain Tags */}
                <div className={styles.patentDomains}>
                  {pat.domains.map((d, idx) => (
                    <span key={idx} className={styles.domainTag}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Patent Title */}
                <h3 className={styles.patentTitle}>{pat.title}</h3>

                {/* Meta Info */}
                <div className={styles.patentMeta}>
                  <span>Application No: {pat.applicationNo}</span>
                  <span>Status: {pat.status}</span>
                  <span>Issued on {pat.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        {/* Projects */}
        <motion.section
          id="projects"
          className={styles.projectsSection}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Projects</h2>

          <div className={styles.projectsGrid}>
            {[
              {
                title:
                  "DeepShield: Deepfake Video Detection using Vision Transformer (ViT)",
                date: "Mar 2025 – Apr 2025",
                domains: ["Deep Learning", "Computer Vision"],
                highlights: [
                  "Achieved 87.77% validation accuracy using Vision Transformer (ViT).",
                  "Preprocessed 400+ videos into frame-level datasets.",
                  "Built a Flask app for real-time deepfake detection with performance visualization.",
                ],
                tech: [
                  "/icons/Python.png",
                  "/icons/PyTorch.png",
                  "/icons/Flask.png",
                  "/icons/OpenCV_1.png",
                ],
                github: "https://github.com/GOKULRAM-K/DeepShield",
              },
              {
                title:
                  "SamvidhaanAI: A Legal Companion Chatbot using RAG and Gemini AI",
                date: "Feb 2025 – Apr 2025",
                domains: ["Legal AI", "RAG", "Conversational AI"],
                highlights: [
                  "Built a legal chatbot using Retrieval-Augmented Generation (RAG) with Gemini LLM.",
                  "Designed fast document retrieval with LangChain + ChromaDB.",
                  "Deployed a Streamlit app for real-time legal query handling.",
                ],
                tech: [
                  "/icons/Python.png",
                  "/icons/Streamlit_1.png",
                  "/icons/Langchain_1.png",
                  "/icons/Gemini_1.png",
                ],
                github:
                  "https://github.com/GOKULRAM-K/SamvidhaanAI_A_Legal_Companion",
              },
              {
                title: "AgroAI: AI-Powered Plant Disease Detection Web App",
                date: "Aug 2024 – Sep 2024",
                domains: [
                  "AI for Agriculture",
                  "Machine Learning",
                  "Web Development",
                ],
                highlights: [
                  "Built TensorFlow-based plant disease detection achieving high accuracy.",
                  "Integrated Gemini AI for human-readable disease insights.",
                  "Developed a responsive Flask web app with Bootstrap frontend.",
                ],
                tech: [
                  "/icons/Python.png",
                  "/icons/TensorFlow.png",
                  "/icons/Flask.png",
                  "/icons/HTML5.png",
                  "/icons/CSS3.png",
                  "/icons/JavaScript.png",
                ],
                github: "https://github.com/GOKULRAM-K/AgroAI",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                className={styles.projectCard}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Domain Tags */}
                <div className={styles.projectDomains}>
                  {proj.domains.map((d, idx) => (
                    <span key={idx} className={styles.domainTag}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Title + Date */}
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDate}>{proj.date}</p>

                {/* Highlights */}
                <ul className={styles.projectHighlights}>
                  {proj.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  {proj.tech.map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt="tech"
                      className={styles.techIcon}
                    />
                  ))}
                </div>

                {/* GitHub Link */}
                <div className={styles.projectLinks}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* 5. Mystery Project */}
        <h2 className={styles.sectionTitle}>🔒 Secret Project</h2>
        <div className={styles.mysteryBox}>
          <motion.div
            className={styles.blurredCard}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.lockIcon}>🔐</div>
            <p>
              Coming soon — a personal assistant application for every student’s
              life.
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Contact */}
        <motion.section
          id="contact"
          className={styles.contactSection}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Closing Phrase */}
          <h2 className={styles.contactPhrase}>
            Let’s build something impactful together.
          </h2>
          <br />
          <br />
          <br />
          {/* Contact Icons */}
          <div className={styles.contactLinks}>
            <a
              href="mailto:gokulram.k2023@vitstudent.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              <img
                src="/icons/gmail_1.png"
                alt="Email"
                className={styles.contactIcon}
              />
            </a>

            <a
              href="https://github.com/GOKULRAM-K"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              <img
                src="/icons/github.png"
                alt="GitHub"
                className={styles.contactIcon}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/gokul-ram-k-277a6a308"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              <img
                src="/icons/linkedin_1.png"
                alt="LinkedIn"
                className={styles.contactIcon}
              />
            </a>
          </div>
        </motion.section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
