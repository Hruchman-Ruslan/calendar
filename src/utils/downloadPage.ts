import html2canvas from "html2canvas";

export const downloadPage = () => {
  html2canvas(document.body).then((canvas) => {
    const link = document.createElement("a");
    link.download = "calendar.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};
