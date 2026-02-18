import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
}

export default function PWAInstallButton({ className }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();

  // Don't show if already installed or not installable
  if (isInstalled || !isInstallable) {
    return null;
  }

  return (
    <Button
      onClick={promptInstall}
      variant="outline"
      size="sm"
      className={className}
    >
      <Download className="w-4 h-4 mr-2" />
      Install App
    </Button>
  );
}
