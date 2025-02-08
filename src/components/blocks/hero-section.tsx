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
            KW Detailing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professional Auto Detailing Services in the KW Region
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your vehicle with our premium detailing services. 
            We take pride in delivering exceptional results for every car we touch.
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