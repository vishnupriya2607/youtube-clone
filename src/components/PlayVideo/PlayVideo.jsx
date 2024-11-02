import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user from '../../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className ='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3> Best Youtube channel to listen</h3>
      <div className="play-video-info">
        <p>152 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt=""/>125 </span> 
          <span>
            <img src={dislike} alt=""/>2 </span> 
          <span>
            <img src={share} alt=""/>Share</span> 
            <span>
            <img src={save} alt=""/>Save </span> 
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt=""/>
        <div>
          <p> GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p> Channel that make cool</p>
        <p> Subscribe to my channel for more videos </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
      
      <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
        <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
        <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
        <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
        <div className="comment"><img src={user} alt=""/>
        <div>
          <h3>Vishnupriya <span>1 day ago.</span></h3>
          <p> This video make me soo cool thank you very much for this video</p>
          <div className="comment-action">
            <img src={like}/>
            <span>222</span>
            <img src={dislike}/>
          </div>

        </div>
        </div>
      </div>
      </div>
    
  )
}

export default PlayVideo