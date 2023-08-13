import React from "react";
import "./ProfileForm.css";
import { RxCross2 } from "react-icons/rx";
function ProfileForm({ setOpen, open }) {
  return (
    <div className="profileForm">
      <div className="crossIcon">
        <RxCross2 style={{ fontSize: "20px" }} onClick={() => setOpen(!open)} />
      </div>
      <form action="">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            className="infoInput"
          />
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="worksAt"
            placeholder="Works at"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="livesIn"
            placeholder="lives in"
            className="infoInput"
          />
          <input
            type="text"
            name="Country"
            placeholder="country"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="Status"
            placeholder="RelationShip Status"
            className="infoInput"
          />
        </div>
        <div>
            <div>
                Profile Image
                <input type="file" />
            </div>
            <div>
                Cover Image
                <input type="file" />
            </div>
          </div>
          <button className="button p-button">Update</button>
      </form>
    </div>
  );
}

export default ProfileForm;
