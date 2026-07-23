"use client"

import { cn, Item, notifications } from "@/lib/utils"
import Image from "next/image"
import { AnimatedList } from "./animated-list"


const Notification = ({ name, description, icon }: Item) => {
    return (
        <figure
        className={cn(
            "relative min-h-fit w-full max-w-xl overflow-hidden rounded-2xl p-4",
            // animation styles
            "transition-all duration-200 ease-in-out",
            // light styles
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
        )}
        >
        <div className="flex flex-row items-center gap-3">
            <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-muted/50 md:p-1.5">
                <Image 
                src={icon} 
                alt="programs logo" 
                className="size-full object-contain"
                />
            </div>

            <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
                <span className="text-sm sm:text-lg">{name}</span>
                </figcaption>
                <p className="text-sm font-normal dark:text-white/60">
                {description}
                </p>
            </div>
            </div>
        </figure>
    )
}

export function AnimatedListComponent({ className }: { className?: string }) {
    return (
        <div className={cn("relative flex h-75 md:h-72 w-full flex-col overflow-hidden p-2", className)}>
            <AnimatedList delay={1000} inView>
            {notifications.map((item) => (
                <Notification {...item} key={item.id} />
            ))}
            </AnimatedList>
        </div>
    )
}
