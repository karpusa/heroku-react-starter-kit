import React from 'react';
import styles from './style.less';
import classNames from 'classnames';
import PropTypes from 'prop-types';

console.log(styles);

const loadingScreen = (props) => {
  console.log(props.size);
  const loadingClass = classNames(styles.loading, {
    [styles[`loading_${props.size}`]] : props.size
  });
  const loadingSquareClass = classNames(styles.loading__square, {
    [styles[`loading__square_${props.size}`]] : props.size
  });
  return (
    <div className={loadingClass}>
      {[...Array(7)].map((x, i) =>
        <div
            className={loadingSquareClass}
            key={i}
        />
      )}
    </div>
  )
};

loadingScreen.propTypes = {
  size: PropTypes.string
};

loadingScreen.defaultProps = {
  size: null
};

export default loadingScreen;
