import { Link, useLocation } from "wouter";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Footer() {
  const scrollTo = useScrollTo();
  const [location] = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === '/') {
      scrollTo('contact');
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">LifeXMetric</h3>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Leading IT consulting solutions for modern enterprises
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/ai-ml">AI/ML Solutions</Link>
                </li>
                <li>
                  <Link href="/services/devops">DevOps Solutions</Link>
                </li>
                <li>
                  <Link href="/services/sre">Site Reliability Engineering</Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#about">About Us</Link>
                </li>
                <li>
                  <a href="#contact" onClick={handleContactClick}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>contact@lifexmetric.com</li>
                <li>1-800-LIFEX</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LifeXMetric. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}