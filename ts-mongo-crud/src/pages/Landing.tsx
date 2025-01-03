import React from "react";
import JsDay from "../components/JsDay";
import Elementor from "../assets/elementor.webp";

function Landing() {
  return (
    <div className="text-center mx-12">
      <h1 className="text-4xl font-bold mb-8">JS Projects</h1>
      <div className="flex items-center justify-between flex-wrap gap-8">
        <JsDay
          title="Tic Tac Toe"
          link="projects/tic-tac-toe"
          image={Elementor}
        />
        <JsDay title="Sudoku" link="projects/sudoku" image={Elementor} />
        <JsDay title="Day 3" link="projects/tic-tac-toe" image={Elementor} />
      </div>
    </div>
  );
}

export default Landing;
