import { css } from "@emotion/css";

export const watchlistCx = css`
  padding: 20px;
  .watchlist {
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
