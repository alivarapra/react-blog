import React, { useState } from 'react';
import { Icons } from 'components';
import MenuLink from './MenuLink';
import { useResponsive } from 'hooks';
import { BreakPoints, Colors } from 'config';
import styles from './Menu.module.css';

const Menu = ({ onExpand }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useResponsive({ maxWidth: BreakPoints.mobile });
  const handleClick = () => {
    if (onExpand) {
      onExpand(!expanded);
    }

    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <nav
        className={styles.menu}
        style={{
          transform: expanded ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <MenuLink title="View Posts" to="/posts">
          Posts
        </MenuLink>
        <MenuLink title="View Tags" to="/tags">
          Tags
        </MenuLink>
        <MenuLink title="View Books" to="/books">
          Books
        </MenuLink>
        <MenuLink title="About Me" to="/about">
          About
        </MenuLink>
      </nav>
      <div className={styles.hamburger} onClick={handleClick}>
        {expanded ? (
          <Icons.Close
            style={{
              fontWeight: 800,
              fontSize: isMobile ? '1rem' : '2rem',
              color: Colors.white,
            }}
          />
        ) : (
          <Icons.Hamburger
            style={{
              fontWeight: 800,
              fontSize: isMobile ? '1rem' : '2rem',
              color: Colors.white,
            }}
          />
        )}
      </div>
      <div
        className={styles.overlay}
        style={{
          backgroundColor: expanded ? Colors.overlay : Colors.transparent,
        }}
      />
    </React.Fragment>
  );
};

export default Menu;
