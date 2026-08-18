//Task2
import React from "react";

function UserCard({ user }) {

  return (
    <div className="user-card">

      <div className="user-header">

        <div className="avatar">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2>{user.name}</h2>
          <p>{user.occupation}</p>
        </div>

      </div>

      <div className="user-details">

        <div className="detail">
          <span className="label">Age:</span>
          <span>{user.age}</span>
        </div>

        <div className="detail">
          <span className="label">City:</span>
          <span>{user.city}</span>
        </div>

        <div className="detail">
          <span className="label">Mobile:</span>
          <span>{user.mobile}</span>
        </div>

        <div className="detail">
          <span className="label">Email:</span>
          <span>{user.email}</span>
        </div>

        <div className="detail">
          <span className="label">Occupation:</span>
          <span>{user.occupation}</span>
        </div>

        <div className="detail">
          <span className="label">Address:</span>
          <span>{user.address}</span>
        </div>

      </div>

    </div>
  );
}

export default UserCard;