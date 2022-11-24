import React from "react";
import UpdateProfile from "../components/UpdateProfile";

function Profile(props) {
  return (
    <div className="container-fluid p-5" style={{ background: "#d9d7f8" }}>
      <div className="container text-center">
        <h2 className="text-primary mb-5">My Profile</h2>
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 bg-primary text-white rounded">
            <h5 className="pt-3">Update Profile</h5>
            <UpdateProfile />
          </div>
          <div className="col-12 col-md-7 bg-white rounded mt-5 mt-md-0">
            <h3 className="text-primary py-2">Result</h3>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
