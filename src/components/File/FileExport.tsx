import { Icon } from "..";
import { useTask } from "../../context";

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

  return (
    <div onClick={handleExport}>
      <Icon idIcon="export" width={25} height={25} />
    </div>
  );
};
