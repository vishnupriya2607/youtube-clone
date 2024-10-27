import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';

const Home = ({ sidebar }) => {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed />
            </div>
        </>
    );
};

Home.propTypes = {
    sidebar: PropTypes.bool.isRequired // Validate sidebar as a boolean and required
};

export default Home;
