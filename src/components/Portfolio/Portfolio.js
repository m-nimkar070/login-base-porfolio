import React from 'react';
import { useAppContext } from '../Context/AppContext';
import style from "./portfolio.module.css";
import client from "../../Assets/client.jpg"
import gif from "../../Assets/thankyou.gif";
import Footer from '../Footer/Footer';

const Portfolio = () => {
  const { handleLogout, data } = useAppContext();
  const slicedData = data.slice(1);

  if (!data || data.length === 0) {
    return (
      <div className={style.wrapper}>
        <p>Loading...</p>
      </div>
    );
  }

  // Check for if data[0] is available
  if (!data[0]) {
    return (
      <div className={style.wrapper}>
        <p>No user data available</p>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <div className={style.nav}>
        <h2>Welcome {data[0].name}</h2>
        <button className={style.btn} onClick={handleLogout}>Logout</button>
      </div>
      <div className={style.details}>
        <h1>I'm {data[0].name.split(" ")[0]} <span>{data[0].name.split(" ")[1]}</span></h1>
        <p>This is my portfolio To showcase my
          <br />Skills in Front-End Technologies
        </p>
        <a href={gif} id='download' download>Download CV</a>

      </div>
      <p>Following are my some of clients with thier details ...!</p>
      <div className= {style.card} >
        {slicedData.map(item=>
          <div className={style.cardLayout} key={item.id}>
              <img src={client} alt={item.username} />
            <div className={style.content}>
              <div className={style.title}>
                <p>Name:</p> 
                <p>{item.name}</p>
              </div>
              <div className={style.description}>
                <p>Email:</p>
                <p>{item.email}</p>
              </div>
              <div className={style.website}>
                <p>Website:</p>
                <p>{item.website}</p>
              </div>
              <div className={style.company}>
                <p>Company:</p>
                <p>{item.company.name}</p>
              </div>
            </div>
          </div>
         )}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
