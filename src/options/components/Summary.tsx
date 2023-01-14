import type { FC } from "react";
import styled from "styled-components";

export const HEADER_HEIGHT = 56;

type SummaryProps = {};
const Component: FC<SummaryProps & { className?: string }> = ({
  className,
}) => {
  const manifestData = chrome.runtime.getManifest();
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h3 className={`${className}__heading`}>
          {chrome.i18n.getMessage("summary_heading")}
        </h3>
        <p className={`${className}__lead`}>
          {manifestData.name}
          {chrome.i18n.getMessage("summary_lead")}
        </p>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            {chrome.i18n.getMessage("summary_item01")}
          </li>
          <li className={`${className}__item`}>
            {chrome.i18n.getMessage("summary_item02")}
          </li>
          <li className={`${className}__item`}>
            {chrome.i18n.getMessage("summary_item03")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Summary = styled(Component)`
  font-size: 0.875rem;
  color: #202124;
  border-bottom: 1px solid rgba(218, 220, 224, 1);

  &__inner {
    padding: 20px;
  }

  &__heading {
    font-size: 0.875rem;
  }

  &__lead {
    padding-top: 10px;
  }

  &__list {
    padding: 20px 20px 0;
  }

  &__item {
    list-style-position: inside;
    list-style-type: disc;
  }
`;
