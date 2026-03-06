import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { findUser, getUsers, saveUsers } from '../utils/storage';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    const user = findUser(email.trim());
    if (!user) {
      setError('Email not found.');
      return;
    }
    if (!newPassword) {
      setError('Please enter a new password.');
      return;
    }
    user.password = newPassword;
    const users = getUsers().map(u => (u.email === email.trim() ? user : u));
    saveUsers(users);
    setSuccess('Password updated. You may now login.');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="bg-popx-bg dark:bg-popx-dark min-h-screen flex flex-col">
      <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 px-6 lg:px-24 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center bg-gradient-to-tr from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">bubble_chart</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-2xl font-black tracking-tighter">popx</h1>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-6 relative">
        <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="size-20 bg-[var(--primary-color)]/5 rounded-full flex items-center justify-center text-[var(--primary-color)]">
              <span className="material-symbols-outlined text-4xl">restart_alt</span>
            </div>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
              Forgot Password?
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {(error || success) && (
              <div className="text-sm mb-2 text-red-500">{error || success}</div>
            )}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
                <input
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="newPassword">
                New Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  required
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-base active:scale-[0.99]"
              type="submit"
            >
              <span>Update Password</span>
            </button>
          </form>
          <div className="mt-8 text-center pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium hover:text-[var(--primary-color)] transition-colors group"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
