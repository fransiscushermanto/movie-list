import { css } from "@emotion/css";

export const movieListWrapperCx = css`
  padding: 20px;

  .movie-list {
    padding: 0;
    margin: 0;
    list-style: none;

    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
    grid-template-columns: 1fr;

    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const intersectionCx = css`
  width: 100%;
`;
