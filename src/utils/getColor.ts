import { Color, Value } from "../components";

export const getColor = (difficulty: Value): Color => {
  switch (difficulty) {
    case "Easy":
      return "blue";
    case "Normal":
      return "green";
    case "Hard":
      return "red";
    case "Postpone":
      return "purple";
    default:
      return "green";
  }
};
