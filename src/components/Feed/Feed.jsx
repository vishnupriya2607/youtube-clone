import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import thumb from '../../assets/thumbnail1.png';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const video_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(video_list)
            .then(response => response.json())
            .then(data => setData(data.items))
            .catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
                        <img src={item.snippet?.thumbnails?.medium?.url || thumb} alt={item.snippet?.title || "Video thumbnail"} />
                        <h2>{item.snippet?.title || 'Best channel to listen to songs'}</h2>
                        <h3>{item.snippet?.channelTitle || 'Saregama'}</h3>
                        <p>{item.statistics?.viewCount || '15k'} views &bull; {new Date(item.snippet?.publishedAt).toLocaleDateString() || '2 days ago'}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Feed;
