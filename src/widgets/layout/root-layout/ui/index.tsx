import { cn } from '@/shared/lib';
import type { DefaultComponentProps } from '@/shared/type';
import { Toaster } from '@/shared/ui/sonner';
import { RootHeader } from '@/widgets/header/root-header';

interface RootLayoutProps extends DefaultComponentProps {}

export default function RootLayout({ className, children }: RootLayoutProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <RootHeader />
      <main className="flex-1 pt-16">{children}</main>
      <Toaster />
    </div>
  );
}
