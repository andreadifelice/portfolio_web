'use client';

import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import {
  getThemeFromChecked,
  isDarkTheme,
  setThemeWithCircleTransition,
} from '@/lib/theme-transition';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

const SWITCH_ID = 'theme-mode';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = isDarkTheme(resolvedTheme);

  const handleCheckedChange = (checked: boolean) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    setThemeWithCircleTransition(() => setTheme(getThemeFromChecked(checked)), { x, y });
  };

  if (!mounted) {
    return (
      <div
        className="relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full bg-muted"
        aria-hidden
      />
    );
  }

  return (
    <div ref={containerRef} className="inline-flex">
        <SwitchPrimitive.Root
        id={SWITCH_ID}
        checked={isDark}
        onCheckedChange={handleCheckedChange}
        aria-label={isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
        className={cn(
            'group/theme-switch relative inline-flex h-8 w-14 cursor-pointer shrink-0 items-center rounded-full p-0.5 transition-colors duration-500 outline-none',
            'focus-visible:ring-3 focus-visible:ring-ring/50',
            'data-unchecked:bg-primary',
            'data-checked:bg-secondary',
        )}
        >
        {/* Sole sul track — visibile quando il pallino è a destra (dark) */}
        <Sun
            aria-hidden
            className={cn(
            'pointer-events-none absolute top-1/2 left-1.5 z-0 size-3.5 -translate-y-1/2 transition-all duration-500 ease-out',
            isDark
                ? 'scale-100 rotate-0 opacity-80'
                : 'scale-50 -rotate-45 opacity-0',
        )}
        />

        {/* Luna sul track — visibile quando il pallino è a sinistra (light) */}
        <Moon
          aria-hidden
          className={cn(
            'pointer-events-none absolute top-1/2 right-1.5 z-0 size-3.5 -translate-y-1/2 transition-all duration-500 ease-out',
            isDark
              ? 'scale-50 rotate-45 text-indigo-200 opacity-0'
              : 'scale-100 rotate-0 text-indigo-300 opacity-80',
          )}
        />

        <SwitchPrimitive.Thumb
          className={cn(
            'relative z-10 flex size-7 items-center justify-center rounded-full bg-background shadow-md',
            'transition-transform duration-500 ease-out',
            'data-checked:translate-x-6 data-unchecked:translate-x-0',
          )}
        >
          {/* Sole sul pallino — attivo in light */}
          <Sun
            aria-hidden
            className={cn(
              'absolute size-4 text-amber-500 transition-all duration-500 ease-out',
              isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
            )}
          />

          {/* Luna sul pallino — attiva in dark */}
          <Moon
            aria-hidden
            className={cn(
              'absolute size-4 text-indigo-300 transition-all duration-500 ease-out',
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0',
            )}
          />
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </div>
  );
};

export default ThemeSwitcher;
