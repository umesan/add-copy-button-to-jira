import { SettingShowType } from "../common/types";
import { backlogMain } from "./backlog/main";
import { boardsMain } from "./boards/main";
import { browseMain } from "./browse/main";
import { getActivePageId } from "./utils/getActivePageId";
import "./style.scss";

const observerEvent = (show: SettingShowType) => {
  const activePageId = getActivePageId();
  switch (activePageId) {
    case "browse":
      if (show.issues) {
        browseMain();
      }
      break;
    case "boards":
      if (show.sprint) {
        boardsMain();
      }
      break;
    case "boardsModal":
      if (show.sprint) {
        boardsMain();
        browseMain();
      }
      break;
    case "backlog":
      if (show.backlog) {
        backlogMain();
      }
      break;
    case "backlogViewDetail":
      if (show.backlog) {
        backlogMain();
        browseMain();
      }
      break;
  }
};

const init = async () => {
  const { show } = await chrome.storage.local.get("show");
  const observer = new MutationObserver(() => observerEvent(show));
  const target = document.body;
  observer.observe(target, {
    childList: true,
    subtree: true,
  });
};

init();
