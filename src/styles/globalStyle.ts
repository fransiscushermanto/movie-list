import { css } from "@emotion/react";

const globalStyle = css`
  :root {
    --container-width: 1024px;
    --mobile-header-height: 50px;
    --mobile-toolbar-height: 70px;
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
    height: auto;
  }

  #root {
    > header.mobile-header + main {
      margin-top: var(--mobile-header-height);
      &.with-toolbar {
        margin-bottom: var(--mobile-toolbar-height);
      }
    }
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

  .movie-type {
    height: 14px;
    min-width: 41px;
    font-size: 10px;

    text-transform: uppercase;

    width: fit-content;

    border-radius: 4px;
    padding: 0 5px;

    color: white;

    &.movie {
      background-color: red;
    }
    &.series {
      background-color: blueviolet;
    }
    &.episode {
      background-color: black;
    }
    &.game {
      background-color: cadetblue;
    }
  }
`;

export default globalStyle;
