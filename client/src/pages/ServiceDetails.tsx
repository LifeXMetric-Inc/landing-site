import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = {
  devops: {
    title: "DevOps Solutions",
    description: "Our DevOps solutions help organizations streamline their development and operations processes, enabling faster delivery and improved quality.",
    features: [
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Migration",
      "Monitoring and Logging",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  sre: {
    title: "Site Reliability Engineering",
    description: "Our SRE consulting services ensure your systems are reliable, scalable, and perform optimally under all conditions.",
    features: [
      "Service Level Objectives",
      "Error Budgets",
      "Incident Management",
      "Performance Optimization",
      "Capacity Planning",
    ],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"
  },
  "ai-ml": {
    title: "AI/ML Solutions",
    description: "We help organizations leverage artificial intelligence and machine learning to drive business value and innovation.",
    features: [
      "Machine Learning Models",
      "Data Strategy",
      "MLOps Implementation",
      "AI Integration",
      "Model Optimization",
    ],
    image: "https://images.unsplash.com/photo-1666724887170-794d90821679"
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  if (!service) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="mt-8">
                <Button onClick={handleContactClick}>
                  Contact Us
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}