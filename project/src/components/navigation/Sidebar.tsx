import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, Settings, ChevronLeft, ChevronRight, Plus, MessageSquare } from 'lucide-react';
import Logo from '../ui/Logo';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Plus, label: 'Add Company', path: '/companies/add' },
    { icon: Building2, label: 'Companies', path: '/companies' },
    { icon: MessageSquare, label: 'Prompts', path: '/prompts' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white border-r border-neutral-200 transition-all duration-300 ease-in-out relative`}
    >
      <div className="h-16 flex items-center justify-center border-b border-neutral-200">
        <div className={`flex items-center ${isOpen ? 'px-6' : 'px-2'}`}>
          <Logo className={`${isOpen ? 'w-10 h-10' : 'w-8 h-8'}`} />
          {isOpen && (
            <span className="ml-3 text-xl font-semibold text-primary-950">
              CertGuard
            </span>
          )}
        </div>
      </div>

      <nav className="mt-6 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-600 hover:bg-neutral-50'
              }`
            }
          >
            <item.icon className={`${isOpen ? 'w-5 h-5' : 'w-6 h-6'}`} />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 bg-white border border-neutral-200 rounded-full p-1 hover:bg-neutral-50 transition-colors"
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-neutral-600" />
        ) : (
          <ChevronRight className="w-4 h-4 text-neutral-600" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;