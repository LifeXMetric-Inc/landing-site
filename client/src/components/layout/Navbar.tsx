import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Navbar() {
  const scrollTo = useScrollTo();
  const [location] = useLocation();

  const handleContactClick = () => {
    if (location === '/') {
      scrollTo('contact');
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex items-center justify-start">
              <Link href="/">
                <a className="flex items-center">
                  <span className="font-bold text-xl">LifeXMetric</span>
                </a>
              </Link>
            </div>
            <NavigationMenu className="hidden md:flex flex-1 justify-center">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <Link href="/services/ai-ml">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      AI/ML
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services/devops">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      DevOps
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services/sre">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      SRE
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex-1 flex justify-end">
              <Button onClick={handleContactClick}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}