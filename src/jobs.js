// Jobs.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const handleGephelsClick = () => {
    navigate("/jobs/Gephels");
  };

  return (
    <div className="jobs-page section">
      <h2>Job and Internship Opportunities</h2>

      <ul>
        <li>
          <Link to="/jobs/Gephels">Gephels Pvt. Ltd. (Link)</Link>
        </li>
      </ul>

      <button
        onClick={handleGephelsClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        View Gephels Job
      </button>
    </div>
  );
}

export default Jobs;
