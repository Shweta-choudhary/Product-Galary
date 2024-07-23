import React, { useState } from 'react';

const AddPhotoForm = ({ onAddPhoto }) => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !url) return;
    
    const newPhoto = {
      id: Date.now(),
      description,
      url
    };
    
    onAddPhoto(newPhoto);
    setDescription('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Photo</button>
    </form>
  );
};

export default AddPhotoForm;
