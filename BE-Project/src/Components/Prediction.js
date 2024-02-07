import React, { useState } from 'react';
import axios from 'axios';

function Prediction(){
  const [file, setFile] = useState(null);
  const [percentageMalnutrition, setPercentageMalnutrition] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPercentageMalnutrition(response.data.percentage_malnutrition);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error(error); // Handle errors
    }
  };

  return (
    <>
      <form class="m-5" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Upload CSV</button>
      </form>

      {percentageMalnutrition && <p>Percentage Malnutrition: {JSON.stringify(percentageMalnutrition)}</p>}
    </>
  );
}

export default Prediction;
