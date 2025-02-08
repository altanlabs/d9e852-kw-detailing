import ServiceSchedulingForm from "@/components/blocks/scheduling-form";
import FeaturesSection from "@/components/blocks/features-section";
import HeroSection from "@/components/blocks/hero-section";
import PricingSection from "@/components/blocks/pricing-section";
import Footer from "@/components/blocks/footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4">
        <FeaturesSection />
      </div>

      <PricingSection />
      
      <div className="container mx-auto px-4">
        <div className="mt-12" id="scheduling-form">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Detailing Service</h2>
            <p className="text-muted-foreground">
              Book your appointment with KW Detailing today
            </p>
          </div>
          <ServiceSchedulingForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}