
import { Search, Bell, Settings } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const isMobile = useIsMobile();
  
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-0 sm:px-6 gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search Project"
            className="w-full px-4 py-2 pl-10 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto sm:ml-0">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={20} className="text-gray-600" />
        </button>
        {!isMobile && (
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/12b35ba1-a1f4-4069-ba05-0bed52b98003.png"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-medium">Angelina Doe</p>
              <p className="text-gray-500">Super Admin</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
