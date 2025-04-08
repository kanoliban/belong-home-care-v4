import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useModal } from '../context/ModalContext';
import { useToast } from './ui/use-toast';

const ProgressIndicator = ({ currentStep, totalSteps = 3 }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-8 rounded-full ${
              index < currentStep ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
    </div>
  );
};

export function ScheduleVisitModal() {
  const { isScheduleVisitOpen, closeScheduleVisitModal } = useModal();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    email: '',
    phone: '',
    numPeople: '1',
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    flexibleTiming: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = () => {
    // Add validation if needed
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Replace with actual submission logic (e.g., API call)
    toast({
      title: "Visit Scheduled!",
      description: "We've received your request and will be in touch soon.",
    });
    // Show success screen instead of closing immediately
    setIsSubmitted(true);
  };

  const handleClose = () => {
    // Reset form state when closing
    setIsSubmitted(false);
    setCurrentStep(1);
    closeScheduleVisitModal();
  };

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900">Visit Scheduled Successfully!</h3>
          <p className="text-gray-500">Thank you for scheduling a visit. We'll be in touch shortly to confirm the details.</p>
          <Button 
            type="button" 
            onClick={handleClose}
            className="mt-4"
          >
            Close
          </Button>
        </div>
      );
    }
    
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Your Information</h2>
            <p className="text-sm text-foreground/80">Tell us about yourself</p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Potential Resident</label>
              <select id="relationship" name="relationship" value={formData.relationship} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="">Select relationship</option>
                <option value="self">Self</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="friend">Friend</option>
                <option value="case_manager">Case Manager/Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label htmlFor="numPeople" className="block text-sm font-medium mb-1">Number of People Visiting</label>
              <select id="numPeople" name="numPeople" value={formData.numPeople} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Visit Preferences</h2>
            <p className="text-sm text-foreground/80">When would you like to visit?</p>
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">Preferred Visit Date</label>
              <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-1">Preferred Time</label>
              <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="">Select time preference</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (1pm - 4pm)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label htmlFor="alternateDate" className="block text-sm font-medium mb-1">Alternate Date (Optional)</label>
              <input type="date" id="alternateDate" name="alternateDate" value={formData.alternateDate} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="flexibleTiming" name="flexibleTiming" checked={formData.flexibleTiming} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <label htmlFor="flexibleTiming" className="ml-2 block text-sm text-foreground">I'm flexible with timing</label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Confirm Details</h2>
            <p className="text-sm text-foreground/80">Review your information</p>
            <p className="text-sm">Please review your information before submitting:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-cream p-4 rounded-md">
              <div><strong>Name:</strong> {formData.name || 'Not provided'}</div>
              <div><strong>Relationship:</strong> {formData.relationship || 'Not provided'}</div>
              <div><strong>Email:</strong> {formData.email || 'Not provided'}</div>
              <div><strong>Phone:</strong> {formData.phone || 'Not provided'}</div>
              <div><strong>Group Size:</strong> {formData.numPeople || 'Not provided'}</div>
              <div><strong>Preferred Date:</strong> {formData.preferredDate || 'Not provided'}</div>
              <div><strong>Preferred Time:</strong> {formData.preferredTime || 'Not provided'}</div>
              <div><strong>Alternate Date:</strong> {formData.alternateDate || 'Not provided'}</div>
              <div><strong>Flexible Timing:</strong> {formData.flexibleTiming ? 'Yes' : 'No'}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={isScheduleVisitOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg max-h-[85vh] bg-white rounded-lg shadow-xl p-6 overflow-y-auto data-[state=open]:animate-contentShow focus:outline-none z-50">
          <Dialog.Title className="text-xl font-semibold mb-2">{isSubmitted ? "Thank You!" : "Schedule a Visit"}</Dialog.Title>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>

          {!isSubmitted && <ProgressIndicator currentStep={currentStep} />}

          <form onSubmit={handleSubmit} className="mt-4">
            {renderStepContent()}

            {!isSubmitted && (
              <div className="flex justify-between mt-8 pt-4 border-t">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`${currentStep === 1 ? 'invisible' : ''}`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>

                {currentStep < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">
                    Complete
                  </Button>
                )}
              </div>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
