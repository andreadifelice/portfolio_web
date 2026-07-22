import Image from "next/image"
import { BlurFade } from "./blur-fade"
import { images } from "@/lib/utils"

export function BlurFadeComponents() {
    return (
        <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3">
            {images.map(({ src, alt }, idx) => (
            <BlurFade key={alt} delay={0.25 + idx * 0.05} inView>
                <Image
                    className="mb-4 size-full rounded-lg object-contain bg-white p-3"
                    src={src}
                    alt={alt}
                    width={800}
                    height={600}
                />
            </BlurFade>
            ))}
        </div>
        </section>
    )
}