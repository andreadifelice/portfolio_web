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
import { navigationData } from '@/lib/routes';
import { cn, isNavLinkActive, navLinkClassName, pageContainerClass } from "@/lib/utils";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";


const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollYRef.current;

    setSticky(currentScrollY >= 50);

    if (currentScrollY <= 10) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(!isScrollingDown);
    }

    lastScrollYRef.current = currentScrollY;
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

  useEffect(() => {
    if (isOpen) setIsNavbarVisible(true);
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
          isNavbarVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className={cn(pageContainerClass, "py-4")}>
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
            <Switch className='hidden lg:flex'/>

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
