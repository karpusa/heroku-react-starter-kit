import React from 'react';
import styles from './style.less';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const embedResponsive = (props) => {
  const rootClass = classNames(styles.embedResponsive, styles.embedResponsive_16by9);

  return (
    <div className={rootClass}>
      <iframe
          className={styles.embedResponsive__item}
          src={props.url}
      />
    </div>
  )
};

embedResponsive.propTypes = {
  url: PropTypes.string
};

embedResponsive.defaultProps = {
  url: null
};

export default embedResponsive;
