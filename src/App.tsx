import Card from "./components/Card/Card";
import ExperienceCard from "./components/Card/ExperienceCard";
import Skill from "./components/Skill/Skill";
import resumeIcon from "./assets/resume.svg";
import mailIcon from "./assets/mail.svg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="summary">
        <img src="Profile.jpeg" alt="Bodi Batdelgerekh" id="profile-picture" />
        <h1>Bodi Batdelgerekh</h1>
        <h2>Software Engineer</h2>
        <h3>📍 Tampa, FL 🇺🇸</h3>
        <p>
          Creating intuitive user interfaces, optimizing performance, and
          developing robust backend systems.
        </p>

        <a href="/Bodibileg-Resume.pdf" download aria-label="Download Bodi's resume">
          <img src={resumeIcon} alt="Resume icon" />
        </a>
        <a
          href="mailto:bodibileg@gmail.com"
          aria-label="Email Bodi"
        >
          <img src={mailIcon} alt="Mail icon" />
        </a>
        <a
          href="https://github.com/bodibileg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bodi's GitHub profile"
        >
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/bodibileg/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bodi's LinkedIn profile"
        >
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </a>
      </div>
      <div className="details">
        <section>
          <h2>About me</h2>
          <p>
            I am a full-stack software engineer with 4 years of experience in
            building web and mobile applications. I focus on developing
            efficient, scalable solutions, and I’ve worked on both front-end and
            back-end systems. I’m skilled in JavaScript, TypeScript, and AWS,
            and I’ve used frameworks like React.js and Node.js, along with
            databases such as PostgreSQL and MongoDB.
          </p>
          <p>
            I’ve worked across a range of industries, including logistics,
            telecommunications, and education. Most recently, I developed a
            transportation management system at CURA Freight, and before that, I
            led software projects at Mobicom and Bytelinks. I’ve also just
            completed my Master of Science in Computer Science, which has given
            me a deeper understanding of software architecture and cloud
            technologies.
          </p>
          <p>
            I enjoy solving complex problems and building innovative
            applications that have a real-world impact. I’m always looking for
            new challenges where I can contribute and continue to grow as a
            developer.
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          <Skill
            title="Languages"
            skills={["JavaScript", "TypeScript", "Java"]}
            color="#3c82f6"
            backgroundColor="#1e3457"
          />
          <Skill
            title="Frameworks"
            skills={[
              "React.js",
              "Express.js",
              "Node.js",
              "Spring Boot",
              "JavaEE",
              "React Native",
              "Cypress",
              "Redux",
              "Apollo GraphQL",
            ]}
            color="#22c55d"
            backgroundColor="#1c4829"
          />
          <Skill
            title="Databases"
            skills={["MongoDB", "PostgreSQL", "Redis", "MySQL"]}
            color="#a855f7"
            backgroundColor="#3f2657"
          />
          <Skill
            title="Web Development"
            skills={["HTML", "CSS", "SASS", "RESTful API", "GraphQL"]}
            color="#ef4444"
            backgroundColor="#552221"
          />
          <Skill
            title="Tools"
            skills={[
              "Git",
              "Webpack",
              "Babel",
              "Jest",
              "React Testing Library",
              "Docker",
              "GitLab CI/CD",
              "PM2",
              "Maven",
            ]}
            color="#ebb305"
            backgroundColor="#534218"
          />
        </section>
        <section>
          <h2>Experience</h2>
          <ExperienceCard
            image="cura.jpeg"
            position="Front End Developer"
            company="CURA Freight, Tampa, FL"
            date="Nov 2023 - Present"
            bulletPoints={[
              {
                text: "Developed and enhanced the TMS web application, ensuring reusability, accessibility and maintainability through comprehensive overhauls using React.js, Apollo GraphQL, HTML, SASS",
              },
              {
                text: " Designed and maintained complex forms using Final Form that dynamically updated workflows based on users' real-time inputs",
              },
              {
                text: " Optimized table structure with Tanstack Table, achieving a 50% improvement in page load performance",
              },
              {
                text: " Built reusable components library using React.js, TypeScript, HTML, SASS, Storybook, and react-i18next adhering to atomic design principles",
              },
            ]}
          />
          <ExperienceCard
            image="mobicom.png"
            position="Software Engineer"
            company="MOBICOM CORPORATION, Ulaanbaatar, Mongolia"
            date="Aug 2021 – Nov 2022"
            bulletPoints={[
              {
                text: "Led the development of an in-house web application to streamline the workflow of our internet provider. Achieved a 100% reduction in page load time and significantly enhanced the performance of the web application using Express.js, Node.js, React.js, Cypress, Redux, Apollo GraphQL, Typescript, CSS, HTML, MongoDB, Mongoose ORM, pm2",
              },
              {
                text: "Integrated streaming vendor functionalities with Mobicom's billing API, ensuring accurate billing for streaming services. Employed Spring Boot, Redis for caching, and ActiveMQ",
                link: { text: "VOO", to: "https://voo.mn/" },
              },
              {
                text: "Developed gateway using Spring Boot to facilitate seamless integration with third-party companies, enabling their users to access and utilize our streaming platform, resulting in 10% increase in revenue",
                link: { text: "Kewiko + VOO", to: "https://www.kewiko.mn/" },
              },
            ]}
          />
          <ExperienceCard
            image="bytelinks.jpg"
            position="Software Engineer"
            company="BYTELINKS LLC, Ulaanbaatar, Mongolia"
            date="Mar 2020 – Aug 2021"
            bulletPoints={[
              {
                text: "Developed a React Native app for civil service exam preparation, featuring an intuitive interface and interactive study materials, achieving high user ratings for effectiveness",
                link: {
                  text: "Start Test",
                  to: "https://apps.apple.com/us/app/start-test/id1532395316",
                },
              },
              {
                text: "Developed a single-page web application for a government agency, ensuring compliance with security standards using React.js, SASS, Material UI",
                link: {
                  text: "Anti-Monopoly Agency of Mongolia",
                  to: "https://afccp.gov.mn/",
                },
              },
              {
                text: "Developed a mobile application connecting students with qualified teachers for academic assistance using React Native, Express.js, Node.js, MongoDB, Sequelize ORM, and PostgreSQL",
                link: {
                  text: "AskY Edtech",
                  to: "https://www.instagram.com/askyedtech/",
                },
              },
            ]}
          />
        </section>
        <section>
          <h2>Education</h2>
          <Card
            image="miu.png"
            title="Master of Science in Computer Science"
            description="Maharishi International University, Fairfield, Iowa"
            date="Nov 2022 - Oct 2024"
          />
          <Card
            image="must.png"
            title="Bachelor of Science in Software Engineering"
            description="Mongolian University of Science and Technology, Ulaanbaatar, Mongolia"
            date="Sep 2017 - Dec 2020"
          />
        </section>
        <section>
          <h2>Certification</h2>
          <Card
            image="aws.png"
            title="AWS Certified Solutions Architect - Associate"
            description="Amazon Web Services"
            date="Jun 2023 - Jun 2026"
          />
        </section>
      </div>
    </div>
  );
}

export default App;
