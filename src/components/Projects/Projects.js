import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bikerent from "../../Assets/Projects/bikerent.jpg";
import blog from "../../Assets/Projects/blog.jpg";
import ecom from "../../Assets/Projects/ecom.jpg";
import flight from "../../Assets/Projects/flight.jpg";
import movieticket from "../../Assets/Projects/movieticket.jpg";
import music from "../../Assets/Projects/music.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="text-primary">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikerent}
              isBlog={false}
              title="Bike Rental"
              description="A bike rental or bike hire business rents out bicycles for short periods of time, usually for a few hours. Most rentals are provided by bike shops as a sideline to their main businesses of sales and service, but shops specialize in rentals."
              link="https://bike-rental-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Simple Blog App"
              description="Blog or post description is the piece of text that appears below your link in SERPs and social sites. There are two types of descriptions for a blog. Blog description: A description of your whole blog visible under your blog's homepage link."
              link="https://simple-blog-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce App"
              description="Electronic commerce or e-commerce (sometimes written as eCommerce) is a business model that lets firms and individuals buy and sell things over the internet. E-commerce operates in all four of the following major market segments: Business to business. Business to consumer."
              link="https://ecom-shop-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Ticket Book"
              description="An airline ticket is a document or electronic record, issued by an airline or a travel agency, that confirms that an individual is entitled to a seat on a flight on an aircraft. ... Then with the boarding pass and the attached ticket, the passenger is allowed to board the aircraf."
              link="https://flight-ticket-booking-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieticket}
              isBlog={false}
              title="Movie Ticket Book"
              description="Online Movie Ticket Booking System is a website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters. Customer needs to register at the site to book tickets to the movie."
              link="https://movie-ticket-booking-vasanth.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Online Music"
              description="To most people, 'Internet music' means 'music on (or off!) the Internet'. This, in turn, usually means downloadable mp3 files for iPod or mobile phone. ... The range of available music online is vast and expanding all the time, and it offers a direct route for young or unknown artists to attempt to reach a public."
              link="https://online-music-vasanth.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
