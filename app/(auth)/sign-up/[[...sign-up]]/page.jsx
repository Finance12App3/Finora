'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-200">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Join <span className="text-blue-600">Finora</span>
        </h1>
        <SignUp
          appearance={{
            elements: {
              card: 'shadow-none',
            },
            variables: {
              colorPrimary: '#3b82f6',
            },
          }}
          path="/sign-up"
          routing="path"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
