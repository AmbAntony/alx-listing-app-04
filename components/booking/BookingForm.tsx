import React from "react";

const BookingForm = () => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-x1 font-semibold text-gray-800">Contact Detail</h2>
        <form className="space-y-6 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-100">First Name</label>
                    <input 
                     type="text"
                     className="mt-1 block-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                     />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-100">First Name</label>
                    <input 
                     type="text"
                     className="mt-1 block-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                     />
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-100">Email</label>
                    <input 
                     type="text"
                     className="mt-1 block-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                     />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-100">Phone Number</label>
                    <input 
                     type="text"
                     className="mt-1 block-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                     />
                </div>

            </div>

            {/* Payment Information */}
      <h2 className="text-xl font-semibold text-gray-800 pt-4 border-t">Pay with</h2>
           <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
                />
           </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input 
            type="text" 
            placeholder="MM/YY"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold text-gray-800 pt-4 border-t">Billing Address</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input 
          type="text" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
          />
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="mt-6 w-full rounded-md bg-green-500 py-3 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;