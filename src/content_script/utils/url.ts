import { JIRA_DOMAIN } from "../constants";

/**
 * サブドメインを返却
 */
export const getSubDomain = (): string => {
  const url = window.location.host;
  const subDomain = url.split(".")[0];
  return subDomain;
};

/**
 * 課題画面URLを返却
 */
export const getIssueURL = (issueKey: string): string => {
  const issueUrl = `https://${getSubDomain()}.${JIRA_DOMAIN}/browse/${issueKey}`;
  return issueUrl;
};
