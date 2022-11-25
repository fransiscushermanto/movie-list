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
