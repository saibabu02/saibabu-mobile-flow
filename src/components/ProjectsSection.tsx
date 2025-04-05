
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'FitTrack Pro',
    description: 'A fitness tracking app with personalized workout plans and nutrition guidance.',
    image: '/placeholder.svg',
    tags: ['React Native', 'Firebase', 'Redux'],
    links: {
      demo: '#',
      github: '#',
    },
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'EcoScan',
    description: 'Scan products to check their environmental impact and find eco-friendly alternatives.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'Firebase ML', 'GraphQL'],
    links: {
      demo: '#',
      github: '#',
    },
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'CryptoWallet',
    description: 'Secure mobile wallet for cryptocurrency management with real-time market data.',
    image: '/placeholder.svg',
    tags: ['React Native', 'Web3.js', 'TypeScript'],
    links: {
      demo: '#',
      github: '#',
    },
    color: 'from-purple-500 to-pink-500',
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`w-full transition-all duration-300 transform ${isHovered ? 'scale-[1.03] shadow-lg' : 'scale-100 shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full group bg-white dark:bg-gray-800 border-0">
        <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-64 bg-white/10 rounded-[32px] border-4 border-white/30 overflow-hidden shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <div className="h-full w-full bg-black/10 flex items-center justify-center">
                <span className="text-white text-sm font-medium">App Preview</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex space-x-2">
              <a href={project.links.github} aria-label="View source code on GitHub">
                <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a href={project.links.demo} aria-label="View live demo">
                <ExternalLink className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <p className="text-foreground/70 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View Case Study
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Here are some of the mobile applications I've developed. Each project posed unique challenges and allowed me to grow as a developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
