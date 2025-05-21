import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '課題', to: 'challenges' },
    { name: 'サービス', to: 'services' },
    { name: '選ばれる理由', to: 'why-choose-us' },
    { name: '導入の流れ', to: 'process' },
    { name: 'よくある質問', to: 'faq' },
  ];

  // スクロール前は何も表示しない
  if (!scrolled) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-xl md:text-2xl font-bold">
                <span className={`${scrolled ? 'text-primary-500' : 'text-white'} text-2xl md:text-3xl`}>tale</span>
                <span className={`${scrolled ? 'text-gray-700' : 'text-white'} text-lg md:text-xl`}> AI Solutions</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`text-sm font-medium cursor-pointer hover:text-primary-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
              className={`btn-primary text-sm px-5 py-2 ${scrolled ? '' : 'bg-white text-primary-500 border border-white hover:bg-primary-500 hover:text-white'}`}
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary inline-block text-center"
            >
              無料相談
            </Link>
          </div>
        </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;