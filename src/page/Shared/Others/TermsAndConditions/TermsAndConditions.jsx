import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h3>Read carefully our policies</h3>
      <p>
        Go back to <Link to="/register">register</Link>{" "}
      </p>
    </div>
  );
};

export default TermsAndConditions;
