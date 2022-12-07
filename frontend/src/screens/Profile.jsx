import React from "react";
import UpdateProfile from "../components/UpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../store/actions/quizAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { results, message } = useSelector((state) => state.quiz);

  const { myInfo, authenticate } = useSelector((state) => state.auth);
  if (!authenticate) navigate("/login");

  const data = { userName: myInfo.userName };
  useEffect(() => {
    dispatch(getResults(data));
  }, [results]);

  return (
    <div className="container-fluid p-5" style={{ background: "#d9d7f8" }}>
      <div className="container  text-center">
        <h2 className="text-primary mb-3">My Profile</h2>
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 bg-primary text-white rounded">
            <h5 className="pt-3">Update Profile</h5>
            {authenticate && <UpdateProfile />}
          </div>
          <div className="col-12 col-md-7 bg-white rounded mt-5 mt-md-0">
            <h3 className="text-primary py-2">Result</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Category</th>
                  <th scope="col">Result</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 &&
                  results.map((result, index) => {
                    return (
                      <>
                        {" "}
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{result.category}</td>
                          <td>{result.result}</td>
                          <td>
                            {new Date(result.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
