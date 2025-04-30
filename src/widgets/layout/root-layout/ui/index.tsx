import { cn } from '@/shared/lib';
import type { DefaultComponentProps } from '@/shared/type';
import { RootHeader } from '@/widgets/header/root-header';
export default function RootLayout({ className, children }: DefaultComponentProps) {
    return (
        <div className={cn('flex flex-col', className)}>
            <RootHeader />
            <main className='flex-1 pt-16'>{children}</main>
        </div>
    );
}
