import { EXTENSION_ID } from "../constants";
import { CopyArgsType } from "../type";
import { copy } from "../utils/copy";
import { copyButtonElement } from "./copyButtonElement";

export const addCopyButton = () => {
  const attachmentParentHTMLElement = document.querySelector(
    '[data-test-id="issue.issue-view.views.issue-base.foundation.quick-add.quick-add-item.add-attachment"]'
  )?.parentElement?.parentElement;

  if (!attachmentParentHTMLElement) {
    return;
  }

  attachmentParentHTMLElement.insertAdjacentHTML(
    "beforeend",
    copyButtonElement
  );

  const copyButtonHtmlElement = document.getElementById(EXTENSION_ID);
  if (!copyButtonHtmlElement) {
    return;
  }
  copyButtonHtmlElement.addEventListener("click", clickCopyButton);
};

/**
 * 課題タイトルとissueIDを返却
 */
const getTitleAndIssueKey = (): CopyArgsType => {
  const issueItemElement = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
  );
  const issueSummaryHeadingElement = document.querySelector(
    '[data-test-id="issue.views.issue-base.foundation.summary.heading"]'
  );

  const issueKey = issueItemElement?.textContent ?? "";
  const title = issueSummaryHeadingElement?.textContent ?? "";

  return {
    title,
    issueKey,
  };
};

/**
 * コピーボタン押下時処理
 */
const clickCopyButton = (event: MouseEvent) => {
  const target = event.currentTarget;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  if (target.getAttribute("data-state") === "done") {
    return;
  }
  target.setAttribute("data-state", "done");
  copy(getTitleAndIssueKey());
  setTimeout(() => {
    target.setAttribute("data-state", "default");
  }, 1000);
};
