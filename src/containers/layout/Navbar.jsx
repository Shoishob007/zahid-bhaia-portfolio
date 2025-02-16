/* eslint-disable simple-import-sort/imports */
'use client';

import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Link as CLink } from '@/components';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NavButton = dynamic(() => import('@/components/buttons/NavButton'), {
  ssr: false,
});
const DarkModeButton = dynamic(
  () => import('@/components/buttons/DarkModeButton'),
  { ssr: false }
);
const fadeIn = dynamic(
  () => import('@/styles/animations').then((mod) => mod.fadeIn),
  {
    ssr: false,
  }
);
const slideIn = dynamic(
  () => import('@/styles/animations').then((mod) => mod.slideIn),
  {
    ssr: false,
  }
);

const hideNavWhileScrolling = (setNavbarStyle, offset = 100) => {
  if (typeof window === 'undefined') {
    return;
  }

  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    const curScrollPos = window.pageYOffset;
    if (prevScrollPos < curScrollPos) {
      setNavbarStyle({ top: `-${offset}px` });
    } else {
      setNavbarStyle({ top: '0' });
    }
    prevScrollPos = curScrollPos;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

const NavItem = ({ href, children, onClick, index, delay }) => (
  <motion.li
    className="group"
    variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
    initial="hidden"
    animate="show"
  >
    <CLink
      href={href || `/#${children}`}
      className="block p-2 duration-500 hover:text-accent"
      onClick={onClick}
      withPadding
    >
      {children}
    </CLink>
  </motion.li>
);

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({ top: '0' });

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    if (!navbarCollapsed) {
      const cleanupScrollHandler = hideNavWhileScrolling(setNavbarStyle);
      return cleanupScrollHandler;
    }
  }, [navbarCollapsed]);

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      style={navbarStyle}
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-5 duration-500 md:px-6 xl:px-12 backdrop-blur-lg"
    >
      <h1 className="relative text-2xl capitalize font-signature text-accent group top-1">
        <Link href="/#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </Link>
      </h1>

      <NavButton
        onClick={() => setNavbarCollapsed((prev) => !prev)}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}

            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
