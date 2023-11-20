import React from "react";
import noProjectimg from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectimg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p className="text-slate-400 mb-4">
        Select new proejct or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
