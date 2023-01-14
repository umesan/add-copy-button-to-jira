export type ActivePageIdType =
  | "browse"
  | "boards"
  | "boardsModal"
  | "backlog"
  | "backlogViewDetail"
  | "other";

/**
 * 現在表示している画面のIDを返却する処理
 * JIRAのURLルールは下記となっており、urlから現在の画面を判定する
 *
 * 課題詳細画面
 * https://xxxx.atlassian.net/browse/XX-1234
 *
 * バックログ：デフォルト
 * https://xxxx.atlassian.net/jira/people/123456/boards/123/backlog
 * バックログ：選択状態
 * https://xxxx.atlassian.net/jira/people/123456/boards/123/backlog?selectedIssue=XX-1234&issueLimit=100
 * バックログ：詳細表示
 * https://xxxx.atlassian.net/jira/people/123456/boards/123/backlog?view=detail&selectedIssue=XX-1234&issueLimit=100
 * バックログ：フィルタ
 * https://xxxx.atlassian.net/jira/people/123456/boards/123/backlog?view=detail&selectedIssue=XX-1234&issueLimit=100&assignee=123456
 *
 * カンバン：デフォルト
 * https://xxxx.atlassian.net/jira/people/123456/boards/123
 * カンバン：選択状態
 * https://xxxx.atlassian.net/jira/people/123456/boards/123?selectedIssue=XX-1234
 * カンバン：ダイアログ表示
 * https://xxxx.atlassian.net/jira/people/123456/boards/123?modal=detail&selectedIssue=XX-1234
 * カンバン：フィルタ
 * https://xxxx.atlassian.net/jira/people/123456/boards/123?assignee=xxxx&assignee=abcde
 *
 * レポート
 * https://xxxx.atlassian.net/jira/people/123456/boards/123/reports/burndown-chart?swimlane=123&swimlane=123&column=123&column=123&column=123&column=123&column=123&days=7
 */
export const getActivePageId = (): ActivePageIdType => {
  const pathname = location.pathname;
  const search = location.search;

  // 課題詳細画面か？
  const isBrowse = pathname.includes("/browse/");
  if (isBrowse) {
    return "browse";
  }

  // カンバン画面か？
  const isBoardsReg = new RegExp("/*boards/(\\d*)$");
  const isBoards =
    isBoardsReg.test(pathname) && !search.includes("modal=detail");

  if (isBoards) {
    return "boards";
  }

  // カンバン：ダイアログ画面か？
  const isBoardsModal =
    isBoardsReg.test(pathname) && search.includes("modal=detail");

  if (isBoardsModal) {
    return "boardsModal";
  }

  // バックログ画面か？
  const isBacklogReg = new RegExp("/*boards/(\\d*)/backlog$");
  const isBacklog =
    isBacklogReg.test(pathname) && !search.includes("view=detail");
  if (isBacklog) {
    return "backlog";
  }

  // バックログ：詳細表示画面か？
  const isBacklogViewDetail =
    isBacklogReg.test(pathname) && search.includes("view=detail");
  if (isBacklogViewDetail) {
    return "backlogViewDetail";
  }

  return "other";
};
