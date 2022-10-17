import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h2>About This Project</h2>
        <p>This is a React app to leave feeback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
