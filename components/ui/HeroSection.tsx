"use client";

import { cn } from '@/lib/utils';
import { motion, type MotionValue } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import { SimpleIcon } from 'simple-icons';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import Link from 'next/link';

export function SimpleIconSvg({ icon, className }: { icon: SimpleIcon; className?: string }) {
    return (
        <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('h-5 w-5', className)}
        fill="currentColor"
        >
        <title>{icon.title}</title>
        <path d={icon.path} />
        </svg>
    );
}

interface HeroVariantProps {
    logoText?: string;
    mainText: string;
    readMoreLink: string;
    imageSrc: string | StaticImageData;
    imageAlt: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    socialLinks: { icon: SimpleIcon; href: string }[];
    textColor?: MotionValue<string>;
    animated?: boolean;
}

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

function AnimatedBox({
    animated,
    className,
    motionProps,
    children,
}: {
    animated: boolean;
    className?: string;
    motionProps?: Pick<MotionDivProps, 'initial' | 'animate' | 'transition'>;
    children?: React.ReactNode;
}) {
    if (!animated) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div className={className} {...motionProps}>
            {children}
        </motion.div>
    );
}

export const HeroSection = ({
    logoText = "",
    mainText,
    readMoreLink,
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
                "relative flex w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12",
                animated ? "h-screen" : "h-full min-h-dvh",
            )}
        >
            <header className="z-30 flex w-full max-w-7xl items-center justify-between">
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
    
            <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center md:grid-cols-3">
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
                    <Link href={readMoreLink} className={cn('mt-4 inline-block text-sm font-medium underline', textColor ? 'text-inherit' : 'text-foreground')}>
                        Read More
                    </Link>
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
        
            <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
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
