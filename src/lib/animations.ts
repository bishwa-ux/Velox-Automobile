import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: Element | string, options = {}) =>
  gsap.fromTo(element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', ...options }
  );

export const staggerReveal = (elements: string, trigger: Element | string, options = {}) =>
  gsap.fromTo(elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger, start: 'top 80%', once: true },
      ...options
    }
  );
