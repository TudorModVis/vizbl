'use client';
import { Loader } from '@/components';
import { motion } from 'framer-motion';
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from 'react';

const TemplateContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams()
  return (
    <>
      {pathname === '/' && searchParams.get('loaded') !== 'true' && <Loader />}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
        </motion.main>
    </>
  )
}

export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Suspense fallback={null}>
        <TemplateContent>
          {children}
        </TemplateContent>
      </Suspense>
    </>
  );
}