/**
 * インストール時に実行
 */
const optionsUrl = `chrome-extension://${chrome.runtime.id}/pages/options.html`;

export const install = () => {
  chrome.runtime.onInstalled.addListener((details) => {
    console.log(`🎉 ${details.reason}!`);
    if (details.reason === "install") {
      // 初期値を設定後に options.htmlを開く
      chrome.storage.local
        .set({
          type: "type1-1",
          show: {
            issues: true,
            backlog: true,
            sprint: true,
          },
        })
        .then(() => {
          chrome.tabs.create({
            url: optionsUrl,
          });
        });
    }
  });
};

const onClickIcon = () => {
  chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({
      url: optionsUrl,
    });
  });
};

try {
  install();
  onClickIcon();
} catch (error) {
  console.log(`😇`);
  console.log(error);
}
