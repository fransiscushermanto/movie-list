import { css } from "@emotion/css";
import { SVGProps } from "react";

const ribbonCx = css`
  width: 32px;
  height: 41px;
  position: relative;
  display: flex;
  .ipc-watchlist-ribbon__bg {
    width: 100%;
    height: auto;
  }

  .inner-icon {
    position: absolute;
    fill: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.check {
      fill: black;
    }
  }
`;

const ImdbBookmark = ({
  icontype = "fill",
  onClick,
  ...props
}: SVGProps<any> & {
  icontype?: "fill" | "outline";
  [key: string]: any;
}) =>
  icontype === "fill" ? (
    <div onClick={onClick} className={ribbonCx}>
      <svg
        className="ipc-watchlist-ribbon__bg"
        width="24px"
        height="34px"
        viewBox="0 0 24 34"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        {...props}
      >
        <polygon
          className="ipc-watchlist-ribbon__bg-ribbon"
          fill="#f5c518"
          stroke="none"
          points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
        />
        <polygon
          className="ipc-watchlist-ribbon__bg-hover"
          fill="rgba(0,0,0,.2)"
          points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
        />
        <polygon
          className="ipc-watchlist-ribbon__bg-shadow"
          fill="rgba(0,0,0,.32)"
          points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="inner-icon check"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z" />
      </svg>
    </div>
  ) : (
    <div onClick={onClick} className={ribbonCx}>
      <svg
        className="ipc-watchlist-ribbon__bg"
        width="32px"
        height="41px"
        viewBox="0 0 24 34"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        {...props}
      >
        <polygon
          className="ipc-watchlist-ribbon__bg-ribbon"
          fill="rgba(31,31,31,.75)"
          stroke="rgba(255,255,255,.08)"
          points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
        />
        <polygon
          className="ipc-watchlist-ribbon__bg-hover"
          fill="rgba(255,255,255,.32)"
          points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
        />
        <polygon
          fill="rgba(0,0,0,.32)"
          className="ipc-watchlist-ribbon__bg-shadow"
          points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="inner-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation"
      >
        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </svg>
    </div>
  );

export default ImdbBookmark;
