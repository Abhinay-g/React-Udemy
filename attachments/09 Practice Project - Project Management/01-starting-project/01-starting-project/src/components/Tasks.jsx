import React from "react";
import NewTask from "./NewTask";
const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask}></NewTask>
      {!tasks.length && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet
        </p>
      )}
      {!!tasks.length && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
