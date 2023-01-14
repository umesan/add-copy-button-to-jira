import type { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "./Header";

type AppContainerProps = PropsWithChildren<{}>;
const Component: FC<AppContainerProps & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__container`}>{children}</div>
    </div>
  );
};

export const AppContainer = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 40px 30px;

  &__container {
    width: 780px;
    min-height: calc(100vh - (${HEADER_HEIGHT}px + 40px));
    background: #ffffff;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  }
`;
