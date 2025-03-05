// src/components/CarpetGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarpetGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/images')
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.urls.small} alt={image.description} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarpetGallery;