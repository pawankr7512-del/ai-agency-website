import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "For your hobby",
      features: [
        "Basic design tools",
        "Limited fabric and color options",
        "Standard customer support",
        "Access to community forums"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: isAnnual ? "₹1099" : "₹99",
      description: "For small business",
      features: [
        "Advanced design tools",
        "Unlimited fabric and color options",
        "Priority customer support",
        "Access to exclusive design templates",
        "High resolution 2D previews",
        "Feedback and adjustment tools"
      ],
      cta: "Upgrade to Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multiple teams",
      features: [
        "All pro features",
        "Custom branding options",
        "Dedicated account manager",
        "Enterprise-level support",
        "Custom integrations",
        "Bulk design options"
      ],
      cta: "Start with Enterprise",
      highlighted: false
    }
  ];

  return (
    <div className="bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-4 tracking-tight">
            Plans and Pricing
          </h1>
          <p className="text-lg text-zinc-400 dark:text-zinc-400 mb-6">
            Receive unlimited credits when you pay yearly, and save on your plan
          </p>

          <div className="inline-flex items-center bg-black/[0.03] dark:bg-white/[0.03] rounded-full p-1">
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${!isAnnual
                  ? 'bg-secondary/20 dark:bg-secondary/20 text-white dark:text-white'
                  : 'text-zinc-400 dark:text-zinc-400 hover:text-white dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${isAnnual
                  ? 'bg-secondary/20 dark:bg-secondary/20 text-white dark:text-white'
                  : 'text-zinc-400 dark:text-zinc-400 hover:text-white dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.highlighted
                  ? 'border-secondary/30 dark:border-secondary/30 bg-secondary/5 dark:bg-secondary/5 scale-[1.02] shadow-xl'
                  : 'border-secondary/20 dark:border-secondary/20 hover:border-secondary/30 dark:hover:border-secondary/30'
                } p-6 transition-all duration-300 backdrop-blur-sm`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[2px]" />

                      <div className="relative px-4 py-1.5 bg-secondary/5 dark:bg-secondary/5 backdrop-blur-sm rounded-full border border-secondary/30 dark:border-secondary/30">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-secondary/60 dark:bg-secondary/60 animate-pulse" />
                          <span className="text-xs font-medium text-secondary/80 dark:text-secondary/80">Most Popular</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-zinc-400 dark:text-zinc-400">
                      per user/{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-400 mt-4">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-secondary/50 dark:text-secondary/50" />
                    <span className="text-sm text-zinc-300 dark:text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${plan.highlighted
                    ? 'bg-secondary dark:bg-secondary text-white dark:text-white hover:bg-secondary/90 dark:hover:bg-secondary/90'
                    : 'border border-secondary/20 dark:border-secondary/20 text-white dark:text-white hover:bg-secondary/5 dark:hover:bg-secondary/5'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
