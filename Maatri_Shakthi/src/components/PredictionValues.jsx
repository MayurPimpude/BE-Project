// import React,{ useState } from 'react';
// import axios from 'axios';

// const PredictionValues = () => {

//     const [formData, setFormData] = useState({
//       caseId:'',
//       villageCity:'',
//       district:'',
//       state:'',
//       precedingBirthInterval: '',
//       birthOrderNumber: '',
//       bmiStandardDeviations: '',
//       heightForAgeStandardDeviation: '',
//       weightForAgeStandardDeviation: '',
//       delayPreferenceForChildbearing: '',
//       firstPrenatalVisit: '',
//       totalNumberOfBirthsInLast3Years: '',
//       ironSupplementIntakeDuringPregnancy: '',
//       nonBreastMilkFeedingForInfants: '',
//     });
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post('http://localhost:5000/submit', formData);
//         console.log(response.data); // Handle response if needed
//       } catch (error) {
//         console.error('Error submitting form:', error);
//       }
//     };

//   return (
//     <div class="min-h-screen p-6 bg-white flex items-center justify-center">
//       <div class="container max-w-screen-lg mx-auto mt-10">
//         <div>
//           <h2 class="font-semibold text-xl text-gray-600 p-4 mt-10 mb-6">Malnutrition Prediction Form</h2>
         
//           <form onSubmit={handleSubmit}>
//           <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
         
//             <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//               <div class="text-gray-600">
//                 <p class="font-medium text-lg">Personal Details</p>
//                 <p>Please fill out all the fields.</p>
//               </div>
             
//               <div class="lg:col-span-2">
//                 <div class="grid gap-4 gap-y-2 mt-10 text-sm grid-cols-1 md:grid-cols-5">

               
//                   <div class="md:col-span-5">
//                     <label for="full_name">Case ID</label>
//                     <input type="text" value={formData.caseId} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>
    
//                   <div class="md:col-span-1">
//                     <label for="email">Village/City</label>
//                     <input type="text" value={formData.villageCity} onChange={handleChange} placeholder="City" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>

//                   <div class="md:col-span-2">
//                     <label for="email">District</label>
//                     <input type="text" value={formData.district} onChange={handleChange} placeholder="District" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>

//                   <div class="md:col-span-2">
//                     <label for="email">State</label>
//                     <input type="text" value={formData.state} onChange={handleChange} placeholder="State" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>
    
//                   <div class="md:col-span-1">
//                     <label for="address">Preceding birth interval</label>
//                     <input type="text" value={formData.precedingBirthInterval} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
//                   </div>
    
//                   <div class="md:col-span-1">
//                     <label for="city">Birth order number</label>
//                     <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
//                   </div>

//                   <div class="md:col-span-1">
//                     <label for="city">BMI standard deviations</label>
//                     <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
//                   </div>
    
//                   <div class="md:col-span-2">
//                     <label for="country">Height for age standard deviation</label>
//                     <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                       <input name="country" id="country"  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                     
//                     </div>
//                   </div>
    
//                   <div class="md:col-span-2">
//                     <label for="state">Weight for age standard deviation</label>
//                     <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                       <input name="state" id="state"  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                     
//                     </div>
//                   </div>

//                   <div class="md:col-span-2">
//                     <label for="state">Delay preference for childbearing among women</label>
//                     <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                       <input name="state" id="state"  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                     
//                     </div>
//                   </div>

//                   <div class="md:col-span-1">
//                     <label for="zipcode">First prenatal visit</label>
//                     <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>
    
//                   <div class="md:col-span-2">
//                     <label for="zipcode">Total number of births in last 3 years</label>
//                     <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>
    


//                   <div class="md:col-span-2">
//                     <label for="zipcode">Iron supplement intake during pregnancy</label>
//                     <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                   </div>

//                   <div class="md:col-span-2">
//                     <label for="zipcode">Non-breast milk feeding for infants</label>
//                     <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
//                   </div>
          
//                   <div class="md:col-span-5 text-right">
//                     <div class="inline-flex items-end">
//                       <button type="sub" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//                     </div>
//                   </div>

                
//                 </div>
//               </div>
           
//             </div>
//           </div>
//           </form>
//         </div>
    
      
      
//       </div>
//     </div> 

    
//   );
// };

// export default PredictionValues;


import React, { useState } from 'react';
import axios from 'axios';

