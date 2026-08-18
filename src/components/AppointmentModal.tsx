import React, { useEffect } from 'react';
import { EnquiryForm } from './EnquiryForm';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoctor?: string;
  defaultCentre?: string;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultDoctor = '',
  defaultCentre = '',
  defaultService = ''
}) => {
  // Lock body scroll on mobile when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(7, 21, 46, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
      className="modal-backdrop-overlay"
    >
      <div 
        className="modal-pop-in appointment-modal-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '620px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(7, 21, 46, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <EnquiryForm 
          isModal={true}
          onClose={onClose}
          defaultDoctor={defaultDoctor} 
          defaultCentre={defaultCentre}
          defaultService={defaultService}
          title="Book Priority Appointment"
          subtitle="Select your details for direct OPD consultation or Home X-Ray visit."
        />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-backdrop-overlay {
            padding: 0.5rem !important;
            align-items: flex-end !important;
          }
          .appointment-modal-card {
            max-height: 94vh !important;
            border-radius: 20px 20px 0 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
