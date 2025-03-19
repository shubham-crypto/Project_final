import React from 'react';

const LocationIcon = ({ fill = "currentColor", ...props }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    {...props} // This allows passing custom props such as className or style
  >
    <g>
      <g>
        <path
          d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58
          c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240
          c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z"
          fill={fill} // Allow customization of the color through the fill prop
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085
          C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z"
          fill={fill} // Allow customization of the color through the fill prop
        />
      </g>
    </g>
  </svg>
);

export default LocationIcon;
