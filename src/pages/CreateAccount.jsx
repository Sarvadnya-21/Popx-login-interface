import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function CreateAccount() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    about: '',
    company: '',
    is_company: 'no',
    profileImg: '',
  });
  const [error, setError] = useState('');
  const imgInputRef = useRef(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm(f => ({ ...f, profileImg: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone, email, password } = form;
    if (!name || !phone || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    const success = register(form);
    if (!success) {
      setError('An account with this email already exists.');
      return;
    }
    navigate('/profile');
  };

  return (
    <div className="bg-white dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex h-full grow flex-col">
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
              to="/login"
            >
              Login
            </Link>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center pt-8 pb-20 px-4">
          <div className="w-full max-w-[460px]">
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Create Account
              </h2>
              <p className="text-slate-500 dark:text-slate-400">Join the popx today</p>
            </div>
            <div className="mb-10 flex flex-col items-center">
              <div className="relative group cursor-pointer" onClick={() => imgInputRef.current?.click()}
                  id="profileImgContainer">
                <div className="size-24 rounded-full bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary">
                  {!form.profileImg && (
                    <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary transition-colors">
                      photo_camera
                    </span>
                  )}
                  {form.profileImg && (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${form.profileImg})` }}
                    />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-background-dark">
                  <span className="material-symbols-outlined text-xs leading-none font-bold">add</span>
                </div>
              </div>
              <input
                type="file"
                id="profileImg"
                accept="image/*"
                style={{ display: 'none' }}
                ref={imgInputRef}
                onChange={handleImageChange}
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {/* fields */}
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  required
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  placeholder="Enter your full name"
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  Phone Number*
                </label>
                <input
                  id="phone"
                  required
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  Email Address*
                </label>
                <input
                  id="email"
                  required
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  placeholder="Enter your email address"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  Password*
                </label>
                <input
                  id="password"
                  required
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  placeholder="Create a strong password"
                  type="password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  About You (Optional)
                </label>
                <textarea
                  id="about"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300 min-h-[100px] resize-y"
                  placeholder="Tell us about yourself (up to 200 words)..."
                  rows="3"
                  value={form.about}
                  onChange={e => setForm(f => ({ ...f, about: e.target.value }))}
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-2.5 left-4 bg-white dark:bg-background-dark px-1 text-xs font-bold text-primary z-10">
                  Company Name
                </label>
                <input
                  id="company"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3.5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  placeholder="Enter your company name (optional)"
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                />
              </div>
              <div className="pt-2">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Are you a company?*</p>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                        name="is_company"
                        type="radio"
                        value="yes"
                        checked={form.is_company === 'yes'}
                        onChange={() => setForm(f => ({ ...f, is_company: 'yes' }))}
                      />
                      <div className="absolute h-3 w-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary">Yes</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                        name="is_company"
                        type="radio"
                        value="no"
                        checked={form.is_company === 'no'}
                        onChange={() => setForm(f => ({ ...f, is_company: 'no' }))}
                      />
                      <div className="absolute h-3 w-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary">No</span>
                  </label>
                </div>
              </div>
              <div className="pt-8">
                <button
                  id="createAccountBtn"
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:opacity-95 transition-all mb-4 flex items-center justify-center"
                  type="submit"
                >
                  Create Account
                </button>
                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="text-primary font-bold hover:opacity-80 transition-opacity"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
