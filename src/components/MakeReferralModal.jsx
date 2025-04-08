import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useModal } from '../context/ModalContext';
import { useToast } from './ui/use-toast';

const ProgressIndicator = ({ currentStep, totalSteps = 4 }) => {
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

export function MakeReferralModal() {
  const { isReferralModalOpen, closeReferralModal } = useModal();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Referrer Information
    referrerName: '',
    organization: '',
    email: '',
    phone: '',
    role: '',

    // Client Information
    clientInitials: '',
    age: '',
    gender: '',
    primaryDiagnosis: '',
    secondaryDiagnosis: '',

    // Care Needs
    medicationManagement: false,
    mentalHealthSupport: false,
    adlAssistance: false,
    mobilitySupport: false,
    socialSkills: false,
    independentLivingSkills: false,
    careNeedsNotes: '',

    // Placement Details
    urgency: '',
    preferredLocation: '',
    fundingSource: '',
    additionalNotes: ''
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
    console.log('Referral Submitted:', formData);
    // Replace with actual submission logic (e.g., API call)
    toast({
      title: "Referral Submitted!",
      description: "We've received your referral and will be in touch soon.",
    });
    // Show success screen instead of closing immediately
    setIsSubmitted(true);
  };

  const handleClose = () => {
    // Reset form state when closing
    setIsSubmitted(false);
    setCurrentStep(1);
    closeReferralModal();
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
          <h3 className="text-xl font-medium text-gray-900">Referral Submitted Successfully!</h3>
          <p className="text-gray-500">Thank you for your referral. Our team will review it and contact you within 24-48 hours.</p>
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
            <h2 className="text-lg font-semibold">Referrer Information</h2>
            <p className="text-sm text-foreground/80">Tell us about yourself</p>
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium mb-1">Your Name</label>
              <input type="text" id="referrerName" name="referrerName" value={formData.referrerName} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization</label>
              <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-1">Your Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="">Select your role</option>
                <option value="case_manager">Case Manager</option>
                <option value="social_worker">Social Worker</option>
                <option value="psychiatrist">Psychiatrist</option>
                <option value="psychologist">Psychologist</option>
                <option value="nurse">Nurse</option>
                <option value="other">Other Healthcare Professional</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Client Information</h2>
            <p className="text-sm text-foreground/80">Basic information about the client</p>
            <div>
              <label htmlFor="clientInitials" className="block text-sm font-medium mb-1">Client Initials</label>
              <input type="text" id="clientInitials" name="clientInitials" value={formData.clientInitials} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
              <p className="text-xs text-gray-500 mt-1">For privacy, please use initials only</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non_binary">Non-binary</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="primaryDiagnosis" className="block text-sm font-medium mb-1">Primary Diagnosis</label>
              <input type="text" id="primaryDiagnosis" name="primaryDiagnosis" value={formData.primaryDiagnosis} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="secondaryDiagnosis" className="block text-sm font-medium mb-1">Secondary Diagnosis (if applicable)</label>
              <input type="text" id="secondaryDiagnosis" name="secondaryDiagnosis" value={formData.secondaryDiagnosis} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Care Needs</h2>
            <p className="text-sm text-foreground/80">Client's care requirements</p>
            <div className="space-y-3">
              <p className="text-sm font-medium">Select all that apply:</p>
              <div className="flex items-center">
                <input type="checkbox" id="medicationManagement" name="medicationManagement" checked={formData.medicationManagement} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="medicationManagement" className="ml-2 block text-sm text-foreground">Medication Management</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="mentalHealthSupport" name="mentalHealthSupport" checked={formData.mentalHealthSupport} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="mentalHealthSupport" className="ml-2 block text-sm text-foreground">Mental Health Support</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="adlAssistance" name="adlAssistance" checked={formData.adlAssistance} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="adlAssistance" className="ml-2 block text-sm text-foreground">Activities of Daily Living Assistance</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="mobilitySupport" name="mobilitySupport" checked={formData.mobilitySupport} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="mobilitySupport" className="ml-2 block text-sm text-foreground">Mobility Support</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="socialSkills" name="socialSkills" checked={formData.socialSkills} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="socialSkills" className="ml-2 block text-sm text-foreground">Social Skills Development</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="independentLivingSkills" name="independentLivingSkills" checked={formData.independentLivingSkills} onChange={handleChange} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                <label htmlFor="independentLivingSkills" className="ml-2 block text-sm text-foreground">Independent Living Skills</label>
              </div>
            </div>
            <div>
              <label htmlFor="careNeedsNotes" className="block text-sm font-medium mb-1">Additional Care Notes</label>
              <textarea id="careNeedsNotes" name="careNeedsNotes" value={formData.careNeedsNotes} onChange={handleChange} rows="3" className="w-full border border-[#D6D6D6] rounded-[4px] p-2 focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Placement Details</h2>
            <p className="text-sm text-foreground/80">Final placement information</p>
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium mb-1">Urgency of Placement</label>
              <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="">Select urgency</option>
                <option value="immediate">Immediate (within days)</option>
                <option value="urgent">Urgent (within 2 weeks)</option>
                <option value="standard">Standard (within 30 days)</option>
                <option value="planning">Future Planning (30+ days)</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferredLocation" className="block text-sm font-medium mb-1">Preferred Location</label>
              <select id="preferredLocation" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="">Select location (if any)</option>
                <option value="aspen_grove">Aspen Grove</option>
                <option value="willow_stream">Willow Stream</option>
                <option value="no_preference">No Preference</option>
              </select>
            </div>
            <div>
              <label htmlFor="fundingSource" className="block text-sm font-medium mb-1">Funding Source</label>
              <select id="fundingSource" name="fundingSource" value={formData.fundingSource} onChange={handleChange} className="w-full border border-[#D6D6D6] rounded-[4px] p-2 h-[48px] focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="">Select funding source</option>
                <option value="medicaid">Medicaid</option>
                <option value="medicare">Medicare</option>
                <option value="private_insurance">Private Insurance</option>
                <option value="private_pay">Private Pay</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">Additional Notes</label>
              <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows="3" className="w-full border border-[#D6D6D6] rounded-[4px] p-2 focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={isReferralModalOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg max-h-[85vh] bg-white rounded-lg shadow-xl p-6 overflow-y-auto data-[state=open]:animate-contentShow focus:outline-none z-50">
          <Dialog.Title className="text-xl font-semibold mb-2">{isSubmitted ? "Thank You!" : "Make a Resident Referral"}</Dialog.Title>
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

                {currentStep < 4 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">
                    Submit Referral
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
