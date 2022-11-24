import { css } from "@emotion/css";

export const moviePosterCx = css`
  position: relative;
  cursor: pointer;

  display: flex;
  width: 150px;
  min-width: 150px;
  height: 200px;
  min-height: 200px;

  .watchlist {
    position: absolute;
    display: flex;
    top: 0;
    left: 5%;
  }

  img,
  .placeholder {
    width: 100%;
    height: 100%;
  }

  .placeholder {
    background: rgba(0, 0, 0, 0.2);
  }
`;
