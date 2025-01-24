"use client";

// components/CustomCursor.js
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('hoverable') || e.target.tagName === 'P' || e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'H4' || e.target.tagName === 'H5' || e.target.tagName === 'H6') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isHovering ? styles.hover : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}