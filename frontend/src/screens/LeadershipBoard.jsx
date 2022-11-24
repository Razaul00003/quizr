import React from "react";
import { Link } from "react-router-dom";

function LeadershipBoard(props) {
  return (
    <>
      <div className=" text-center container p-2 my-3">
        <h3 className="text-primary mb-4">Leadership Board</h3>
        <img src="/coming-soon.png" alt="coming soon page" />
        <div className="py-4">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default LeadershipBoard;
