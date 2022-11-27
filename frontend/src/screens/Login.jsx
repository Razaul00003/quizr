import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { userLogin } from "../store/actions/authAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const navigate = useNavigate();
  const alert = useAlert();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
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
  const login = (e) => {
    e.preventDefault();
    const { email, password } = formInputs;
    dispatch(userLogin(formInputs));
  };
  if (successMessage) {
    alert.success(successMessage);
    navigate("/");
  }
  return (
    <>
      <div style={{ backgroundColor: "#d9d7f8" }} className="py-5">
        <div className="w-50 m-auto bg-white rounded d-flex align-items-center justify-content-center  p-5">
          <Form onSubmit={login}>
            <h4 className="text-center text-primary mb-4">
              Login to Your Account
            </h4>
            <h6 className="text-secondary">
              {" "}
              To view all the features use this credentials use defalut value or
              create a account.
            </h6>
            Email: <span className="text-info">me@gmail.com</span>
            <br />
            Password: <span className="text-info">123456</span> <br /> <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                defaultValue="me@gmail.com"
                onChange={inputHandler}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="password"
                name="password"
                defaultValue="123456"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <p className="text-primary pt-4">
              New member?{" "}
              <Link to="/register">
                <span className="text-decoration-underline">Register </span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
