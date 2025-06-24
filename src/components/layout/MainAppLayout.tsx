import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for the main container.
   */
  className?: string;
}

/**
 * Main application layout that provides a centered container for content.
 * It occupies the full height of the screen and centers its children both
 * vertically and horizontally, using the application's background color.
 * This component directly implements the overall layout structure specified
 * in the project requirements.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen flex-col items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
