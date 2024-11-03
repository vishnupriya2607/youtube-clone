import React from 'react';
import './Video.css';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommended from '../../components/Recommended/Recommended';
import { useParams } from 'react-router-dom'; // Import useParams

const Video = () => {
  const { videoId, categoryId } = useParams(); // Destructure videoId and categoryId from URL params

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} /> {/* Pass categoryId to Recommended if needed */}
    </div>
  );
};

export default Video;
