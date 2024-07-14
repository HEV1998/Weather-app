import React from 'react';
const Footer = () => {
    console.log('Footer rendered');
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">&copy; 2024 WeatherApp. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
