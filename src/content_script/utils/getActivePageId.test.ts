import { getActivePageId, ActivePageIdType } from "./getActivePageId";

describe(getActivePageId.name, () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "",
        search: "",
      },
      writable: true,
    });
  });

  test.each`
    pathname                                                   | search                                                                | result
    ${"/browse/XX-1234"}                                       | ${""}                                                                 | ${"browse"}
    ${"/jira/people/123456/boards/123/backlog"}                | ${""}                                                                 | ${"backlog"}
    ${"/jira/people/123456/boards/123/backlog"}                | ${"selectedIssue=XX-1234&issueLimit=100"}                             | ${"backlog"}
    ${"/jira/people/123456/boards/123/backlog"}                | ${"view=detail&selectedIssue=XX-1234&issueLimit=100"}                 | ${"backlogViewDetail"}
    ${"/jira/people/123456/boards/123/backlog"}                | ${"view=detail&selectedIssue=XX-1234&issueLimit=100&assignee=123456"} | ${"backlogViewDetail"}
    ${"/jira/people/123456/boards/123"}                        | ${""}                                                                 | ${"boards"}
    ${"/jira/people/123456/boards/123"}                        | ${"selectedIssue=XX-1234"}                                            | ${"boards"}
    ${"/jira/people/123456/boards/123"}                        | ${"modal=detail&selectedIssue=XX-1234"}                               | ${"boardsModal"}
    ${"/jira/people/123456/boards/123"}                        | ${"assignee=xxxx&assignee=abcde"}                                     | ${"boards"}
    ${"/jira/people/123456/boards/123/reports/burndown-chart"} | ${""}                                                                 | ${"other"}
  `(
    "$pathname?$search の場合、$result になること",
    (params: {
      pathname: string;
      search?: string;
      result: ActivePageIdType;
    }) => {
      global.window = Object.create(window);
      Object.defineProperty(window, "location", {
        value: {
          pathname: params.pathname,
          search: params.search,
        },
      });
      expect(getActivePageId()).toBe(params.result);
    }
  );
});
