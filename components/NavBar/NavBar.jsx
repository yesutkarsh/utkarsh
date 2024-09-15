import React from 'react';
import style from './nav.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <motion.nav
      className={style.nav}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/">
        <motion.div
          id={style.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          FRONTEND <br /> BACKEND
        </motion.div>
      </Link>
      <motion.ul
        id={style.navs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
