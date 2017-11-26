import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Loading from 'components/loading';

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
      this.state.enable && <Loading size='xs' />
    );
  }
}

loader.propTypes = {
  // style: PropTypes.object
};

loader.defaultProps = {
  // style: {}
};

export default loader;
