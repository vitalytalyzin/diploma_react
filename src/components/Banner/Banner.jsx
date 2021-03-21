import React from 'react';
import banner from '../../img/banner.jpg'
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
};

export default Banner;
