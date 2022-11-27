import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div
        className="container-fluid d-flex flex-wrap p-5 align-item-center justify-content-center justify-content-sm-between  "
        style={{ background: "#d9d7f8" }}
      >
        <Card style={{ maxWidth: "18rem" }} className="mb-5">
          <Card.Img
            variant="top"
            style={{ height: "220px" }}
            src="/courses/geography.jpg"
          />
          <Card.Body>
            <Card.Title className="text-primary">Geography</Card.Title>

            <p className="d-1 text-primary">
              A geography quiz enables us to explore and understand space and
              location.
            </p>
            <Link to="/quiz/22">
              <Button variant="primary" className="w-100">
                Start Quiz
              </Button>
            </Link>
          </Card.Body>
          {/* course2 */}
        </Card>
        <Card style={{ maxWidth: "18rem" }} className="mb-5">
          <Card.Img
            variant="top"
            style={{ height: "220px" }}
            src="/courses/gadget.jpg"
          />
          <Card.Body>
            <Card.Title className="text-primary">Technology</Card.Title>

            <p className="d-1 text-primary">
              This quiz and worksheet combo will help you assess what you know
              about different types of technology.
            </p>
            <Link to="/quiz/30">
              <Button variant="primary" className="w-100">
                Start Quiz
              </Button>
            </Link>
          </Card.Body>
        </Card>
        {/* course3 */}
        <Card style={{ maxWidth: "18rem" }} className="mb-5">
          <Card.Img
            variant="top"
            style={{ height: "220px" }}
            src="/courses/science.jpg"
          />
          <Card.Body>
            <Card.Title className="text-primary">Science</Card.Title>

            <p className="d-1 text-primary">
              Test your knowledge of science facts and applications of
              scientific principles by taking quiz
            </p>
            <Link to="/quiz/17">
              <Button variant="primary" className="w-100">
                Start Quiz
              </Button>
            </Link>
          </Card.Body>
        </Card>
        {/* course4 */}
        <Card style={{ maxWidth: "18rem" }} className="mb-5">
          <Card.Img
            variant="top"
            style={{ height: "220px" }}
            src="/courses/sports.jpg"
          />
          <Card.Body>
            <Card.Title className="text-primary">Sports</Card.Title>

            <p className="d-1 text-primary">
              Play this game to review Sports. What two letters are made when
              you make an overhand throw
            </p>
            <Link to="/quiz/21">
              <Button variant="primary" className="w-100">
                Start Quiz
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
