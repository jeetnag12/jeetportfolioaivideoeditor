import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  (window as any).gsap = gsap;
  (window as any).ScrollTrigger = ScrollTrigger;
}

// Cinematic motion easing presets inspired by Videofolio
export const EASES = {
  cinematic: 'power3.out',
  cinematicSmooth: 'power4.out',
  cinematicExpo: 'expo.out',
  cinematicIn: 'power3.in',
  cinematicInOut: 'power3.inOut',
};

// Reusable ScrollTrigger configuration defaults
export const SCROLL_DEFAULTS = {
  start: 'top 85%',
  toggleActions: 'play none none none',
};

/**
 * Ensures ScrollTrigger recalculates after images, fonts, and DOM changes load.
 */
export const refreshScrollTrigger = () => {
  if (typeof window !== 'undefined' && ScrollTrigger) {
    ScrollTrigger.refresh();
  }
};

export { gsap, ScrollTrigger };
