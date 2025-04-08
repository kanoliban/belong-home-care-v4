import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isScheduleVisitOpen, setIsScheduleVisitOpen] = useState(false);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false); // State for referral modal

  const openScheduleVisitModal = () => setIsScheduleVisitOpen(true);
  const closeScheduleVisitModal = () => setIsScheduleVisitOpen(false);

  const openReferralModal = () => setIsReferralModalOpen(true); // Function to open referral modal
  const closeReferralModal = () => setIsReferralModalOpen(false); // Function to close referral modal

  const value = {
    isScheduleVisitOpen,
    openScheduleVisitModal,
    closeScheduleVisitModal,
    isReferralModalOpen, // Expose referral modal state
    openReferralModal, // Expose open function
    closeReferralModal, // Expose close function
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
