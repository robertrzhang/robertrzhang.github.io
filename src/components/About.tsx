import { Container } from "./About.styles";
import ScrollAnimation from "./ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I'm Robert, an Electrical Engineering and Computer Sciences student at UC Berkeley. 
            I'm driven by the intersection of hardware and software, building everything from microprocessors to distributed systems.
            I am fascinated by the applications of technology in different fields, such as neurology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Currently, I'm working as a Research Assistant at the Knight Lab, developing 
            electrophysiology systems and training machine learning models for human cooperation research. Previously, I was a researcher
            at the Grinberg Lab developing neuron segmentation models and interned 
            at AWS, where I built accessibility features and automated deployment systems using CDK and CloudFormation.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm also a Teaching Assistant for 400+ students in linear algebra and circuits courses, and I serve as Course Coordinator 
            for Computer Science Mentors and Activities Officer for Eta Kappa Nu, the EECS Honor Society,.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Education</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.45 * 1000}>
          <p><strong>University of California, Berkeley</strong> — Expected May 2026</p>
          <p>Bachelor of Science in Electrical Engineering and Computer Sciences | GPA: 4.0/4.0</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.45 * 1000}>
          <p><strong>University of Minnesota, Twin Cities</strong> - Aug. 2022 - May 2023</p>
          <p>Dual Enrollment in Chemistry and Engineering | GPA: 4.0/4.0</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>Technical Skills</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.55 * 1000}>
              <p>Python</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.57 * 1000}>
              <p>Java</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.59 * 1000}>
              <p>C/C++</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.61 * 1000}>
              <p>JavaScript/TypeScript</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.63 * 1000}>
              <p>React</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.65 * 1000}>
              <p>Node.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.67 * 1000}>
              <p>R</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.69 * 1000}>
              <p>Docker</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.71 * 1000}>
              <p>TensorFlow</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.73 * 1000}>
              <p>PyTorch</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.75 * 1000}>
              <p>Verilog</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.77 * 1000}>
              <p>SQL</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.79 * 1000}>
              <p>Git</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.81 * 1000}>
              <p>AWS</p>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.85 * 1000}>
          <h3>Relevant Courses</h3>
        </ScrollAnimation>
        
        <div className="courses-section">
          <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
            <div className="semester">
              <ul>
                <li><strong>COMPSCI 61A</strong> - The Structure and Interpretation of Computer Programs (A)</li>
                <li><strong>COMPSCI 61B</strong> - Data Structures (A+)</li>
                <li><strong>COMPSCI 61C</strong> - Great Ideas of Computer Architecture (Machine Structures) (A+)</li>
                <li><strong>COMPSCI 70</strong> - Discrete Mathematics and Probability Theory (A)</li>
                <li><strong>COMPSCI 162</strong> - Operating Systems and System Programming (A+)</li>
                <li><strong>EECS 16A</strong> - Designing Information Devices and Systems I (A)</li>
                <li><strong>EECS 16B</strong> - Designing Information Devices and Systems II (A+)</li>
                <li><strong>EECS 151/151BL</strong> - Introduction to Digital Design and Integrated Circuits and FPGA Lab (A)</li>
                <li><strong>ELENG 105</strong> - Microelectronic Devices and Circuits (A)</li>
                <li><strong>ELENG 120</strong> - Signals and Systems (A+)</li>
                <li><strong>ENGIN 125</strong> - Ethics, Engineering, and Society (A+)</li>
                <li><strong>MATH 53</strong> - Multivariable Calculus (A+)</li>
                <li><strong>PHYSICS 7A</strong> - Physics for Scientists and Engineers (A+)</li>
                <li><strong>PHYSICS 7B</strong> - Physics for Scientists and Engineers (A+)</li>
                <li><strong>CHEM 1A/1AL</strong> - General Chemistry Lecture and Laboratory(A+)</li>
                <li><strong>CHEM 3AL</strong> - Organic Chemistry Laboratory (A)</li>
                <li><strong>CHEM 135</strong> - Chemical Biology (A)</li>
                <li><strong>BIOLOGY 1A</strong> - General Biology Lecture (A+)</li>
                <li><strong>BIOLOGY 1B</strong> - General Biology Lecture and Laboratory (A+)</li>
                <li><strong>CHEM 2301</strong> - Organic Chemistry I (A)</li>
                <li><strong>CHEM 2302</strong> - Organic Chemistry II (A)</li>
                <li><strong>ME 3331</strong> - Thermodynamics (A)</li>
                <li><strong>STAT 3011</strong> - Introduction to Statistical Analysis (A)</li>
              </ul>
              {/* <p className="honors">5x Dean's List - College of Engineering</p> */}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  )
}

export default About
