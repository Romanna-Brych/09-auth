'use client';
import { useState } from 'react';
import css from './SignInPage.module.css';
import { login, RegisterRequest } from '@/lib/api/clientApi';
import { useMutation } from '@tanstack/react-query';

function SignIn() {
  // const router = useRouter();
  const [error, setError] = useState('');

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    // onSuccess: () => router.push('/profile'),
    onError: () => setError('User already exists or invalid data'),
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
      <form action={handleSubmit} className={css.form}>
        <h1 className={css.formTitle}>Sign in</h1>

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
            Log in
          </button>
        </div>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
  );
}

export default SignIn;
