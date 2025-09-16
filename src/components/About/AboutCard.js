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
            <br /><br />
           <ul>
            <li>Currently pursuing a Master's in Computer Science at Arizona State University.</li>
            <li>Completed Undergrad in Computer Science and Engineering from Nirma University, India.</li>
          </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Light Novels, Books, and Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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