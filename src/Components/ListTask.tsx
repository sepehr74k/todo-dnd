import React from "react";
import { CreateTaskType, Status, TaskType } from "../types/Types";
import Section from "./Section";

const ListTask: React.FC<CreateTaskType> = ({ tasks, setTasks }) => {
  const [todos, setTodos] = React.useState(tasks.filter((t: TaskType) => t.status === "todo"));
  const [inProgress, setInProgress] = React.useState(
    tasks.filter((t: TaskType) => t.status === "progress")
  );
  const [done, setDone] = React.useState(tasks.filter((t: TaskType) => t.status === "done"));

  React.useEffect(() => {
    setTodos(tasks.filter((t: TaskType) => t.status === "todo"));
    setInProgress(tasks.filter((t: TaskType) => t.status === "progress"));
    setDone(tasks.filter((t: TaskType) => t.status === "done"));
  }, [tasks]);

  const statuses = ["todo", "progress", "done"];

  return (
    <div className="flex gap-16 md:gap-8 flex-wrap justify-center">
      {statuses.map((status: Status, index) => (
        <Section
          status={status}
          key={index}
          setTasks={setTasks}
          tasks={tasks}
          todos={todos}
          inProgress={inProgress}
          done={done}
        />
      ))}
    </div>
  );
};

export default ListTask;
