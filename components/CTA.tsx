import React from 'react';
import { cn } from '@/lib/utils';

interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  cards?: Array<{
    title: string;
    description: string;
    href: string;
    linkText: string;
  }>;
}

const CTA: React.FC<CTAProps> = ({ 
  title = "Featured Sections",
  subtitle,
  cards = [
    {
      title: "Landings",
      description: "Explore our collection of beautiful landing page templates for various industries.",
      href: "/landings",
      linkText: "View Templates →"
    },
    {
      title: "Secondary Pages",
      description: "Complete your website with essential pages like About, Contact, and Blog.",
      href: "/secondary",
      linkText: "Browse Pages →"
    },
    {
      title: "Account Pages",
      description: "User authentication and account management pages for your application.",
      href: "/account",
      linkText: "View Pages →"
    }
  ],
  className,
  ...props 
}) => {
  return (
    <section className={cn("container mx-auto px-6 py-16", className)} {...props}>
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {card.title}
            </h3>
            <p className="text-white/70 mb-6">
              {card.description}
            </p>
            <a 
              href={card.href} 
              className="text-white font-semibold hover:text-white/80 transition-colors group-hover:translate-x-1 inline-block transform transition-transform"
            >
              {card.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;