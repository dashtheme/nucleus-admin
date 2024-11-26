import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faChartPie,
  faUsers,
  faGear,
  faChevronDown,
  faLayerGroup,
  faCircle,
  faSquare,
  faList,
  faTable,
  faBell,
  faWindowMaximize,
  IconDefinition,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  title: string;
  path?: string;
  icon: IconDefinition;
  subItems?: {
    title: string;
    path: string;
    icon?: IconDefinition;
  }[];
}

interface SidebarProps {
  theme?: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme = 'dark' }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboards',
      icon: faChartLine,
      subItems: [
        { title: 'Main', path: '/dashboard/main', icon: faChartLine },
        { title: 'Analytics', path: '/dashboard/analytics', icon: faChartPie },
        { title: 'E-commerce', path: '/dashboard/ecommerce', icon: faUsers },
        { title: 'Performance', path: '/dashboard/performance', icon: faChartBar },
        { title: 'Sales', path: '/dashboard/sales', icon: faChartLine }
      ]
    },
    {
      title: 'Components',
      icon: faLayerGroup,
      subItems: [
        { title: 'Buttons', path: '/components/buttons', icon: faCircle },
        { title: 'Cards', path: '/components/cards', icon: faSquare },
        { title: 'Lists', path: '/components/lists', icon: faList },
        { title: 'Tables', path: '/components/tables', icon: faTable },
        { title: 'Alerts', path: '/components/alerts', icon: faBell },
        { title: 'Modals', path: '/components/modals', icon: faWindowMaximize },
        { title: 'Charts', path: '/components/charts', icon: faChartLine }
      ]
    },
    {
      title: 'Users',
      path: '/users',
      icon: faUsers
    },
    {
      title: 'Profile',
      icon: faUsers,
      path: '/profile',
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: faGear
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isSubMenuActive = (subItems: { path: string }[]) => {
    return subItems.some(item => location.pathname === item.path);
  };

  const toggleExpand = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const getThemeClasses = () => {
    if (theme === 'light') {
      return {
        sidebar: 'bg-white',
        text: 'text-dark',
        activeLink: 'bg-primary-subtle text-primary fw-medium',
        hoverBg: 'hover-bg-light',
        border: 'border-light',
        subMenu: 'bg-light bg-opacity-50',
        menuTitle: 'text-dark'
      };
    }
    return {
      sidebar: 'bg-dark',
      text: 'text-white-50',
      activeLink: 'bg-primary text-white fw-medium',
      hoverBg: 'hover-bg-dark',
      border: 'border-secondary',
      subMenu: 'bg-dark',
      menuTitle: 'text-white-50'
    };
  };

  const classes = getThemeClasses();

  return (
    <aside className={`sidebar ${classes.sidebar} border-end`} style={{ width: '250px', minWidth: '250px' }}>
      <div className="sidebar-content h-100 d-flex flex-column">
        <nav className={`sidebar-nav py-4`}>
          <div className="px-4 mb-3">
            <h6 className={`text-uppercase fw-bold mb-4 ${classes.menuTitle}`}>
              Main Menu
            </h6>
          </div>
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.subItems ? (
                  // Menu item with submenu
                  <>
                    <button
                      className={`nav-link w-100 border-0 d-flex align-items-center justify-content-between ${
                        isSubMenuActive(item.subItems) ? classes.activeLink : classes.text
                      }`}
                      onClick={() => toggleExpand(index)}
                    >
                      <span className="d-flex align-items-center">
                        <FontAwesomeIcon icon={item.icon} className="me-3" fixedWidth />
                        {item.title}
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transform-rotate ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`collapse ${expandedItems.includes(index) ? 'show' : ''}`}>
                      <ul className="nav flex-column">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="nav-item">
                            <Link
                              to={subItem.path}
                              className={`nav-link d-flex align-items-center ${
                                isActive(subItem.path) ? classes.activeLink : classes.text
                              }`}
                            >
                              {subItem.icon && (
                                <FontAwesomeIcon icon={subItem.icon} className="me-3" fixedWidth />
                              )}
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // Single menu item
                  <Link
                    to={item.path!}
                    className={`nav-link d-flex align-items-center ${
                      isActive(item.path!) ? classes.activeLink : `${classes.text} ${classes.hoverBg}`
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="me-3" />
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
