
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-refumo-darkblue text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-refumo-coral hover:bg-refumo-lightcoral text-white py-3 px-6 rounded-md transition-all duration-300"
        >
          <Home size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
