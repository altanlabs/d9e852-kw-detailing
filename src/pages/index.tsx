import ServiceSchedulingForm from "@/components/blocks/scheduling-form";
import FeaturesSection from "@/components/blocks/features-section";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Car Detailing Services</h1>
        <p className="text-xl text-muted-foreground">
          Schedule your car detailing service today and experience the difference
        </p>
      </div>

      <FeaturesSection />
      
      <div className="mt-12">
        <ServiceSchedulingForm />
      </div>
    </div>
  );
}