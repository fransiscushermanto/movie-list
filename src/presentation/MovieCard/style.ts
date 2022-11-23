import { css } from "@emotion/css";

export const movieCardCx = css`
  display: flex;
  .movie-poster {
    cursor: pointer;
    margin-right: 16px;

    width: 150px;
    min-width: 150px;
    height: 200px;
    min-height: 200px;
    img,
    .placeholder {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }

    .placeholder {
      background: rgba(0, 0, 0, 0.2);
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
      .type {
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
      }

      .like {
        display: flex;
        margin-left: auto;
        svg {
          &[like="true"] {
            fill: orangered;
          }
        }
      }
    }
  }
`;
