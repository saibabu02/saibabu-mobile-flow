import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-900 dark:to-blue-900 -z-10" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            Mobile App Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Sai Babu</span> <br />
            I build amazing <br /> mobile experiences
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-md">
            Passionate about creating intuitive and beautiful mobile applications that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="w-64 h-[500px] md:w-72 md:h-[550px] relative rounded-[40px] overflow-hidden border-8 border-foreground shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-accent/80 opacity-90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Cross Platform Mobile Apps</h3>
              <p className="mb-6">Crafting beautiful and responsive mobile experiences</p>
              <div className="h-1 w-12 bg-white mb-6 rounded" />
              <div className="grid grid-cols-3 gap-4 w-full">
                {[1, 2, 3, 4, 5, 6].map(item => <div key={item} className="aspect-square bg-white/20 rounded-lg animate-pulse-subtle" style={{
                animationDelay: `${item * 0.2}s`
              }} />)}
              </div>
            </div>
          </div>
          
          {/* Phone frame details */}
          <div className="absolute top-8 w-32 h-6 bg-foreground rounded-b-xl" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#projects" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/70 hover:text-primary transition-colors">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce-subtle" size={20} />
      </a>
    </section>;
};
export default HeroSection;
