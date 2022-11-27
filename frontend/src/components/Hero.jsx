import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-between align-items-center ">
        <div className=" col-12 col-md-6 col-lg-7 mb-3 mb-md-0 ">
          <img className="w-100" src="/hero.png" alt="hero" />
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <h2 className="text-primary my-3">
            Quizr - Ultimate Online Quiz solution!
          </h2>
          <p className="text-primary mb-5">
            One tool becoming more common, especially in online education, is
            quizzes. They help with concentration, identify gaps in knowledge,
            build confidence and help ...
          </p>
          <div className="d-flex">
            <Link to="/register">
              <Button className="me-2">Create Account</Button>
            </Link>
            <Link to="/quiz">
              <Button className="btn-outline-primary bg-white text-primary">
                Learn more &darr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
