import React from 'react';

const Gallery = () => {
    return (
      <div className="gallery">
        <h1>Carpet Gallery</h1>
        <div className="gallery-images">
          <img src="carpet1.jpg" alt="Carpet 1" />
          <img src="carpet2.jpg" alt="Carpet 2" />
          <img src="carpet3.jpg" alt="Carpet 3" />
          {/* Add more images here */}
        </div>
      </div>
    );
  };
  
  export default Gallery;