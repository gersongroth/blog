import cn from 'classnames';
import throttle from 'lodash.throttle';
import { FC, useEffect, useState } from 'react';
import styles from './Navbar.module.css';

// TODO - criar evento global para scroll
const NavbarRoot: FC = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div className={cn(styles.root, { 'shadow-magical': hasScrolled })}>
      {children}
    </div>
  );
};

export default NavbarRoot;
