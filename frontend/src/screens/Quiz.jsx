import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

function Quiz(props) {
  return (
    <>
      <div className="container-fluid py-3" style={{ background: "#d9d7f8" }}>
        <div className="bg-white container rounded">
          <Form className=" p-5 ">
            <h2 className="text-primary text-center">Quiz</h2>
            <div>
              <p>question</p>
            </div>
            <Button className="w-100 m-1" type="submit">
              Option 1
            </Button>
            <Button className="w-100 m-1" type="submit">
              Option 2
            </Button>
            <Button className="w-100 m-1" type="submit">
              Option 3
            </Button>
            <Button className="w-100 m-1" type="submit">
              Option 4
            </Button>
          </Form>
          <div className="d-flex align-items-right justify-content-end">
            <span
              className="bg-primary text-white px-3 py-2 me-5 rounded mb-3  "
              type="button"
            >
              Next
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
