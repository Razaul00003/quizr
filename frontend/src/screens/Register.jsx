import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Link } from "react-router-dom";

function Registration(props) {
  return (
    <>
      <div style={{ backgroundColor: "#d9d7f8" }} className="py-5">
        <div className="w-50 m-auto bg-white rounded d-flex align-items-center justify-content-center  p-5">
          <Form>
            <h4 className="text-center text-primary mb-4">
              Create Your Account
            </h4>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter You Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <p className="text-primary pt-4">
              Already member?{" "}
              <Link to="/login">
                <span className="text-decoration-underline">Login </span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Registration;
