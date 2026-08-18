import React, { useRef, useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import './InfoVideo.css';

export const InfoVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // IntersectionObserver for lazy loading video src & play
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sync play state when inView
  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn('Autoplay prevented or video playback error:', err);
      });
    }
  }, [inView]);

  // Handle timeupdate for precise caption syncing
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Easing & fades calculations based on currentTime for smooth crossfades
  const getPhaseOpacity = (phase: number) => {
    if (reducedMotion) return phase === 3 ? 1 : 0;

    const fadeDuration = 0.4; // 400ms transition
    if (phase === 1) {
      if (currentTime >= 0 && currentTime < 3) {
        if (currentTime < fadeDuration) {
          return currentTime / fadeDuration; // Fade in
        } else if (currentTime > 3 - fadeDuration) {
          return (3 - currentTime) / fadeDuration; // Fade out
        }
        return 1; // Full opacity
      }
      return 0;
    }
    if (phase === 2) {
      if (currentTime >= 3 && currentTime < 6) {
        const relativeTime = currentTime - 3;
        if (relativeTime < fadeDuration) {
          return relativeTime / fadeDuration; // Fade in
        } else if (relativeTime > 3 - fadeDuration) {
          return (3 - relativeTime) / fadeDuration; // Fade out
        }
        return 1;
      }
      return 0;
    }
    if (phase === 3) {
      if (currentTime >= 6) {
        const relativeTime = currentTime - 6;
        if (relativeTime < fadeDuration) {
          return relativeTime / fadeDuration; // Fade in
        }
        // At the very end of the loop, fade out slightly before loop repeats
        if (currentTime > 9.6) {
          return (10 - currentTime) / 0.4;
        }
        return 1;
      }
      return 0;
    }
    return 0;
  };

  return (
    <section 
      ref={containerRef} 
      style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}
      className="info-video-section"
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
            Our Approach
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Starts With the Right Diagnosis
          </h2>
        </div>

        {/* Video Wrapper Box */}
        <div 
          style={{ 
            position: 'relative', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-lg)',
            backgroundColor: '#000000'
          }}
          className="video-wrapper"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/logo.jpeg"
            onTimeUpdate={handleTimeUpdate}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              backgroundColor: '#000'
            }}
          >
            <source src="/assets/orthopedic-loop.mp4" type="video/mp4" />
            <p>Video showing SOS's approach to orthopedic diagnosis and recovery</p>
          </video>

          {/* Overlay Dark Band for readability */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(7, 21, 46, 0.15) 0%, rgba(7, 21, 46, 0.45) 85%, rgba(7, 21, 46, 0.65) 100%)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {/* Centered Captions with crossfade */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '90%',
              maxWidth: '600px',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          >
            <div style={{ position: 'relative', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div 
                style={{ 
                  position: 'absolute',
                  opacity: getPhaseOpacity(1), 
                  transition: reducedMotion ? 'none' : 'opacity 0.25s ease',
                  fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  textShadow: '0 4px 16px rgba(7, 21, 46, 0.6)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                Real Pain.
              </div>

              <div 
                style={{ 
                  position: 'absolute',
                  opacity: getPhaseOpacity(2), 
                  transition: reducedMotion ? 'none' : 'opacity 0.25s ease',
                  fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  textShadow: '0 4px 16px rgba(7, 21, 46, 0.6)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                Real Diagnosis.
              </div>
            </div>
          </div>

          {/* Bottom Center SOS Logo Mark */}
          <div 
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              opacity: getPhaseOpacity(3),
              transition: reducedMotion ? 'none' : 'opacity 0.3s ease',
              pointerEvents: 'none',
              display: 'flex',
              justifyContent: 'center',
              width: 'max-content'
            }}
          >
            <BrandLogo variant="light" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
