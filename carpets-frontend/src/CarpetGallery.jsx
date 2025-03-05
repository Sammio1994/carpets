// src/components/CarpetGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarpetGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Unsplash API request to fetch carpet images
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: 'carpets' },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_KEY}`,  // Use your API key stored in the environment variable
      },
    })
    .then((response) => {
      // Handle the successful response here
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
              <img src={image.urls.small} alt={image.alt_description} />
              <p>{image.alt_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarpetGallery;
