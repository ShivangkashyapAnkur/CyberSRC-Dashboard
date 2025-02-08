
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  increase: string;
  icon: LucideIcon;
  className?: string;
}

export function StatsCard({ title, value, increase, icon: Icon, className }: StatsCardProps) {
  return (
    <div className={cn("p-4 sm:p-6 rounded-xl relative overflow-hidden group transition-all duration-300", className)}>
      <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
        <div className="absolute -right-4 -top-4 w-24 sm:w-32 h-24 sm:h-32">
          <Icon size={96} />
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-base sm:text-lg font-medium text-white/80">{title}</h3>
        <p className="text-2xl sm:text-3xl font-bold text-white mt-2">{value}</p>
        <p className="text-sm text-white/80 mt-2">Increased by {increase}</p>
      </div>
    </div>
  );
}
