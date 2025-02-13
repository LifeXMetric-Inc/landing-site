import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Innovate with AI-Powered Solutions
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Leading tech consulting firm specializing in AI/ML solutions, DevOps excellence, 
            and reliability engineering. Empowering enterprises to lead in the digital era.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 flex-wrap"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              onClick={() => scrollTo('contact')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollTo('services')}
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 40%),
            radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 40%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}