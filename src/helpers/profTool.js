import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import styles from './profTool.less';

class profTool extends Component {
  componentDidMount() {
    this.target = document.createElement('div');
    this.target.className = 'profTool';
    document.body.appendChild(this.target);
    this._render();
  }

  shouldComponentUpdate () {
    return false;
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.target);
    document.body.removeChild(this.target);
  }

  handlePerfStart() {
    Perf.start();
  }

  handlePerfStop() {
    Perf.stop();
    Perf.printInclusive();
    //Perf.printWasted();
    //Perf.printOperations();
  }

  _render() {
    ReactDOM.render(
      <div className={styles.root}>
        <button
            onClick={this.handlePerfStart}
            type="button"
        >{'Start Perf'}</button><br />
        <button
            onClick={this.handlePerfStop}
            type="button"
        >{'End Perf'}</button>
      </div>,
      this.target
    );
  }

  render() {
    return <noscript />;
  }

}


export default profTool;
