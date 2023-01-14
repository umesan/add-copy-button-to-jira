import { EXTENSION_ID } from "../constants";

export const copyButtonElement = `
  <div class="${EXTENSION_ID}">
    <button
      type="button"
      id="${EXTENSION_ID}"
      class="${EXTENSION_ID}__button"
      data-state="default"
    >

      <svg class="${EXTENSION_ID}__svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>

      <svg class="${EXTENSION_ID}__svgDone" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>

    </button>
    <span class="${EXTENSION_ID}__tooltip">${chrome.i18n.getMessage(
  "contentScript_copyButtonTooltip"
)}</span>
  </div>
`;
