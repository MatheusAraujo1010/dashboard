import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from '../ui/Button';
import { validateEmail, validatePassword } from '../../utils/validation';
import { Eye, EyeOff, KeyRound, Mail } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form inputs
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }
    
    // Simulate login request
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Login attempt with:', formData);
      setIsSubmitting(false);
      // This would be where you'd handle the actual authentication
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="your.email@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        icon={<Mail className="w-5 h-5 text-neutral-400" />}
        required
      />
      
      <FormInput
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        icon={<KeyRound className="w-5 h-5 text-neutral-400" />}
        required
        endIcon={
          <button 
            type="button" 
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-neutral-500" />
            ) : (
              <Eye className="w-5 h-5 text-neutral-500" />
            )}
          </button>
        }
      />
      
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
          />
          <span className="ml-2 text-sm text-neutral-600">Remember me</span>
        </label>
        
        <button 
          type="button" 
          className="text-sm text-primary-600 hover:text-primary-700 transition-colors font-medium"
        >
          Forgot password?
        </button>
      </div>
      
      <Button 
        type="submit" 
        fullWidth 
        isLoading={isSubmitting}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;