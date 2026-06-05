import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      // Lerp for inner cursor (faster)
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      
      // Lerp for follower (slower)
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      gsap.set(cursor, { x: cursorX, y: cursorY });
      gsap.set(follower, { x: followerX, y: followerY });

      requestAnimationFrame(render);
    };
    render();

    // Hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, [data-cursor]');
      
      if (clickable) {
        const cursorType = clickable.getAttribute('data-cursor');
        
        if (cursorType === 'video') {
          gsap.to(cursor, { width: 64, height: 64, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid white', duration: 0.3 });
          cursor.innerHTML = '<span class="text-[10px] text-white">PLAY</span>';
        } else if (cursorType === 'explore') {
          gsap.to(cursor, { width: 56, height: 56, backgroundColor: 'transparent', border: '1px solid var(--color-velox-gold)', duration: 0.3 });
          cursor.innerHTML = '<span class="text-[10px] text-velox-gold whitespace-nowrap">EXPLORE &rarr;</span>';
        } else {
          gsap.to(cursor, { width: 40, height: 40, backgroundColor: 'rgba(201,168,76,0.05)', border: '1px solid var(--color-velox-gold)', duration: 0.3 });
          cursor.innerHTML = '';
        }
      } else {
        gsap.to(cursor, { width: 12, height: 12, backgroundColor: 'var(--color-velox-gold)', border: 'none', duration: 0.3 });
        cursor.innerHTML = '';
      }
    };

    const handleMouseDown = () => gsap.to(cursor, { scale: 0.8, duration: 0.1 });
    const handleMouseUp = () => gsap.to(cursor, { scale: 1, duration: 0.1 });

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-velox-gold rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-difference font-mono"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-20 h-20 border border-velox-gold/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-30"
      />
    </>
  );
}
