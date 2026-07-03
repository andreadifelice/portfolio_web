"use client";

import { cn, HeroVariantProps, pageContainerClass, scrollToSection, SimpleIconSvg } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ElementType } from 'react';
import { AnimatedBox } from '../hero-sections/hero-utils';
import { Button } from './button';

export const HeroSection = ({
    logoText = "",
    mainText,
    imageSrc,
    imageAlt,
    overlayText,
    socialLinks,
    textColor,
    animated = true,
    }: HeroVariantProps) => {
    const Root = animated ? motion.div : ('div' as ElementType);
    const rootProps = animated && textColor ? { style: { color: textColor } } : {};
    const resolvedImageSrc = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;

    return (
        <Root
            {...rootProps}
            className={cn(
                "relative flex w-full flex-col items-center justify-between overflow-hidden bg-background font-sans",
                animated ? "h-dvh" : "h-full min-h-dvh",
            )}
        >
            <header className={cn(pageContainerClass, "z-30 flex w-full items-center justify-between py-8 md:py-12")}>
                <AnimatedBox
                    animated={animated}
                    motionProps={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5 },
                    }}
                    className={cn('text-xl font-bold tracking-wider', textColor ? 'text-inherit' : 'text-primary')}
                >
                    {logoText}
                </AnimatedBox>
                {animated ? (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col space-y-1.5 md:hidden"
                    />
                ) : null}
            </header>
    
            <div className={cn(pageContainerClass, "relative grid w-full grow grid-cols-1 items-center md:grid-cols-3")}>
                <AnimatedBox
                    animated={animated}
                    motionProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 1 },
                    }}
                    className="z-20 order-2 md:order-1 text-center md:text-left bg-background/70 backdrop-blur-md md:backdrop-blur-none md:bg-transparent p-2 rounded-2xl"
                >
                    <p className={cn('mx-auto max-w-xs text-sm leading-relaxed md:mx-0 text-primary')}>{mainText}</p>
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }} 
                        className={'mt-4 group flex items-center gap-1 p-4 rounded-lg text-sm font-medium text-background bg-primary hover:bg-background hover:border-primary hover:text-primary hover:rounded-[999px] transition-[border-radius,background-color,color,border-color,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]'}
                    >
                        Scopri di più
                        <ArrowRight className='transition-transform duration-500 ease-out group-hover:rotate-90'/>
                    </Button>
                </AnimatedBox>
        
                <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
                    <AnimatedBox
                        animated={animated}
                        motionProps={{
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                        }}
                        className="absolute z-0 h-[300px] w-[300px] rounded-full bg-primary/50 dark:bg-secondary md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                    />
                    {animated ? (
                        <motion.img
                            src={resolvedImageSrc}
                            alt={imageAlt}
                            className="relative z-10 h-auto w-56 scale-150 object-cover md:w-64 lg:w-72"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image`;
                            }}
                        />
                    ) : (
                        <img
                            src={resolvedImageSrc}
                            alt={imageAlt}
                            className="relative z-10 h-auto w-56 scale-150 object-cover md:w-64 lg:w-72"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image`;
                            }}
                        />
                    )}
                </div>
        
                <AnimatedBox
                    animated={animated}
                    motionProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 1.2 },
                    }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
                >
                    <h1 className={cn('text-7xl font-extrabold md:text-8xl lg:text-9xl', textColor ? 'text-inherit' : 'text-foreground')}>
                        {overlayText.part1}
                        <br />
                        {overlayText.part2}
                    </h1>
                </AnimatedBox>
            </div>
        
            <footer className={cn(pageContainerClass, "z-30 flex w-full items-center justify-between pb-8 md:pb-12")}>
                <AnimatedBox
                    animated={animated}
                    motionProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 1.2 },
                    }}
                    className="flex items-center space-x-4"
                >
                    <p className='text-primary'>Follow me</p>
                    {socialLinks.map((link) => (
                        <Link
                            key={link.icon.slug}
                            href={link.href}
                            aria-label={link.icon.title}
                            className={cn('transition-opacity', textColor ? 'text-inherit opacity-60 hover:opacity-100' : 'text-foreground/60 hover:text-foreground')}
                        >
                            <SimpleIconSvg icon={link.icon} />
                        </Link>
                    ))}
                </AnimatedBox>
            </footer>
        </Root>
    );
};
