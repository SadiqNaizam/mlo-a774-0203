import React from 'react';
import { Button } from '@/components/ui/button';

const ActionLinks: React.FC = () => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Don't have an account?{' '}
      <Button
        variant="link"
        className="h-auto p-0 font-semibold text-primary hover:underline"
        asChild
      >
        <a href="#">SignUp</a>
      </Button>
    </p>
  );
};

export default ActionLinks;
