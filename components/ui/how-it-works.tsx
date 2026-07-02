
import { OnboardingStepsProps } from "@/lib/utils";
import Image from "next/image";

export default function HowItWorks({mainHeadline, mainDescription, steps = []}: OnboardingStepsProps) {
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
