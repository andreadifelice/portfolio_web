"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./grid-pattern"

export function GridPatternComponent() {
    return (
        <div 
            className={cn(
                "bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden",
                
                // Maschera per Firefox e standard futuri
                "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                "[mask-composite:intersect]",
                
                // Maschera per Safari e Chrome (WebKit)
                "[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                "[-webkit-mask-composite:source-in]"
            )}
            >
            <GridPattern
                squares={[
                [4, 4], [5, 1], [8, 2], [5, 3], [5, 5],
                [10, 10], [12, 15], [15, 10], [10, 15],
                ]}
                className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
        </div>
    )
}
