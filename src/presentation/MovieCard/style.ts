import { css } from "@emotion/css";

export const movieCardCx = css`
  display: flex;
  text-decoration: none;
  color: black;

  &.loading {
    user-select: none;
    pointer-events: none;
  }
  .movie-poster {
    margin-right: 1rem;
    img,
    .placeholder {
      border-radius: 10px;
    }
  }
  .movie-info {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
      width: 100%;
      min-height: 22px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-weight: bold;

      margin-bottom: 8px;
    }

    .year {
      min-height: 19px;
      min-width: 33px;
      width: fit-content;
      font-size: 14px;

      color: grey;
    }

    .bottom-info {
      margin-top: auto;
      display: flex;
      align-items: end;
    }
  }
`;

export const moviePosterCx = css`
  position: relative;

  display: flex;
  width: 150px;
  min-width: 150px;
  height: 200px;
  min-height: 200px;

  .watchlist {
    cursor: pointer;
    position: absolute;
    display: flex;
    top: 0;
    left: 5%;
  }

  .placeholder {
    width: 100%;
    height: 100%;
  }

  .placeholder {
    background: rgba(0, 0, 0, 0.2);
  }
`;
