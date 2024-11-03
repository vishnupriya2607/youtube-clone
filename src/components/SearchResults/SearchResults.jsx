import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import './SearchResults.css';

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}&maxResults=20`;
            try {
                const response = await fetch(searchUrl);
                const data = await response.json();
                setResults(data.items || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
        
        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div className="search-results">
            <h2>Search Results for `{searchTerm}`</h2>
            <div className="results-grid">
                {results.map((result) => (
                    <Link to={`/watch/${result.id.videoId}`} key={result.id.videoId} className="result-card">
                        <img src={result.snippet.thumbnails.medium.url} alt={result.snippet.title} />
                        <div className="result-info">
                            <h3>{result.snippet.title}</h3>
                            <p>{result.snippet.channelTitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
