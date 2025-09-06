import React from 'react';

export default function CalculatorSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our consulting services can transform your business and deliver measurable results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Input Your Data</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Revenue
                  </label>
                  <input
                    type="number"
                    placeholder="$1,000,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Challenge
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Process Optimization</option>
                    <option>Digital Transformation</option>
                    <option>Cost Reduction</option>
                    <option>Growth Strategy</option>
                    <option>Technology Implementation</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Projected Results</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Potential Revenue Increase</div>
                  <div className="text-2xl font-bold text-blue-900">$250,000 - $500,000</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Cost Savings</div>
                  <div className="text-2xl font-bold text-green-900">$100,000 - $200,000</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">ROI Timeline</div>
                  <div className="text-2xl font-bold text-purple-900">6-12 months</div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Get Detailed Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
