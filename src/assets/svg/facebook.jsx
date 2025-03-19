import React from 'react';

const FacebookIcon = ({ fill = "black", ...props }) => (
  <svg
    id="Layer_1"
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}  // This allows passing custom props (e.g., for styling or className)
  >
    <path
      d="m255.1824 7.7579q69.23.79 125.0851 34.0293a249.7343 249.7343 0 0 1 88.8909 89.4346q33.0371 56.1914 33.8244 125.8428-1.962 95.3-60.1167 162.791c-38.77 44.9941-88.425 72.83-139.8274 83.5009v-178.1275h48.5969l10.99-70h-73.5869v-45.8481a39.844 39.844 0 0 1 8.4739-26.3232q8.8275-11.2527 31.0895-11.8287h44.4366v-61.3184q-.9563-.3077-18.15-2.4336a360.7434 360.7434 0 0 0 -39.16-2.4336q-44.4328.205-70.2811 25.0674-25.8488 24.8554-26.4085 71.9209v53.1973h-56v70h56v178.1275c-63.1149-10.6709-112.77-38.5068-151.54-83.5009s-58.808-99.2578-60.1162-162.791q.7851-69.6546 33.8236-125.8428a249.7389 249.7389 0 0 1 88.8917-89.4346q55.8534-33.2329 125.0842-34.0293z"
      fillRule="evenodd"
      fill={fill} 
    />
  </svg>
);

export default FacebookIcon;
