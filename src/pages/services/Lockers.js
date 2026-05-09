import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Lockers = () => {
  const features = [
    'Advanced security systems',
    '24/7 CCTV surveillance',
    'Biometric access control',
    'Fire-resistant construction',
    'Climate control facility',
    'Individual locker keys',
    'Nomination facility',
    'Flexible rental options'
  ];

  const lockerTypes = [
    {
      size: 'Small',
      dimensions: '6" x 5" x 18"',
      suitableFor: 'Jewelry, documents, cash',
      annualRent: '₹1,000',
      deposit: '₹2,000'
    },
    {
      size: 'Medium',
      dimensions: '10" x 10" x 18"',
      suitableFor: 'Documents, jewelry, small valuables',
      annualRent: '₹2,000',
      deposit: '₹3,000'
    },
    {
      size: 'Large',
      dimensions: '15" x 15" x 18"',
      suitableFor: 'Documents, jewelry, medium valuables',
      annualRent: '₹3,000',
      deposit: '₹5,000'
    },
    {
      size: 'Extra Large',
      dimensions: '20" x 20" x 18"',
      suitableFor: 'Large documents, valuables, files',
      annualRent: '₹5,000',
      deposit: '₹8,000'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Advanced security systems with 24/7 monitoring and surveillance'
    },
    {
      icon: Lock,
      title: 'Complete Privacy',
      description: 'Your valuables remain private and confidential at all times'
    },
    {
      icon: Clock,
      title: 'Flexible Access',
      description: 'Access your locker during banking hours with prior notice'
    }
  ];

  const documents = [
    'Account with our bank (minimum 6 months old)',
    'KYC documents (Aadhaar, PAN, Address proof)',
    'Photograph of locker hirer and nominee',
    'Nomination form duly filled',
    'Locker agreement form',
    'Identity verification'
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
          <Lock className="w-8 h-8 text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Locker Facility</h1>
          <p className="text-gray-600">Secure your valuables in our bank lockers</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        Keep your valuables safe and secure with our bank locker facility. We offer various sizes 
        of lockers with advanced security features, 24/7 surveillance, and complete privacy for 
        your peace of mind.
      </p>

      <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <CardHeader>
          <CardTitle>Locker Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">4</div>
              <p className="text-gray-600">Locker Sizes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-1">24/7</div>
              <p className="text-gray-600">Security</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <p className="text-gray-600">Private</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-1">Flexible</div>
              <p className="text-gray-600">Access</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {(features || []).map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Lockers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(benefits || []).map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(benefit.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Locker Types & Charges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(lockerTypes || []).map((locker, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <h3 className="text-xl font-bold text-primary-600 mb-2">{locker.size}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Dimensions</p>
                    <p className="font-medium text-gray-900">{locker.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Suitable For</p>
                    <p className="font-medium text-gray-900">{locker.suitableFor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Annual Rent</p>
                    <p className="font-semibold text-primary-600">{locker.annualRent}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Security Deposit</p>
                    <p className="font-semibold text-gray-900">{locker.deposit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Eligibility & Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Individual customers (singly/jointly)</li>
                  <li>• HUFs, Partnership firms, Companies</li>
                  <li>• Societies and Trusts</li>
                  <li>• Minimum account age: 6 months</li>
                  <li>• Satisfactory credit history</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Documents Required</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {(documents || []).map((doc, index) => (
                    <li key={index}>• {doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access & Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Access Timings</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Monday to Friday: 10:00 AM - 4:00 PM</li>
                  <li>• Saturday: 10:00 AM - 2:00 PM</li>
                  <li>• Sunday: Closed</li>
                  <li>• Prior notice required for access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Operating Instructions</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Two keys provided (one for bank, one for customer)</li>
                  <li>• Both keys required to open locker</li>
                  <li>• Biometric verification mandatory</li>
                  <li>• Access log maintained for each visit</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span>Important Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                The bank is not responsible for the contents of the locker. Locker facility is provided 
                only for safe custody of valuables.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                Locker rent is payable annually in advance. Late payment attracts penalty charges.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                In case of lost key, charges for breaking open the locker and key replacement will be applicable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Secure Your Valuables Today</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Visit your nearest branch to book a locker or contact our customer service for more information. 
            Protect your precious valuables with our secure locker facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Book Locker
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all">
              Know More
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lockers;
