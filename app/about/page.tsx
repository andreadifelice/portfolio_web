import img from '@/assets/me.webp';
import HowItWorks from '@/components/how-it-works';
import { AnimatedListComponent } from '@/components/ui/AnimatedListComponent';
import { AuroraText } from '@/components/ui/aurora-text';
import { BlurFadeComponents } from '@/components/ui/BlurFadeComponents';
import { GridPatternComponent } from '@/components/ui/GridPatternComponent';
import { TextAnimate } from '@/components/ui/text-animate';
import { TextReveal } from '@/components/ui/text-reveal';
import { cn, pageContainerClass } from "@/lib/utils";
import Image from "next/image";

export default function Page() {
    return (
        <div className={cn(pageContainerClass, "py-25 flex flex-col gap-25")}>
            <p className='text-4xl md:text-5xl lg:text-7xl font-bold underline underline-offset-10'>
                About <AuroraText className='underline underline-offset-10'>me</AuroraText>
            </p>
            <div className="flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
                <Image 
                    src={img} 
                    alt="me" 
                    className="rounded-full object-contain size-48 md:size-64 lg:size-100 bg-primary shadow-md"
                />
                <div className="flex flex-col gap-5 w-full max-w-xl">
                    <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Fullstack Web Developer con un forte occhio per il Design
                    </p>
                    <p className="text-base md:text-lg lg:text-xl"> 
                        Progetto e sviluppo applicativi web completi combinando frontend moderni <span className="font-bold">(React, Next.js, shadcn/ui)</span> e backend strutturati <span className="font-bold">(Laravel, Node.js)</span>. A questo affianco competenze di <span className="font-bold">UI/UX</span> e Visual Design maturate durante la mia formazione presso l'istituto Infobasic, che mi permettono di curare sia l'architettura tecnica sia l'identità visiva dei brand, dalla progettazione del logo ai componenti di interfaccia.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <TextReveal>Prediligo un approccio minimalista e funzionale, sia nello sviluppo di interfacce che nella creazione di progetti grafici. Mantengo sempre un forte interesse per le nuove tendenze del design visivo, per garantire soluzioni moderne, pulite e capaci di comunicare in modo diretto.</TextReveal>
            </div>
            <p className='text-4xl md:text-5xl lg:text-7xl font-bold underline underline-offset-10'>
                Altri <AuroraText className='underline underline-offset-10'>servizi</AuroraText>
            </p>
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center w-full gap-10">
                <GridPatternComponent />
                <div className="flex flex-col gap-5 w-full max-w-xl z-5">
                    <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Come si realizza un sito web? L'utilità di Figma
                    </p>
                    <p className="text-base md:text-lg lg:text-xl">
                        Prima di poter mettere mano al codice utilizzo <span className='font-bold'>Figma</span> per progettare <span className='font-bold'>prototipi interattivi</span> di siti e applicazioni web. Questo permette di visualizzare in anteprima la <span className='font-bold'>struttura</span>, la <span className='font-bold'>gerarchia visiva</span>, i <span className='font-bold'>font</span> e la <span className='font-bold'>palette colori</span>, offrendo una simulazione fedele dell'esperienza utente finale.
                    </p>
                </div>
            </div>
            <HowItWorks/>
            <div className="flex flex-col justify-center items-start w-full h-screen gap-5">
                <TextAnimate className='text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl text-primary'>Non hai un logo? Posso farlo io</TextAnimate>
                <TextAnimate animation='scaleUp' by='character' className="text-base md:text-lg lg:text-xl">Oltre allo sviluppo web e all'interfaccia utente, mi occupo della progettazione di loghi e identità visive: trasformo l'idea di un brand in un simbolo unico, vettoriale e funzionale, costruito per durare nel tempo.</TextAnimate>
            </div>
            <div className='flex flex-col gap-15'>
                <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>I miei progetti da graphic designer</p>
                <BlurFadeComponents />
            </div>
            <div className='flex flex-col gap-15'>
                <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>Programmi che utilizzo da graphic designer</p>
                <AnimatedListComponent />
            </div>
        </div>
    );
}
