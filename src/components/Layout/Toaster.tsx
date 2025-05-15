import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = 
    type === 'success' ? 'bg-green-50 border-green-200' : 
    type === 'error' ? 'bg-red-50 border-red-200' : 
    'bg-blue-50 border-blue-200';

  const textColor = 
    type === 'success' ? 'text-green-800' : 
    type === 'error' ? 'text-red-800' : 
    'text-blue-800';

  return (
    <div className={`fixed bottom-4 right-4 max-w-sm w-full ${bgColor} border rounded-lg shadow-sm`}>
      <div className="p-4 flex justify-between items-center">
        <p className={`text-sm font-medium ${textColor}`}>{message}</p>
        <button 
          onClick={onClose} 
          className={`${textColor} hover:bg-gray-200 rounded-full p-1`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export const Toaster: React.FC = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  // Adding this to the window so it can be called from anywhere
  useEffect(() => {
    window.showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      setToast({ message, type });
    };

    return () => {
      delete window.showToast;
    };
  }, []);

  if (!toast) return null;

  return (
    <Toast
      message={toast.message}
      type={toast.type}
      onClose={() => setToast(null)}
    />
  );
};

// Add the showToast method to the window object
declare global {
  interface Window {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  }
}