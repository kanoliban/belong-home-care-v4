import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export function ServiceComparison({ services, features }) {
  // Icon components for different statuses
  const statusIcons = {
    yes: <Check className="h-5 w-5 text-success" />,
    no: <X className="h-5 w-5 text-error" />,
    partial: <Minus className="h-5 w-5 text-warning" />,
    custom: (icon) => icon
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="comparison-table w-full">
        <thead>
          <tr>
            <th className="text-left w-1/4">Features</th>
            {services.map((service) => (
              <th key={service.id} className="text-center">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold text-primary">{service.name}</span>
                  {service.price && (
                    <span className="text-sm text-foreground/70 mt-1">{service.price}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id}>
              <td className="font-medium">
                <div className="flex flex-col">
                  <span>{feature.name}</span>
                  {feature.description && (
                    <span className="text-sm text-foreground/60 mt-1">{feature.description}</span>
                  )}
                </div>
              </td>
              {services.map((service) => {
                const status = service.features[feature.id];
                const statusType = typeof status === 'object' ? 'custom' : status;
                
                return (
                  <td key={`${service.id}-${feature.id}`} className="text-center">
                    <div className="flex justify-center items-center">
                      {statusType === 'custom' 
                        ? statusIcons.custom(status.icon)
                        : statusIcons[statusType] || statusIcons.no}
                      
                      {status && typeof status === 'object' && status.label && (
                        <span className="ml-2 text-sm">{status.label}</span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
