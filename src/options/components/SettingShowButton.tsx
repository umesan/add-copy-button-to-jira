import { FC, Suspense } from "react";
import styled from "styled-components";
import { Loading } from "./Loading";
import { SettingShowButtonForm } from "./SettingShowButtonForm";

type SettingShowButtonProps = {};
const Component: FC<SettingShowButtonProps & { className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h3 className={`${className}__heading`}>
          {chrome.i18n.getMessage("settingShowButton_heading")}
        </h3>
        <p className={`${className}__lead`}>
          {chrome.i18n.getMessage("settingShowButton_lead")}
        </p>

        <Suspense fallback={<Loading />}>
          <SettingShowButtonForm />
        </Suspense>
      </div>
    </div>
  );
};

export const SettingShowButton = styled(Component)`
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
    padding: 10px 0;
  }
`;
