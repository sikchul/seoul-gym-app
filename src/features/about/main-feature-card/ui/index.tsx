import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/shared/lib';
import type { PropsWithClassName } from '@/shared/type';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

interface MainFeatureCardProps extends PropsWithClassName {
  title: string;
  description: string;
  IconElement: LucideIcon;
  content: ReactNode;
}

export default function MainFeatureCard({
  className,
  title,
  description,
  IconElement,
  content
}: MainFeatureCardProps) {
  return (
    <Card className={cn('border-t-4 border-t-blue-500', className)}>
      <CardHeader>
        <IconElement className="h-8 w-8 text-blue-500 mb-2" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
}
