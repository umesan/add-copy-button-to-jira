import { CopyArgsType } from "../type";
import { getIssueURL } from "./url";

/**
 * 設定条件のコピーを行う処理
 */
export const copy = async (args: CopyArgsType) => {
  const data = await chrome.storage.local.get("type");

  switch (data.type) {
    case "type1-1":
      copyTitleAndUrlText(args);
      break;
    case "type1-2":
      copyTitleAndUrlRichText(args);
      break;
    case "type1-3":
      copyTitleAndUrlMarkdown(args);
      break;
    case "type1-4":
      copyTitleAndUrlHTML(args);
      break;
    case "type2-1":
      copyIdAndTitleAndUrlText(args);
      break;
    case "type2-2":
      copyIdAndTitleAndUrlRichText(args);
      break;
    case "type2-3":
      copyIdAndTitleAndUrlMarkdown(args);
      break;
    case "type2-4":
      copyIdAndTitleAndUrlHtml(args);
      break;
    case "type3-1":
      copyTitleText(args.title);
      break;
    case "type4-1":
      copyIdAndTitleText(args);
      break;
    case "type5-1":
      copyUrlText(args.issueKey);
      break;
    case "type5-2":
      copyUrlMarkdown(args.issueKey);
      break;
    case "type5-3":
      copyUrlHTML(args.issueKey);
      break;
  }
};

/**
 * 課題タイトル＋URL
 * テキスト形式でコピー
 */
export const copyTitleAndUrlText = (args: CopyArgsType) => {
  const text = `${args.title}
${getIssueURL(args.issueKey)}`;
  navigator.clipboard.writeText(text);
};

/**
 * 課題タイトル＋URL
 * リッチテキスト形式でコピー
 */
export const copyTitleAndUrlRichText = (args: CopyArgsType) => {
  const text = `<a href="${getIssueURL(args.issueKey)}">${args.title}</a>`;
  const blob = new Blob([text], { type: "text/html" });
  const blobPlain = new Blob([text], { type: "text/plain" });
  const item = [
    new window.ClipboardItem({ "text/html": blob, "text/plain": blobPlain }),
  ];
  navigator.clipboard.write(item);
};

/**
 * 課題タイトル＋URL
 * markdown形式でコピー
 */
export const copyTitleAndUrlMarkdown = (args: CopyArgsType) => {
  const text = `[${args.title}](${getIssueURL(args.issueKey)})`;
  navigator.clipboard.writeText(text);
};

/**
 * 課題タイトル＋URL
 * HTML形式でコピー
 */
export const copyTitleAndUrlHTML = (args: CopyArgsType) => {
  const text = `<a href="${getIssueURL(args.issueKey)}" target="_blank">${
    args.title
  }</a>`;
  navigator.clipboard.writeText(text);
};

/**
 * 課題ID＋課題タイトル＋URL
 * テキスト形式でコピー
 */
export const copyIdAndTitleAndUrlText = (args: CopyArgsType) => {
  const text = `[${args.issueKey}]${args.title}
${getIssueURL(args.issueKey)}`;
  navigator.clipboard.writeText(text);
};

/**
 * 課題ID＋課題タイトル＋URL
 * リッチテキスト形式でコピー
 */
export const copyIdAndTitleAndUrlRichText = (args: CopyArgsType) => {
  const text = `<a href="${getIssueURL(args.issueKey)}">[${args.issueKey}]${
    args.title
  }</a>`;
  const blob = new Blob([text], { type: "text/html" });
  const blobPlain = new Blob([text], { type: "text/plain" });
  const item = [
    new window.ClipboardItem({ "text/html": blob, "text/plain": blobPlain }),
  ];
  navigator.clipboard.write(item);
};

/**
 * 課題ID＋課題タイトル＋URL
 * HTML形式でコピー
 */
export const copyIdAndTitleAndUrlHtml = (args: CopyArgsType) => {
  const text = `<a href="${getIssueURL(args.issueKey)}" target="_blank">[${
    args.issueKey
  }]${args.title}</a>`;
  navigator.clipboard.writeText(text);
};
/**
 * 課題ID＋課題タイトル＋URL
 * markdown形式でコピー
 */
export const copyIdAndTitleAndUrlMarkdown = (args: CopyArgsType) => {
  const text = `[[${args.issueKey}]${args.title}](${getIssueURL(
    args.issueKey
  )})`;
  navigator.clipboard.writeText(text);
};

/**
 * 課題タイトルのみ
 * テキスト形式でコピー
 */
export const copyTitleText = (title: string) => {
  navigator.clipboard.writeText(title);
};

/**
 * 課題ID + 課題タイトル
 * テキスト形式でコピー
 */
export const copyIdAndTitleText = (args: CopyArgsType) => {
  const text = `[${args.issueKey}]${args.title}`;
  navigator.clipboard.writeText(text);
};

/**
 * URLのみ
 * テキスト形式でコピー
 */
export const copyUrlText = (issueKey: string) => {
  navigator.clipboard.writeText(getIssueURL(issueKey));
};

/**
 * URLのみ
 * markdown形式でコピー
 */
export const copyUrlMarkdown = (issueKey: string) => {
  const url = getIssueURL(issueKey);
  navigator.clipboard.writeText(`[${url}](${url})`);
};

/**
 * URLのみ
 * HTML形式でコピー
 */
export const copyUrlHTML = (issueKey: string) => {
  const url = getIssueURL(issueKey);
  navigator.clipboard.writeText(`<a href="${url}" target="_blank">${url}</a>`);
};
