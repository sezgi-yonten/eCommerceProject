import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../api/axios';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    defaultValues: {
      role_id: '2', // Default to Customer role
    }
  });

  const selectedRole = watch('role_id');
  const password = watch('password');

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
      } catch (error) {
        toast.error('Failed to fetch roles');
      }
    };
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      };

      // Add store data if role is store (assuming store role_id is '3')
      if (data.role_id === '3') {
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account
        };
      }

      await api.post('/signup', formData);
      toast.success('Please check your email to activate your account!');
      reset();
      history.push(location.state?.from?.pathname || '/');
    } catch (error) {
      toast.error(error.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 3,
                      message: 'Name must be at least 3 characters'
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1">
                <select
                  id="role_id"
                  {...register('role_id')}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                >
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Store Fields - Only show if store role is selected */}
            {selectedRole === '3' && (
              <>
                {/* Store Name */}
                <div>
                  <label htmlFor="store_name" className="block text-sm font-medium text-gray-700">
                    Store Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_name"
                      type="text"
                      {...register('store_name', {
                        required: 'Store name is required',
                        minLength: {
                          value: 3,
                          message: 'Store name must be at least 3 characters'
                        }
                      })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                    />
                    {errors.store_name && (
                      <p className="mt-2 text-sm text-red-600">{errors.store_name.message}</p>
                    )}
                  </div>
                </div>

                {/* Store Phone */}
                <div>
                  <label htmlFor="store_phone" className="block text-sm font-medium text-gray-700">
                    Store Phone
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_phone"
                      type="tel"
                      {...register('store_phone', {
                        required: 'Store phone is required',
                        pattern: {
                          value: /^(\+90|0)?[0-9]{10}$/,
                          message: 'Please enter a valid Turkish phone number'
                        }
                      })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                      placeholder="+90XXXXXXXXXX"
                    />
                    {errors.store_phone && (
                      <p className="mt-2 text-sm text-red-600">{errors.store_phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Tax Number */}
                <div>
                  <label htmlFor="tax_no" className="block text-sm font-medium text-gray-700">
                    Tax ID
                  </label>
                  <div className="mt-1">
                    <input
                      id="tax_no"
                      type="text"
                      {...register('tax_no', {
                        required: 'Tax ID is required',
                        pattern: {
                          value: /^T\d{3}V\d{6}$/,
                          message: 'Tax ID must match pattern TXXXVXXXXXX'
                        }
                      })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                      placeholder="TXXXVXXXXXX"
                    />
                    {errors.tax_no && (
                      <p className="mt-2 text-sm text-red-600">{errors.tax_no.message}</p>
                    )}
                  </div>
                </div>

                {/* Bank Account */}
                <div>
                  <label htmlFor="bank_account" className="block text-sm font-medium text-gray-700">
                    IBAN
                  </label>
                  <div className="mt-1">
                    <input
                      id="bank_account"
                      type="text"
                      {...register('bank_account', {
                        required: 'IBAN is required',
                        pattern: {
                          value: /^TR\d{2}\d{5}[A-Z0-9]{17}$/,
                          message: 'Please enter a valid Turkish IBAN'
                        }
                      })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                      placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
                    />
                    {errors.bank_account && (
                      <p className="mt-2 text-sm text-red-600">{errors.bank_account.message}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23856D] hover:bg-[#1a6351] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23856D] disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Signing up...
                  </>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
