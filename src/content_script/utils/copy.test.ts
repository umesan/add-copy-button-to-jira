import {
  copyTitleAndUrlText,
  copyTitleAndUrlRichText,
  copyTitleAndUrlMarkdown,
  copyTitleAndUrlHTML,
  copyIdAndTitleAndUrlText,
  copyIdAndTitleAndUrlRichText,
  copyIdAndTitleAndUrlHtml,
  copyTitleText,
  copyIdAndTitleText,
  copyUrlText,
  copyUrlMarkdown,
  copyUrlHTML,
  copyIdAndTitleAndUrlMarkdown,
} from "./copy";
import * as url from "./url";

describe("copy", () => {
  const getIssueURLSpy = jest.spyOn(url, "getIssueURL");
  getIssueURLSpy.mockImplementation((issueKey) => issueKey);

  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        text: "",
        readText() {
          return Promise.resolve(this.text);
        },
        writeText(data: string) {
          this.text = data;
          return Promise.resolve();
        },
      },
    });
  });

  afterAll(() => {
    Object.assign(navigator, { clipboard: undefined });
  });

  test(copyTitleAndUrlText.name, async () => {
    copyTitleAndUrlText({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`タイトル
123`);
  });
  test(copyTitleAndUrlMarkdown.name, async () => {
    copyTitleAndUrlMarkdown({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`[タイトル](123)`);
  });

  test(copyTitleAndUrlHTML.name, async () => {
    copyTitleAndUrlHTML({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`<a href="123" target="_blank">タイトル</a>`);
  });

  test(copyIdAndTitleAndUrlText.name, async () => {
    copyIdAndTitleAndUrlText({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`[123]タイトル
123`);
  });

  test(copyIdAndTitleAndUrlMarkdown.name, async () => {
    copyIdAndTitleAndUrlMarkdown({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`[[123]タイトル](123)`);
  });

  test(copyIdAndTitleAndUrlHtml.name, async () => {
    copyIdAndTitleAndUrlHtml({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`<a href="123" target="_blank">[123]タイトル</a>`);
  });

  test(copyTitleText.name, async () => {
    copyTitleText("タイトル");
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`タイトル`);
  });

  test(copyIdAndTitleText.name, async () => {
    copyIdAndTitleText({
      title: "タイトル",
      issueKey: "123",
    });
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`[123]タイトル`);
  });

  test(copyUrlText.name, async () => {
    copyUrlText("123");
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`123`);
  });

  test(copyUrlMarkdown.name, async () => {
    copyUrlMarkdown("123");
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`[123](123)`);
  });

  test(copyUrlHTML.name, async () => {
    copyUrlHTML("123");
    const test = await navigator.clipboard.readText();
    expect(test).toBe(`<a href="123" target="_blank">123</a>`);
  });
});
