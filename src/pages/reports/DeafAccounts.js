import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeafAccounts = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            DEAF Accounts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding Depositor Education and Awareness Fund (DEAF) Guidelines
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What are DEAF Accounts?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <strong>DEAF (Depositor Education and Awareness Fund)</strong> is a regulatory framework 
                established by the Reserve Bank of India (RBI) to protect the interests of bank depositors 
                and promote banking awareness.
              </p>
              <p>
                Under DEAF guidelines, banks are required to transfer accounts that have been inactive for 
                an extended period to the Depositor Education and Awareness Fund. This ensures that 
                depositors' funds remain protected and accessible even when accounts become dormant.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Key Features of DEAF Accounts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Account Protection
                </h3>
                <p className="text-gray-700">
                  Funds are transferred to DEAF for safekeeping when accounts remain inactive for specified periods
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  RBI Guidelines
                </h3>
                <p className="text-gray-700">
                  Operates under strict RBI regulations to ensure transparency and depositor protection
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Claim Process
                </h3>
                <p className="text-gray-700">
                  Depositors can claim funds from transferred accounts through a simplified procedure
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  Awareness Programs
                </h3>
                <p className="text-gray-700">
                  Educational initiatives to inform customers about account safety and banking practices
                </p>
              </div>
            </div>
          </div>

          {/* Account Transfer Process */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Account Transfer Process
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Identification</h4>
                  <p className="text-gray-700">Banks identify inactive accounts based on specified criteria</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Notification</h4>
                  <p className="text-gray-700">Account holders are notified before account transfer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transfer</h4>
                  <p className="text-gray-700">Funds are transferred to DEAF account</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Claim</h4>
                  <p className="text-gray-700">Depositors can claim funds through proper documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">
              Important Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                DEAF accounts are managed as per RBI guidelines
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Interest may be paid on transferred amounts
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Original account holders can claim funds within specified timeframe
              </li>
              <li className="flex items-start">
                <p><span className="font-medium">Email:</span> support@vysyabank.com</p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Banks maintain records of all DEAF transactions
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Need Assistance with DEAF Accounts?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you understand the DEAF process and assist with account claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300"
              >
                Contact Support
              </button>
              <button
                onClick={() => navigate('/reports')}
                className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                View Other Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeafAccounts;
