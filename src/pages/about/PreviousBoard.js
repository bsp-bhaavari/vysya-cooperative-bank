import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const PreviousBoard = () => {
  const previousMembers = [
    {
      name: 'Late Shri Mohan Lal',
      position: 'Founder Chairman',
      tenure: '1985 - 2010',
      contribution: 'Visionary leader who laid the foundation of our bank'
    },
    {
      name: 'Shri Suresh Chandra',
      position: 'Former Chairman',
      tenure: '2010 - 2018',
      contribution: 'Led the digital transformation initiative'
    },
    {
      name: 'Smt. Laxmi Devi',
      position: 'Former Director',
      tenure: '1990 - 2015',
      contribution: 'Pioneered women empowerment initiatives'
    },
    {
      name: 'Late Shri Ram Singh',
      position: 'Former Managing Director',
      tenure: '1995 - 2012',
      contribution: 'Expanded branch network significantly'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Previous Board Members</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We honor and remember our former board members who have contributed immensely to the growth and 
          success of Modern Cooperative Bank. Their vision, leadership, and dedication have laid the strong 
          foundation on which we continue to build and serve our community.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>Tribute to Our Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            The success of Modern Cooperative Bank today stands on the shoulders of these exceptional leaders 
            who guided us through various phases of growth. Their commitment to cooperative banking principles 
            and community service continues to inspire our current leadership team.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {previousMembers.map((member, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👔</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Tenure:</span>
                      <span className="text-gray-700 font-medium">{member.tenure}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Key Contribution:</span>
                      <p className="text-gray-700 mt-1">{member.contribution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Legacy of Excellence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">39+</div>
              <p className="text-gray-600">Years of Combined Leadership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">25+</div>
              <p className="text-gray-600">Branches Established</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1L+</div>
              <p className="text-gray-600">Customers Served</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviousBoard;
