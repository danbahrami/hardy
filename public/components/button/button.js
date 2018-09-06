import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-styles.scss';

const sizeClasses = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

const typeClasses = {
  primary: styles.typePrimary,
  secondary: styles.typeSecondary,
  negative: styles.typeNegative,
};

const Button = ({ children, size, type }) =>
  <button
    className={`${styles.button} ${sizeClasses[size]} ${typeClasses[type]}`}
  >
    {children}
  </button>;

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'negative']),
};

export default Button;
