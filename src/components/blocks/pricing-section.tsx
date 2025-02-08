import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Premium quality detailing at an affordable flat rate
          </p>
        </div>

        <Card className="max-w-md mx-auto p-8 text-center">
          <div className="mb-4">
            <span className="text-4xl font-bold">€6</span>
            <span className="text-muted-foreground"> per vehicle</span>
          </div>
          
          <div className="text-muted-foreground mb-6">
            Professional service with premium products
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>High-quality cleaning products</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Professional-grade equipment</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Interior & exterior detailing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>All vehicle sizes welcome</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PricingSection;