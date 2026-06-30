import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database.
    alert('Thank you for your message! This is a demo form, so no message was actually sent. You can reach me directly at nischaykumar81@gmail.com');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="flex flex-col lg:flex-row gap-12 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's talk about everything!</h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <a href="mailto:nischaykumar81@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                  nischaykumar81@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <a href="tel:+916201306925" className="text-lg font-bold hover:text-primary transition-colors">
                  +91 6201306925
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-lg font-bold">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-card border border-border p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg font-bold transition-all hover:gap-3"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
