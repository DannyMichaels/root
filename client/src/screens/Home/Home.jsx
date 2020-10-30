import React from 'react';
import "./Home.css";
import Logo from './photos/ROOT_Logo_RevWhite.png';
import CommunityImg from './photos/molly_profile_community_advocacy_1res.png';

function Home(props) {
  return (
    <div className="homepage">
      
      <div className="homepage-header"> 
        <img className="homepage-root-logo" alt="root-logo" src={Logo}/>
          <div className="homepage-header-text-container">
          <h2 className="homepage-subtitle">GREEN TRANSPORT</h2>
          <div className="homepage-news-container">
            <p className="homepage-subtitle-a">Articles, News and Inspiration For You</p>
            <p className="homepage-subtitle-b">California Will Phase Out Gasoline-Powered Cars in <br></br>Fight Against Climate Change ></p>
          </div>
        </div>
        <hr></hr>
        <nav className="homepage-header-navbar">
          <button><p className="button-text">Plan Your Route</p></button>
          <button><p className="button-text">Climate Impact By Transportation Type</p></button>
          <button><p className="button-text">Transportation <br></br>Policies + Initiatives</p></button>
        </nav>
      </div>

      <div className="homepage-body">
        <section className="policies-section">
          <span className="policies-text">
            <h3 className="policies-text-headline">TRANSPORTATION <br></br>POLICIES + INITIATIVES</h3>
            <p>See what's happening in our list of locations!</p>
          </span>
        </section>
        <section className="climate-impact-section">
          <h3>CLIMATE IMPACT</h3>
          <p>Your Transportation options ranked by carbon emissions.</p>
        </section>
        <section className="community-advocacy-section">
          <div className="community-a"><h3>COMMUNITY + ADVOCACY</h3></div>
          <div className="community-b"><img className="community-advocacy-img" src={CommunityImg} alt="community-advocacy"/></div>
        </section>
      </div>

    </div>
  );
}

export default Home;