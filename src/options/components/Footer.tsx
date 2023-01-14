import type { FC } from "react";
import styled from "styled-components";

type FooterProps = {};
const Component: FC<FooterProps & { className?: string }> = ({ className }) => {
  const manifestData = chrome.runtime.getManifest();

  return (
    <footer className={className}>
      <p
        className={`${className}__version`}
      >{`VER ${manifestData["version"]}`}</p>
    </footer>
  );
};

export const Footer = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px;

  &__version {
    font-size: 1rem;
    color: #42526e;
  }
`;
