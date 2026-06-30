import React from 'react';
import { cn } from '../utils';

export default function Section({ id, title, children, className }) {
  return (
    <section id={id} className={cn('py-20', className)}>
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary">#</span>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
