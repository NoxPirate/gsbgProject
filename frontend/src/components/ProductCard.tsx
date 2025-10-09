"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from './ProductCard.module.css';

interface Props {
  title: string;
  summary?: string;
  logo?: string; // centered logo
  link?: string;
  color?: string;
  goal?: string;
  implementation?: string[];
  technology?: string[];
}

export default function ProductCard({ title, summary, logo, link = '#', color = '#f40103', goal, implementation, technology }: Props) {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  // simple luminance check to pick readable text color on top of `color`
  function readableTextColor(hex: string) {
    try {
      const h = hex.replace('#', '');
      const r = parseInt(h.substring(0, 2), 16) / 255;
      const g = parseInt(h.substring(2, 4), 16) / 255;
      const b = parseInt(h.substring(4, 6), 16) / 255;
      // srgb -> linear
      const lum = 0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
                + 0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4))
                + 0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));
      return lum > 0.5 ? '#0f172a' : '#ffffff';
    } catch (e) {
      return '#ffffff';
    }
  }
  const overlayTextColor = readableTextColor(color);

  // auto-close details when the card leaves the viewport
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if details are open and the card is less than half visible -> close
        if (showDetails && entry.intersectionRatio < 0.5) {
          setShowDetails(false);
          setHovered(false);
        }
      });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    obs.observe(node);
    return () => obs.disconnect();
  }, [showDetails]);

  // set CSS variables and dynamic glow styling on the DOM node to avoid inline JSX styles
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    try {
      node.style.setProperty('--card-color', color);
      node.style.setProperty('--overlay-text-color', overlayTextColor);
      // default reserve space; may be overridden by measured logo width
      node.style.setProperty('--reserve-space', '180px');
      // content colors: when hovered we want white text on colored bg, otherwise dark text on light bg
      node.style.setProperty('--content-color', hovered ? '#ffffff' : '#0b1220');
      node.style.setProperty('--content-subcolor', hovered ? 'rgba(255,255,255,0.9)' : '#334155');

      // set glow styles via CSS variables (fallbacks defined in module)
      if (hovered) {
        node.style.setProperty('--glow-box-shadow', `0 0 8px ${color}, 0 0 30px ${color}`);
        node.style.setProperty('--glow-border', '0');
      } else {
        node.style.setProperty('--glow-box-shadow', `0 0 6px ${color}`);
        node.style.setProperty('--glow-border', `6px solid ${color}`);
      }
    } catch (e) {
      // ignore
    }
  }, [color, overlayTextColor, hovered]);

  // measure logo width and set reserve-space adaptively
  useEffect(() => {
    const node = cardRef.current;
    const img = logoRef.current;
    if (!node || !img) return;

    const updateReserve = () => {
      try {
        const rect = img.getBoundingClientRect();
        // add padding so logo has breathing room
        const reserve = Math.round(rect.width + 32);
        node.style.setProperty('--reserve-space', `${reserve}px`);
      } catch (e) {
        // ignore
      }
    };

    // update once and on resize
    updateReserve();
    window.addEventListener('resize', updateReserve);
    return () => window.removeEventListener('resize', updateReserve);
  }, [logo, hovered]);

  return (
    <div className="flex justify-center">
      <div
        ref={cardRef}
        className={`${styles.card} ${styles.inner} ${hovered ? styles.hovered : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          // collapse the hover state
          setHovered(false);
          // if details were open, close them when cursor leaves the card
          if (showDetails) setShowDetails(false);
        }}
      >
        {/* Circle / Glow */}
        <div className={styles.glowWrap}>
          <div className={`${styles.glow} ${hovered ? styles.rect : styles.round}`} />

          {/* Logo (centered -> moves to right corner on hover) */}
          {logo && (
            <div className={`${styles.logo} ${hovered ? styles.right : styles.center}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img ref={logoRef} src={logo} alt="logo" width={140} height={60} className="object-contain" />
            </div>
          )}
        </div>

  {/* Note: removed separate floating product image to avoid duplicate logos. The card uses a single logo that animates. */}

        {/* Content */}
        {/* Content: constrain width to leave space for the logo when hovered so it doesn't overlap */}
  <div className={`${styles.content} ${hovered ? 'visible' : 'hidden'}`}>
          <h2 className="title">{title}</h2>
          <p className="summary">{summary}</p>
          <button onClick={() => {
            setShowDetails((s) => {
              const next = !s;
              if (next) setHovered(true); // ensure card is expanded when details open
              return next;
            });
          }} className="inline-block mt-4 bg-white text-black font-semibold px-5 py-2 rounded-lg">Explore More</button>
        </div>

        {/* Details dropdown (in-card overlay) */}
        {showDetails && (
          <div className={styles.overlay}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`${styles.heading}`}>{title} — Case Study</h3>
              <button onClick={() => setShowDetails(false)} className="text-sm">Close</button>
            </div>
            <div>
              {goal ? (<p className="mb-3"><strong>Goal:</strong> {goal}</p>) : null}
              {implementation ? (
                <div className="mb-3">
                  <strong>Implementation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                    {implementation.map((it: string, i: number) => (<li key={i}>{it}</li>))}
                  </ul>
                </div>
              ) : null}
              {technology ? (
                <div>
                  <strong>Technology Used:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {technology.map((t: string, i: number) => (<span key={i} className={styles.tag}>{t}</span>))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
