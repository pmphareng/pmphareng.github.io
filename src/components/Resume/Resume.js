import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/Curriculum vitae.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
              title="Full-Stack Web developer [Cape Medics]"
              date="February 2020 - February 2021"
              content={[
                "Designed and implemented a CMS in React that allows the client (Cape Medics) to update landing page information and portfolio pictures.",
                "Introduced a color-coded calendar layout to monitor bookings and email notifications to Cape Medics staff whenever a booking is made or modified. The real-time calendar update feature helps Cape Medics attend to booking timeously and affords the client flexibility when modifying booking details.",
              ]}
            />
            <Resumecontent
              title="Back-end Web developer [Zaio]"
              date="August 2019 - September 2019"
              content={[
                "Assisted the client with integration issues for a ReactJS frontend and GraphQL server.",
              ]}
            />
           <Resumecontent
              title="Front-end Web developer [Zaio]"
              date="June 2018 - October 2018"
              content={[
                "Served as a front-end developer and tech lead for a team of three to deliver a responsive and user-friendly job application web app for a Zaio client using ReactJs.",
              ]}
            /> 
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electrical and Computer Engineering [University of Cape Town] "
              date="2016 - Present"
              content={[
              ]} 
            />
            {/*
            <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
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
