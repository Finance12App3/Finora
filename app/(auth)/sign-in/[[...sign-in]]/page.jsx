'use client';

import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg-finance.jpg')", // 🎯 Your image path
      }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-10 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-white drop-shadow mb-4 tracking-tight">
          Welcome Back 
        </h1>

        <SignIn
          appearance={{
            elements: {
              card: 'shadow-none',
            },
            variables: {
              colorPrimary: '#6366f1',
              fontSize: '16px',
              colorText: '#111827',
            },
          }}
          path="/sign-in"
          routing="path"
        />

      </div>
    </div>
  );
};

export default SignInPage;
