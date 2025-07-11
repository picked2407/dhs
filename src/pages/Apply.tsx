import { ApplyForm } from "@/components/ApplyForm";
import luxuryYacht from "@/assets/luxury-yacht-branded.jpg";

const Apply = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image & Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${luxuryYacht})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Ready to Transform
            <br />
            Your Success?
          </h1>
          <p className="text-xl leading-relaxed opacity-90 max-w-md">
            Join the elite circle of content creators who've revolutionized their OnlyFans journey. 
            Let's unlock your true earning potential together.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-lg">Personalized Growth Strategy</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-lg">24/7 Dedicated Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-lg">Proven Results & Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Application Form */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-lg">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
};

export default Apply;