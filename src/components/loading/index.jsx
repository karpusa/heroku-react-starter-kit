import React from 'react';
import styles from './style.less';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const loading = (props) => {
  const rootClass = classNames(styles.root, {
    [styles[`root_${props.size}`]] : props.size
  });
  const rootSquareClass = classNames(styles.root__square, {
    [styles[`root__square_${props.size}`]] : props.size
  });
  return (
    <div className={rootClass}>
      {[...Array(7)].map((x, i) =>
        <div
            className={rootSquareClass}
            key={i}
        />
      )}
    </div>
  )
};

loading.propTypes = {
  size: PropTypes.string
};

loading.defaultProps = {
  size: null
};

export default loading;
