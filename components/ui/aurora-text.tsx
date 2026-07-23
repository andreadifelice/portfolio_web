"use client"

import React, { memo } from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors,
    speed = 1,
  }: AuroraTextProps) => {
    const customColors = colors
      ? ({
          "--aurora-1": colors[0],
          "--aurora-2": colors[1] ?? colors[0],
          "--aurora-3": colors[2] ?? colors[0],
          "--aurora-4": colors[3] ?? colors[0],
        } as React.CSSProperties)
      : undefined

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="aurora-text-gradient animate-aurora relative bg-size-[200%_auto]"
          style={{
            ...customColors,
            animationDuration: `${10 / speed}s`,
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
