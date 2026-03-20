import React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-6 w-full">
      {children}
    </div>
  );
}