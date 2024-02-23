import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

export default function Card({ category, title, description, link, image }) {
  return (
    <div className="card">
      <div className="card-left">
        <img src={image} alt="placeholder" />
      </div>
      <div className="card-right">
        <div className="card-content">
          <span>{category}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-actions">
          <Link to={link}>Read More</Link>
        </div>
      </div>
    </div>
  );
}
