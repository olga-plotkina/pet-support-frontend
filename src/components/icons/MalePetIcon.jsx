import * as React from 'react';
import PropTypes from 'prop-types';

export const MalePetIcon = ({ size = 54, color = '#23C2EF', ...props }) => (
  <svg width={size} height={60} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#a)">
      <path
        d="M34.773 0a2 2 0 0 0-2 2v3.519a2 2 0 0 0 2 2h6.258L30.147 18.263a19.539 19.539 0 0 0-10.603-3.104C8.75 15.159 0 23.853 0 34.579 0 45.304 8.75 54 19.544 54c10.793 0 19.541-8.696 19.541-19.421 0-4.077-1.263-7.86-3.423-10.984L46.363 12.96v6.134a2 2 0 0 0 2 2h3.566c1.105 0 2-.895 2.002-2 .01-5.473.058-11.633.067-17.095C54 .895 53.105 0 52 0H34.773Zm-15.23 22.976c6.45 0 11.676 5.194 11.676 11.603 0 6.408-5.227 11.604-11.675 11.604-6.45 0-11.678-5.196-11.678-11.604 0-6.409 5.229-11.603 11.678-11.603Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-1}
        y={-3}
        width={54.998}
        height={59}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_200_1042" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-1} dy={2} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0" />
        <feBlend in2="effect1_innerShadow_200_1042" result="effect2_innerShadow_200_1042" />
      </filter>
    </defs>
  </svg>
);

MalePetIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
