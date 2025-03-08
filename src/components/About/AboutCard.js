import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurin Prajapati </span>
            from <span className="purple"> Tempe, AZ, USA.</span>
            <br />
            I am currently pursuing MS in CS at Arizona State University.
            <br />
            I have completed B.Tech in Computer Science and Engineering from Nirma University
            India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Light Novels, Books, and Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching random Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life Goal: Continual growth in character and skills!"{" "}
          </p>
          <footer className="blockquote-footer">Saurin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
