import { css, keyframes } from "@emotion/css";

const skeletonLoading = keyframes`
from {
    background-color: #dddddd;
  }
  to {
    background-color: #eeeeee;
  }
`;

export const skeletonCx = css`
  position: relative;
  cursor: default !important;
  user-select: none;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    animation: ${skeletonLoading} 700ms infinite alternate;
  }
`;

export const circleCx = css`
  clip-path: circle();
`;
