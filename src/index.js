import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
//import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import SearchBar from './containers/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';

//const store = applyMiddleware(reduxThunk)(createStore)(reducers);
const store = createStore(reducers, compose(
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //this.videoSearch('Simon\'s Cat');
  }

  //videoSearch(term) {
    // YTSearch({key: API_KEY, term: term}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });
  //}

  render() {
    //const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
//onSearchTermChange={videoSearch}
    return (
      <div>
        <SearchBar  />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);