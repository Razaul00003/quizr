import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

function UpdateProfile(props) {
  return (
    <>
      <div
        style={{ backgroundColor: "#d9d7f8" }}
        className="pt-5 pb-1 text-white bg-primary"
      >
        <Form>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="confirm password" />
          </Form.Group>

          <Button className="bg-white text-primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateProfile;
