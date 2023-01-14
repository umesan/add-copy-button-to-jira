import { EXTENSION_ID } from "../constants";
import { CopyArgsType } from "../type";
import { copy } from "../utils/copy";
import { copyButtonElement } from "./copyButtonElement";

export const addCopyButton = (rootHtmlElement: HTMLElement) => {
  addCopyButtonToBacklogItem(rootHtmlElement);
};

const getTitleAndIssueKey = (item: Element): CopyArgsType => {
  const innerElement = item.querySelector(".ghx-summary .ghx-inner");
  const title = innerElement?.textContent ?? "";
  const issueKey = item.getAttribute("data-issue-key") ?? "";

  return {
    title,
    issueKey,
  };
};

const clickCopyButton = (event: Event, item: Element) => {
  const target = event.currentTarget;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  if (target.getAttribute("data-state") === "done") {
    return;
  }
  target.setAttribute("data-state", "done");
  copy(getTitleAndIssueKey(item));
  setTimeout(() => {
    target.setAttribute("data-state", "default");
  }, 1000);
};

const addCopyButtonToBacklogItem = (rootHtmlElement: HTMLElement) => {
  const backlogCardNodeList =
    rootHtmlElement.querySelectorAll(".ghx-backlog-card");
  if (backlogCardNodeList.length === 0) {
    return;
  }
  rootHtmlElement.setAttribute("data-state", "completed");
  backlogCardNodeList.forEach((backlogCardNodeItem) => {
    const summaryElement = backlogCardNodeItem.querySelector(".ghx-summary");
    summaryElement?.insertAdjacentHTML("afterend", copyButtonElement);

    const copyButton = backlogCardNodeItem.querySelector(
      `.${EXTENSION_ID}-backlog__button`
    );
    copyButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      clickCopyButton(event, backlogCardNodeItem);
    });
  });
};
