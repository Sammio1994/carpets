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
        Authorization: `Client-ID lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo`,  // Replace with your actual access key
      },
    })
    .then((response) => {
      setImages(response.data.results);  // Store the API results in the state
      setLoading(false);  // Turn off the loading state once data is fetched
    })
    .catch((error) => {
      console.error('Error fetching images:', error);  // Handle errors
      setLoading(false);
    });
  }, []);  // Empty dependency array to run this effect only once on component mount

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
