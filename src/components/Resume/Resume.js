import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/vasanth-cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR TRAINEE [NVH INDIA]"
              date="May 2019 - May 2020"
              content={[
                "Production Managing Department",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Practice"
              content={[
                "Creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Practice"
              content={[
                "Developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Engineering in Mechanical Engineering "
              date="2019 - Passed out"
              content={[`CGPA: 7.5`]}
            />
            <Resumecontent
              title="12TH BOARD [M.A.M Hr.Sec.School, Mettur, TN]"
              date="2014 - 2015"
              content={["CGPA: 6.8"]}
            />
            <Resumecontent
              title="10TH BOARD [M.A.M Hr.Sec.School, Mettur, TN] "
              date="2012 - 2013"
              content={["CGPA: 8.9"]}
            />
            <h3 className="resume-title"></h3>
            <Resumecontent
              title=""
              content={[
        
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
