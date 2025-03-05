import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarpetImages.css';

const CarpetImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint and key
  const apiUrl = 'http://localhost:5000/api/products/images';
  const accessKey = 'lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo'; // Replace with your Unsplash API key

  // Fetch carpet images from Unsplash
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            query: 'carpets',
            per_page: 12, // Number of images to fetch
          },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        setImages(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Error fetching images');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Render loading state or images
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Carpet Images</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.description} />
            <p>{image.description || 'No description available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarpetImages;