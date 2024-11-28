import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faChartPie,
  faUsers,
  faGear,
  faChevronDown,
  faChevronRight,
  faLayerGroup,
  faCircle,
  faSquare,
  faList,
  faTable,
  faBell,
  faLock,
  faSignInAlt,
  faUserPlus,
  faChartBar,
  faShoppingCart,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  title: string;
  path?: string;
  icon: any;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboards',
    icon: faChartLine,
    subItems: [
      { 
        title: 'Main', 
        path: '/dashboard/main', 
        icon: faChartLine 
      },
      {
        title: 'More Dashboards',
        icon: faChartPie,
        subItems: [
          { title: 'Analytics', path: '/dashboard/analytics', icon: faChartBar },
          { title: 'Performance', path: '/dashboard/performance', icon: faChartLine },
          { title: 'Sales', path: '/dashboard/sales', icon: faChartBar },
          { title: 'E-commerce', path: '/dashboard/ecommerce', icon: faShoppingCart }
        ]
      }
    ]
  },
  {
    title: 'Account',
    icon: faUsers,
    subItems: [
      { title: 'Profile', path: '/profile', icon: faUsers },
      { title: 'Settings', path: '/settings', icon: faGear },
      {
        title: 'Auth',
        icon: faLock,
        subItems: [
          { title: 'Login', path: '/auth/login', icon: faSignInAlt },
          { title: 'Register', path: '/auth/register', icon: faUserPlus }
        ]
      }
    ]
  },
  {
    title: 'Components',
    icon: faLayerGroup,
    subItems: [
      { title: 'Tables', path: '/components/tables', icon: faTable },
      {
        title: 'Buttons',
        icon: faCircle,
        subItems: [
          { title: 'Basic', path: '/components/buttons/basic', icon: faCircle },
          { title: 'Group', path: '/components/buttons/group', icon: faCircle },
          { title: 'Dropdown', path: '/components/buttons/dropdown', icon: faCircle },
          { title: 'Toolbar', path: '/components/buttons/toolbar', icon: faCircle }
        ]
      },
      { title: 'Cards', path: '/components/cards', icon: faSquare },
      { title: 'Lists', path: '/components/lists', icon: faList },
      { title: 'Alerts', path: '/components/alerts', icon: faBell },
      { title: 'Modals', path: '/components/modals', icon: faWindowMaximize },
      { title: 'Charts', path: '/components/charts', icon: faChartLine }
    ]
  }
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const sidebarStyles = {
    sidebar: {
      width: '280px',
      height: '100vh',
      position: 'fixed' as const,
      left: 0,
      top: 0,
      paddingTop: '1rem',
      background: 'linear-gradient(135deg, #ff9f43, #ff9a9e)',
      color: 'white',
      transition: 'all 0.3s ease',
      overflowY: 'auto' as const,
      zIndex: 1000,
    },
    menuItem: {
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    sidebarLink: {
      padding: '0.75rem 1rem',
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      margin: '0.25rem 0.75rem',
      borderRadius: '8px',
      '&:hover': {
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transform: 'translateX(5px)',
      },
    },
    active: {
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      fontWeight: 500,
    },
    submenu: {
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      marginLeft: '0.75rem',
    },
    icon: {
      width: '1.25rem',
      marginRight: '1rem',
      opacity: 0.9,
    },
    chevron: {
      transition: 'transform 0.3s ease',
    },
    chevronRotated: {
      transform: 'rotate(180deg)',
    },
    sectionHeader: {
      padding: '0.75rem 1rem',
      color: '#ffffff',
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.03em',
      opacity: 0.9,
    }
  };

  const isActive = (path?: string): boolean => {
    return path ? location.pathname === path : false;
  };

  const isSubMenuActive = (subItems: MenuItem[]): boolean => {
    return subItems.some(item => 
      item.path === location.pathname || 
      (item.subItems && isSubMenuActive(item.subItems))
    );
  };

  const toggleExpand = (path: string) => {
    setExpandedItems(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const renderSubMenu = (items: MenuItem[], level: number = 0): JSX.Element[] => {
    return items.map(item => (
      <li key={item.title}>
        {item.path ? (
          <Link
            to={item.path}
            style={{
              ...sidebarStyles.sidebarLink,
              ...(isActive(item.path) ? sidebarStyles.active : {}),
              paddingLeft: `${level * 0.75 + 1}rem`,
              fontSize: '0.9rem',
              textDecoration: 'none',
              textTransform: 'none',
              backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            }}
          >
            <FontAwesomeIcon 
              icon={item.icon} 
              style={{
                ...sidebarStyles.icon,
                fontSize: '0.9rem',
                opacity: isActive(item.path) ? 1 : 0.8,
              }} 
              className="me-3" 
            />
            <span>{item.title}</span>
          </Link>
        ) : (
          <div
            style={{
              ...sidebarStyles.sidebarLink,
              ...(isActive(item.path) ? sidebarStyles.active : {}),
              paddingLeft: `${level * 0.75 + 1}rem`,
              fontSize: '0.9rem',
              cursor: 'pointer',
              textTransform: 'none',
              backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            }}
          >
            <FontAwesomeIcon 
              icon={item.icon} 
              style={{
                ...sidebarStyles.icon,
                fontSize: '0.9rem',
                opacity: isActive(item.path) ? 1 : 0.8,
              }} 
              className="me-3" 
            />
            <span>{item.title}</span>
          </div>
        )}
        {item.subItems && item.subItems.length > 0 && (
          <ul className={`nav flex-column ${expandedItems.includes(item.title) ? 'd-block' : 'd-none'}`}>
            {renderSubMenu(item.subItems, level + 1)}
          </ul>
        )}
      </li>
    ));
  };

  const renderMenuItem = (item: MenuItem, level: number = 0): JSX.Element => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems.includes(item.title);
    const active = item.path ? isActive(item.path) : hasSubItems && isSubMenuActive(item.subItems || []);

    // Render top-level items as headers
    if (level === 0) {
      return (
        <div key={item.title}>
          <div style={{
            ...sidebarStyles.sectionHeader,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '0.5rem 0.75rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
          }}>
            {item.title}
          </div>
          <div style={sidebarStyles.submenu}>
            {hasSubItems && item.subItems?.map(subItem => renderMenuItem(subItem, level + 1))}
          </div>
        </div>
      );
    }

    // Render sub-items as regular menu items
    if (item.path) {
      return (
        <Link
          key={item.title}
          to={item.path}
          style={{
            ...sidebarStyles.sidebarLink,
            ...(active ? sidebarStyles.active : {}),
            paddingLeft: `${level * 0.75 + 1}rem`,
            fontSize: '0.9rem',
            textDecoration: 'none',
            textTransform: 'none',
            backgroundColor: active ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          }}
        >
          <FontAwesomeIcon 
            icon={item.icon} 
            style={{
              ...sidebarStyles.icon,
              fontSize: '0.9rem',
              opacity: active ? 1 : 0.8,
            }} 
            className="me-3" 
          />
          <span>{item.title}</span>
        </Link>
      );
    }

    // Render collapsible menu items
    return (
      <div key={item.title}>
        <div
          style={{
            ...sidebarStyles.sidebarLink,
            ...(active ? sidebarStyles.active : {}),
            paddingLeft: `${level * 0.75 + 1}rem`,
            fontSize: '0.9rem',
            cursor: 'pointer',
            textTransform: 'none',
            backgroundColor: active ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          }}
          onClick={() => toggleExpand(item.title)}
        >
          <FontAwesomeIcon 
            icon={item.icon} 
            style={{
              ...sidebarStyles.icon,
              fontSize: '0.9rem',
              opacity: active ? 1 : 0.8,
            }} 
            className="me-3" 
          />
          <span>{item.title}</span>
          {hasSubItems && (
            <FontAwesomeIcon
              icon={isExpanded ? faChevronDown : faChevronRight}
              style={{
                ...sidebarStyles.chevron,
                ...(isExpanded ? sidebarStyles.chevronRotated : {}),
                fontSize: '0.8rem',
                marginLeft: 'auto',
                opacity: 0.8,
              }}
              className="ms-auto"
            />
          )}
        </div>
        {hasSubItems && isExpanded && (
          <div style={sidebarStyles.submenu}>
            {item.subItems?.map(subItem => renderMenuItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={sidebarStyles.sidebar}>
      {menuItems.map(item => renderMenuItem(item))}
    </div>
  );
};

export default Sidebar;
