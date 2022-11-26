import { css } from "@emotion/css";

export const detailCx = css`
  position: relative;

  display: flex;
  flex-direction: column;
  height: auto;

  padding: 10px 20px 20px;

  .movie-top-wrapper {
    margin-bottom: 20px;
    .title {
      min-height: 44px;
      margin-bottom: 4px;
      width: 100%;
    }
    .subtitle {
      min-height: 19px;
      font-size: 14px;
      > *:not(:last-child) {
        margin-right: 8px;
      }
    }
    .movie-type {
      min-height: 14px;
      min-width: 41.3px;
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
        min-width: 58.6px;
        min-height: 29px;

        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        .genre {
          &:not(:last-child) {
            margin-right: 8px;
          }

          padding: 4px 8px;
          border: 1px solid gold;
        }
      }

      .synopsis {
        min-height: 95px;
        margin-top: 10px;

        > p {
          margin: 0;
          font-size: 14px;
        }
      }
    }
  }

  .movie-ratings {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.02);
    padding: 10px;

    width: 100%;
    min-height: 113.5px;
    .rating {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      &.imdb {
        .icon {
          display: flex;
        }
        .rate > span {
          &:nth-child(1) {
            font-size: 18px;
          }
          &:nth-child(2) {
            font-size: 14px;
          }
        }

        .votes {
          font-size: 14px;
          color: grey;
        }
      }
      &.metacritic {
        .rate {
          padding: 8px;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: bold;
          &.unknown {
            color: white;
            background-color: grey;
          }
          &.excellence {
            color: white;
            background-color: #6c3;
          }
          &.good {
            background-color: #fc3;
          }
          &.bad {
            color: white;
            background-color: #f00;
          }
        }
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
      min-width: 86.77px;
      min-height: 21.5px;
      width: fit-content;
      margin-bottom: 4px;
      font-weight: bold;
    }
    .value {
      min-height: 19px;
      font-size: 14px;
      color: grey;
    }
  }

  .movie-detail {
    margin-top: 20px;
  }
`;

export const genreCx = (lastRow: number) => css`
  &[data-row-status="next"] {
    margin-right: 0.5rem;
  }

  &[data-row-status="next"],
  &[data-row-status="next-row"] {
    margin-bottom: 0.5rem;
  }

  &[data-row="${lastRow}"] {
    margin-bottom: 0;
  }

  &[data-col-status="last"] {
    margin-right: 0;
  }
`;
