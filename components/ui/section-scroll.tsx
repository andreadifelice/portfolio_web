'use client';

import { AnimatedSection } from '@/components/ui/scroll-animation';
import { HeroSection } from '@/components/ui/HeroSection';
import { siGithub, siInstagram } from 'simple-icons';

export function HeroScrollSection() {
  return (
    <AnimatedSection
      id="home"
      aria-label="Home"
      variant="sticky-out"
      className="flex flex-col items-center justify-center bg-linear-to-t from-[#ebebeb] to-[#dadada] font-semibold text-black"
    >
      <HeroSection
        logoText="adf.creations"
        mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
        readMoreLink="#about"
        imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
        imageAlt="A portrait of a person in a black turtleneck, in profile."
        overlayText={{
          part1: 'less is',
          part2: 'more.',
        }}
        socialLinks={[
          { icon: siGithub, href: 'https://github.com/...' },
          { icon: siInstagram, href: 'https://instagram.com/...' },
        ]}
        locationText="Arlington Heights, IL"
      />
    </AnimatedSection>
  );
}

export function AboutScrollSection() {
  return (
    <AnimatedSection
      id="about"
      aria-label="About"
      variant="sticky-middle"
      className="grid place-content-center bg-neutral-300 text-black"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — About</p>
      <h2 className="mt-4 text-center text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
        Chi sono
      </h2>
      <p className="mx-auto mt-6 max-w-[50ch] text-center text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
        Breve presentazione su di te, le tue competenze e cosa ti appassiona nel mondo dello sviluppo
        e del design.
      </p>
    </AnimatedSection>
  );
}

export function ProjectsScrollSection() {
  return (
    <AnimatedSection
      id="projects"
      aria-label="Projects"
      variant="relative-in"
      className="grid place-content-center bg-linear-to-t from-[#06060e] to-[#1a1919] text-white"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Projects</p>
      <h2 className="mt-4 text-center text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
        I miei lavori
      </h2>
      <p className="mx-auto mt-6 max-w-[50ch] text-center text-[clamp(1rem,2vw,1.25rem)] leading-relaxed opacity-80">
        Qui puoi elencare i progetti principali del portfolio, con link a demo e repository.
      </p>
    </AnimatedSection>
  );
}
