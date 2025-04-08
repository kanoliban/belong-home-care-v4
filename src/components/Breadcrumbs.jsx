import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Map of path segments to readable names
  const pathMap = {
    'about': 'About',
    'for-families': 'For Families',
    'for-professionals': 'For Professionals',
    'contact': 'Contact',
    'homes': 'Our Homes',
    'services': 'Services',
    'faq': 'FAQ'
  };
  
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2">
        <li className="breadcrumb-item">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = pathMap[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');
          
          return (
            <li key={to} className="breadcrumb-item flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              {last ? (
                <span className="text-primary font-medium" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link to={to} className="text-gray-600 hover:text-primary transition-colors">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
