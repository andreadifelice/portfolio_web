'use client'

import { useIsMobile } from '@/lib/use-mobile';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Section1, Section2 } from '../scroll-sections/scroll-types';

export default function Scroll() {
    const isMobile = useIsMobile();
    const animated = isMobile === false;
    const animationRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: animationRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div className="relative w-full bg-background">
            <div
                ref={animationRef}
                className={
                    animated
                    ? 'pointer-events-none absolute inset-x-0 top-0 h-[200vh]'
                    : 'pointer-events-none h-px w-px overflow-hidden opacity-0'
                }
                aria-hidden
            />
            <Section1 scrollYProgress={scrollYProgress} animated={animated} />
            <Section2 scrollYProgress={scrollYProgress} animated={animated} />
        </div>
    );
}
