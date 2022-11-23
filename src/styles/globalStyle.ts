import { css } from "@emotion/react";

const globalStyle = css`
  :root {
    --container-width: 1024px;
  }

  html {
    font-family: "Nunito", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

export default globalStyle;
