import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
          <Wrench className="w-10 h-10" />
        </div>

        <div>
          <span className="text-4xl font-extrabold text-white font-mono">404</span>
          <h2 className="text-2xl font-bold text-white mt-2">
            Page Under Maintenance or Not Found
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            The page you are navigating to is not in our workshop index. It may have been moved or updated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link to="/" className="w-full sm:w-auto">
            <Button
              variant="amber"
              className="w-full sm:w-auto"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto">
              View Garage Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
