import {
  addCopyButtonToSwimlaneColumns,
  addCopyButtonToSwimlaneHeader,
} from "./addCopyButton";

export const boardsMain = () => {
  const poolHtmlElement = document.getElementById("ghx-pool");
  if (!poolHtmlElement) {
    return;
  }

  const swimlane = poolHtmlElement.querySelectorAll(".ghx-swimlane");
  swimlane.forEach((lane) => {
    const result = lane.className;
    const isDragInProgress = result.includes("ghx-drag-in-progress");
    if (isDragInProgress) {
      return;
    }

    const buttonElement = lane.querySelectorAll(
      ".ghx-columns .add-copy-button-to-jira-software-boards"
    );
    const issueElement = lane.getElementsByClassName("ghx-issue");
    if (buttonElement.length === issueElement.length) {
      return;
    }

    addCopyButtonToSwimlaneColumns(lane);
    addCopyButtonToSwimlaneHeader(lane);
  });
};
