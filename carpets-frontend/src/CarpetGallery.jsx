// src/components/CarpetGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarpetGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://unsplash.com/s/photos/carpets', {
    params: { query: 'carpets' },
    headers: {
      Authorization: `lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo`,  // Replace with your access key
    },
  })
      .then((response) => {
        setImages(response.data.results);
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