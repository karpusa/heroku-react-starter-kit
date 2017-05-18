import React from 'react'
import { compose, lifecycle, branch, renderNothing, withState, renderComponent } from 'recompose'
import Loading from 'components/loading';
import Error from 'components/error';

// returns HOC
const componentWithApi = (BaseComponent, options) => {
  const {
    requests,
    callbacks
  } = options;

  const handleOnClickButton = () => {
    global.location.reload();
  };

  return compose(
    // are we done?
    withState('loadedRequest', 'setLoadedRequest', !requests),
    // if failed request set error message
    withState('failedRequest', 'setFailedRequest', null),
    lifecycle({
      componentDidMount() {
        if (callbacks) {
          callbacks.map(r => r(this.props.dispatch));
        }
        if (requests) {
          Promise.all(requests.map(r => r(this.props.dispatch)))
            .then(() => {
              this.props.setLoadedRequest(true);
            }).catch((reason) => {
              this.props.setFailedRequest(reason.message);
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
          return (
            <Error
                buttonText="Refresh page"
                handleOnClickButton={handleOnClickButton}
                header="500"
                row1="Error status"
                row2={prop.failedRequest}
            />
          );
        } else {
          return <Loading />;
        }
      })
    )
  )(renderNothing());
};

export default componentWithApi;
