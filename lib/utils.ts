import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React, { ComponentPropsWithoutRef } from "react";
import html from '@/assets/icons/html.svg';
import php from '@/assets/icons/php.webp';
import react from '@/assets/icons/react.webp';
import laravel from '@/assets/icons/laravel.png';
import hono from '@/assets/icons/hono.webp';
import postgres from '@/assets/icons/postgres.svg';
import css from '@/assets/icons/css.svg';
import javascript from '@/assets/icons/javascript.svg';
import figma from '@/assets/icons/figma.svg';
import illustrator from '@/assets/icons/illustrator.svg';
import photoshop from '@/assets/icons/photoshop.svg';
import {type StaticImageData} from "next/image";
import { siGithub, siInstagram, SimpleIcon } from 'simple-icons';
import carLogo from '@/assets/projects/car_logo.webp'
import soccerLogo from '@/assets/projects/logo_soccer.svg'
import me from '@/assets/me.webp'
import { motion, MotionValue } from "framer-motion";

import deadairLogo from '@/assets/projects/deadair.webp'
import yeezitaliaLogo from '@/assets/projects/yeezylogo.webp'
import gentechLogo from '@/assets/projects/gentech.webp'
import christianCalzoleriaLogo from '@/assets/projects/christianCalzoleria.webp'
import oasiLogo from '@/assets/projects/oasi3.webp'
import innamorataLogo from '@/assets/projects/innamorata.webp'
import playvoltLogo from '@/assets/projects/playvolt.webp'
import yeezyglobeLogo from '@/assets/projects/yzyglobe.webp'
import marsicandoLogo from '@/assets/projects/marsicando.webp'


/* utils functions */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const pageContainerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6"
export function SimpleIconSvg({ icon, className }: { icon: SimpleIcon; className?: string }) {
  return React.createElement(
    'svg',
    {
      role: 'img',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      className: cn('h-5 w-5', className),
      fill: 'currentColor',
    },
    React.createElement('title', null, icon.title),
    React.createElement('path', { d: icon.path }),
  );
}
/* utils functions */


