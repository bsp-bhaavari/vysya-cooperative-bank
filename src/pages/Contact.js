import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Headphones,
  Building
} from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        { label: 'Administrative Office', value: '0816-2284266' },
        { label: 'Head Office', value: '0816-2284266' }
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        { label: 'General Inquiry', value: 'vasavicbank@gmail.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Administrative Office',
      details: [
        { label: 'Address', value: '#28, 3rd Main, 2nd Stage, Vijayanagar, Tumkur' },
        { label: 'PIN Code', value: '572103' },
        { label: 'State', value: 'Karnataka, India' }
      ]
    }
  ];

  const branches = [
    {
      name: 'APMC Yard Branch (Tumkur)',
      address: 'APMC Yard, Tumkur - 572103',
      phone: '0816-2278240',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'Vijaynagar (SIT) Extension Branch',
      address: '#348, S.I.T. Extension, Vijayanagar, Tumkur - 572103',
      phone: '0816-2278239',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'Pavagada Branch',
      address: '#319/1, Near KSRTC Bus Stand, Pavagada - 572102',
      phone: '08156-225233',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'Madhugiri Branch',
      address: '#327, Near KSRTC Bus Stand, Madhugiri - 572132',
      phone: '08134-220733',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'APMC Yard Branch (Bangalore/Yeshwanthpur)',
      address: '#25/1, 3rd Main, Peenya 2nd Stage, Yeshwanthpur, Bangalore - 560058',
      phone: '080-23371944',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'BVK Iyengar Road Branch (Chickpet)',
      address: '#27/1, BVK Iyengar Road, Chickpet, Bangalore - 560053',
      phone: '080-26752155',
      email: 'vasavicbank@gmail.com'
    },
    {
      name: 'Mysore Branch',
      address: '#447/3, Near District Court, Mysore - 570001',
      phone: '0821-2424244',
      email: 'vasavicbank@gmail.com'
    }
  ];

  const timings = [
    { day: 'Monday - Friday', time: '10:00 AM - 4:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Holidays', time: 'Closed' }
  ];

  return (
    <div className="pt-16">
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you with all your banking needs. Get in touch with us through any 
              of the following channels and our dedicated team will assist you promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(info.icon, { className: "w-8 h-8 text-primary-600" })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-gray-500">{detail.label}</p>
                        <p className="text-gray-900 font-medium">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <Card>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us more about your query..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-premium-sm hover:shadow-premium hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Banking Hours</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span>Branch Timings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timings.map((timing, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{timing.day}</span>
                        <span className="text-gray-700">{timing.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Headphones className="w-5 h-5 text-primary-600" />
                    <span>Customer Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Administrative Office</h4>
                      <p className="text-2xl font-bold text-green-600">0816-2284266</p>
                      <p className="text-sm text-gray-600">10:00 AM - 4:00 PM (Monday to Friday)</p>
                    </div>
                    <div className="p-4 bg-surface-tint border border-primary-100/70 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                      <p className="text-sm text-gray-700">vasavicbank@gmail.com</p>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Branches</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {branches.map((branch, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-3">
                      <Building className="w-5 h-5 text-primary-600" />
                      <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <span className="text-gray-700">{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{branch.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 text-xs">{branch.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Your Nearest Branch</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience our personalized banking services by visiting any of our branches. 
                Our friendly staff is ready to assist you with all your banking needs.
              </p>
              <button type="button" className="bg-primary-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-premium-sm hover:-translate-y-0.5">
                Find Nearest Branch
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
