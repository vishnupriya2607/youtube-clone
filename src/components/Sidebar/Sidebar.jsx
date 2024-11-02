import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import home from '../../assets/home.png';
import game from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className='shortcut-links'>
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="Home" /><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game} alt="Game" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="Automobiles" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="Sports" /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="Entertainment" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="Tech" /><p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="Music" /><p>Music</p>
                </div>
                <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt="Blogs" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="News" /><p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link"><img src={jack} alt="PewDiePie" /><p>PewDiePie</p></div>
                <div className="side-link"><img src={simon} alt="MrBeast" /><p>MrBeast</p></div>
                <div className="side-link"><img src={tom} alt="Justin Bieber" /><p>Justin Bieber</p></div>
                <div className="side-link"><img src={megan} alt="5-Minute Crafts" /><p>5-Minute Crafts</p></div>
                <div className="side-link"><img src={cameron} alt="Nas Daily" /><p>Nas Daily</p></div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    sidebar: PropTypes.bool.isRequired,       // Validate sidebar as a boolean and required
    category: PropTypes.number.isRequired,    // Validate category as a number and required
    setCategory: PropTypes.func.isRequired    // Validate setCategory as a function and required
};

export default Sidebar;
