import Scroll from "@/components/ui/scroll-animation";
import { NavBar } from "@/components/ui/tubelight-navbar";


export default function Page() {
  const navItems = [
    { name: "Home", url: "#home", icon: "home" as const },
    { name: "About", url: "#about", icon: "user" as const },
    { name: "Projects", url: "#projects", icon: "briefcase" as const },
    { name: "Resume", url: "#resume", icon: "fileText" as const },
  ];

  return (
    <>
      <NavBar items={navItems} />
      <Scroll />
    </>
  );
}
