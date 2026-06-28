import placeholder from '@/assets/placeholder.png';
import html from '@/assets/html.svg';
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
  "2023/2024": {
    mainHeadline: "Titolo 2023/2024",
    mainDescription: "Descrizione del percorso",
    steps: [
      {
        icon: html,
        title: "HTML",
        description: "Descrizione di HTML 5",
      },
    ],
  },
  "2024/2025": {
    mainHeadline: "Titolo 2024/2025",
    mainDescription: "Descrizione del percorso",
    steps: [],
  },
  "2025": {
    mainHeadline: "Titolo 2025",
    mainDescription: "Descrizione del percorso",
    steps: [],
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

        <div className="space-y-8 mt-14 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start mt-8">
              <div
                className={'size-15'}
              >
                <Image src={step.icon} alt='immagine-percorso' className='object-cover object-center aspect-square rounded-full bg-primary p-1'/>
              </div>
              <div>
                <p className="text-base font-medium md:text-lg">{step.title}</p>
                <p className="text-primary/50 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
