import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    try {
      const videodetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videodetail_url);
      const data = await response.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const fetchOtherData = async () => {
    if (!apiData) return;
    try {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const channelResponse = await fetch(channelData_url);
      const channelData = await channelResponse.json();
      setChannelData(channelData.items[0]);

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      const commentResponse = await fetch(comment_url);
      const commentData = await commentResponse.json();
      setCommentData(commentData.items || []);
    } catch (error) {
      console.error("Error fetching channel or comment data:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={apiData ? apiData.snippet.title : "YouTube Video Player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        style={{ border: 'none' }}
      />
      <h3>{apiData ? apiData.snippet.title : "Loading..."}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} Views &bull;{' '}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="like icon" />{apiData ? value_converter(apiData.statistics.likeCount) : "0"}
          </span>
          <span>
            <img src={dislike} alt="dislike icon" />{apiData?.statistics.dislikeCount || "0"}
          </span>
          <span>
            <img src={share} alt="share icon" />Share
          </span>
          <span>
            <img src={save} alt="save icon" />Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : user}
          alt="channel profile"
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Loading..."}</p>
          <span>
            {channelData ? value_converter(channelData.statistics.subscriberCount) : "0"} Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 270) : "Loading description..."}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments</h4>
        {commentData.map((item, index) => {
          const commentSnippet = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comment">
              <img
                src={commentSnippet.authorProfileImageUrl || user}
                
              />
              <div>
                <h3>{commentSnippet.authorDisplayName} <span>{moment(commentSnippet.publishedAt).fromNow()}</span></h3>
                <p>{commentSnippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="like icon" />
                  <span>{value_converter(commentSnippet.likeCount)}</span>
                  <img src={dislike} alt="dislike icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
