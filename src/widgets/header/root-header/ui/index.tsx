import { cn } from '@/shared/lib';
import type { DefaultComponentProps } from '@/shared/type';

export default function RootHeader({ className }: DefaultComponentProps) {
    return (
        <header className={cn(className)}>
            HEADER
        </header>
    )
}