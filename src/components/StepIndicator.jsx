import React from 'react';
import { Check } from 'lucide-react';

export function StepIndicator({
  steps,
  currentStep,
  onStepClick,
  orientation = 'horizontal',
  className = ''
}) {
  // Determine if a step is active, completed, or upcoming
  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };
  
  // Get classes based on step status
  const getStepClasses = (status) => {
    switch (status) {
      case 'completed':
        return {
          number: 'bg-success text-white',
          label: 'text-success font-medium',
          line: 'bg-success'
        };
      case 'active':
        return {
          number: 'bg-primary text-white',
          label: 'text-primary font-medium',
          line: 'bg-gray-300'
        };
      default:
        return {
          number: 'bg-gray-300 text-gray-500',
          label: 'text-gray-500',
          line: 'bg-gray-300'
        };
    }
  };
  
  return (
    <div
      className={`step-indicator ${
        orientation === 'vertical' ? 'flex flex-col space-y-8' : 'flex justify-between'
      } ${className}`}
    >
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        const classes = getStepClasses(status);
        const isLast = index === steps.length - 1;
        
        return (
          <div
            key={index}
            className={`step ${status} ${
              orientation === 'vertical' ? 'flex items-start' : 'flex-1'
            }`}
          >
            <div className={orientation === 'vertical' ? 'flex items-center' : ''}>
              {/* Step number/icon */}
              <button
                className={`step-number ${classes.number} flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                  onStepClick ? 'cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-primary/50' : ''
                }`}
                onClick={() => onStepClick && onStepClick(index)}
                disabled={!onStepClick || status === 'upcoming'}
                aria-current={status === 'active' ? 'step' : undefined}
              >
                {status === 'completed' ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </button>
              
              {/* Step label for vertical orientation */}
              {orientation === 'vertical' && (
                <div className="ml-4">
                  <div className={`step-label ${classes.label} text-base`}>
                    {step.label}
                  </div>
                  {step.description && (
                    <div className="text-sm text-gray-500 mt-1">
                      {step.description}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Connector line */}
            {!isLast && (
              <div
                className={`${
                  orientation === 'vertical'
                    ? 'w-0.5 h-16 ml-4 mt-2'
                    : 'flex-1 h-0.5 mx-2 self-center'
                } ${classes.line} transition-colors duration-300`}
              />
            )}
            
            {/* Step label for horizontal orientation */}
            {orientation === 'horizontal' && (
              <div className="mt-2 text-center">
                <div className={`step-label ${classes.label} text-sm`}>
                  {step.label}
                </div>
                {step.description && (
                  <div className="text-xs text-gray-500 mt-1 hidden md:block">
                    {step.description}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
