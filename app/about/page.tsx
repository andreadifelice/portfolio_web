import img from '@/assets/me.webp';
import { BlurFadeComponents } from '@/components/ui/BlurFadeComponents';
import { cn, pageContainerClass } from "@/lib/utils";
import Image from "next/image";

export default function Page() {
    return (
        <div className={cn(pageContainerClass, "py-25 flex flex-col gap-25")}>
            <div className="flex gap-25 items-center w-full">
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
                illustator
            </div>
        </div>
    );
}
