// Jobs.js
import React from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";

function Jobs() {
  return (
    <div className="jobs-page section">
      <h2>Job and Internship Opportunities</h2>
      <ul>
        <li>
          <Link to="/jobs/Gephels">Gephels Pvt. Ltd.</Link>
        </li>
        {/* You can add more jobs here */}
      </ul>
    </div>
  );
}

export default Jobs;
