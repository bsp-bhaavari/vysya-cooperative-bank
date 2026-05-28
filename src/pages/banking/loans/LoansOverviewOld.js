import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

const LoansOverview = () => {
  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="loan" 
        />
      </div>
    </div>
  );
};
    },
    {
      title: 'Housing Loan',
      description: 'Build or buy your dream home with our affordable housing loans',
      icon: Home,
      link: '/banking/loans/housing-loan',
      features: ['Long tenure', 'Tax benefits', 'Low interest rates'],
      color: 'primary'
    },
    {
      title: 'Installment Loan',
      description: 'Personal loan for various personal and family needs',
      icon: Package,
      link: '/banking/loans/installment-loan',
      features: ['No collateral', 'Quick disbursal', 'Flexible usage'],
      color: 'secondary'
    }
  ];

  const businessLoans = [
    {
      title: 'Machinery Loan',
      description: 'Finance new machinery for your business growth',
      icon: Wrench,
      link: '/banking/loans/machinery-loan',
      features: ['Asset financing', 'Tax benefits', 'Business growth'],
      color: 'primary'
    },
    {
      title: 'Cash Credit',
      description: 'Working capital finance for your business needs',
      icon: CreditCard,
      link: '/banking/loans/cash-credit',
      features: ['Revolving credit', 'Interest on usage', 'Quick access'],
      color: 'secondary'
    },
    {
      title: 'Deposit Loan',
      description: 'Loan against your fixed deposits with us',
      icon: Coins,
      link: '/banking/loans/deposit-loan',
      features: ['Low interest', 'Quick processing', 'No collateral'],
      color: 'primary'
    },
    {
      title: 'Godown Loan',
      description: 'Finance for warehouse and storage facility construction',
      icon: Building,
      link: '/banking/loans/godown-loan',
      features: ['Asset creation', 'Long tenure', 'Business support'],
      color: 'secondary'
    },
    {
      title: 'Warehouse Loan',
      description: 'Specialized loan for agricultural storage facilities',
      icon: Warehouse,
      link: '/banking/loans/warehouse-loan',
      features: ['Agri-focused', 'Subsidy available', 'Rural development'],
      color: 'primary'
    }
  ];

  const loanStats = [
    {
      number: '8.5% - 12.5%',
      label: 'Interest Rate p.a.',
      description: 'Competitive rates for all loan types'
    },
    {
      number: 'Up to 85%',
      label: 'Loan to Value',
      description: 'Maximum funding for your needs'
    },
    {
      number: '24-48 hrs',
      label: 'Approval Time',
      description: 'Quick processing and disbursal'
    },
    {
      number: '30 Years',
      label: 'Maximum Tenure',
      description: 'Flexible repayment options'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Loan Services</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We offer a comprehensive range of loan products tailored to meet your personal and business needs. 
          From gold loans to housing finance, our loan solutions come with competitive interest rates, 
          flexible repayment options, and quick processing times.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>Why Choose Our Loans?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {loanStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-trust-600 mb-1">{stat.number}</div>
                <p className="text-gray-900 font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Individual Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {individualLoans.map((loan, index) => (
            <Card key={index} className="group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${
                    loan.color === 'primary' ? 'bg-trust-50/50' : 'bg-gold-50/50'
                   } rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(loan.icon, { 
                      className: `w-6 h-6 ${loan.color === 'primary' ? 'text-trust-600' : 'text-trust-600'}` 
                    })}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-trust-900 mb-2 group-hover:text-trust-600 transition-colors">
                      {loan.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{loan.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {loan.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={loan.link}
                      className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Business Loans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLoans.map((loan, index) => (
            <Card key={index} className="group cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${
                   loan.color === 'primary' ? 'bg-trust-50/50' : 'bg-gold-50/50'
                 } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(loan.icon, { 
                    className: `w-8 h-8 ${loan.color === 'primary' ? 'text-trust-600' : 'text-trust-600'}` 
                  })}
                </div>
                <h3 className="text-lg font-semibold text-trust-900 mb-2 text-center group-hover:text-trust-600 transition-colors">
                  {loan.title}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">{loan.description}</p>
                <div className="flex justify-center">
                  <Link
                    to={loan.link}
                    className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium text-sm"
                  >
                    Know More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-trust-600 to-gold-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Loan?</h3>
          <p className="text-trust-200/80 mb-6 max-w-2xl mx-auto">
            Our loan experts are here to help you find the perfect financing solution for your needs. 
            Get personalized advice and quick approval on your loan application.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-trust-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            Consult Loan Expert
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoansOverview;
