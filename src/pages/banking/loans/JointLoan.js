import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../../components/Card';

const JointLoan = () => {
  const features = [
    'Multiple borrowers can apply together',
    'Flexible repayment options',
    'Lower interest rates for joint applications',
    'Shared responsibility for loan repayment',
    'Quick processing for joint accounts',
    'Higher loan amounts available',
    'Suitable for family members',
    'Easy documentation process'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Shared Responsibility',
      description: 'Joint loans promote financial responsibility among family members or business partners.'
    },
    {
      icon: Clock,
      title: 'Better Terms',
      description: 'Joint applicants often receive more favorable terms and conditions.'
    },
    {
      icon: CheckCircle,
      title: 'Quick Processing',
      description: 'Streamlined application process for faster approval and disbursement.'
    }
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-trust-900 mb-4">Joint Loan</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Please visit your nearest VCBL branch for details.
        </p>
      </div>
    </div>
  );
};

export default JointLoan;
