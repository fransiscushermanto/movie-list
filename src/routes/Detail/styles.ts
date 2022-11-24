import { css } from "@emotion/css";

export const detailCx = css`
  position: relative;

  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 10px 20px 20px;

  .movie-top-wrapper {
    margin-bottom: 20px;
    .subtitle {
      font-size: 14px;
      > *:not(:last-child) {
        margin-right: 8px;
      }
    }
    .movie-type {
      margin-top: 10px;
    }
  }

  .movie-poster-wrapper {
    display: flex;
    position: relative;
    .movie-poster {
      display: flex;
      margin-right: 1rem;
      width: 130px;
      min-width: 130px;
      height: 200px;
    }
    .right-poster {
      display: flex;
      flex-direction: column;
      width: 100%;
      .genres {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        margin-bottom: 10px;
        .genre {
          &:not(:last-child) {
            margin-right: 8px;
          }

          padding: 4px 8px;
          border: 1px solid gold;
        }
      }

      .movie-like {
        margin-top: auto;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    .label {
      font-weight: bold;
    }
    .value {
      font-size: 14px;
      color: grey;
    }
  }

  .synopsis {
    margin-top: 20px;
    .title {
      margin-bottom: 10px;
    }
    > p {
      margin: 0;
    }
  }
`;
