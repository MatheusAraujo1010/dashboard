import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Logo from '../components/ui/Logo';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 bg-auth-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card with slight animation */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
          {/* Logo and header section */}
          <div className="p-6 bg-primary-50 flex flex-col items-center">
            <Logo className="w-16 h-16 mb-4" />
            <h1 className="text-2xl font-semibold text-primary-950 text-center">Welcome to CertGuard</h1>
            <p className="text-neutral-600 text-center mt-2">
              Secure authentication for your valuable assets
            </p>
          </div>
          
          {/* Form section */}
          <div className="p-6 animate-slide-up">
            <LoginForm />
          </div>
          
          {/* Footer */}
          <div className="p-6 bg-neutral-50 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 text-center">
              Don't have an account?{' '}
              <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Sign up
              </button>
            </p>
          </div>
        </div>
        
        {/* Footer text */}
        <p className="text-white/70 text-sm text-center mt-8">
          © 2025 CertGuard. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;