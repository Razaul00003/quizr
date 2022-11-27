import React from "react";
import Button from "react-bootstrap/esm/Button";

function Loading(props) {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-around p-5">
        <img src="/loading.gif" alt="loading" />
      </div>
    </>
  );
}

export default Loading;
