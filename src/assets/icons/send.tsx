import { SVGProps } from "react";

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);
