import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!login(email.trim(), password)) {
      setError('Invalid email or password.');
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="w-full bg-white dark:bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-10 flex items-center justify-center bg-gradient-to-tr from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">bubble_chart</span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-2xl font-black tracking-tighter">popx</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/create-account"
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-primary/5 p-8 md:p-12 border border-slate-100 dark:border-slate-800">
          <div className="mb-10 text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 rounded-xl mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">login</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Login to popx
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Enter your credentials to access your account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                Email Address
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">
                  mail
                </span>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:text-slate-600"
                  placeholder="name@email.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Password
                </label>
                <Link
                  className="text-xs font-bold text-primary hover:underline"
                  to="/forgot-password"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">
                  lock
                </span>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:text-slate-600"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                {/* visibility toggle could be added later */}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <input
                className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary focus:ring-offset-0 bg-white dark:bg-slate-950"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm font-medium text-slate-500 dark:text-slate-400 cursor-pointer"
                htmlFor="remember"
              >
                Keep me logged in
              </label>
            </div>
            <button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
              type="submit"
            >
              <span>Login</span>
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </form>
        </div>
      </main>
      <footer className="py-10 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Don't have an account?{' '}
          <Link className="text-primary font-bold hover:underline transition-all ml-1" to="/create-account">
            Create one
          </Link>
        </p>
      </footer>
    </div>
  );
}
