
import React from 'react';
import { AppSidebar } from './AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className={`flex-1 overflow-auto transition-all duration-300 ${isMobile ? 'px-4' : 'px-6'}`}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
