import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Clock, Shield, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const RTGSNEFT = () => {
  const features = [
    'Secure fund transfer to any bank account',
    'Available through all banking channels',
    'Real-time transaction tracking',
    'Confirmation via SMS and email',
    'High transaction limits',
    'Competitive charges',
    'Nationwide coverage',
    'Regulatory compliance'
  ];

  const benefits = [
    {
      icon: Send,
      title: 'Instant Transfers',
      description: 'Send money instantly to any bank account across India'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-grade security for all your transactions'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Transfer funds anytime, anywhere'
    }
  ];

  const charges = [
    ['Online Transfer (NEFT)', 'Free', 'Unlimited'],
    ['Online Transfer (RTGS)', 'Free', 'Unlimited'],
    ['Branch Transfer (NEFT)', '₹2.5 + GST', 'Per Transaction'],
    ['Branch Transfer (RTGS)', '₹5 + GST', 'Per Transaction']
  ];

  const limits = [
    ['NEFT', 'No Minimum', 'No Maximum'],
    ['RTGS', '₹2 Lakhs', 'No Maximum'],
    ['Online (Per Day)', '₹10 Lakhs', '₹10 Lakhs'],
    ['Branch (Per Day)', '₹5 Lakhs', '₹5 Lakhs']
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
          <Send className="w-8 h-8 text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">RTGS/NEFT Services</h1>
          <p className="text-gray-600">Secure and instant fund transfer solutions</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed">
        Transfer funds securely to any bank account in India using our RTGS (Real Time Gross Settlement) 
        and NEFT (National Electronic Funds Transfer) services. Enjoy instant transfers, competitive 
        charges, and the convenience of banking from anywhere.
      </p>

      <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <CardHeader>
          <CardTitle>Service Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Free</div>
              <p className="text-gray-600">Online Transfers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-1">24/7</div>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Instant</div>
              <p className="text-gray-600">RTGS</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-1">Hourly</div>
              <p className="text-gray-600">NEFT Batches</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our RTGS/NEFT</h2>
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

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(charges || []).map((charge, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{charge[0]}</p>
                    <p className="text-gray-600">{charge[1]}</p>
                  </div>
                  <span className="font-semibold text-primary-600">{charge[1]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Limits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(limits || []).map((limit, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{limit[0]}</p>
                    <p className="text-sm text-gray-600">Per Transaction</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{limit[1]}</p>
                    <p className="text-sm text-gray-600">{limit[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How to Use RTGS/NEFT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Through Mobile Banking</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Login to mobile banking app</li>
                <li>2. Select 'Fund Transfer' option</li>
                <li>3. Choose RTGS/NEFT</li>
                <li>4. Enter beneficiary details</li>
                <li>5. Enter amount and confirm</li>
                <li>6. Authenticate with OTP</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Through Internet Banking</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Login to net banking portal</li>
                <li>2. Go to 'Payments & Transfer'</li>
                <li>3. Select 'RTGS/NEFT'</li>
                <li>4. Add/select beneficiary</li>
                <li>5. Enter transfer details</li>
                <li>6. Confirm with transaction password</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

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
                RTGS is available 24x7 for all customer transactions. NEFT is also available 24x7 with hourly settlement batches.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                Beneficiary activation takes 30 minutes for amounts below ₹1 lakh and 4 hours for amounts above ₹1 lakh.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700">
                Ensure correct beneficiary details as the bank is not responsible for incorrect transfers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Start Transferring Funds Today</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Experience seamless fund transfers with our RTGS/NEFT services. Register for mobile or internet 
            banking to enjoy free online transfers and instant fund movement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Register Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all">
              Get Help
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RTGSNEFT;
