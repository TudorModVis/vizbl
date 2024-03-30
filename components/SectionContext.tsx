import React, { createContext, useContext, useRef } from 'react';

interface SectionContextProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  howItWorksRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const contextValue: SectionContextProps = {
    aboutRef,
    howItWorksRef,
    contactsRef,
  };

  return <SectionContext.Provider value={contextValue}>{children}</SectionContext.Provider>;
};

export const useSectionRefs = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionProvider');
  }
  return context;
};