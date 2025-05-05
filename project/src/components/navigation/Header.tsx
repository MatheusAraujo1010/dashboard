import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, User, UserCircle, LogOut } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-neutral-200 h-16 flex items-center px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-neutral-50 rounded-lg transition-colors"
      >
        <Menu className="w-5 h-5 text-neutral-600" />
      </button>

      <div className="flex-1" />

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-neutral-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-600 rounded-full" />
        </button>

        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center space-x-3 p-2 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-neutral-600" />
            </div>
          </button>

          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50 animate-fade-in">
              <button 
                className="w-full flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                onClick={() => {
                  setProfileMenuOpen(false);
                  // TODO: Navigate to profile
                }}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                Profile
              </button>
              <button 
                className="w-full flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                onClick={() => {
                  setProfileMenuOpen(false);
                  // TODO: Handle logout
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;