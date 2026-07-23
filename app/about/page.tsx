import img from '@/assets/me.webp';
import { AnimatedListComponent } from '@/components/ui/AnimatedListComponent';
import { BlurFadeComponents } from '@/components/ui/BlurFadeComponents';
import { cn, pageContainerClass } from "@/lib/utils";
import Image from "next/image";
import figmaLogo from '@/assets/icons/figma.svg'

export default function Page() {
    return (
        <div className={cn(pageContainerClass, "py-25 flex flex-col gap-25")}>
            <div className="flex justify-between items-center w-full">
                <Image src={img} alt="me" className="rounded-full object-contain size-100 bg-primary shadow-md"/>
                <div className="flex flex-col gap-5 w-full max-w-xl">
                    <p className='text-5xl font-bold'>Fullstack Web Developer con un forte occhio per il Design</p>
                    <p className="text-xl"> Progetto e sviluppo applicativi web completi combinando frontend moderni <span className="font-bold">(React, Next.js, shadcn/ui)</span> e backend strutturati <span className="font-bold">(Laravel, Node.js)</span>. A questo affianco competenze di <span className="font-bold">UI/UX</span> e Visual Design maturate durante la mia formazione presso l'istituto Infobasic, che mi permettono di curare sia l'architettura tecnica sia l'identità visiva dei brand, dalla progettazione del logo ai componenti di interfaccia.</p>
                </div>
            </div>
            <div className='flex flex-col gap-15'>
                <p className='text-3xl font-bold'>I miei progetti da graphic designer</p>
                <BlurFadeComponents />
            </div>
            <div className='flex flex-col gap-15'>
                <p className='text-3xl font-bold'>Programmi che utilizzo da graphic designer</p>
                <AnimatedListComponent />
            </div>
            <div className="flex flex-row-reverse justify-between items-center w-full">
                <Image src={figmaLogo} alt="figma" className="rounded-4xl p-5 object-contain size-100 bg-primary shadow-md"/>
                <div className="flex flex-col gap-5 w-full max-w-xl">
                    <p className='text-5xl font-bold'>Come si realizza un sito web? L'utilità di Figma</p>
                    <p className="text-xl">Utilizzo <span className='font-bold'>Figma</span> per progettare <span className='font-bold'>prototipi interattivi</span> di siti e applicazioni web. Questo permette di visualizzare in anteprima la <span className='font-bold'>struttura</span>, la <span className='font-bold'>gerarchia visiva</span>, i <span className='font-bold'>font</span> e la <span className='font-bold'>palette colori</span>, offrendo una simulazione fedele dell'esperienza utente finale prima dello sviluppo.</p>
                </div>
            </div>
            <div className='flex flex-col gap-15'>
                <p className='text-3xl font-bold'>I miei prototipi</p>
                <BlurFadeComponents />
            </div>
        </div>
    );
}
