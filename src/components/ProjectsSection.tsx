
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Echo News',
    description: 'EchoNewsApp is a sleek and modern Flutter-based news application that delivers the latest headlines from trusted sources right to your fingertips.',
    image: 'https://github.com/SaiBabu03/echonews/raw/master/Screenshot_20250405_090026.png',
    tags: ['Flutter', 'Dart', 'Provider'],
    links: {
      demo: '#',
      github: 'https://github.com/SaiBabu03/echonews',
    },
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'MovieSpot',
    description: 'MovieSpot is an app that allows users to explore TV shows and movies, offering search functionality, detailed movie information, infinite scrolling, and responsive design for different devices.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'Dart', 'REST API'],
    links: {
      demo: '#',
      github: 'https://github.com/SaiBabu03/MovieSpot',
    },
    color: 'from-green-500 to-emerald-500',
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
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full object-contain transform rotate-0 transition-transform duration-300 shadow-lg"
            />
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex space-x-2">
              <a href={project.links.github} aria-label="View source code on GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a href={project.links.demo} aria-label="View live demo" target="_blank" rel="noopener noreferrer">
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://github.com/SaiBabu03?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
