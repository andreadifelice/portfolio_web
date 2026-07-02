import placeholder from '@/assets/placeholder.png';
import html from '@/assets/icons/html.svg';
import php from '@/assets/icons/php.webp';
import laravel from '@/assets/icons/laravel.png';
import hono from '@/assets/icons/hono.webp';
import postgres from '@/assets/icons/postgres.svg';
import css from '@/assets/icons/css.svg';
import javascript from '@/assets/icons/javascript.svg';
import figma from '@/assets/icons/figma.svg';
import illustrator from '@/assets/icons/illustrator.svg';
import photoshop from '@/assets/icons/photoshop.svg';
import Image, { type StaticImageData } from "next/image";
import React from "react";

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

const defaultHowItWorksProps: Required<
  Pick<OnboardingStepsProps, "mainHeadline" | "mainDescription" | "steps">
> = {
  mainHeadline: "Three Easy Steps",
  mainDescription: "Description",
  steps: [
    {
      icon: placeholder,
      title: "Connect your data",
      description:
        "Lorem ipsum dolor amet adipiscing or elit. Volutpat tempor mentum.",
    },
    {
      icon: placeholder,
      title: "Customize your app",
      description:
        "Lorem ipsum dolor sit amet sectetur adipiscing elit. Volutpat tempor style & condimentum.",
    },
    {
      icon: placeholder,
      title: "Share with a link",
      description:
        "Lorem ipsum dolor amet adipiscing Volutpat tempor with anyone.",
    },
  ],
};

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
        icon: postgres,
        title: "Postgres SQL",
        description: "Sistema di gestione di database relazionali (RDBMS) avanzato e open-source, scelto per la sua straordinaria robustezza, affidabilità e capacità di gestire query complesse.",
      },
      {
        icon: hono,
        title: "Hono drizzle orm",
        description: "Sistema di gestione di database relazionali (RDBMS) avanzato e open-source, scelto per la sua straordinaria robustezza, affidabilità e capacità di gestire query complesse.",
      },
    ],
  },
  Oggi: {
    mainHeadline: "Titolo oggi",
    mainDescription: "Descrizione del percorso",
    steps: [],
  }
};

export default function HowItWorks(props: OnboardingStepsProps = {}) {
  const { mainHeadline, mainDescription, steps } = {
    ...defaultHowItWorksProps,
    ...props,
  };
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
      <div className="flex-1">
        <div className="flex flex-col gap-2.5">
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">{mainHeadline}</p>
          <p className="text-primary/50">{mainDescription}</p>
        </div>

        {steps.length > 0 && (
          <div className="mt-14 mb-8">
            <p className='text-xl'>Competenze acquisite:</p>
            <div className="space-y-8 mt-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="relative size-9 shrink-0 md:size-12">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 36px, 48px"
                      className="rounded-full bg-white object-contain p-1 shadow-2xs"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium md:text-lg">{step.title}</p>
                    <p className="text-primary/50 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
