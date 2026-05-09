import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import bankLogo from '../assets/bank-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about/history' },
    { name: 'Banking Services', path: '/banking/accounts/savings' },
    { name: 'Interest Rates', path: '/interest-rates/loans' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'RTGS/NEFT', path: '/services/rtgs-neft' },
    { name: 'Lockers', path: '/services/lockers' },
    { name: 'Mobile Banking', path: '/services/mobile-banking' },
    { name: 'ATM Cards', path: '/services/atm-card' },
    { name: 'UPI Services', path: '/services/upi' },
    { name: 'SMS Alerts', path: '/services/sms-alerts' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-950 via-trust-950 to-primary-950 text-white overflow-hidden border-t-4 border-primary-500">
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-[0.35]" aria-hidden />
      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={bankLogo} alt="Vysya Co-operative Bank Ltd, Tumakuru" className="h-10 w-auto max-w-[9rem] object-contain shrink-0" />
                <div className="leading-tight">
                  <span className="text-xl font-bold whitespace-nowrap text-white">
                    Vysya Cooperative Bank Ltd
                  </span>
                </div>
              </div>
              <p className="text-primary-100/85 text-sm leading-relaxed">
                Your trusted financial partner committed to providing secure and innovative banking solutions for our community.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-800/70 rounded-lg flex items-center justify-center border border-trust-700/40 hover:bg-trust-600 hover:border-trust-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gold-200" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2 mt-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-primary-100/80 hover:text-gold-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Our Services
              </h3>
              <ul className="space-y-2 mt-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-primary-100/80 hover:text-gold-300 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-trust-400/50 pb-2 inline-block">
                Contact Info
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-primary-100/85 text-sm">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-primary-100/85 text-sm">info@modernbank.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                  <span className="text-primary-100/85 text-sm">
                    123 Banking Street, Financial District,<br />
                    City - 123456, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary-800/80">
        <div className="container-max py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-200/70">
            <p>&copy; 2024 Vysya Cooperative Bank Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
