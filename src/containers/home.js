import React from 'react';
import SearchBar from '../components/searchBar/index';
import VideoList from '../components/videoList/index';
import VideoDetail from '../components/videoDetail/index';

const noPage = () => {
  return (
    <div>
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default noPage;
