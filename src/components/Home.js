import React, { useEffect, useState } from 'react';
import './CSS/Home.css';

function Home() {
  // State to handle dynamic text effect
  const [dynamicText, setDynamicText] = useState("Welcome to My Portfolio");
  const words = ["Innovative", "Creative", "Driven"];
  let index = 0;

  // Smooth scrolling function
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  // Projects array
  const projects = [
    { title: "Project 1", description: "Description of the first project.", link: "#" },
    { title: "Project 2", description: "Description of the second project.", link: "#" },
    { title: "Project 3", description: "Description of the third project.", link: "#" },
  ];

  // Dynamic text effect (changes the heading periodically)
  useEffect(() => {
    const changeText = () => {
      setDynamicText(`Welcome to My ${words[index]} Portfolio`);
      index = (index + 1) % words.length;
    };
    
    const intervalId = setInterval(changeText, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [index, words]);

  // Promise simulation to fetch project data (for demonstration)
  const fetchProjectData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "Project 4", description: "Description of project 4", link: "#" },
          { title: "Project 5", description: "Description of project 5", link: "#" },
        ]);
      }, 2000); // Simulate a 2-second delay
    });
  };

  // Fetch additional projects
  const loadAdditionalProjects = async () => {
    try {
      const additionalProjects = await fetchProjectData();
      console.log("Fetched additional projects:", additionalProjects);
      // You can update state here to dynamically add projects
      // For example: setProjects([...projects, ...additionalProjects]);
    } catch (error) {
      console.error("Error fetching additional projects:", error);
    }
  };

  // Loading additional projects when the button is clicked
  const handleLoadMore = () => {
    loadAdditionalProjects();
  };

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="container-fluid">
          <div className="row align-items-center text-center text-white">
            <div className="col-lg-6 p-5">
              <h1 className="display-4 fw-bold">{dynamicText}</h1>
              <p className="lead">
                Explore my projects, skills, and experiences that shape my journey as a software engineer.
              </p>
              <button className="btn btn-primary btn-lg" onClick={scrollToProjects}>
                View Projects
              </button>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="profile-photo">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Your Name"
                  className="img-fluid shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">My Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card bg-secondary shadow">
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-light">View More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={handleLoadMore}>Load More Projects</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
