import React, { useState } from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'branches', name: 'Branches' },
    { id: 'awards', name: 'Awards' },
    { id: 'community', name: 'Community' }
  ];

  const gallery = [
    {
      id: 1,
      title: 'Annual Banking Summit 2023',
      category: 'events',
      description: 'Our leadership team at the National Banking Summit',
      image: '🏛️'
    },
    {
      id: 2,
      title: 'New Branch Opening',
      category: 'branches',
      description: 'Inauguration of our 25th branch in the city center',
      image: '🏦'
    },
    {
      id: 3,
      title: 'Best Bank Award 2023',
      category: 'awards',
      description: 'Receiving the prestigious Best Cooperative Bank Award',
      image: '🏆'
    },
    {
      id: 4,
      title: 'Financial Literacy Camp',
      category: 'community',
      description: 'Educating rural communities about banking services',
      image: '🎓'
    },
    {
      id: 5,
      title: 'Digital Banking Launch',
      category: 'events',
      description: 'Launch of our new mobile banking application',
      image: '📱'
    },
    {
      id: 6,
      title: 'Head Office Building',
      category: 'branches',
      description: 'Our state-of-the-art head office facility',
      image: '🏢'
    },
    {
      id: 7,
      title: 'Excellence in Customer Service',
      category: 'awards',
      description: 'Award for outstanding customer satisfaction',
      image: '⭐'
    },
    {
      id: 8,
      title: 'Tree Plantation Drive',
      category: 'community',
      description: 'Environmental initiative by our bank employees',
      image: '🌳'
    },
    {
      id: 9,
      title: 'Board Meeting',
      category: 'events',
      description: 'Strategic planning session with the board of directors',
      image: '👥'
    },
    {
      id: 10,
      title: 'ATM Center',
      category: 'branches',
      description: '24/7 ATM facility at a prime location',
      image: '💳'
    },
    {
      id: 11,
      title: 'Innovation Award',
      category: 'awards',
      description: 'Recognition for innovative banking solutions',
      image: '💡'
    },
    {
      id: 12,
      title: 'Blood Donation Camp',
      category: 'community',
      description: 'Corporate social responsibility initiative',
      image: '🩸'
    }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our journey through these memorable moments that showcase our commitment to excellence, 
          community service, and innovation in banking. From award ceremonies to community initiatives, 
          each image tells a story of our dedication to serving our customers.
        </p>
      </div>

      {/* Category Filter */}
      <Card>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGallery.map((item) => (
          <Card key={item.id} className="overflow-hidden group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
              {item.image}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="mt-2">
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                  {categories.find(c => c.id === item.category)?.name}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Moments */}
      <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <CardHeader>
          <CardTitle>Featured Moments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-2">Award Excellence</h4>
              <p className="text-sm text-gray-600">
                Recognized nationally for our outstanding banking services and customer satisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Community Impact</h4>
              <p className="text-sm text-gray-600">
                Making a difference in the community through various social initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-900 mb-2">Digital Innovation</h4>
              <p className="text-sm text-gray-600">
                Leading the way in digital banking transformation and customer experience
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Section */}
      <Card>
        <CardHeader>
          <CardTitle>Bank in Action</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎬</div>
                <p className="text-gray-600 font-medium">Bank Introduction Video</p>
                <p className="text-sm text-gray-500">Learn about our services and values</p>
              </div>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📹</div>
                <p className="text-gray-600 font-medium">Customer Testimonials</p>
                <p className="text-sm text-gray-500">Hear from our satisfied customers</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;
