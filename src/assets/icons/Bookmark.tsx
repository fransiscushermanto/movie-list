import { SVGProps } from "react";

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 24l-7-6-7 6v-24h14v24z" />
  </svg>
);

export default Bookmark;
