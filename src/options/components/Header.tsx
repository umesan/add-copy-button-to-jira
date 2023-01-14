import { FC, useCallback } from "react";
import styled from "styled-components";

export const HEADER_HEIGHT = 56;

type HeaderProps = {};
const Component: FC<HeaderProps & { className?: string }> = ({ className }) => {
  const manifestData = chrome.runtime.getManifest();
  const onClick = useCallback(() => {
    window.close();
  }, []);

  return (
    <header className={className}>
      <h1 className={`${className}__heading`}>{manifestData.name}</h1>
      <button
        type="button"
        className={`${className}__button`}
        onClick={onClick}
        aria-label={chrome.i18n.getMessage("header_button")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </button>
    </header>
  );
};

export const Header = styled(Component)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT}px;
  padding: 0 12px;
  background-color: rgb(0, 51, 114);

  &__heading {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    width: ${HEADER_HEIGHT}px;
    height: ${HEADER_HEIGHT}px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
