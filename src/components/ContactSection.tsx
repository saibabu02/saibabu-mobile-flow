
import React from 'react';
import { Mail, MessageCircle, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                <p className="text-foreground/70 mb-6">
                  I'd love to hear from you. Connect with me through these channels or send me a message.
                </p>
                
                <div className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  <a href="mailto:saibabubobba2003@gmail.com">saibabubobba2003@gmail.com</a>
                </div>
                
                <div className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 9290816685</span>
                </div>

                <div className="pt-6 flex space-x-4">
                  <a 
                    href="https://github.com/SaiBabu03" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent rounded-xl text-white p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6">
                Looking for a developer to bring your mobile app idea to life? I can help turn your vision into reality.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                View My Resume
              </Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <form className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              
              <Button className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
