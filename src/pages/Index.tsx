import React from 'react';
import FormCard from '../components/LoginPage/FormCard';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * Represents the main login page of the application.
 * It utilizes the `MainAppLayout` to provide a consistent, centered layout
 * and embeds the `FormCard` component to display the login interface.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <FormCard />
    </MainAppLayout>
  );
};

export default LoginPage;
