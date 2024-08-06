import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

function AboutCard({ title, icon, description, projects }) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <img src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.number.isRequired,
};

export default AboutCard;
