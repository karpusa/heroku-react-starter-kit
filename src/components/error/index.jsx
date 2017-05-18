import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';
import PropTypes from 'prop-types';

const Error = ({header, row1, row2, buttonText, handleOnClickButton}) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.header}>{header}</div>
        <hr className={styles.hr} />
        <div className={styles.row1}>{row1}</div>
        <div className={styles.row2}>{row2}</div>
        <Link
            className={styles.btn}
            onClick={handleOnClickButton}
            to='/'
        >
          {buttonText}
        </Link>
      </div>
    </div>
  )
};

Error.propTypes = {
  buttonText: PropTypes.string,
  handleOnClickButton: PropTypes.func,
  header: PropTypes.string,
  row1: PropTypes.string,
  row2: PropTypes.string,
};

Error.defaultProps = {
  buttonText: 'Back to homepage',
  handleOnClickButton: () => {},
  header: '404',
  row1: 'Page not found',
  row2: 'We are sorry but the page you are looking for does not exist.',
};

export default Error;
