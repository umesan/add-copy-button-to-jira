import type { FC } from "react";
import styled from "styled-components";

type CopyFormatPreviewProps = {
  type: string;
};
const Component: FC<CopyFormatPreviewProps & { className?: string }> = ({
  className,
  type,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>
          {chrome.i18n.getMessage("copyFormatPreview_title")}
        </div>
        <pre className={`${className}__pre`}>
          <code className={`${className}__code`}>
            {type === "type1-1" && (
              <>
                {`${chrome.i18n.getMessage("copyFormatPreview_issueTitle")}
https://xxxxx.atlassian.net/browse/XXX-1234`}
              </>
            )}

            {type === "type1-2" && (
              <a href="https://xxxxx.atlassian.net/browse/XXX-1234">
                {chrome.i18n.getMessage("copyFormatPreview_issueTitle")}
              </a>
            )}
            {type === "type1-3" && (
              <>
                {`[${chrome.i18n.getMessage(
                  "copyFormatPreview_issueTitle"
                )}](https://xxxxx.atlassian.net/browse/XXX-1234)`}
              </>
            )}
            {type === "type1-4" && (
              <>
                {`<a href="https://xxxxx.atlassian.net/browse/XXX-1234" target="_blank">${chrome.i18n.getMessage(
                  "copyFormatPreview_issueTitle"
                )}</a>`}
              </>
            )}
            {type === "type2-1" && (
              <>
                {`[XXX-1234] ${chrome.i18n.getMessage(
                  "copyFormatPreview_issueTitle"
                )}
https://xxxxx.atlassian.net/browse/XXX-1234`}
              </>
            )}
            {type === "type2-2" && (
              <a href="https://xxxxx.atlassian.net/browse/XXX-1234">
                [XXX-1234]
                {chrome.i18n.getMessage("copyFormatPreview_issueTitle")}
              </a>
            )}
            {type === "type2-3" && (
              <>
                {`[[XXX-1234] ${chrome.i18n.getMessage(
                  "copyFormatPreview_issueTitle"
                )}](https://xxxxx.atlassian.net/browse/XXX-1234)`}
              </>
            )}
            {type === "type2-4" && (
              <>
                {`<a href="https://xxxxx.atlassian.net/browse/XXX-1234" target="_blank">[XXX-1234] ${chrome.i18n.getMessage(
                  "copyFormatPreview_issueTitle"
                )}</a>`}
              </>
            )}
            {type === "type3-1" && (
              <>{`${chrome.i18n.getMessage("copyFormatPreview_issueTitle")}`}</>
            )}
            {type === "type4-1" && (
              <>{`[XXX-1234]${chrome.i18n.getMessage(
                "copyFormatPreview_issueTitle"
              )}`}</>
            )}
            {type === "type5-1" && (
              <>{`https://xxxxx.atlassian.net/browse/XXX-1234`}</>
            )}
            {type === "type5-2" && (
              <>{`[https://xxxxx.atlassian.net/browse/XXX-1234](https://xxxxx.atlassian.net/browse/XXX-1234)`}</>
            )}
            {type === "type5-3" && (
              <>{`<a href="https://xxxxx.atlassian.net/browse/XXX-1234" target="_blank">
https://xxxxx.atlassian.net/browse/XXX-1234
</a>`}</>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

export const CopyFormatPreview = styled(Component)`
  padding: 40px 10px;

  &__inner {
    position: relative;
    padding: 10px;
    border: 1px solid #cccccc;
  }

  &__title {
    position: absolute;
    top: -12px;
    left: 10px;
    padding: 0 10px;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: #ffffff;
  }

  &__pre {
    display: flex;
    align-items: center;
    min-height: 84px;
    padding: 15px;
    font-size: 0.812rem;
    color: #333333;
    background-color: rgba(241, 243, 244, 1);
  }
`;
