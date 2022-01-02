import axios from 'axios';
import React from 'react';
import FormData from 'form-data';

const handleUpload = (e) => {
  e.preventDefault();

  var imageInput = document.getElementById('imageInput');
  const file = imageInput.files[0];
  console.log(file);

  var imageInput = new FormData();
  imageInput.append('image', file);

  axios.post('http://localhost:4000/image', imageInput)
    .then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      console.log(error);
    })

}

function ImageUpload() {
  return (
    <div className='image-upload'>
      <form id="imageForm">
        <input id="imageInput" type="file" accept="image/*" />
        <button type="submit" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  )
}

export default ImageUpload
