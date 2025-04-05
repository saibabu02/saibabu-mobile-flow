
import React from 'react';
import { Smartphone, Code, Server, Palette, Monitor, BarChart } from 'lucide-react';

const skills = [
  {
    category: 'Mobile Development',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    category: 'Frontend Development',
    icon: Code,
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Redux'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    category: 'Backend Development',
    icon: Server,
    technologies: ['Node.js', 'Firebase', 'MongoDB', 'GraphQL', 'REST APIs'],
    color: 'from-green-500 to-teal-400',
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing', 'Wireframing'],
    color: 'from-pink-500 to-rose-400',
  },
  {
    category: 'Testing & Deployment',
    icon: Monitor,
    technologies: ['Jest', 'Detox', 'CI/CD', 'App Store', 'Google Play'],
    color: 'from-amber-500 to-orange-400',
  },
  {
    category: 'Analytics & Performance',
    icon: BarChart,
    technologies: ['Performance Optimization', 'Firebase Analytics', 'Crash Reporting', 'App Metrics'],
    color: 'from-red-500 to-pink-400',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            I specialize in mobile app development with a diverse skill set that covers the entire development lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-r ${skill.color} text-white`}>
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block text-sm text-foreground/70 px-3 py-1 bg-secondary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
