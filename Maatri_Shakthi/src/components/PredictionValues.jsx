import React from 'react';

const PredictionValues = () => {
  return (
    <div className="container mx-auto px-4 py-5 mt-100">
      <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Enter Values</h2>
        <form>
          {/* Input fields */}
          <div className="mb-4">
            <label htmlFor="HC63" className="block text-sm font-medium text-gray-700">Preceding Birth Interval</label>
            <input type="text" id="HC63" name="HC63" placeholder="Enter Preceding Birth Interval" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500" tabIndex="1" />
          </div>
          {/* Add other input fields similarly */}
          <div className="mb-4">
            <label htmlFor="HC64" className="block text-sm font-medium text-gray-700">Birth Order Number</label>
            <input type="text" id="HC64" name="HC64" placeholder="Enter Birth Order Number" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500" tabIndex="2" />
          </div>
          {/* Add other input fields similarly */}

          {/* Submit button */}
          <div className="mt-6">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" tabIndex="3">
              Submit
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default PredictionValues;
