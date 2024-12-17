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
      role_id: '1', // Default to Customer role
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
        toast.error('Rolleri getirme başarısız oldu');
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

      // Add store data only if store role is selected
      if (data.role_id === '2') {
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account
        };
      }

      await api.post('/signup', formData);
      toast.success('Lütfen hesabınızı aktifleştirmek için e-postanızı kontrol edin!');
      reset();
      history.push(location.state?.from?.pathname || '/');
    } catch (error) {
      toast.error(error.message || 'Kayıt işlemi başarısız oldu');
    } finally {
      setIsLoading(false);
    }
  };

  // Register store fields only when store role is selected
  useEffect(() => {
    if (selectedRole === '2') {
      register('store_name', {
        required: 'Mağaza adı gereklidir',
        minLength: {
          value: 3,
          message: 'Mağaza adı en az 3 karakter olmalıdır'
        }
      });
      register('store_phone', {
        required: 'Mağaza telefonu gereklidir',
        pattern: {
          value: /^(\+90|0)?[0-9]{10}$/,
          message: 'Geçerli bir Türkiye telefon numarası giriniz'
        }
      });
      register('tax_no', {
        required: 'Vergi numarası gereklidir',
        pattern: {
          value: /^T\d{3}V\d{6}$/,
          message: 'Vergi numarası TXXXVXXXXXX formatında olmalıdır'
        }
      });
      register('bank_account', {
        required: 'IBAN gereklidir',
        pattern: {
          value: /^TR\d{2}\d{5}[A-Z0-9]{17}$/,
          message: 'Geçerli bir Türkiye IBAN numarası giriniz'
        }
      });
    }
  }, [selectedRole, register]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hesap Oluştur
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad & Soyad
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Ad Soyad gereklidir',
                    minLength: {
                      value: 3,
                      message: 'Ad Soyad en az 3 karakter olmalıdır'
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
                E-posta
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'E-posta gereklidir',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Geçerli bir e-posta adresi giriniz'
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
                Şifre
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Şifre gereklidir',
                    minLength: {
                      value: 8,
                      message: 'Şifre en az 8 karakter olmalıdır'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir'
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
                Şifre Tekrar
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Şifrenizi tekrar giriniz',
                    validate: value => value === password || 'Şifreler eşleşmiyor'
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
                Hesap Türü
              </label>
              <div className="mt-1">
                <select
                  id="role_id"
                  {...register('role_id')}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
                >
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name === 'store' ? 'Mağaza' : 
                       role.name === 'customer' ? 'Müşteri' : 
                       role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Store Fields - Only show if store role is selected */}
            {selectedRole === '2' && (
              <div className="space-y-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">Mağaza Bilgileri</h3>
                
                {/* Store Name */}
                <div>
                  <label htmlFor="store_name" className="block text-sm font-medium text-gray-700">
                    Mağaza Adı
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_name"
                      type="text"
                      {...register('store_name', {
                        required: 'Mağaza adı gereklidir',
                        minLength: {
                          value: 3,
                          message: 'Mağaza adı en az 3 karakter olmalıdır'
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
                    Mağaza Telefonu
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_phone"
                      type="tel"
                      {...register('store_phone', {
                        required: 'Mağaza telefonu gereklidir',
                        pattern: {
                          value: /^(\+90|0)?[0-9]{10}$/,
                          message: 'Geçerli bir Türkiye telefon numarası giriniz'
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
                    Vergi Numarası
                  </label>
                  <div className="mt-1">
                    <input
                      id="tax_no"
                      type="text"
                      {...register('tax_no', {
                        required: 'Vergi numarası gereklidir',
                        pattern: {
                          value: /^T\d{3}V\d{6}$/,
                          message: 'Vergi numarası TXXXVXXXXXX formatında olmalıdır'
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
                        required: 'IBAN gereklidir',
                        pattern: {
                          value: /^TR\d{2}\d{5}[A-Z0-9]{17}$/,
                          message: 'Geçerli bir Türkiye IBAN numarası giriniz'
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
              </div>
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
                    Kaydediliyor...
                  </>
                ) : (
                  'Kayıt Ol'
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
