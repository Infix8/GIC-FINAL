import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#1a0d14', '#C95386'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '/logo.png',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#C95386',
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const openRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      
      const header = document.querySelector('.staggered-menu-header');

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      // ... (existing setup code for panel, preLayers, icons)

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      
      // VANISHING HEADER LOGIC
      if (header) {
        ScrollTrigger.create({
          start: 'top top',
          end: 'max',
          onUpdate: (self) => {
            // If menu is open, always show header
            // We use openRef.current to check latest state without deps
            if (openRef.current) {
                gsap.to(header, { yPercent: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
                return;
            }

            // Scroll direction: 1 = down, -1 = up
            if (self.direction === 1 && self.scroll() > 50) {
              gsap.to(header, { yPercent: -100, duration: 0.3, ease: 'power2.out', overwrite: true });
            } else if (self.direction === -1) {
              gsap.to(header, { yPercent: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
            }
          }
        });
      }
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    // Detect mobile for performance optimization
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    // Optimize initial states for mobile
    if (itemEls.length) {
      gsap.set(itemEls, { 
        yPercent: isMobile ? 50 : 140, 
        rotate: isMobile ? 0 : 10,
        force3D: true,
        transformOrigin: '50% 50%'
      });
    }
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as never]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: isMobile ? 10 : 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // Reduce layer animations on mobile
    if (!isMobile && !prefersReducedMotion) {
    layerStates.forEach((ls, i) => {
        tl.fromTo(
          ls.el, 
          { xPercent: ls.start, force3D: true }, 
          { xPercent: 0, duration: 0.5, ease: 'power4.out' }, 
          i * 0.07
        );
    });
    } else {
      // Skip layer animations on mobile for better performance
      layerStates.forEach((ls) => {
        gsap.set(ls.el, { xPercent: 0, force3D: true });
      });
    }

    const lastTime = (isMobile || prefersReducedMotion) ? 0 : (layerStates.length ? (layerStates.length - 1) * 0.07 : 0);
    const panelInsertTime = lastTime + ((isMobile || prefersReducedMotion) ? 0 : (layerStates.length ? 0.08 : 0));
    const panelDuration = isMobile ? 0.3 : (prefersReducedMotion ? 0.2 : 0.65);

    tl.fromTo(
      panel,
      { xPercent: panelStart, force3D: true },
      { xPercent: 0, duration: panelDuration, ease: isMobile ? 'power2.out' : 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = isMobile ? 0.3 : 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        { 
          yPercent: 0, 
          rotate: 0, 
          duration: isMobile ? 0.4 : (prefersReducedMotion ? 0.2 : 1), 
          ease: isMobile ? 'power2.out' : 'power4.out', 
          stagger: { each: isMobile ? 0.05 : 0.1, from: 'start' },
          force3D: true
        },
        itemsStart
      );

      if (numberEls.length && !isMobile) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity' as never]: 1, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * (isMobile ? 0.6 : 0.4);

      if (socialTitle) {
        tl.to(socialTitle, { 
          opacity: 1, 
          duration: isMobile ? 0.3 : 0.5, 
          ease: 'power2.out' 
        }, socialsStart);
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.3 : 0.55,
            ease: 'power2.out',
            stagger: { each: isMobile ? 0.04 : 0.08, from: 'start' },
            force3D: true,
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + (isMobile ? 0.02 : 0.04)
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: isMobile ? 0.2 : (prefersReducedMotion ? 0.1 : 0.32),
      ease: isMobile ? 'power2.in' : 'power3.in',
      overwrite: 'auto',
      force3D: true,
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        if (itemEls.length) gsap.set(itemEls, { yPercent: isMobile ? 50 : 140, rotate: isMobile ? 0 : 10 });

        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as never]: 0 });

        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: isMobile ? 10 : 25, opacity: 0 });

        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = isMobile ? 0.25 : (prefersReducedMotion ? 0.15 : 0.5);
    const ease = isMobile ? 'power2.out' : (prefersReducedMotion ? 'none' : 'power4.out');

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%', force3D: true });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease, force3D: true } })
        .to(h, { rotate: 45, duration }, 0)
        .to(v, { rotate: -45, duration }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: isMobile ? 'power2.inOut' : 'power3.inOut', force3D: true } })
        .to(h, { rotate: 0, duration: isMobile ? 0.2 : 0.35 }, 0)
        .to(v, { rotate: 90, duration: isMobile ? 0.2 : 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    
    // Simplify animation on mobile
    if (isMobile || prefersReducedMotion) {
      setTextLines([targetLabel]);
      gsap.set(inner, { yPercent: 0 });
      return;
    }

    const cycles = 3;
    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out',
      force3D: true
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
      // Prevent body scroll when menu opens
      if (isMobile) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }
    } else {
      onMenuClose?.();
      playClose();
      // Allow body scroll when menu closes
      if (isMobile) {
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';
      }
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose, isMobile]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
      
      // Re-enable body scrolling when menu closes
      if (isMobile) {
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';
      }
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose, isMobile]);
  
  // Control body scroll when menu opens/closes
  useEffect(() => {
    if (isMobile) {
      if (open) {
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      } else {
        // Allow body scroll when menu is closed
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';
      }
    }
    
    return () => {
      // Cleanup: always restore scrolling on unmount
      if (isMobile) {
        document.body.style.overflow = '';
        document.body.style.overflowX = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.overflowX = '';
      }
    };
  }, [open, isMobile]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close menu immediately
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
    
    // Navigate after a short delay to allow menu to start closing
    setTimeout(() => {
      navigate({ to: link });
    }, 100);
  };
  
  // Close menu when route changes
  useEffect(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [location.pathname, onMenuClose, playClose, animateIcon, animateColor, animateText]);

  // Detect mobile for performance optimizations
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  return (
    <>
    <Box
      className="sm-scope"
      sx={{
        zIndex: 50,
        ...(isFixed
          ? {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
            }
          : {
              width: '100%',
              height: '100%',
            }),
        ...(isFixed && isMobile
          ? { overflow: open ? 'hidden' : 'visible' }
          : {}),
      }}
    >
      <Box
        className={(className ? className + ' ' : '') + 'staggered-menu-wrapper'}
        sx={{
          pointerEvents: 'none',
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 50,
        }}
        style={accentColor ? ({ ['--sm-accent' as never]: accentColor } as React.CSSProperties) : undefined}
        data-position={position}
        data-open={open ? 'true' : undefined}
      >
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
          aria-hidden="true"
        >
          {(() => {
            const raw = colors && colors.length ? colors.slice(0, 4) : ['#1a0d14', '#C95386'];
            let arr = [...raw];
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2);
              arr.splice(mid, 1);
            }
            // Reduce layers on mobile for better performance
            const layersToShow = isMobile ? arr.slice(0, 1) : arr;
            return layersToShow.map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                style={{ 
                  background: c,
                  willChange: 'transform',
                  transform: 'translateZ(0)'
                }}
              />
            ));
          })()}
        </div>

        <Box
          component="header"
          className="staggered-menu-header"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '2em',
            bgcolor: 'transparent',
            pointerEvents: 'none',
            zIndex: 20,
          }}
          aria-label="Main navigation header"
        >
          <Box
            className="sm-logo"
            sx={{
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none',
              pointerEvents: 'auto',
            }}
            aria-label="Logo"
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={logoUrl}
                alt="SMEC Logo"
                className="sm-logo-img"
                draggable={false}
                sx={{
                  display: 'block',
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              pointerEvents: 'auto',
            }}
          >
            {/* Menu Toggle */}
            <button
              ref={toggleBtnRef}
              className={`sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible ${
                open ? 'text-black' : 'text-white'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="staggered-menu-panel"
              onClick={toggleMenu}
              type="button"
            >
              <span
                ref={textWrapRef}
                className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
                aria-hidden="true"
              >
                <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                  {textLines.map((l, i) => (
                    <span className="sm-toggle-line block h-[1em] leading-none" key={i}>
                      {l}
                    </span>
                  ))}
                </span>
              </span>

              <span
                ref={iconRef}
                className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
                aria-hidden="true"
              >
                <span
                  ref={plusHRef}
                  className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                />
                <span
                  ref={plusVRef}
                  className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                />
              </span>
            </button>
          </Box>
        </Box>

        <Box
          component="aside"
          id="staggered-menu-panel"
          ref={panelRef}
          className="staggered-menu-panel"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: { xs: '6em 2em 2em 2em' },
            overflowY: 'auto',
            zIndex: 10,
            pointerEvents: 'auto',
            WebkitBackdropFilter: isMobile ? 'blur(8px)' : 'blur(20px)',
            backdropFilter: isMobile ? 'blur(8px)' : 'blur(20px)',
            background: 'linear-gradient(180deg, rgba(15, 12, 25, 0.98) 0%, rgba(10, 10, 15, 0.99) 100%)',
            borderLeft: `1px solid ${theme.palette.primary.main}26`, // ~15% opacity
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          aria-hidden={!open}
        >
          <Stack
            className="sm-panel-inner"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <ul
              className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items && items.length ? (
                items.map((it, idx) => (
                  <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                    <Link
                      to={it.link}
                      className="sm-panel-item relative text-[#EAEAEA] font-semibold text-[2rem] md:text-[2.4rem] cursor-pointer leading-none tracking-[-1px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em] hover:text-[#A99BD4]"
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        setTimeout(() => {
                          navigate({ to: it.link });
                        }, 100);
                      }}
                    >
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                        {it.label}
                      </span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                  <span className="sm-panel-item relative text-[#EAEAEA] font-semibold text-[2rem] md:text-[2.4rem] cursor-pointer leading-none tracking-[-1px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                    <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                      No items
                    </span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials && socialItems && socialItems.length > 0 && (
              <Stack
                className="sm-socials"
                sx={{
                  mt: 'auto',
                  pt: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  borderTop: `1px solid ${theme.palette.primary.main}33`, // ~20% opacity
                }}
                aria-label="Social links"
              >
                <Typography
                  className="sm-socials-title"
                  variant="body1"
                  sx={{
                    m: 0,
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'primary.main',
                  }}
                >
                  Connect
                </Typography>
                <Box
                  component="ul"
                  className="sm-socials-list"
                  sx={{
                    listStyle: 'none',
                    m: 0,
                    p: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2.5,
                    flexWrap: 'wrap',
                  }}
                  role="list"
                >
                  {socialItems.map((s, i) => {
                    // Get icon based on label
                    const getIcon = (label: string) => {
                      const lowerLabel = label.toLowerCase();
                      if (lowerLabel === 'linkedin') {
                        return (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        );
                      } else if (lowerLabel === 'twitter' || lowerLabel === 'x') {
                        return (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        );
                      } else if (lowerLabel === 'instagram') {
                        return (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                          </svg>
                        );
                      } else if (lowerLabel === 'youtube') {
                        return (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
                          </svg>
                        );
                      }
                      // Default icon
                      return (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      );
                    };
                    
                    return (
                      <li key={s.label + i} className="sm-socials-item">
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link flex items-center gap-2 text-[1rem] font-medium text-[#EAEAEA] no-underline relative py-[2px] transition-all duration-300 ease-linear hover:text-[#A99BD4] group"
                          aria-label={`Follow us on ${s.label}`}
                        >
                          <span className="transition-transform duration-300 group-hover:scale-110">
                            {getIcon(s.label)}
                          </span>
                          <span className="hidden sm:inline">{s.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </Box>
              </Stack>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
    <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 9999; pointer-events: none; }
.sm-scope .staggered-menu-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 2em; background: transparent; pointer-events: none; z-index: 10020; }
@media (max-width: 767px) {
  .sm-scope { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; }
  .sm-scope .staggered-menu-header { position: fixed; top: 0; left: 0; width: 100%; }
  /* Allow body to scroll when menu is closed - remove overflow hidden */
  .sm-scope:not([data-open="true"]) { overflow: visible !important; }
  .sm-scope[data-open="true"] { overflow: hidden; }
}
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; height: 40px; width: auto; object-fit: contain; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #EAEAEA; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #8B7BB5; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; transform: translateZ(0); }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%) translateZ(0); will-change: transform; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(280px, 32vw, 380px); height: 100%; background: linear-gradient(180deg, rgba(15, 12, 25, 0.98) 0%, rgba(10, 10, 15, 0.99) 100%); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; flex-direction: column; padding: 6em 2.5em 2.5em 2.5em; overflow-y: auto; z-index: 10010; border-left: 1px solid rgba(139, 123, 181, 0.15); will-change: transform; transform: translateZ(0); }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; border-left: none; border-right: 1px solid rgba(139, 123, 181, 0.15); }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(280px, 32vw, 380px); pointer-events: none; z-index: 105; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0) translateZ(0); will-change: transform; }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; border-top: 1px solid rgba(139, 123, 181, 0.2); }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: #8B7BB5; }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #EAEAEA; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: #A99BD4; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #EAEAEA; font-weight: 600; font-size: 2rem; cursor: pointer; line-height: 1; letter-spacing: -1px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; transform: translateZ(0); }
.sm-scope .sm-panel-item:hover { color: #A99BD4; text-shadow: 0 0 30px rgba(169, 155, 212, 0.4); }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: #8B7BB5; letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .sm-prelayers { width: 100%; } }
@media (max-width: 768px) { 
  .sm-scope .staggered-menu-panel { 
    width: 100%; 
    left: 0; 
    right: 0; 
    backdrop-filter: blur(8px) !important; 
    -webkit-backdrop-filter: blur(8px) !important;
    padding: 4em 1.5em 1.5em 1.5em;
  } 
  .sm-scope .sm-prelayers { width: 100%; } 
  .sm-scope .sm-panel-item { font-size: 1.75rem; }
  .sm-scope .sm-panel-itemLabel { transform: translateZ(0); }
}
@media (max-width: 640px) { 
  .sm-scope .staggered-menu-panel { 
    width: 100%; 
    left: 0; 
    right: 0; 
    backdrop-filter: blur(8px) !important; 
    -webkit-backdrop-filter: blur(8px) !important;
    padding: 3em 1.25em 1.25em 1.25em;
  } 
  .sm-scope .sm-prelayers { width: 100%; } 
  .sm-scope .sm-panel-item { font-size: 1.6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .sm-scope * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
      `}</style>
    </>
  );
};

export default StaggeredMenu;
