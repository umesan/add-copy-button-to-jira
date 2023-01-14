import { EXTENSION_ID } from "../constants";
import { addCopyButton } from "./addCopyButton";

export const browseMain = async () => {
  const data = await chrome.storage.local.get("show");
  if (!data.show.issues) {
    return;
  }

  const buttonHtmlElement = document.getElementById(EXTENSION_ID);
  if (buttonHtmlElement) {
    return;
  }

  addCopyButton();
};
