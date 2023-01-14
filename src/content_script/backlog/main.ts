import { addCopyButton } from "./addCopyButton";

export const backlogMain = async () => {
  const data = await chrome.storage.local.get("show");
  if (!data.show.backlog) {
    return;
  }

  const backlogHtmlElement = document.getElementById("ghx-backlog");
  if (
    !backlogHtmlElement ||
    backlogHtmlElement.getAttribute("data-state") === "completed"
  ) {
    return;
  }

  addCopyButton(backlogHtmlElement);
};
