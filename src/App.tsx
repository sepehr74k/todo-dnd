import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import CreateTask from "./Components/CreateTask";
import ListTask from "./Components/ListTask";
import { TaskType } from "./types/Types";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskType[] | []>([]);

  React.useEffect(() => {
    const localTasks: string | null = localStorage.getItem("tasks");
    const parsedTasks: any = JSON.parse(localTasks as any);
    setTasks(parsedTasks || []);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <div className="w-screen -h-screen flex flex-col items-center pt-3 gap-16 mt-12">
        <div>
          <h1 className="text-4xl text-center font-bold text-slate-700">
            Task Manager
          </h1>
        </div>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
