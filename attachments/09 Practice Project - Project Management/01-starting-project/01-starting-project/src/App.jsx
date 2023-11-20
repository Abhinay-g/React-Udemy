import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((preState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: taskId,
      };
      return {
        ...preState,
        tasks: [newTask, ...preState.tasks],
      };
    });
  }
  function handleDeleteTask() {}
  function handleSelectProject(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  }
  function handleProjectDelete() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: preState.projects.filter(
          (project) => project.id !== preState.selectedProjectId
        ),
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((preState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  }
  function handleCancelAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      onDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
    ></SelectedProject>
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
      ></ProjectSidebar>
      {content}
    </main>
  );
}

export default App;
