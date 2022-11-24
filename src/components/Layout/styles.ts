import { css } from "@emotion/css";

const headerHeight = 50;

export const mainCx = css`
  max-width: var(--container-width);
  margin: 0 auto;

  margin-top: ${headerHeight}px;
  height: 100%;
  max-height: calc(100% - ${headerHeight}px);
`;

export const mobileHeaderCx = css`
  z-index: 1;
  background-color: white;
  position: fixed;
  top: 0;

  width: 100%;
`;

export const navCx = css`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

  height: ${headerHeight}px;

  .inner-nav {
    display: flex;
    align-items: center;
    max-width: var(--container-width);
    width: 100%;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  .brand {
    text-decoration: none;
    color: black;
  }
`;

export const mobileToolbarCx = css``;
