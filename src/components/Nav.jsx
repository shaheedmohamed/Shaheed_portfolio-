import React from 'react';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import { Link, useLocation } from 'react-router-dom';
import './css/Nav.css'; // تأكد من استيراد ملف CSS

const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="nav">
      <div className="nav-inner">
        {navData.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`nav-link ${pathname === link.path ? 'active' : ''}`}
          >
            <div className="tooltip">
              <div className="tooltip-box">{link.name}</div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
