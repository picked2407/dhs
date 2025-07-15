import { DollarSign, Rocket, Heart } from "lucide-react";

const ValuePropositions = () => {
  const propositions = [
    {
      icon: DollarSign,
      title: "Work Less for More",
      description: "Escape burnout and multiply your income while working just 2 days a week."
    },
    {
      icon: Rocket,
      title: "Remove the Guesswork",
      description: "We've built proven systems so you can follow a clear path — no stress, no guesswork, just results."
    },
    {
      icon: Heart,
      title: "Join the Top 1%",
      description: "Live life your way, while your team handles the rest."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {propositions.map((prop, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-luxury group-hover:shadow-glow transition-all duration-300">
                  <prop.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                {prop.title}
              </h3>
              
              {/* Description */}
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;