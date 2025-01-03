import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
