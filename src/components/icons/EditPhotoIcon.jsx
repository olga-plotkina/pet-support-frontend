import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const EditPhotoIcon = ({
  width = 20,
  heigth = 20,
  color = theme.colors.accent,
  ...props
}) => (
  <svg width={width} height={heigth} fill="none" viewBox="0 0 18 19" {...props}>
    <path d="M9 7.708a2.708 2.708 0 1 0 0 5.417 2.708 2.708 0 0 0 0-5.417Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.708.208c-1.15 0-2.083.933-2.083 2.084v.148a.685.685 0 0 1-.685.685A3.899 3.899 0 0 0 .042 7.024v3.842c0 1.336 0 2.384.08 3.22.08.854.248 1.552.626 2.168a4.792 4.792 0 0 0 1.582 1.581c.615.378 1.314.546 2.167.627.837.08 1.884.08 3.22.08h2.566c1.336 0 2.383 0 3.22-.08.853-.081 1.552-.25 2.167-.627a4.792 4.792 0 0 0 1.582-1.581c.378-.616.546-1.315.627-2.168.08-.836.08-1.884.08-3.22V7.024a3.899 3.899 0 0 0-3.9-3.9.684.684 0 0 1-.684-.684v-.148c0-1.151-.933-2.084-2.083-2.084H6.708ZM5.042 10.417a3.958 3.958 0 1 1 7.916 0 3.958 3.958 0 0 1-7.916 0ZM14 7.917a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Z"
      fill={color}
    />
  </svg>
);

EditPhotoIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  heigth: PropTypes.number,
};
