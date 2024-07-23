import React from 'react';
import './Gallery.css';

const Gallery = ({ photos, onDeletePhoto }) => {
  return (
    <div className="gallery">
      {photos.map(photo => (
        <div className="photo-card" key={photo.id}>
          <img src={photo.url} alt={photo.description} />
          <p>{photo.description}</p>
          <button onClick={() => onDeletePhoto(photo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
