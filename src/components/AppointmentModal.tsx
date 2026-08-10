import React from 'react';
import { X } from 'lucide-react';
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
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(7, 21, 46, 0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            color: 'var(--navy-primary)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: '0.5rem' }}>
          <EnquiryForm 
            defaultDoctor={defaultDoctor} 
            defaultCentre={defaultCentre}
            defaultService={defaultService}
            onSuccess={() => {
              // Optionally close modal after short delay
            }}
          />
        </div>
      </div>
    </div>
  );
};
