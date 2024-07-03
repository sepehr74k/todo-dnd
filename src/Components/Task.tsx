import React from "react";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { SingleTaskType, TaskType } from "../types/Types";

const Task: React.FC<SingleTaskType> = ({ task, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { ...task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`relative flex items-center bg-zinc-200 p-4 mt-8 shadow-md rounded-lg cursor-grab ${isDragging ? "opacity-50" : "opacity-100"
        }`}
    >
      <p className="text-sm">{task.name}</p>
      <i
        className="fas fa-trash ml-auto text-red-500 cursor-pointer"
        onClick={() => {
          setTasks((prev: TaskType[]) => {
            const list = prev.filter((t: TaskType) => t.id !== task.id);
            localStorage.setItem("tasks", JSON.stringify(list));
            toast("Task deleted successfully", {
              icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />,
              className: "font-bold",
            });
            return list;
          });
        }}
      ></i>
    </div>
  );
};

export default Task;
