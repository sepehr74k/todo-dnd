/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";
import { TaskType } from "../types/Types";
import CreateTask from "./CreateTask";

const tasks: TaskType[] = [
  { id: "1", name: "do some thing", status: "progress" },
];
const setTasks: React.Dispatch<React.SetStateAction<TaskType[]>> = () => {};
describe("CreateTask component group test", () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  render(<CreateTask tasks={tasks} setTasks={setTasks} />);
  const taskInput: HTMLInputElement = screen.getByTitle(/textbox/i);
  const button: HTMLButtonElement = screen.getByTitle(/Submit/i);

  const handleChange = (e: HTMLInputElement, v: string) => {
    act(() => {
      userEvent.type(e, v);
    });
  };

  test("should empty", () => {
    expect(taskInput.value).toBe("");
  });

  test("should change input", () => {
    handleChange(taskInput, "sepehr");
    setTimeout(() => {
      expect(taskInput.value).toBe("sepehr");
    }, 100);
  });

  test("button should be disabled", () => {
    expect(button).toBeDisabled();
  });
  test("should retun error if user write less than 3 characters", () => {
    handleChange(taskInput, "Hi");
    setTimeout(() => {
      expect(button).toBeDisabled();
    }, 100);
  });
  test("should retun error if user write more than 20 characters", () => {
    handleChange(taskInput, "should retun error if user write more than 20 characters");
    setTimeout(() => {
      expect(button).toBeDisabled();
    }, 100);
  });
  test("button should be enable", () => {
    handleChange(taskInput, "sepehr");
    setTimeout(() => {
      expect(button).toBeEnabled();
    }, 100);
  });

});
