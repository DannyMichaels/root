import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from "../../Assets/Icons/ROOT_Menu_Settings.svg";
import Leaf from '../../Assets/Icons/ROOT_Leaf.png';
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import TransportationType from '../../components/TransportationType/TransportationType';
import './TransportationTypes.css';
import { getTransportationTypes } from '../../services/transportationTypes';

export default function TransportationTypes() {
  const [transportationTypes, setTransportationTypes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const types = await getTransportationTypes();
      setTransportationTypes(types);
      setLoaded(true);
    }
    getData();
  }, []);

  const TYPES = transportationTypes.map(item =>
    <TransportationType title={item.title} imgURL={item.imgURL} description={item.description} key={item._id}/>
  );

  if (!loaded) {
    return <div className="loading">
      <h1 >Loading</h1>
      <img className="leaf" src={Leaf} alt="leaf" />
      <img className="leaf" src={Leaf} alt="leaf" />
      <img className="leaf" src={Leaf} alt="leaf" />
    </div>
  };

  return (
    <Layout >
      <LogoBanner title="Climate Impact By Transportation Type" />
      <div className="transportation-types-main">
        <div className="title-list">
          <div className="transportation-types-parent">
            <span className="edit-icon-link" >
              <p id="edit-icon-text">
                <Link to="/manage-transportation-types" id="edit-icon-link">Personalize </Link>
              </p>
              <Link to="/manage-transportation-types">
                <img className="edit-icon" alt="Edit Icon" src={Icon} />
              </Link>
            </span>
            <div className="transportation-types">{TYPES}</div>
          </div>
        </div>
        <div className="green-news">
          <div className="green-news-child">
            <div className="green-news-title" id="illinois">
              <h2 className="green-news-title-text">GREEN NEWS</h2>
              <h4 className="green-news-subtitle">A GREEN NEW DEAL FOR ILLINOIS TRANSPORTATION</h4>
            </div>
            <div className="green-news-text">
              <small>Last week while forest fires were raging in California, Governor Gavin Newsom issued an executive order declaring a goal of eliminating fossil fuels from the transportation sector.<br></br><br></br>
                    The order called for ending all sales of fossil fuel-powered vehicles by 2035 and calls on various California state agencies to formulate strategies and regulations to create a “just” transition away from fossil fuel reliance.</small>
            </div>
          </div>
          <div className="green-news-child">
            <div className="green-news-title" id="amazon">
              <h2 className="green-news-title-text">GREEN NEWS</h2>
              <h4 className="green-news-subtitle">AMAZON UNVEILS ITS NEW ELECTRIC DELIVERY VANS BUILT BY RIVIAN</h4>
            </div>
            <div className="green-news-text">
              <small>Amazon unveiled its first all-electric delivery van on Thursday. The vehicle, built by EV startup Rivian, will come with state-of-the-art technology, like sensing equipment and an advanced driver-assist system. <br></br><br></br>
                    The e-commerce giant says it expects to have 10,000 vans on the road making deliveries “as early as 2022,” with a total fleet of 100,000 vehicles expected by 2030.</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};