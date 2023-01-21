import { addCopyButton } from "./addCopyButton";

export const backlogMain = () => {
  const backlogHtmlElement = document.getElementById("ghx-content-group");
  if (!backlogHtmlElement) {
    return;
  }

  const result = backlogHtmlElement.className;
  const isDragInProgress = result.includes("ghx-drag-in-progress");
  if (isDragInProgress) {
    return;
  }

  const summaryElement =
    backlogHtmlElement.getElementsByClassName("ghx-summary");
  const buttonElement = backlogHtmlElement.getElementsByClassName(
    "add-copy-button-to-jira-software-backlog"
  );
  if (summaryElement.length === buttonElement.length) {
    return;
  }

  addCopyButton(backlogHtmlElement);
};
