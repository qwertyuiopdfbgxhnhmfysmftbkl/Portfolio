import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={editor}
              isBlog={false}
              title="Food Delivery"
              description="URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs."
              ghLink="https://github.com/abhinav101901/Fsco_project_front_end.git"
              demoLink="https://fsco-project-food-delivery.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book-management"
              description="Created APIs for new users, books and reviews. Users can also update, edit or delete their books and reviews. Guest reviews and ratings are stored as well. All the data are stored in MongoDB, created and managed with the mongoose library. Handled authentication and proper authorisation with expiry token."
              ghLink="https://github.com/abhinav101901/Book-management.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blogging-Site"
              description="Built APIs for creating new authors and blogs in MongoDB. Managing to edit, fetching and deleting blog data with NodeJS and express. Provided authentication and authorisation with JSON web token handling all the edge cases."
              ghLink="https://github.com/abhinav101901/Blogging-Site-.git"             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Open To Intern"
              description="Managed APIs for creating new interns and new college data. Stored them in MongoDB. Implemented project with frontend code and managed multi-form data and handled CORS errors."
              ghLink="https://github.com/Ergufranali/project-internshipGroup23.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Product Management"
              description="In this project, we created APIs for e-commerce backends. We created user, products, cart and order models and APIs. We implemented AWS and stored images as S3 links. Our database was MongoDB."
              ghLink="https://github.com/shivansh-p7/Product-Management.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="URL-Shortner"
              description="URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs."
              ghLink="https://github.com/abhinav101901/urlShortner.git"
                   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Covid-19"
              description="This is covid safety web portal. Use of this portal we aware about covid precaution and symptoms and if you need doctor help so you can contact with them. In this i use basic HTML, CSS and JS."
              ghLink="https://github.com/abhinav101901/covid19.git"
              demoLink="https://rococo-belekoy-9a6538.netlify.app/"
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
