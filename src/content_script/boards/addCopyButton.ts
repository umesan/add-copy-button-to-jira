import { EXTENSION_ID } from "../constants";
import { CopyArgsType } from "../type";
import { copy } from "../utils/copy";
import { copyButtonElement } from "./copyButtonElement";

export const addCopyButton = (rootHtmlElement: HTMLElement) => {
  addCopyButtonToCard(rootHtmlElement);
  addCopyButtonToSwimlaneHeader(rootHtmlElement);
};

const getTitleAndIssueKey = (item: Element): CopyArgsType => {
  const summaryElement = item.querySelector(".ghx-summary");
  const title = summaryElement?.textContent ?? "";
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

const addCopyButtonToCard = (rootHtmlElement: HTMLElement) => {
  const issueNodeList = rootHtmlElement.querySelectorAll("div.ghx-issue");
  if (issueNodeList.length === 0) {
    return;
  }
  rootHtmlElement.setAttribute("data-state", "completed");
  issueNodeList.forEach((issueNodeItem) => {
    const keyElement = issueNodeItem.querySelector("a.ghx-key");
    keyElement?.insertAdjacentHTML("afterend", copyButtonElement);

    const copyButton = issueNodeItem.querySelector(
      `.${EXTENSION_ID}-boards__button`
    );

    copyButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      clickCopyButton(event, issueNodeItem);
    });
  });
};

const getSwimlaneHeaderTitleAndIssueKey = (item: Element): CopyArgsType => {
  const summaryElement = item.querySelector(".ghx-summary");
  const summaryChildElement = summaryElement?.querySelector("span");
  summaryChildElement?.remove();
  const title = summaryElement?.textContent ?? "";

  const issueKey = item.getAttribute("data-issue-key") ?? "";

  return {
    title,
    issueKey,
  };
};

const clickSwimlaneHeaderCopyButton = (event: Event, item: Element) => {
  const target = event.currentTarget;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  if (target.getAttribute("data-state") === "done") {
    return;
  }
  target.setAttribute("data-state", "done");
  copy(getSwimlaneHeaderTitleAndIssueKey(item));
  setTimeout(() => {
    target.setAttribute("data-state", "default");
  }, 1000);
};

const addCopyButtonToSwimlaneHeader = (rootHtmlElement: HTMLElement) => {
  const swimlaneHeaderNodeList = rootHtmlElement.querySelectorAll(
    ".ghx-swimlane-header"
  );
  swimlaneHeaderNodeList.forEach((swimlaneHeaderNodeItem) => {
    const summaryElement = swimlaneHeaderNodeItem.querySelector(".ghx-summary");
    summaryElement?.insertAdjacentHTML("afterend", copyButtonElement);

    const copyButton = swimlaneHeaderNodeItem.querySelector(
      `.${EXTENSION_ID}-boards__button`
    );

    copyButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      clickSwimlaneHeaderCopyButton(event, swimlaneHeaderNodeItem);
    });
  });
};
