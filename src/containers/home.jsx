import React from 'react';
import SearchBar from '../components/searchBar';
import VideoList from '../components/videoList';
import VideoDetail from '../components/videoDetail';

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
