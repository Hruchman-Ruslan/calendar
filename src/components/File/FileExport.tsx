import { Icon } from "..";
import { useTask } from "../shared/TaskContext";

export const FileExport = () => {
  const { tasks } = useTask();

  const handleExport = () => {
    const data = JSON.stringify(tasks);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "calendar_tasks.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return <Icon idIcon="export" onClick={handleExport} width={25} height={25} />;
};
