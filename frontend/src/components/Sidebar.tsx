import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Edit,
  BookOpen,
  User,
  Settings,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Sidebar({ isDarkMode, setIsDarkMode }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Edit, label: 'Editor', path: '/editor' },
    { icon: BookOpen, label: 'Blogs', path: '/blogs' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed lg:static inset-y-0 left-0 w-64 transition-colors duration-200
          ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
          border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col z-40`}
      >
        <div className="flex items-center gap-2 mb-8">
          <Edit className="w-8 h-8 text-purple-600" />
          <h1 className="text-2xl font-bold">Quill</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${location.pathname === path
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-600'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-2 px-4 py-2 w-full rounded-lg
              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}