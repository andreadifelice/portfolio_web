'use client';

import { Button } from '@/components/ui/button';
import { isDarkTheme, setThemeWithCircleTransition } from '@/lib/theme-transition';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

/** Stesso padding e forma del logo in navbar (cerchio) */
export const navbarControlClassName =
  'inline-flex size-14! shrink-0 items-center justify-center rounded-full p-2.5 bg-secondary/50 backdrop-blur-lg border-border';

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = isDarkTheme(resolvedTheme);

  const handleToggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const next = isDark ? 'light' : 'dark';

    setThemeWithCircleTransition(() => setTheme(next), { x, y });
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className={cn(navbarControlClassName, className)}
        disabled
        aria-hidden
      >
        <span className="block h-9 w-9" />
      </Button>
    );
  }

  return (
    <Button
      ref={buttonRef}
      type="button"
      variant="secondary"
      onClick={handleToggle}
      aria-label={isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
      className={cn(
        navbarControlClassName,
        'transition-colors',
        isDark
          ? 'text-primary hover:bg-muted'
          : 'text-amber-500 hover:bg-muted',
        className,
      )}
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <Sun
          aria-hidden
          className={cn(
            'absolute size-5 transition-all duration-300 ease-out',
            isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
          )}
        />
        <Moon
          aria-hidden
          className={cn(
            'absolute size-5 transition-all duration-300 ease-out',
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0',
          )}
        />
      </span>
    </Button>
  );
};

export default ThemeSwitcher;
