import { EXTENSION_ID } from "../constants";
import { addCopyButton } from "./addCopyButton";

export const browseMain = () => {
  const buttonHtmlElement = document.getElementById(EXTENSION_ID);
  if (buttonHtmlElement) {
    return;
  }

  addCopyButton();
};
