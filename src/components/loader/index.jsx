import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';

class loader extends Component {
  constructor(props) {
    super(props);
    this.state = {enable: false};
  }

  setStatus(status) {
    this.setState({
      enable: status
    });
  }

  render() {
    return (
      this.state.enable &&
        <div
            className={styles.loader}
            style={this.props.style}
        />
    );
  }
}

loader.propTypes = {
  style: PropTypes.object
};

loader.defaultProps = {
  style: {}
};

export default loader;
