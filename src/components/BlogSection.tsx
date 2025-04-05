
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Building Performant React Native Applications',
    excerpt: 'Tips and tricks to optimize your React Native app performance for a smoother user experience.',
    date: 'March 28, 2025',
    category: 'Development',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'The Future of Mobile App Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of mobile applications.',
    date: 'March 15, 2025',
    category: 'Industry',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Creating Accessible Mobile UIs',
    excerpt: 'Best practices for designing inclusive mobile interfaces that work for everyone.',
    date: 'February 22, 2025',
    category: 'Design',
    image: '/placeholder.svg',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="animate-fade-in-up mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-foreground/70 max-w-xl">
              I share my knowledge and experiences in mobile development through my blog.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-muted/50 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-foreground/60 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-foreground/70 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <a 
                  href="#" 
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
