import * as React from "react";

function CounterClockIcon(className) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#fff"
      viewBox="0 0 24 24"
      {...className}
    >
      <path
        d="M13.15 7.5c0-2.835-2.21-5.65-5.65-5.65-2.778 0-4.152 2.056-4.737 3.15H4.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 0 1-1.427-2.167.5.5 0 1 1 .925-.38c.28.681.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65ZM7.5 4a.5.5 0 0 1 .5.5v2.793l1.854 1.853a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 7 7.5v-3a.5.5 0 0 1 .5-.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        transform="translate(4 4)"
      />
    </svg>
  );
}

export default CounterClockIcon;
