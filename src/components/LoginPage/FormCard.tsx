import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import InputField from './InputField';
import ActionLinks from './ActionLinks';

const FormCard: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle login logic here.
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="w-96 rounded-md bg-card p-6 text-card-foreground shadow-lg">
      <h1 className="mb-8 text-center text-2xl font-bold">Welcome</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <InputField
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <div>
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <div className="mt-2 text-left">
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm font-normal text-muted-foreground hover:text-primary hover:underline"
            >
              Forgot Password
            </Button>
          </div>
        </div>

        <Button type="submit" className="w-full rounded-lg py-3 text-sm font-bold">
          Login
        </Button>
      </form>

      <div className="mt-6">
        <ActionLinks />
      </div>
    </div>
  );
};

export default FormCard;
