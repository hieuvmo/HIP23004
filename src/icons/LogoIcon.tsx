import { SVGProps } from "react";

const LogoIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="74"
      height="24"
      viewBox="0 0 74 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_655_5058)">
        <path
          d="M0 0.526443H4.94049L10.6865 12.7667L17.6945 0.526443H21.3462L10.6865 23.5L0 0.526443Z"
          fill="#FF7200"
        />
        <path
          d="M13.8011 23.5H17.9093L24.1654 10.969L31.3345 23.5H35.201L41.8062 10.969L49.029 23.5H53.0834L41.6183 0.5L33.1335 17.8425L24.3534 0.526437L13.8011 23.5Z"
          fill="black"
        />
        <path
          d="M62.32 0.5C55.8759 0.5 50.64 5.65517 50.64 12C50.64 18.3448 55.8759 23.5 62.32 23.5C68.7641 23.5 74 18.3448 74 12C74 5.65517 68.7641 0.5 62.32 0.5ZM68.2271 17.2609C66.3744 19.1115 60.709 22.0195 56.2786 17.3931C51.902 12.8195 57.4332 7.00345 57.4332 7.00345C59.6349 4.94138 64.8171 2.37701 68.4956 6.21034C72.201 10.0701 70.0798 15.4103 68.2271 17.2609Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_655_5058">
          <rect
            width="74"
            height="23"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoIcon;
