import { Card } from "@/components/ui/card";
import { Sparkles, Shield, Clock, Car } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Premium Detailing",
    description: "Professional-grade cleaning and detailing services for your vehicle"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Guaranteed Quality",
    description: "100% satisfaction guaranteed with our expert detailing service"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Scheduling",
    description: "Book your appointment at a time that works best for you"
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "All Vehicle Types",
    description: "Services available for all types of vehicles, from sedans to vans"
  }
];

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
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
  );
};

export default FeaturesSection;