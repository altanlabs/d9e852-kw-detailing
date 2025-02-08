import { Card } from "@/components/ui/card";
import { Sparkles, Shield, Clock, Car, Droplets, Award } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Premium Detailing",
    description: "Expert detailing services using professional-grade products"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Satisfaction Guaranteed",
    description: "We ensure 100% satisfaction with every service"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Open 7 Days",
    description: "Convenient service every day of the week"
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "All Vehicles Welcome",
    description: "Service for cars, SUVs, vans, and trucks"
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Interior & Exterior",
    description: "Comprehensive cleaning inside and out"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "KW's Finest",
    description: "Trusted by vehicle owners across Kitchener-Waterloo"
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose KW Detailing?</h2>
        <p className="text-muted-foreground">
          Experience the highest standard of car care in the Kitchener-Waterloo region
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;