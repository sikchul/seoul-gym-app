import { cn } from '@/shared/lib';
import type { PropsWithClassName } from '@/shared/type';

interface ServiceBenefitCardProps extends PropsWithClassName {
  title: string;
  description: string;
}

export default function ServiceBenefitCard({
  title,
  description,
  className
}: ServiceBenefitCardProps) {
  return (
    <div className={cn('bg-white/10 backdrop-blur-sm p-5 rounded-lg', className)}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
