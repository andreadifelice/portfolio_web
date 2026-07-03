import { cn, heroProps, pageContainerClass, projectProps, SectionProps } from '@/lib/utils';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ChangelogContent from '../shadcn-studio/blocks/timeline-component-05/timeline-component-05';
import { Button } from '../ui/button';
import { HeroSection } from '../ui/HeroSection';
import { MagicCard } from '../ui/magic-card';


export function ProjectsGrid() {
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

export function PortfolioContentSection() {
    return (
        <div
            className={cn(
                pageContainerClass,
                'relative z-10 flex flex-col gap-20 py-8 pt-25 md:pt-50 scroll-mt-24',
            )}
            data-section="projects"
        >
            <ProjectsGrid />
            <ChangelogContent />
        </div>
    );
}

export function Section1({ scrollYProgress, animated }: SectionProps) {
    const scale = useTransform(scrollYProgress, [0, 1], animated ? [1, 0.8] : [1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], animated ? [0, -5] : [0, 0]);
    const className = animated
        ? 'sticky top-0 flex h-dvh w-full flex-col items-center justify-center bg-background font-semibold text-foreground'
        : 'flex min-h-dvh w-full flex-col bg-background font-semibold text-foreground';

    if (!animated) {
        return (
            <section className={className}>
                <HeroSection {...heroProps} animated={false} />
            </section>
        );
    }

    return (
        <motion.section style={{ scale, rotate }} className={className}>
            <HeroSection {...heroProps} animated />
        </motion.section>
    );
}

export function Section2({ scrollYProgress, animated }: SectionProps) {
    const scale = useTransform(scrollYProgress, [0, 1], animated ? [0.8, 1] : [1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], animated ? [5, 0] : [0, 0]);
    const className = 'relative h-fit w-full bg-background text-primary';
    const content = (
        <>
            <div className='absolute inset-0 grid-pattern-lines mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            <PortfolioContentSection />
        </>
    );

    if (!animated) {
        return (
        <section className={className}>
            {content}
        </section>);
    }

    return (
        <motion.section style={{ scale, rotate }} className={className}>
            {content}
        </motion.section>
    );
}
