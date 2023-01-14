import { backlogMain } from "./backlog/main";
import { boardsMain } from "./boards/main";
import { browseMain } from "./browse/main";
import { getActivePageId } from "./utils/getActivePageId";
import "./style.scss";

export const observer = new MutationObserver(() => {
  const activePageId = getActivePageId();

  switch (activePageId) {
    case "browse":
      browseMain();
      break;
    case "boards":
      boardsMain();
      break;
    case "boardsModal":
      boardsMain();
      browseMain();
      break;
    case "backlog":
      backlogMain();
      break;
    case "backlogViewDetail":
      backlogMain();
      browseMain();
      break;
  }
});

const target = document.body;
observer.observe(target, {
  childList: true,
  subtree: true,
});
