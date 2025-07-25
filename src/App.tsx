import React, { useState, useEffect } from 'react';
import { Heart, Star, Zap, Clock, Users, TrendingUp, User, Camera } from 'lucide-react';
import { PhotoUpload } from './components/PhotoUpload';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Aapka Personal Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            React, TypeScript aur Tailwind CSS ke saath banaya gaya modern app
          </p>
        </div>

        {/* Photo Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <PhotoUpload 
            onPhotoChange={setUserPhoto}
            currentPhoto={userPhoto}
          />
        </div>

        {/* User Profile Section */}
        {userPhoto && (
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8 text-white">
            <div className="flex items-center gap-6">
              <img
                src={userPhoto}
                alt="User profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
                <p className="text-purple-100">Aapki photo successfully add ho gayi hai</p>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Counter */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              App Features
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-mono text-gray-800">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
              >
                Count Badhayiye: {count}
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Status Dashboard */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            App Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
              <p className="text-blue-600 font-bold">Active</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clicks</h3>
              <p className="text-yellow-600 font-bold">{count}</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Profile</h3>
              <p className="text-green-600 font-bold">
                {userPhoto ? 'Photo Added' : 'No Photo'}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Upload</h3>
            <p className="text-gray-600">
              Easily upload aur manage kariye apni photos
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Lightning fast loading aur smooth interactions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Simple aur intuitive interface jo use karna easy hai
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            React, TypeScript aur Tailwind CSS ke saath ❤️ se banaya gaya
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Netlify deployment ke liye ready hai
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;