import { Color, Value } from "../components";

export const getColor = (taskLabel: Value): Color => {
  switch (taskLabel) {
    case "Meeting":
      return "blue";
    case "Work":
      return "green";
    case "Study":
      return "red";
    case "Exercise":
      return "purple";
    case "Other":
      return "orange";
    default:
      return "green";
  }
};
