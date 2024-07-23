import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import AddPhotoForm from './AddPhotoForm';

function App() {
  const [photos, setPhotos] = useState([
    { id: 1, description: 'Sunset at beach', url: 'https://example.com/sunset.jpg' },
    { id: 2, description: 'Mountains in morning mist', url: 'https://example.com/mountains.jpg' },
    { id: 3, description: 'City skyline at night', url: 'https://example.com/city.jpg' }
  ]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const deletePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="App">
      <h1>Product Gallery</h1>
      <AddPhotoForm onAddPhoto={addPhoto} />
      <Gallery photos={photos} onDeletePhoto={deletePhoto} />
    </div>
  );
}

export default App;
