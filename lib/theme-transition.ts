'use client';

type ThemeName = 'light' | 'dark';

type TransitionPosition = {
  x: number;
  y: number;
};

export function setThemeWithCircleTransition(
  applyTheme: () => void,
  position?: TransitionPosition,
) {
  const x = position?.x ?? window.innerWidth / 2;
  const y = position?.y ?? window.innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  if (!document.startViewTransition) {
    applyTheme();
    return;
  }

  const transition = document.startViewTransition(() => {
    applyTheme();
  });

  transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    })
    .catch(() => {
      applyTheme();
    });
}

export function getThemeFromChecked(checked: boolean): ThemeName {
  return checked ? 'dark' : 'light';
}

export function isDarkTheme(theme: string | undefined): boolean {
  return theme === 'dark';
}
