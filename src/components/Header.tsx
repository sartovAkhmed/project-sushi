import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              СушиМастер
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors`}>
              Главная
            </a>
            <a href="/catalog" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors`}>
              Каталог
            </a>
            <a href="/popular" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors`}>
              Популярное
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Поиск..."
                className={`py-1 px-3 rounded-l-md border border-r-0 ${
                  isScrolled ? 'border-gray-300 text-gray-800' : 'border-white/30 bg-white/10 text-white placeholder:text-white/70'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-red-600 text-white p-1 rounded-r-md"
              >
                <Search size={20} />
              </button>
            </form>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="flex-1 py-2 px-3 rounded-l-md border border-r-0 border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-red-600 text-white p-2 rounded-r-md"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-800 hover:text-red-600 transition-colors py-2">
                Главная
              </a>
              <a href="/catalog" className="text-gray-800 hover:text-red-600 transition-colors py-2">
                Каталог
              </a>
              <a href="/popular" className="text-gray-800 hover:text-red-600 transition-colors py-2">
                Популярное
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;