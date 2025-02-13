import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-6">About LifeXMetric</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a team of passionate technology experts dedicated to helping businesses 
              succeed in the digital age. With decades of combined experience, we deliver 
              cutting-edge solutions that drive innovation and growth.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>15+ years of industry experience</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>200+ successful projects delivered</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Global team of certified experts</span>
              </li>
            </ul>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
                alt="Our team"
                className="w-full h-[400px] object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}