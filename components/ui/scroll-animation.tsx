// @ts-nocheck
'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { HeroSection } from './HeroSection';
import { siGithub, siInstagram } from 'simple-icons';
import ChangelogContent from '../shadcn-studio/blocks/timeline-component-05/timeline-component-05';
import { useIsMobile } from '@/lib/use-mobile';
import { MagicCard } from './magic-card';
import Link from 'next/link';
import { Button } from './button';

const heroProps = {
    mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus.",
    readMoreLink: "#about",
    imageSrc: "https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793",
    imageAlt: "A portrait of a person in a black turtleneck, in profile.",
    overlayText: {
        part1: "less is",
        part2: "more.",
    },
    socialLinks: [
        { icon: siGithub, href: "https://github.com/..." },
        { icon: siInstagram, href: "https://instagram.com/..." },
    ],
};

const projectProps = [
    {
        title: 'Progetto 1',
        description: 'Descrizione progetto 1',
        link: '/progetti'
    },
    {
        title: 'Progetto 2',
        description: 'Descrizione progetto 2',
        link: '/progetti'
    },
]

function ProjectsSection() {
    return (
        <div className='container relative z-10 mx-auto flex flex-col gap-20 p-8 pt-25'>
        <div className='flex flex-col gap-5'>
            <p className='text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl'>
                I miei progetti
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                {projectProps.map((project, i) => (
                    <Link href={project.link}>
                        <MagicCard className='rounded-lg p-4'>
                            <div className='flex flex-col gap-2'>
                                <p>{project.title}</p>
                                <span>{project.description}</span>
                                <Button>Guarda su github</Button>
                            </div>
                        </MagicCard>
                    </Link>
                ))}
            </div>
        </div>
        <ChangelogContent />
        </div>
    );
}

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.section
        style={{ scale, rotate }}
        className='sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-t from-[#ebebeb] to-[#dadada] font-semibold text-black'
        >
        <HeroSection {...heroProps} animated />
        </motion.section>
    );
};

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
        style={{ scale, rotate }}
        className='relative h-fit bg-background text-primary'
        >
            <div className='absolute inset-0 grid-pattern-lines mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            <ProjectsSection />
        </motion.section>
    );
};

function MobileScroll() {
    return (
        <main className='bg-background'>
        <section className='flex min-h-dvh w-full flex-col bg-linear-to-t from-[#ebebeb] to-[#dadada] font-semibold text-black'>
            <HeroSection {...heroProps} animated={false} />
        </section>
        <section className='relative h-fit bg-background text-primary'>
            <div className='absolute inset-0 grid-pattern-lines mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            <ProjectsSection />
        </section>
        </main>
    );
}

function DesktopScroll() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} className='relative h-[200vh] bg-black'>
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </main>
    );
}

export default function Scroll() {
    const isMobile = useIsMobile();

    if (isMobile === true) {
        return <MobileScroll />;
    }

    return <DesktopScroll />;
}
