import React, { useState } from 'react';
import axios from 'axios';

function PredictionCSV(){
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
       <div className="container mx-auto px-4 py-5 mt-100">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <form className="mt-10" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                            Upload CSV
                        </label>
                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 8v6m0 0v6m0-6h6m-6 0H8a4 4 0 00-4 4v24a4 4 0 004 4h32a4 4 0 004-4V20a4 4 0 00-4-4h-6l-6-6H8a4 4 0 00-4 4v24"
                                />
            `               </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleFileUpload}
                                    />
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">CSV up to 10MB</p>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Upload
                </button>
            </form>
        </div>
    </div>


    {percentageMalnutrition && (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p>Percentage Malnutrition: {JSON.stringify(percentageMalnutrition)}</p>
        </div>
      )}
    </>
  );
}

export default PredictionCSV;
