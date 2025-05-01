import { cn } from '@/shared/lib';
import type { DefaultComponentProps } from '@/shared/type';

interface RootHeaderProps extends DefaultComponentProps {}

export default function RootHeader({ className }: RootHeaderProps) {
  return <header className={cn(className)}>HEADER</header>;
}
