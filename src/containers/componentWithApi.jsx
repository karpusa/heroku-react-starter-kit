import React from 'react'
import { compose, lifecycle, branch, renderNothing, withState, renderComponent } from 'recompose'

// returns HOC
const componentWithApi = (BaseComponent, options) => {
  const {
    requests,
    callbacks
  } = options;

  return compose(
    // are we done?
    withState('loadedRequest', 'setLoadedRequest', !requests),
    // if failed request set error message
    withState('failedRequest', 'setFailedRequest', null),
    lifecycle({
      componentDidMount() {
        if (callbacks) {
          callbacks.map(r => r(this.props.store.dispatch));
        }
        if (requests) {
          Promise.all(requests.map(r => r(this.props.store.dispatch)))
            .then(() => {
              this.props.setLoadedRequest(true);
            }).catch((reason) => {
              this.props.setFailedRequest(`error message - ${reason}`);
            })
        }
      }
    }),
    // You can show some loader while data are loading
    branch(
      ({loadedRequest}) => loadedRequest,
      // BOOOM! Ready to go!
      renderComponent(BaseComponent),
      // loading ... loading .. loading
      renderComponent((prop) => {
        if (prop.failedRequest) {
          // TODO Component for this
          return (<div>{'Error status:'} {prop.failedRequest}</div>);
        } else {
          // TODO Component for Loading
          return (<div>{'Loading...'}</div>);
        }
      })
    )
  )(renderNothing());
};

export default componentWithApi;
