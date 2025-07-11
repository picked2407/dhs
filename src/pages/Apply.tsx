import Navigation from "@/components/Navigation";
import { ApplyForm } from "@/components/ApplyForm";
import Footer from "@/components/Footer";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Apply to Join FansLink
              </h1>
              <p className="text-xl text-muted-foreground">
                Take the first step towards transforming your OnlyFans success
              </p>
            </div>
            <ApplyForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;