import { SVGProps } from "react";

export const MicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    viewBox="0 0 24 24"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <rect x={9} y={2} width={6} height={11} rx={3} />
    <path d="M5 10a7 7 0 0 0 14 0M8 21h8M12 17v4" />
  </svg>
);
