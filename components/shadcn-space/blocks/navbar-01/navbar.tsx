"use client";
import Logo from '@/assets/logo/Logo';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Switch from '@/components/ui/theme-switcher';
import { cn } from "@/lib/utils";
import { ArrowUpRight, TextAlignJustify } from "lucide-react";
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
    title: "Chi sono",
    href: "/contatti",
  },
];

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
    window.addEventListener("scroll", handleScroll);
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
              "flex h-fit w-full items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
              sticky
                ? "rounded-full border border-border/40 bg-background/60 p-2.5 shadow-2xl shadow-primary/5 backdrop-blur-lg"
                : "border-transparent bg-transparent",
            )}
          >
            <Link href="/" className="flex items-center p-3 rounded-full justify-center bg-secondary">
              <Logo className="text-primary h-9 w-9" />
            </Link>
            <div>
              <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-0">
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
            <div>
              <Switch />
            </div>

            <div className="lg:hidden">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors">
                  <TextAlignJustify size={20} />
                  <span className="sr-only">Menu</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-2"
                >
                  {navigationData.map((item) => {
                    const isActive = isNavLinkActive(pathname, item.href);

                    return (
                      <DropdownMenuItem
                        key={item.title}
                        className={cn(isActive && "bg-accent text-accent-foreground")}
                      >
                        <Link
                          href={item.href}
                          className="w-full cursor-pointer text-sm font-medium"
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </header>
      {!isHome && <div aria-hidden className="h-[72px]" />}
    </>
  );
};

export default Navbar;
