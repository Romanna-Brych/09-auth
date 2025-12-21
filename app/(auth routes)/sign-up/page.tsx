'use client';
import { useRouter } from 'next/router';
import css from './SignUpPage.module.css';
import { useMutation } from '@tanstack/react-query';
import { register } from '@/lib/api/clientApi';
import { useState } from 'react';
import { RegisterRequest } from '@/types/note';

//test123456@example.co
//StrongPass123

function SignUp() {
  // const router = useRouter();
  const [error, setError] = useState('');

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    // onSuccess: () => router.push('/profile'),
    onError: () => setError('Oops... some error'),
  });

  const handleSubmit = (formData: FormData) => {
    const formValues: RegisterRequest = {
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    };
    console.log(formValues);
    mutate(formValues);
  };

  return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form action={handleSubmit} className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button
            type="submit"
            className={css.submitButton}
            disabled={isPending}
          >
            Register
          </button>
        </div>

        <p className={css.error}>Error</p>
      </form>
    </main>
  );
}

export default SignUp;
