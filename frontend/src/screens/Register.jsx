import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { userRegister } from "../store/actions/authAction";

function Registration(props) {
  const alert = useAlert();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  //slicing part of state
  const { authenticate, error, successMessage, myInfo } = useSelector(
    (state) => state.auth
  );

  //handle input value
  const inputHandler = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  //registeration
  const register = (e) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = formInputs;
    dispatch(userRegister(formInputs));
  };
  if (successMessage) {
    alert.success(successMessage);
    navigate("/");
  }
  if (error) {
    alert.error(error);
  }

  return (
    <>
      <div style={{ backgroundColor: "#d9d7f8" }} className="py-5">
        <div className="w-50 m-auto bg-white rounded d-flex align-items-center justify-content-center  p-5">
          <Form onSubmit={register}>
            <h4 className="text-center text-primary mb-4">
              Create Your Account
            </h4>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="userName"
                onChange={inputHandler}
                type="text"
                placeholder="Enter You Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={inputHandler}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
              />
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
