import React from "react";
import "../styles/Projects.css";
import Card from "../components/Card";

const projects = [
  {
    id: 1,
    category: "TOOLS",
    title: "Calculator",
    description:
      "Explore the precision a minimalist yet robust calculator designed for effortless numerical calculations.",
    link: "https://github.com/andyc90/react-calculator",
    image: "/images/calculator-project-img.png",
  },

  {
    id: 2,
    category: "TOOLS",
    title: "To Do List",
    description:
      "Explore a simple yet powerful to-do list manager, designed to streamline task organization and enhance your daily efficiency. ",
    link: "https://github.com/andyc90/react-to-do-list",
    image: "/images/to-do-project-img.png",
  },

  {
    id: 3,
    category: "ENTERTAINMENT",
    title: "Zoogotchi",
    description:
      "Explore the wonders of nurturing and bonding as you feed, play, and care for your adorable Zoogotchi animal.",
    link: "https://github.com/andyc90/zoogotchi",
    image: "/images/zoogotchi-project-img.png",
  },

  {
    id: 4,
    category: "ENTERTAINMENT",
    title: "Pokedex",
    description:
      "Explore a detailed Pokémon encyclopedia with a cool web interface for Pokémon stats.",
    link: "https://github.com/andyc90/pokedex",
    image: "/images/pokedex-project-img.png",
  },
];

const Projects = () => {
  return (
    <div className="global-container projects-container">
      <div className="projects-content">
        <h1>Journey through my collection of innovative projects.</h1>
        <div className="card-container">
          {projects.map((project) => (
            <Card
              key={project.id}
              category={project.category}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
