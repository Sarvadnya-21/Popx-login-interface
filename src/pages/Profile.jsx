import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
    return null;
  }
  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="size-10 flex items-center justify-center bg-gradient-to-tr from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-2xl">bubble_chart</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-2xl font-black tracking-tighter">popx</h1>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-[1000px] w-full mx-auto py-8 px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5" />
            <div className="px-8 pb-10 flex flex-col items-center">
              <div className="relative -mt-20 mb-6">
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md bg-cover bg-center bg-no-repeat"
                  id="profileImgDisplay"
                  style={{ backgroundImage: `url(${user.profileImg || "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3fHZ78n6vYNbOM6ecjwroRct9Wk-KtYGZato9f00TkVO7ezK-FH9veuJS0c3NSCLZQsmTfcFWFc1nDe_H-NWy1Kj_gM4EcazJr2fNg3w9HXUVutolI8_QjbCwW8-vJnUXLAjJV0wgdcT1tLm3otE0VgU38xcs7Ay0jFNzHBCsE6tELKR6Cv3Xp4PpNKk0Ql1WmLu1LthM8QDp6hjKp-5-fPUaH3wFMVIkvmyzSyCT9mgHVpLdHFWmu7ITkmWeTst0YU5bTTLg70"})` }}
                />
                <button
                  className="absolute bottom-2 right-2 bg-primary text-white p-2.5 rounded-full shadow-lg hover:scale-105 transition-transform border-4 border-white"
                  onClick={() => navigate('/edit-profile')}
                >
                  <span className="material-symbols-outlined text-base">camera_alt</span>
                </button>
              </div>
              <div className="text-center mb-8 max-w-2xl">
                <h1 id="profileName" className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {user.name}
                </h1>
                <p id="profileUsername" className="text-primary font-bold text-sm mt-1 uppercase tracking-wider">
                  @{user.email.split('@')[0]}
                </p>
                <div className="mt-6">
                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3" />
                  <p id="profileAbout" className="text-[15px] md:text-base leading-relaxed text-gray-600 font-normal">
                    {user.about}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 w-full md:w-auto mb-10">
                <Link
                  to="/edit-profile"
                  className="px-8 h-12 bg-primary text-white rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 min-w-[160px]"
                >
                  <span className="material-symbols-outlined text-lg">edit</span>
                  Edit Profile
                </Link>
                <button
                  id="logoutLink"
                  className="px-8 h-12 bg-gray-100 text-gray-700 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 min-w-[160px]"
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  Logout
                </button>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 border-t border-gray-50 pt-10">
                <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-50 transition-colors w-full md:w-[280px]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">smartphone</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                    <p id="profilePhone" className="text-sm font-semibold text-gray-700">
                      {user.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-50 transition-colors w-full md:w-[280px]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">corporate_fare</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Company</p>
                    <p id="profileCompany" className="text-sm font-semibold text-gray-700">
                      {user.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
