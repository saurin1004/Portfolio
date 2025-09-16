import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FaceRec Autoscale"
              description="A cloud-native face recognition system that dynamically scales from 0 to 15 AWS EC2 instances using custom auto-scaling logic. Built with Python, Flask, and PyTorch, it leverages SQS for decoupled messaging and S3 for storage, enabling cost-efficient, fault-tolerant, and consistently high-throughput processing. The system sustains 100+ concurrent requests with sub-1.2s latency, intelligently scaling down to zero when completely idle for optimal efficiency."
              ghLink="https://github.com/saurin1004/aws-face-recognition-autoscaler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PyShop"
              description="A Django-based e-commerce web application that enables users to browse products, manage their cart, and place orders through a smooth checkout process. It includes an admin dashboard for adding, updating, and deleting products, managing customers, and handling offers. Features include user authentication, profile management, order confirmations, and cart functionality—providing a complete, reliable, and end-to-end shopping platform with both customer and admin experiences."
              ghLink="https://github.com/saurin1004/Pyshop_e-commerce_webapp"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;