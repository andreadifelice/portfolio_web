'use client'
import Logo from '@/assets/logo/logo';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Switch, { navbarControlClassName } from '@/components/ui/theme-switcher';
import { cn } from "@/lib/utils";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export type NavigationSection = {
  title: string;
  href: string;
};

function isNavLinkActive(pathname: string, href: string) {
  if (!href || href === "#") return false;
  if (href === "/") return pathname === "/";

  const [path] = href.split("#");
  if (!path) return false;

  return pathname === path || pathname.startsWith(`${path}/`);
}

const navLinkClassName = (isActive: boolean) =>
  cn(
    "px-2 lg:px-4 py-2 text-sm font-medium rounded-full transition tracking-normal outline",
    isActive
      ? "bg-primary! text-background outline-border shadow-xs"
      : "text-muted-foreground outline-transparent hover:bg-background hover:text-foreground hover:outline-border hover:shadow-xs",
  );

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Progetti",
    href: "/progetti",
  },
];

const menuButtonClassName =
  "flex cursor-pointer items-center justify-center rounded-full border border-border bg-background p-2 outline-none transition-colors";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "mx-auto flex h-fit w-full max-w-full items-center justify-between gap-3.5 rounded-full border p-2.5 lg:gap-6",
              "transition-[max-width,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-in-out",
              sticky
                ? "max-w-5xl border-border/40 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl"
                : "border-transparent bg-transparent shadow-none backdrop-blur-none",
            )}
          >
            <Link
              href="/"
              className={cn(navbarControlClassName)}
            >
              <Logo className="h-9 w-9 text-primary" />
            </Link>
            <div>
              <NavigationMenu className="max-lg:hidden p-2.5 rounded-full bg-background">
                <NavigationMenuList className="flex gap-2">
                  {navigationData.map((navItem) => {
                    const isActive = isNavLinkActive(pathname, navItem.href);

                    return (
                      <NavigationMenuItem key={navItem.title}>
                        <NavigationMenuLink
                          href={navItem.href}
                          className={navLinkClassName(isActive)}
                          data-active={isActive ? "" : undefined}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {navItem.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Switch className='hidden md:flex'/>

            <div className="lg:hidden">
              <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
                <DrawerTrigger asChild>
                  <button type="button" className={cn(navbarControlClassName)}>
                    <TextAlignJustify size={20} />
                    <span className="sr-only">Menu</span>
                  </button>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader className="flex-row items-center justify-between w-full">
                    <Switch />
                    <DrawerClose asChild>
                      <Button variant="outline" className="h-10 w-10">
                        <X />
                      </Button>
                    </DrawerClose>
                  </DrawerHeader>

                  <div className="overflow-y-auto px-4">
                    {navigationData.map((item) => {
                      const isActive = isNavLinkActive(pathname, item.href);

                      return (
                        <DrawerClose asChild key={item.title}>
                          <Link
                            href={item.href}
                            className={cn(
                              "mb-4 block rounded-lg px-3 py-2 text-sm font-medium leading-normal",
                              isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground hover:bg-accent/50",
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {item.title}
                          </Link>
                        </DrawerClose>
                      );
                    })}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </nav>
        </div>
      </header>
      {!isHome && <div aria-hidden className="h-[72px]" />}
    </>
  );
};

export default Navbar;
