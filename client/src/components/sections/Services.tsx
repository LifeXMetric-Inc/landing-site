import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BrainCircuitIcon, ServerIcon, ShieldCheckIcon, LockIcon } from "lucide-react";

const services = [
  {
    id: "ai-ml",
    title: "AI/ML Solutions",
    description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
    icon: BrainCircuitIcon,
    image: "https://images.unsplash.com/photo-1666724887170-794d90821679",
    isNew: true
  },
  {
    id: "devops",
    title: "DevOps Excellence",
    description: "Streamline your development and operations with modern DevOps practices and tools.",
    icon: ServerIcon,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: "sre",
    title: "Site Reliability Engineering",
    description: "Ensure system reliability and performance with expert SRE consulting.",
    icon: ShieldCheckIcon,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"
  },
  {
    id: "cybersecurity",
    title: "CyberSecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: LockIcon,
    comingSoon: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Innovative solutions for modern enterprises
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${
                service.isNew ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardHeader>
                <div className="mb-4 relative">
                  <service.icon className="h-10 w-10 text-primary" />
                  {service.isNew && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <CardTitle className="flex items-center gap-2 flex-wrap">
                  {service.title}
                  {service.comingSoon && (
                    <span className="text-xs bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="mb-6 text-muted-foreground flex-1">{service.description}</p>
                {!service.comingSoon && (
                  <Button asChild variant="default" className="w-full mt-auto">
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}