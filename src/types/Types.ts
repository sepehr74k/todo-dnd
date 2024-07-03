import React from "react";

export type Status = "done" | "progress" | "todo";

export interface TaskType {
  id: string;
  name: string;
  status: Status;
}

export interface CreateTaskType {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export interface SectionType {
  status: Status;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  todos: TaskType[];
  inProgress: TaskType[];
  done: TaskType[];
  tasks: TaskType[];
}

export interface HeaderType {
  text: string;
  bg: string;
  count: number;
}

export interface SingleTaskType {
  task: TaskType;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export interface DropIdType {
  id: string;
}
