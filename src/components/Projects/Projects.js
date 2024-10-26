import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image1 from "../../Assets/Projects/image1.png"; // Placeholder for Printify Clone
import image2 from "../../Assets/Projects/image2.png"; // Placeholder for Cricket Extreme
import image3 from "../../Assets/Projects/image3.png"; // Placeholder for AgroMart
import image4 from "../../Assets/Projects/image4.png"; // Placeholder for Jeevan Clinic

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Printify Clone Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image1}
              isBlog={false}
              title="Printify Clone"
              description="An e-commerce platform clone allowing users to create custom designs and products for print-on-demand. Built with React.js and integrated with Firebase for authentication and real-time data management. The platform features product customization, dynamic previews, and a user-friendly interface."
              ghLink="https://github.com/Rajsatyam2014/Printify_Homepage_clone"
              demoLink="https://printify-homepage-clone.vercel.app/"
            />
          </Col>

          {/* Cricket Extreme Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image2}
              isBlog={false}
              title="Cricket Extreme"
              description="A web application offering real-time cricket scores, news, and analytics. Utilizes Node.js for the backend and React.js for the frontend, with API integration for real-time updates. Built with a focus on delivering an immersive user experience for cricket enthusiasts."
              ghLink="https://github.com/your-username/cricket-extreme"
              demoLink="https://cricket-extreme-demo-link.com/"
            />
          </Col>

          {/* AgroMart Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image3}
              isBlog={false}
              title="AgroMart"
              description="An e-commerce platform for agriculture products built using React.js. Features include product listings, cart functionality, and an integrated chatbot named AgroSaathi. Utilizes Node.js for backend services and Dialogflow for chatbot interactions."
              ghLink="https://github.com/your-username/agromart"
              demoLink="https://agromart-demo-link.com/"
            />
          </Col>

          {/* Jeevan Clinic (Hospital Management System) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image4}
              isBlog={false}
              title="Jeevan Clinic"
              description="A comprehensive hospital management system to streamline patient management, appointments, and doctor-patient interactions. Built with Flask for backend support, SQLite for database management, and incorporates API integrations for smooth operation."
              ghLink="https://github.com/your-username/jeevan-clinic"
              demoLink="https://jeevan-clinic-demo-link.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
