import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface BookCallButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const BookCallButton: React.FC<BookCallButtonProps> = ({
  children = 'Book a Call',
  className = '',
  variant = 'primary',
  size = 'md',
  showIcon = true,
  fullWidth = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base font-semibold gap-2.5 rounded-xl',
  };

  // High-visibility solid colors — NO gradients that kill contrast or readability
  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 border border-blue-400/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-white/5 text-blue-400 hover:text-white border border-blue-500/50 hover:border-blue-400 hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border-transparent',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      data-cal-link="nawed/vistavisuals"
      data-cal-namespace="vistavisuals"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
      onClick={handleClick}
      className={`inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 cursor-pointer ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {showIcon && <Calendar className="w-4 h-4 shrink-0 text-white" />}
      <span className="font-semibold tracking-tight">{children}</span>
      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};
