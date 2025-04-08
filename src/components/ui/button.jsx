import { cn } from '../../lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-[4px] font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-press btn-hover hover-lift',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white px-6 py-3 hover:bg-primary-hover hover:scale-[1.02]',
				accent: 'bg-accent text-white px-6 py-3 hover:bg-accent-hover hover:scale-[1.02]', // Added accent variant
				secondary: 'bg-secondary text-primary px-6 py-3 hover:bg-secondary-hover hover:scale-[1.02]', // Kept secondary (gold)
				outline: 'border border-primary text-primary px-6 py-3 bg-transparent hover:bg-outline-hover hover:scale-[1.02]', // Updated hover
				ghost: 'hover:bg-accent/10 hover:text-accent', // Use accent for ghost hover
				link: 'text-primary hover:text-accent underline-offset-4 hover:underline', // Use accent for link hover
				destructive: 'bg-destructive text-white px-6 py-3 hover:bg-destructive/90 hover:scale-[1.02]',
			},
			size: {
				default: 'h-auto',
				sm: 'h-auto px-4 py-2',
				lg: 'h-auto px-8 py-4',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';

	// Add ripple effect on click
	const handleClick = (e) => {
		if (props.onClick) {
			props.onClick(e);
		}
	};

	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
			onClick={handleClick}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
