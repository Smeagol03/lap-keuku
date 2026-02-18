import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';

interface PWAInstallPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => Promise<void>;
}

export default function PWAInstallPrompt({ isOpen, onClose, onInstall }: PWAInstallPromptProps) {
  const handleInstall = async () => {
    await onInstall();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Install FinTrack</h3>
              <p className="text-sm text-gray-500">Aplikasi Keuangan Anda</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6">
          <div className="bg-teal-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              Install FinTrack untuk akses lebih cepat dan mudah tanpa perlu membuka browser setiap saat.
            </p>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Akses cepat dari home screen
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Bisa digunakan offline (terbatas)
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Notifikasi untuk update penting
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={handleInstall}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Install Sekarang
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Nanti Saja
          </Button>
        </div>

        {/* iOS Note */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            📱 <strong>iOS:</strong> Tap <ShareIcon /> lalu "Add to Home Screen"
          </p>
        </div>
      </div>
    </div>
  );
}

// Share icon component
function ShareIcon() {
  return (
    <svg className="w-3 h-3 inline mx-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 00-.74-1.455 3.027 3.027 0 00.74-1.455l4.94-2.47A3.006 3.006 0 0015 8z" />
    </svg>
  );
}
