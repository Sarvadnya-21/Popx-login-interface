import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none -z-10">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="blob absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full" />
        <div className="blob absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full" />
        <div className="blob absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-primary/10 rounded-full" />
      </div>
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center bg-gradient-to-tr from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">bubble_chart</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-2xl font-black tracking-tighter">popx</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            to="/create-account"
          >
            Sign In
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none opacity-20 hidden lg:block">
          <div className="absolute top-20 left-10 p-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-primary/10">
            <span className="material-symbols-outlined text-primary">groups</span>
          </div>
          <div className="absolute bottom-40 left-40 p-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-primary/10">
            <span className="material-symbols-outlined text-accent">favorite</span>
          </div>
          <div className="absolute top-40 right-20 p-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-primary/10">
            <span className="material-symbols-outlined text-primary">share</span>
          </div>
          <div className="absolute bottom-20 right-40 p-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-primary/10">
            <span className="material-symbols-outlined text-accent">public</span>
          </div>
        </div>
        <div className="max-w-3xl w-full space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Popx
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
              Welcome to <br />
              <span className="gradient-text">popx</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/create-account"
              className="w-full sm:w-64 h-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl text-lg font-extrabold shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Create Account
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-64 h-16 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              Already Registered? <span className="text-primary underline underline-offset-4">Login</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
