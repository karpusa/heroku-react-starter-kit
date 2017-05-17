import React from 'react';
import { connect } from 'react-redux';
import { searchVideo, searchMock } from 'actions';
import componentWithApi from './componentWithApi';
import SearchBar from 'components/searchBar';
import VideoList from 'components/videoList';
import VideoDetail from 'components/videoDetail';
import mock from 'mock.json';

const home = () => {
  return (
    <div>
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
};


let requests, callbacks;

if (window.location.search.indexOf('mock') !== -1) {
  callbacks = [
    searchMock(mock)
  ];
} else {
  requests = [
    searchVideo('Simon\'s Cat')
    //() => new Promise((resolve) => setTimeout(resolve, 2000)),
    // () => new Promise((resolve, reject) => {
    //   reject(new Error('reject'));
    // })
  ];
}

const options = {
  requests,
  callbacks
};

export default connect()(componentWithApi(home, options));
