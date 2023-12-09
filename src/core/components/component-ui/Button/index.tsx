import { SvgNamePropsType } from '@Config/svg-name';
import { cn, SvgIcon } from '@Core/helpers';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

const buttonVariants = cva('inline-flex justify-center items-center font-medium gap-2 text-sm rounded capitalize', {
   variants: {
      variant: {
         contained: '!border-none',
         outlined: '!bg-transparent border border-solid',
         text: '',
      },
      size: {
         large: 'py-2 px-[22px] leading-[26.25px] text-[15px] tracking-[0.42855px]',
         medium: 'py-[6px] px-4 text-sm leading-[24.5px] tracking-[0.39998px]',
         small: 'py-1 px-[10px] leading-[22.75px] text-[13px] tracking-[0.37141px]',
      },
      color: {
         primary: 'bg-primary-main text-white hover:bg-primary-dark border-primary-main hover:border-primary-dark',
         error: 'bg-error text-white border-error hover:border-error',
         secondary: 'bg-secondary text-secondary border-secondary hover:border-secondary',
      },
   },
   defaultVariants: {
      variant: 'contained',
      size: 'medium',
      color: 'primary',
   },
});

export type ButtonVariantProps = ComponentPropsWithoutRef<'button'> &
   VariantProps<typeof buttonVariants> & {
      startIcon?: SvgNamePropsType | JSX.Element;
      endIcon?: React.ReactNode | JSX.Element;
      children?: React.ReactNode;
   };

const Button = forwardRef<HTMLButtonElement, ButtonVariantProps>((props, ref) => {
   const { className, color, variant, size, startIcon, endIcon, children } = props;

   const StartIcon = () => {
      if (typeof startIcon === 'string') {
         return <SvgIcon name={startIcon} className="w-4 h-4" />;
      }

      return startIcon;
   };
   const EndIcon = () => {
      if (typeof endIcon === 'string') {
         return <SvgIcon name={endIcon} className="w-4 h-4" />;
      }

      return endIcon;
   };

   return (
      <button className={cn(buttonVariants({ color, size, variant }), className)} ref={ref}>
         {StartIcon()}
         {children}
         {EndIcon()}
      </button>
   );
});

export default Button;
