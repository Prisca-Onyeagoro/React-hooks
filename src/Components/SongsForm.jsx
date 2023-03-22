import React, { useState } from 'react';

const SongsForm = ({ Add }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    Add(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default SongsForm;
