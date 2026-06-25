// @ts-nocheck
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { HeroSection } from './HeroSection';
import { siGithub, siInstagram } from 'simple-icons';
import ChangelogContent from '../shadcn-studio/blocks/timeline-component-05/timeline-component-05';

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.section
        style={{ scale, rotate }}
        className='sticky  font-semibold top-0 h-screen bg-linear-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
        >
            <HeroSection
                mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
                readMoreLink="#about"
                imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
                imageAlt="A portrait of a person in a black turtleneck, in profile."
                overlayText={{
                part1: "less is",
                part2: "more.",
                }}
                socialLinks={[
                { icon: siGithub, href: "https://github.com/..." },
                { icon: siInstagram, href: "https://instagram.com/..." },
                ]}
                locationText="Arlington Heights, IL"
            />
        </motion.section>
    );
};

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
        style={{ scale, rotate }}
        className='relative h-fit bg-linear-to-t to-[#1a1919] from-[#06060e] text-white '
        >
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <article className='container mx-auto relative z-10 flex flex-col gap-20'>
            <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight '>
            Images That doesn't Make any sense <br /> but still in this section
            </h1>
            <div className='grid grid-cols-4 gap-4'>
            <img
                src='https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop'
                alt='img'
                className=' object-cover w-full rounded-md h-full'
            />
            <img
                src='https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop'
                alt='img'
                className=' object-cover w-full rounded-md'
            />
            <img
                src='https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop'
                alt='img'
                className=' object-cover w-full rounded-md h-full'
            />
            <img
                src='https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop'
                alt='img'
                className=' object-cover w-full rounded-md h-full'
            />
            </div>
            <ChangelogContent />
        </article>
        </motion.section>
    );
};

export default function Scroll() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <>
            <main ref={container} className='relative h-[200vh] bg-black'>
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </main>
        </>
    );
}