/* gallery utils */
export interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}
export interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
  className?: string;
}
export const galleryProps: Gallery6Props = {
  heading: "Le mie esperienze",
  items: [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
};
/* gallery utils */


/* Hero section utilities */
export interface HeroVariantProps {
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
export type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;
/* Hero section utilities */


/* nav utilities */
export type NavigationSection = {
  title: string;
  href: string;
};
export function isNavLinkActive(pathname: string, href: string) {
  if (!href || href === "#") return false;
  if (href === "/") return pathname === "/";

  const [path] = href.split("#");
  if (!path) return false;

  return pathname === path || pathname.startsWith(`${path}/`);
}
export const scrollToSection = (sectionName: string) => {
  const el = document.querySelector(`[data-section="${sectionName}"]`);
  if(!el) return;
  el.scrollIntoView({behavior: 'smooth', block:'start'})
}
export const navLinkClassName = (isActive: boolean) =>
  cn(
  "px-2 lg:px-4 py-2 text-sm font-medium rounded-full transition tracking-normal outline",
  isActive
      ? "bg-primary! text-background outline-border shadow-xs"
      : "text-muted-foreground outline-transparent hover:bg-background hover:text-foreground hover:outline-border hover:shadow-xs",
  );
/* nav utilities */


/* timeline data utils */
export interface Step {
  icon: StaticImageData | string;
  title: string;
  description: string;
  color?: string;
}
export interface OnboardingStepsProps {
  mainHeadline?: string;
  mainDescription?: string;
  imgUrl?: string;
  steps?: Step[];
  showcaseTitle?: string;
  showcaseValue?: string;
  showcaseSubtitle?: string;
  showcasePercentage?: number;
  showcaseIcon?: React.ReactNode;
}
export const howItWorksByYear: Record<string, OnboardingStepsProps> = {
  "2022": {
    mainHeadline: "Dove tutto ha avuto inizio...",
    mainDescription: "Appena finito le superiori iniziai ad approcciarmi con il mondo del web grazie ad un corso gratuito dove ho potuto scoprire la passione per la programmazione, da qui nasce l'idea di iscrivermi all'istituto professionale Infobasic",
    steps: [],
  },
  "2023/2025": {
    mainHeadline: "Il biennio da Web Designer",
    mainDescription: "Il biennio in Web & Multimedia Design è iniziato con una marcia in più, grazie alle basi di HTML che avevo già studiato in autonomia. Nel corso degli studi, ho arricchito le mie competenze unendo il codice ai principi della grafica e della UX/UI, acquisendo anche solide basi di web marketing. Avendo da sempre un approccio molto pratico e operativo, ho trovato subito il mio ambiente ideale: questo mi ha permesso di assimilare nuove metodologie e tecnologie in tempi brevi, trasformando immediatamente la teoria in progetti concreti. Al termine del secondo anno accademico presso Infobasic, ho consolidato le mie competenze ottenendo la qualifica da Web Designer e la certificazione di Certified WordPress Editor.",
    steps: [
      {
        icon: html,
        title: "HTML 5",
        description: "Sviluppo di interfacce web tramite markup HTML semantico",
      },
      {
        icon: css,
        title: "CSS 3",
        description: "Ottimizzazione dell'aspetto visivo e dell'esperienza utente attraverso l'uso di CSS moderno, animazioni e micro-interazioni.",
      },
      {
        icon: javascript,
        title: "Javascript",
        description: "Sviluppo di logiche front-end dinamiche utilizzando JavaScript moderno (ES6+), garantendo codice fluido, modulare e ben strutturato.",
      },
      {
        icon: figma,
        title: "Figma",
        description: "Progettazione di interfacce utente (UI) e studio dell'esperienza utente (UX) per siti web e web app, dalla creazione di wireframe strutturali fino allo sviluppo di prototipi interattivi ad alta fedeltà.",
      },
      {
        icon: illustrator,
        title: "Illustrator",
        description: "Creazione di icone personalizzate, illustrazioni ed esportazione ottimizzata di asset in formato SVG per arricchire le interfacce web mantenendole leggere e definite.",
      },
      {
        icon: photoshop,
        title: "Photoshop",
        description: "Ottimizzazione del peso e della qualità degli asset fotografici per il web, oltre alla creazione di mockup realistici per presentare al meglio progetti digitali e identità di brand.",
      },
    ],
  },
  "2025": {
    mainHeadline: "Il percorso da fullstack developer",
    mainDescription: "Dopo il biennio, ho consolidato il mio profilo tecnico frequentando un Master come Fullstack Developer. Ho ampliato il mio raggio d'azione dallo sviluppo visivo fino all'architettura server-side, padroneggiando tecnologie avanzate per sviluppare piattaforme web complete, scalabili e performanti.",
    steps: [
      {
        icon: react,
        title: "React",
        description: "Libreria JavaScript leader nel settore per la creazione di interfacce utente (UI) dinamiche, reattive e basate su un'architettura a componenti altamente riutilizzabili.",
      },
      {
        icon: php,
        title: "PHP",
        description: "Progettazione e sviluppo lato server in PHP per la gestione dinamica dei dati. Sviluppo di modelli, migrazioni strutturate e integrazione efficiente con database relazionali (come PostgreSQL) per alimentare web app complesse.",
      },
      {
        icon: laravel,
        title: "Laravel",
        description: "Framework PHP avanzato per lo sviluppo di architetture backend solide, sicure e scalabili basate su pattern MVC.",
      },
      {
        icon: hono,
        title: "Hono",
        description: "Framework web ultraleggero e ad altissime prestazioni per TypeScript, progettato specificamente per ambienti Cloud, Serverless ed Edge.",
      },
      {
        icon: postgres,
        title: "Postgres SQL",
        description: "Sistema di gestione di database relazionali (RDBMS) avanzato e open-source, scelto per la sua straordinaria robustezza, affidabilità e capacità di gestire query complesse.",
      },
      
    ],
  },
  Oggi: {
    mainHeadline: "Da studente a libero professionista",
    mainDescription: "Il completamento del percorso triennale in Infobasic ha segnato la sintesi perfetta di tutto ciò che ho imparato. Non si è trattato solo di ricevere un diploma, ma di consolidare la mia duplice identità di Fullstack Developer Junior e Web Designer. Oggi guardo ai progetti con una visione a 360°: dalla cura della UX/UI iniziale fino alla progettazione di architetture backend solide e scalabili. Sono pronto a mettere questa operatività e la mia forte attitudine al problem solving al servizio di progetti reali e sfide aziendali complesse.",
    steps: [],
  }
};
/* timeline data utils */


/* scroll data utils */
export type SectionProps = {
  scrollYProgress: MotionValue<number>;
  animated: boolean;
};
export const heroProps = {
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
export const projectProps = [
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
/* scroll data utils */


/* images utils */
export const images: { src: StaticImageData | string; alt: string }[] = [
  { src: yeezitaliaLogo, alt: "Logo yeezitalia" },
  { src: gentechLogo, alt: "Logo recensioni gadget tech" },
  { src: marsicandoLogo, alt: "Logo mercatini Natale" },
  { src: deadairLogo, alt: "Progetto gruppo rap Deadair" },
  { src: playvoltLogo, alt: "Logo catalogo videogames" },
  { src: yeezyglobeLogo, alt: "Logo yzyglobe" },
  { src: christianCalzoleriaLogo, alt: "Progetto christian calzoleria" },
  { src: oasiLogo, alt: "Logo spa" },
  { src: innamorataLogo, alt: "Logo gelato italiano" },
]
/* images utils */