const PredictionValues = () => {

    const [formData, setFormData] = useState({
      caseId:'',
      villageCity:'',
      district:'',
      state:'',
      // precedingBirthInterval: '',
      // birthOrderNumber: '',
      // heightForAgeStandardDeviation: '',
      // weightForAgeStandardDeviation: '',
      // weightForheightStandardDeviation:'',
      // bmiStandardDeviations: '',
      
      // totalNumberOfBirthsInLast3Years: '',
      // delayPreferenceForChildbearing: '',
      
      // firstPrenatalVisit: '',
      // ironSupplementIntakeDuringPregnancy: '',
      // nonBreastMilkFeedingForInfants: '',
      // predischarge:'',
      HC63:'',
      HC64:'',
      HC70:'',
      HC71:'',
      HC72:'',
      HC73:'',
      V238:'',
      M11:'',
      M13:'',
      M45:'',
      M55:'',
      M62:'',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const [detection, setDetection] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/submit', formData);
        setDetection(response.data.detection);
        console.log(response.data); // Handle response if needed
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  return (
    <div className="min-h-screen p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto mt-10">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 p-4 mt-10 mb-6">Malnutrition Prediction Form</h2>
         
          <form onSubmit={handleSubmit}>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
         
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
             
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 mt-10 text-sm grid-cols-1 md:grid-cols-5">

               
                  <div className="md:col-span-5">
                    <label htmlFor="caseId">Case ID</label>
                    <input type="text" name="caseId" value={formData.caseId} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>
    
                  <div className="md:col-span-1">
                    <label htmlFor="villageCity">Village/City</label>
                    <input type="text" name="villageCity" value={formData.villageCity} onChange={handleChange} placeholder="City" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="district">District</label>
                    <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>
    
                  {/* Add similar input elements for other fields */}
    
                  {/* <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div> */}

                  <div class="md:col-span-1">
                    <label for="address">Preceding birth interval</label>
                    <input type="text" placeholder='HC63' name='HC63' value={formData.HC63} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
                </div>
    
                  <div class="md:col-span-1">
                    <label for="city">Birth order number</label>
                    <input type="text" placeholder='HC64' name='HC64' value={formData.HC64} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
                  </div>

                  <div class="md:col-span-1">
                    <label for="city">BMI standard deviations</label>
                    <input type="text" placeholder='HC73' name='HC73' value={formData.HC73} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
                  </div>
    
                  <div class="md:col-span-2">
                    <label for="country">Height for age standard deviation</label>
                    <input type="text" placeholder='HC70' name='HC70' value={formData.HC70} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">Weight for height standard deviation</label>
                    <input type="text" placeholder='HC71' name='HC72' value={formData.HC72} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>
    
                  <div class="md:col-span-2">
                    <label for="state">Weight for age standard deviation</label>
                    <input type="text" placeholder='HC72' name='HC71' value={formData.HC71} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">Delay preference for childbearing among women</label>
                    <input type="text" placeholder='M11' name='M11' value={formData.M11} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">First prenatal visit</label>
                    <input type="text" placeholder='M13' name='M13' value={formData.M13} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>
    
                  <div class="md:col-span-2">
                    <label for="zipcode">Total number of births in last 3 years</label>
                    <input type="text" placeholder='V238' name='V238' value={formData.V238} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>
   
                  <div class="md:col-span-2">
                    <label for="zipcode">Iron supplement intake during pregnancy</label>
                    <input type="text" placeholder='M45' name='M45' value={formData.M45} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">Health check predischarge</label>
                    <input type="text" placeholder='M62' name='M62' value={formData.M62} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
                  </div>

                  <div class="md:col-span-2">
                    <label for="zipcode">Non-breast milk feeding for infants</label>
                    <input type="text" placeholder='M55' name='M55' value={formData.M55} onChange={handleChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
                  </div>

                
          
                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button type="sub" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>

    

                
                </div>
              </div>
           
            </div>

            {detection && (
                  <div className="max-w-md mx-auto mb-5 bg-white rounded-lg overflow-hidden shadow-lg p-6">
                    <h2 className="text-3xl  font-bold mb-4">Results</h2>
                    <p className='text-green-700 font-semibold text-2xl'>Status: {JSON.stringify(detection)}</p>
                  </div>
                )}

          </div>
          
          </form>
          
        </div>
      </div>
    </div> 
  );
};

export default PredictionValues;
