import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';

const Home = ({ sidebar }) => {
    const [category,setCategory]=useState(0);

    return (
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed  category={category}/>
            </div>
        </>
    );
};

Home.propTypes = {
    sidebar: PropTypes.bool.isRequired, // Validate sidebar as a boolean and required
    category: PropTypes.number.isRequired,    // Validate category as a number and required
    setCategory: PropTypes.func.isRequired  
};

export default Home;
