import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from 'actions';
import componentWithApi from './componentWithApi';
import SearchBar from 'components/searchBar';
import VideoList from 'components/videoList';
import VideoDetail from 'components/videoDetail';

const home = () => {
  return (
    <div>
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <SearchBar />
        </div>
      </div>
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-8-tablet">
          <VideoDetail />
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-8-tablet">
          <VideoList />
        </div>
      </div>
    </div>
  );
};


let requests, callbacks = [];

requests = [
  searchVideo('Simon\'s Cat')
  //() => new Promise((resolve) => setTimeout(resolve, 2000)),
  // () => new Promise((resolve, reject) => {
  //   reject(new Error('API internal error'));
  // })
];

// Also can be use callbacks
// callbacks = [
//   searchMock(mock)
// ];

const options = {
  requests,
  callbacks
};

export default connect()(componentWithApi(home, options));
