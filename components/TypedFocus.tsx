'use client';

import { useEffect, useState } from 'react';

import styles from '@/styles/HomePage.module.css';

const focusAreas = [
  'Business Intelligence',
  'Data Engineering',
  'AI & LLM Applications',
  'SAP BTP & Fiori',
  'Full-Stack Apps',
];

const TYPE_DELAY = 70;
const DELETE_DELAY = 35;
const HOLD_DELAY = 1600;

const TypedFocus = () => {
  const [areaIndex, setAreaIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const word = focusAreas[areaIndex];
    let delay = deleting ? DELETE_DELAY : TYPE_DELAY;
    if (!deleting && length === word.length) delay = HOLD_DELAY;

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setAreaIndex((areaIndex + 1) % focusAreas.length);
      } else {
        setLength(length + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [areaIndex, length, deleting, reducedMotion]);

  if (reducedMotion) {
    return <p className={styles.focus}>{focusAreas.join(' · ')}</p>;
  }

  return (
    <p className={styles.focus} aria-label={focusAreas.join(', ')}>
      <span className={styles.focusPrompt} aria-hidden="true">&gt;</span>
      <span aria-hidden="true">{focusAreas[areaIndex].slice(0, length)}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </p>
  );
};

export default TypedFocus;
