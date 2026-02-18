import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Store for global prompt trigger
let globalShowPromptTrigger: (() => void) | null = null;

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event (Chrome/Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Set up global trigger
  useEffect(() => {
    globalShowPromptTrigger = () => setShowPrompt(true);
    return () => {
      globalShowPromptTrigger = null;
    };
  }, []);

  const promptInstall = async (): Promise<boolean> => {
    setShowPrompt(true);
    return true; // The actual install is handled by the modal
  };

  const executeInstall = async (): Promise<boolean> => {
    if (!deferredPrompt) {
      return false;
    }

    try {
      // Show the install prompt
      await deferredPrompt.prompt();
      
      // Wait for the user's response
      const { outcome } = await deferredPrompt.userChoice;
      
      // Reset the deferred prompt
      setDeferredPrompt(null);
      setIsInstallable(false);
      setShowPrompt(false);

      return outcome === 'accepted';
    } catch (error) {
      console.error('Error prompting install:', error);
      return false;
    }
  };

  const closePrompt = () => {
    setShowPrompt(false);
  };

  return {
    isInstallable,
    isInstalled,
    showPrompt,
    promptInstall,
    executeInstall,
    closePrompt,
  };
}

// Export function to trigger prompt from anywhere
export function triggerInstallPrompt() {
  if (globalShowPromptTrigger) {
    globalShowPromptTrigger();
  }
}
