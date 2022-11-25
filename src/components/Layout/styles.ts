import { css } from "@emotion/css";

export const mainCx = css`
  max-width: var(--container-width);
  margin: 0 auto;

  height: 100%;
`;

export const headerCx = css`
  z-index: 1;
  background-color: white;
  position: fixed;
  top: 0;

  width: 100%;
`;

export const navCx = css`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

  height: var(--mobile-header-height);

  .inner-nav {
    display: flex;
    align-items: center;
    max-width: var(--container-width);
    width: 100%;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
    .back-btn {
      cursor: pointer;
      display: flex;
      margin-right: 8px;
    }
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .brand {
    text-decoration: none;
    color: black;
  }
`;

export const toolbarCx = css`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  width: 100%;
  height: var(--mobile-toolbar-height);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    i {
      display: flex;
      margin-bottom: 4px;
    }
    span {
      text-transform: capitalize;
    }
  }
`;
