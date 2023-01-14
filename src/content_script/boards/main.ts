import { addCopyButton } from "./addCopyButton";

export const boardsMain = async () => {
  const data = await chrome.storage.local.get("show");
  if (!data.show.sprint) {
    return;
  }
  const poolHtmlElement = document.getElementById("ghx-pool");
  if (
    !poolHtmlElement ||
    poolHtmlElement.getAttribute("data-state") === "completed"
  ) {
    return;
  }
  addCopyButton(poolHtmlElement);
};
