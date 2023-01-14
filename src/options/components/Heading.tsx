import type { FC } from "react";
import styled from "styled-components";

type HeadingProps = {};
const Component: FC<HeadingProps & { className?: string }> = ({
  className,
}) => {
  return <h2 className={className}>{chrome.i18n.getMessage("heading")}</h2>;
};

export const Heading = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-size: 1rem;
  border-bottom: 1px solid rgba(218, 220, 224, 1);
`;
