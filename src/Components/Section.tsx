import React from "react";
import { useDrop } from "react-dnd";
import { SectionType, TaskType } from "../types/Types";
import Header from "./Header";
import Task from "./Task";

const Section: React.FC<SectionType> = ({
  status,
  setTasks,
  todos,
  inProgress,
  done,
}) => {
  const text =
    status === "todo"
      ? "To Do"
      : status === "progress"
      ? "In Progress"
      : "Done";

  const bg =
    status === "todo"
      ? "bg-red-400"
      : status === "progress"
      ? "bg-yellow-600"
      : "bg-green-400";

  const tasksToMap =
    status === "todo" ? todos : status === "progress" ? inProgress : done;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: TaskType) => {
      setTasks((prev: TaskType[]) => {
        const list:TaskType[] = prev.map((task: TaskType) => {
          if (task.id === item.id) {
            return { ...item, status };
          }
          return task;
        });
        
        localStorage.setItem("tasks", JSON.stringify(list));
        return list;
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={"w-64 rounded-md mt-2 " + (isOver ? "bg-slate-200" : "")}
    >
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.map((task: TaskType, index) => (
        <Task task={task} setTasks={setTasks} key={index} />
      ))}
    </div>
  );
};

export default Section;
