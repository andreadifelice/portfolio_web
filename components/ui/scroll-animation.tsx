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
import Image from 'next/image';
//import placeholder from '@/assets/placeholder.png'
import carLogo from '@/assets/projects/car_logo.jpeg'
import soccerLogo from '@/assets/projects/logo_soccer.svg'
import me from '@/assets/me.webp'


const heroProps = {
    mainText: "Ciao, sono Andrea. Sono un Fullstack Developer Junior e Web Designer. Unisco la creatività del design visivo alla solidità del codice backend per dare vita a esperienze web complete, curate nei minimi dettagli e orientate alle performance. Dall'architettura del database alla cura dell'interfaccia, trasformo le idee in soluzioni digitali concrete.",
    readMoreLink: "#projects",
    imageSrc: me,
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
        title: 'Tournament manager',
        description: 'Applicativo web fullstack con gestione CRUD delle squadre e dei tornei da disputare',
        link: '/progetti',
        img: soccerLogo
    },
    {
        title: 'Car configurator',
        description: 'Creazione auto come admin e configurazione delle auto come user',
        link: '/progetti',
        img: carLogo
    },
]

function ProjectsGrid() {
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl'>
                I miei progetti
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                {projectProps.map((project, i) => (
                    <Link href={project.link} key={i} className='group transition-all'>
                        <MagicCard className='rounded-lg p-4 h-full flex'>
                            <div className='flex flex-col gap-4 h-full justify-between'>
                                <div className='flex gap-4'>
                                    <Image src={project.img} className='rounded-full object-cover object-center size-20 bg-white shadow-md' alt='logo progetto'/>
                                    <div>
                                        <p className='font-bold'>{project.title}</p>
                                        <span className='text-sm text-muted-foreground'>{project.description}</span>
                                    </div>
                                </div>
                                <Button className='pointer-events-none group-hover:bg-background group-hover:text-primary group-hover:border-border'>
                                    Guarda su github
                                </Button>
                            </div>
                        </MagicCard>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function ProjectsSection() {
    return (
        <div className='container relative z-10 mx-auto flex flex-col gap-20 p-8 pt-25 md:pt-50 scroll-mt-24' data-section="projects">
            <ProjectsGrid />
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
    const animationRef = useRef();
    const { scrollYProgress } = useScroll({
        target: animationRef,
        offset: ['start start', 'end end'],
    });

    return (
        <main className='relative bg-black'>
            <div
                ref={animationRef}
                className='pointer-events-none absolute inset-x-0 top-0 h-[200vh]'
                aria-hidden
            />
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
