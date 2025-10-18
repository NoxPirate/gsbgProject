"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductCard.module.css";

interface Props {
  title: string;
  summary?: string;
  logo?: string;
  link?: string;
  color?: string;
  goal?: string;
  implementation?: string[];
  technology?: string[];
  bgImage?: string;
}

export default function ProductCard({
  title,
  summary,
  logo,
  link = "#",
  color = "#f40103",
  goal,
  implementation,
  technology,
  bgImage,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  function readableTextColor(hex: string) {
    try {
      const h = hex.replace("#", "");
      const r = parseInt(h.substring(0, 2), 16) / 255;
      const g = parseInt(h.substring(2, 4), 16) / 255;
      const b = parseInt(h.substring(4, 6), 16) / 255;
      const lum =
        0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
        0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)) +
        0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));
      return lum > 0.5 ? "#0f172a" : "#ffffff";
    } catch {
      return "#ffffff";
    }
  }
  const overlayTextColor = readableTextColor(color);

  // Intersection observer to close details if card leaves viewport
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (showDetails && entry.intersectionRatio < 0.5) {
            setShowDetails(false);
            setHovered(false);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [showDetails]);

  // Mouse movement for parallax tilt
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
      const rotateX = (y - 0.5) * -10;
      const rotateY = (x - 0.5) * 10;
      node.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const resetTilt = () => {
      node.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    if (hovered) {
      node.addEventListener("mousemove", handleMove);
      node.addEventListener("mouseleave", resetTilt);
    } else {
      resetTilt();
    }

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", resetTilt);
    };
  }, [hovered]);

  return (
    <div className="flex justify-center">
      <div
        ref={cardRef}
        className={`${styles.card} ${hovered ? styles.hovered : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          if (showDetails) setShowDetails(false);
        }}
        style={
          {
            "--card-color": color,
            "--overlay-text-color": overlayTextColor,
            backgroundImage: bgImage
              ? `url(${bgImage})`
              : `linear-gradient(135deg, ${color}20, ${color}40), url('https://www.transparenttextures.com/patterns/sandpaper.png')`,
          } as React.CSSProperties
        }
      >
        {/* Parallax Logo */}
        {logo && (
          <div
            className={`${styles.logoWrapper} ${
              hovered ? styles.logoTopRight : styles.logoCenter
            }`}
            style={{
              transform: hovered
                ? `translate(${(mousePos.x - 0.5) * 10}px, ${(mousePos.y - 0.5) * 10}px) scale(1)`
                : "translate(-50%, -50%) scale(1.1)",
            }}
          >
            <img src={logo} alt="logo" className={styles.logoImg} />
          </div>
        )}

        {/* Content */}
        <div className={`${styles.content} ${hovered ? styles.contentVisible : ""}`}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.summary}>{summary}</p>
          </div>
          <button
            className={styles.exploreBtn}
            onClick={() => {
              setShowDetails((prev) => !prev);
              setHovered(true);
            }}
          >
            Explore More
          </button>
        </div>

        {/* Overlay */}
        {showDetails && (
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{title} — Case Study</h3>
              {goal && <p><strong>Goal:</strong> {goal}</p>}
              {implementation && (
                <div className="mt-3">
                  <strong>Implementation:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                    {implementation.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>
              )}
              {technology && (
                <div className="mt-3">
                  <strong>Technology Used:</strong>
                  <div className={styles.techTags}>
                    {technology.map((t, i) => (
                      <span key={i} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="text-right mt-4">
                <button className={styles.exploreBtn} onClick={() => setShowDetails(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
