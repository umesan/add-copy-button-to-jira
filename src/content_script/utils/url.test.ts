import { getSubDomain, getIssueURL } from "./url";

describe(getSubDomain.name, () => {
  test("サブドメインが取得できること", () => {
    beforeEach(() => {
      Object.defineProperty(window, "location", {
        value: {
          host: "test.atlassian.net",
        },
        writable: true,
      });
    });

    global.window = Object.create(window);
    Object.defineProperty(window, "location", {
      value: {
        host: "test.atlassian.net",
      },
    });
    expect(getSubDomain()).toBe("test");
  });
});

describe(getIssueURL.name, () => {
  test("1234を渡したらissueIdを含むURLが返却されること", () => {
    beforeEach(() => {
      Object.defineProperty(window, "location", {
        value: {
          host: "test.atlassian.net",
        },
        writable: true,
      });
    });

    global.window = Object.create(window);
    Object.defineProperty(window, "location", {
      value: {
        host: "test.atlassian.net",
      },
    });

    const issueUrl = getIssueURL("1234");
    expect(issueUrl).toBe("https://test.atlassian.net/browse/1234");
  });
});
