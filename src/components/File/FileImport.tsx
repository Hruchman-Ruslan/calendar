import { Icon } from "..";
import { useTask } from "../../context";

export const FileImport = () => {
  const { setTasks } = useTask();

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          try {
            const importedData = JSON.parse(content);
            setTasks(importedData);
          } catch (error) {
            console.error("Error parsing imported data:", error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div onClick={handleImport}>
      <Icon idIcon="import" width={25} height={25} />
    </div>
  );
};
