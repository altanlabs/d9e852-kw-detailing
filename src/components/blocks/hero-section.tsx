import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToScheduling = () => {
    const schedulingForm = document.getElementById('scheduling-form');
    schedulingForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KW Detailing Cork
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Professional Auto Detailing Services Using Premium Products
          </p>
          <p className="text-2xl font-semibold text-primary mb-8">
            Flat Rate: €6 per Vehicle
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your vehicle with our premium detailing services. 
            We use only the highest quality cleaning products to ensure 
            exceptional results for every vehicle we service in Cork.
          </p>
          <Button size="lg" onClick={scrollToScheduling}>
            Schedule Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;