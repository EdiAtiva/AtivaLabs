'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Section_container,
  Carousel_container,
  Carousel_wrapper,
  Logo,
  logos
} from './style';

export default function Section_four() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const speed = 1;
    let frameId: number;

    const autoScroll = () => {
      if (!isHovered) {
        scrollAmount += speed;
        el.scrollLeft += speed;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      frameId = requestAnimationFrame(autoScroll);
    };

    frameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered]);

  // Arrastar com mouse
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      setIsHovered(true);
    };

    const onMouseLeave = () => {
      isDown = false;
      setIsHovered(false);
    };

    const onMouseUp = () => {
      isDown = false;
      setIsHovered(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <Section_container>
      <Carousel_container
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel_wrapper>
          {[...logos, ...logos].map((logo, index) => (
            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
              <Logo src={logo.src} />
            </a>
          ))}
        </Carousel_wrapper>
      </Carousel_container>
    </Section_container>
  );
}
