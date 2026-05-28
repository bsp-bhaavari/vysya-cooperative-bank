import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Awards = () => {
  const awards = [
    {
      year: '2023',
      title: 'Best Cooperative Bank Award',
      organization: 'National Banking Association',
      description: 'Recognized for excellence in customer service and digital innovation',
      icon: Trophy,
      category: 'National'
    },
    {
      year: '2022',
      title: 'Digital Banking Excellence',
      organization: 'Fintech India',
      description: 'Awarded for successful implementation of digital banking solutions',
      icon: Star,
      category: 'Technology'
    },
    {
      year: '2021',
      title: 'Rural Banking Champion',
      organization: 'Reserve Bank of India',
      description: 'Recognized for outstanding contribution to financial inclusion',
      icon: Award,
      category: 'Regulatory'
    },
    {
      year: '2020',
      title: 'Customer Satisfaction Excellence',
      organization: 'Banking Quality Council',
      description: 'Highest customer satisfaction rating in cooperative banking sector',
      icon: Medal,
      category: 'Customer Service'
    },
    {
      year: '2019',
      title: 'Best Performance in Cooperative Banking',
      organization: 'State Cooperative Department',
      description: 'Outstanding performance in growth and profitability',
      icon: Trophy,
      category: 'State'
    },
    {
      year: '2018',
      title: 'Innovation in Banking Services',
      organization: 'Indian Banks Association',
      description: 'Pioneering new banking products and services',
      icon: Star,
      category: 'Innovation'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      organization: 'International Organization for Standardization',
      description: 'Quality Management System Certification',
      validUntil: '2025'
    },
    {
      name: 'BFSI Excellence',
      organization: 'Banking Financial Services & Insurance',
      description: 'Excellence in Banking Operations',
      validUntil: '2024'
    },
    {
      name: 'Information Security',
      organization: 'CERT-In',
      description: 'Certified for Information Security Management',
      validUntil: '2024'
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'National': return 'bg-blue-100 text-blue-700';
      case 'Technology': return 'bg-purple-100 text-purple-700';
      case 'Regulatory': return 'bg-red-100 text-red-700';
      case 'Customer Service': return 'bg-green-100 text-green-700';
      case 'State': return 'bg-orange-100 text-orange-700';
      case 'Innovation': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Awards & Recognition</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are proud to be recognized by various prestigious organizations for our commitment to excellence, 
          innovation, and customer service in the banking sector. These awards motivate us to continue delivering 
          exceptional banking experiences to our customers.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <span>Achievement Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">25+</div>
              <p className="text-gray-600 text-sm">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
              <p className="text-gray-600 text-sm">Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">6</div>
              <p className="text-gray-600 text-sm">Years of Recognition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">10+</div>
              <p className="text-gray-600 text-sm">Organizations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Recent Awards</h2>
        <div className="grid gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-400"></div>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(award.icon, { className: "w-8 h-8 text-yellow-600" })}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-trust-900 mb-1">
                          {award.title}
                        </h3>
                        <p className="text-gray-600">{award.organization}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className="text-sm font-bold text-gray-500">{award.year}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(award.category)}`}>
                          {award.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center">
              <CardContent>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-trust-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{cert.organization}</p>
                <p className="text-sm text-gray-700 mb-3">{cert.description}</p>
                <div className="text-xs text-gray-500">
                  Valid Until: <span className="font-medium">{cert.validUntil}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recognition Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              At Modern Cooperative Bank, we view awards and recognition not just as achievements, but as 
              validation of our commitment to our customers and community. Each award represents:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Customer trust and satisfaction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Innovation in banking services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Regulatory compliance excellence</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Financial inclusion initiatives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Quality management systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-trust-50/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-trust-600 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Community development impact</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Awards;
